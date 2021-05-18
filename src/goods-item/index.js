// ------------------------------------------------------------------------------
// name: 单个商品展示区块
// author: mudas( fnd.cool )
// created: 2021/5/11 21:08
// ------------------------------------------------------------------------------

import { Image, Icon, Tag, Stepper, GridItem } from 'vant';
import { createNamespace, routeProps, route, isDef, noop, currency, isPlainObject } from '../utils';
import { stopPropagation } from '../utils/dom/event';
import { GoodsItemData } from './shared';
import StepperTheme from './stepper';

const [createComponent, bem] = createNamespace('goods-item');

export default createComponent({

  data() {
    return {
      buyCount: 0
    };
  },

  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    ...GoodsItemData,
    ...routeProps
  },

  watch: {
    num: {
      immediate: true,
      handler(val) {
        this.buyCount = val || 0;
      }
    },

    buyCount: {
      handler(val) {
        this.onChange(val, { name: this.id });
      }
    }
  },

  // --------------------------------------------------------------------------
  //
  // Event handlers
  //
  // --------------------------------------------------------------------------
  methods: {

    onClick(event) {
      const { to, url, replace } = this;
      this.$emit('click', this.data, event);
      route(this.$router, { to, url, replace });
    },

    onThumbClick(event) {
      stopPropagation(event);
      this.$emit('click-thumb', this.data, event);
    },

    onChange(value, detail) {
      this.$emit('change', value, detail);
    },

    onCartIconClick(value) {
      this.buyCount = value;
    }
  },

  // --------------------------------------------------------------------------
  //
  // renderer
  //
  // --------------------------------------------------------------------------
  render(h, context) {
    const {
      id, title, desc, thumb, tags,
      unit, num, otherNum, min = 0, max, step = 1, soldout = false,
      price, memberPrice, originPrice, currency: currencySymbol = '¥'
    } = this.data;
    const { thumbTag, thumbTagAlign, lazyLoad, theme, showTags } = this;
    const { $listeners, onThumbClick } = this;

    // 大图风格
    const bigTheme = theme === 'base' || theme === 'col1';

    // ----------------------------------------
    // 图片和角标
    // ----------------------------------------

    // 角标（常用来提示选购数量）
    function ThumbTag() {
      if (thumbTag) {
        return (
          <Tag type="danger" class={[bem('thumb-tag', [thumbTagAlign])]}>
            {thumbTag}
          </Tag>
        );
      }
    }

    // 图片
    function Thumb() {
      const handler = $listeners['click-thumb'];

      const ThumbHolder = thumb ?
                          (
                            <Image src={thumb} width="100%" height="100%" fit="cover" lazy-load={lazyLoad}/>
                          ) : (
                            <Icon class={bem('thumb-icon')} name="bag-o"/>
                          );

      return (
        <div class={bem('thumb')} onClick={handler ? onThumbClick : noop}>
          {ThumbHolder}
          {ThumbTag()}
        </div>
      );
    }

    // ----------------------------------------
    // 商品标题
    // ----------------------------------------

    function Title() {
      return (
        <div class={[bem('detail-title')]}>
          {title || '-'}
        </div>
      );
    }

    // ----------------------------------------
    // 商品描述
    // ----------------------------------------
    const { showDesc } = this;

    function Desc() {
      const canShowDesc = isDef(desc) && showDesc;

      if (canShowDesc) {
        return (
          <div class={[bem('detail-desc')]}>{desc}</div>
        );
      }
    }

    // ----------------------------------------
    // 商品标签
    // ----------------------------------------

    function Tags(max = -1) {
      const canShowTags = isDef(tags) && showTags;

      if (canShowTags) {
        const validTags = tags.slice(0, max === -1 ? tags.length : max);

        return (
          <div class={[bem('detail-tags')]}>
            {(
              validTags.map(tag => {
                // 默认显示 hot 风格，可指定为普通灰色风格的 tag
                const { text, hot } = isPlainObject(tag) ? tag : { text: tag, hot: true };
                return (
                  <div class={[bem('tag', { hot })]}>{text}</div>
                );
              })
            )}
          </div>
        );
      }
    }

    // ----------------------------------------
    // 数量控制
    // ----------------------------------------
    const { showStep, cartIcon, showNum } = this;
    const { buyCount, onCartIconClick } = this;

    // block、block2 通栏风格不显示加购数量，由控制器管理
    const canShowNum = showNum && ['block', 'block2'].indexOf(theme) === -1;

    // 当数量等于 0 时，隐藏输入数字和减按钮
    const isCanReduce = buyCount > 0;

    // 显示数量控制器时（完全由用户控制数量控制器类型）
    function GoodsStepper() {
      // 售罄或隐藏控制器
      if (showStep === 'none' || soldout) return;

      if (showStep === 'step') {
        return (
          <div class={[bem('detail-step')]} onClick={e => e.stopPropagation()}>
            <Stepper name={id}
                     value={buyCount}
                     min={min}
                     max={max}
                     step={step}
                     default-value={0}
                     show-minus={isCanReduce}
                     show-input={isCanReduce}
                     {...{ attrs: { ...StepperTheme[theme] } }}
                     onChange={(value, detail) => onCartIconClick(value)}/>
          </div>
        );
      }
      else {
        return (
          <Icon class={bem('stepper-icon')} name={cartIcon} onClick={() => onCartIconClick(buyCount + 1)}/>
        );
      }
    }

    // 加购数量
    function GoodsCartNum() {
      if (canShowNum) {
        const Num = !isDef(num) ? '' : (
          <Tag round type="danger" size="medium">{num}</Tag>
        );

        const OtherNum = !isDef(otherNum) ? '' : (
          <Tag round type="default" size="medium">{otherNum}</Tag>
        );

        return (
          <div class={[bem('num-tag')]}>
            {OtherNum}{Num}
          </div>
        );
      }
    }

    // ----------------------------------------
    // 是否售罄
    // ----------------------------------------

    function SoldoutHold() {
      if (soldout) {
        return (
          <div class={[bem('soldout')]}>
            <Image src="https://lib-yhbc.oss-cn-hangzhou.aliyuncs.com/res/sweep/soldout.png" fit="cover" lazy-load={lazyLoad}/>
          </div>
        );
      }
    }

    // ----------------------------------------
    // 商品价格
    // ----------------------------------------
    const { trailingZeros, memberSymbol, showUnit } = this;
    const showPrice = isDef(price);
    const showMemberPrice = isDef(memberPrice) && this.showMemberPrice;
    const showOriginPrice = isDef(originPrice) && this.showOriginPrice;

    function MemberPrice() {
      if (showMemberPrice) {
        const price = currency(memberPrice || 0, !trailingZeros);

        return (
          <div class={bem('member')}>
            <span class={bem('member-price')}>{currencySymbol}{price}</span>
            <span class={bem('member-symbol')}>{memberSymbol}</span>
          </div>
        );
      }
    }

    function PriceContent() {
      const curPrice = currency(price || 0, !trailingZeros);
      const priceArr = curPrice.split('.');

      // 价格的小数位
      const PriceDecimal = priceArr.length <= 1 ? '' : (
        <span class={bem('price-decimal')}>.{priceArr[1]}</span>
      );

      // 购买单位
      const PriceUnit = isDef(unit) && showUnit ? (
        <span class={bem('price-unit')}>/{unit}</span>
      ) : null;

      return (
        <div>
          <span class={bem('price-currency')}>{currencySymbol}</span>
          <span class={bem('price-integer')}>{priceArr[0]}</span>
          {PriceDecimal}
          {PriceUnit}
        </div>
      );
    }

    function Price() {
      if (showPrice) {
        return (
          <div class={bem('price')}>
            {PriceContent()}
          </div>
        );
      }
    }

    function OriginPrice() {
      if (showOriginPrice) {
        const curPrice = currency(originPrice || 0, !trailingZeros);

        return (
          <div class={bem('origin-price')}>
            <span class={bem('origin-price-value')}>{curPrice}</span>
          </div>
        );
      }
    }

    // ----------------------------------------
    // 标题栏风格
    // ----------------------------------------

    function ThemeTitleBar() {
      // 半透明黑底风格
      if (theme === 'base') {
        return (
          <div class={bem('detail-black')}>
            {Title()}
            {Tags(1)}
            <div class={[bem('detail-black-price')]}>
              {Price()}
            </div>
          </div>
        );
      }

      // 白底默认风格
      return (
        <div class={bem('detail')}>
          {Title()}
          {Desc()}
          {Tags()}
          {MemberPrice()}
          <div class={[bem('detail-bottom')]}>
            <div class={[bem('price-wrap')]}>
              {Price()}
              {OriginPrice()}
            </div>
            <div class={bem('detail-stepper')}>
              {GoodsStepper()}
            </div>
          </div>
        </div>
      );
    }

    const classes = [
      bem([theme]),
      bem({
        round: this.round,
        shadow: this.shadow,
        soldout: this.soldout,
        black: theme === 'base',
        transparent: this.transparent
      })
    ];

    return (
      <GridItem class={classes} onClick={this.onClick}>
        {Thumb()}
        {GoodsCartNum()}
        {SoldoutHold()}
        {ThemeTitleBar()}
      </GridItem>
    );
  }
});
