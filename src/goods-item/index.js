// ------------------------------------------------------------------------------
// name: 单个商品展示区块
// author: mudas( fnd.cool )
// created: 2021/5/11 21:08
// ------------------------------------------------------------------------------

import { Image, Icon, Tag, Stepper, GridItem } from 'vant';
import { createNamespace, routeProps, route, isDef, noop, currency } from '../utils';
import { stopPropagation } from '../utils/dom/event';
import { GoodsData, GoodsItemData } from './shared';
import StepperTheme from './stepper';

const [createComponent, bem] = createNamespace('goods-item');

export default createComponent({
  props: {
    ...GoodsData,
    ...GoodsItemData,
    ...routeProps
  },

  // --------------------------------------------------------------------------
  //
  // Event handlers
  //
  // --------------------------------------------------------------------------
  methods: {

    onClick(event) {
      this.$emit('click', this.$props, event);
      route(this.$router, this.$props);
    },

    onThumbClick(event) {
      stopPropagation(event);
      this.$emit('click-thumb', this.$props, event);
    },

    onChange(value, detail) {
      this.$emit('change', value, detail);
    }
  },

  // --------------------------------------------------------------------------
  //
  // renderer
  //
  // --------------------------------------------------------------------------
  render(h, context) {
    const { title, desc, price, memberPrice, originPrice, tags, unit, currency: currencySymbol } = this;
    const { thumb, thumbTag, thumbTagAlign, lazyLoad, theme } = this;
    const { slots, $listeners, onThumbClick } = this;

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
          {slots.thumb ? (slots.thumb()) : ThumbHolder}
          {ThumbTag()}
        </div>
      );
    }

    // ----------------------------------------
    // 商品标题
    // ----------------------------------------

    function Title() {
      const showLabel = (slots.title && slots.title()) || title || '-';

      if (showLabel) {
        return (
          <div class={[bem('detail-title')]}>
            {showLabel}
          </div>
        );
      }
    }

    // ----------------------------------------
    // 商品描述
    // ----------------------------------------

    function Desc() {
      const showDesc = slots.desc || isDef(desc);

      if (showDesc) {
        return (
          <div class={[bem('detail-desc')]}>
            {slots.desc ? slots.desc() : desc}
          </div>
        );
      }
    }

    // ----------------------------------------
    // 商品标签
    // ----------------------------------------

    function Tags(max = -1) {
      const showTags = slots.tags || isDef(tags);

      if (showTags) {
        const validTags = tags.slice(0, max === -1 ? tags.length : max);

        return (
          <div class={[bem('detail-tags')]}>
            {slots.tags ? slots.tags() : (
              validTags.map(tag => {
                return (
                  <div class={[bem('detail-tags--red')]}>{tag}</div>
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
    const { id, num, min, max, step, showStep, otherNum, soldout, cartIcon, showNum } = this;
    const { onChange } = this;

    // 'col2', 'col3' 2列、3列风格不显示数量控制器（空间位置不足）
    const canShowStepper = showStep && !soldout && ['col2', 'col3'].indexOf(theme) === -1;

    // block、block2 通栏风格不显示加购数量，由控制器管理
    const canShowNum = showNum && ['block', 'block2'].indexOf(theme) === -1;

    // 当显示数量控制器时
    function GoodsStepper() {
      if (canShowStepper) {
        return (
          <div class={[bem('detail-step')]} onClick={e=>e.stopPropagation()}>
            <Stepper name={id}
                     value={num}
                     min={min}
                     max={max}
                     step={step}
                     default-value={0}
                     {...{ attrs: { ...StepperTheme[theme] } }}
                     onChange={onChange}/>
          </div>
        );
      }
      else if (['col2', 'col3'].indexOf(theme) !== -1) {
        return (
          <Icon class={bem('stepper-icon')} name={cartIcon}/>
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
            已售罄
          </div>
        );
      }
    }

    // ----------------------------------------
    // 商品价格
    // ----------------------------------------
    const { trailingZeros, memberSymbol, showUnit } = this;
    const showPrice = slots.price || isDef(price);
    const showMemberPrice = (slots['member-price'] || isDef(memberPrice)) && this.showMemberPrice;
    const showOriginPrice = (slots['origin-price'] || isDef(originPrice)) && this.showOriginPrice;

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
            {slots.price ? slots.price() : PriceContent()}
          </div>
        );
      }
    }

    function OriginPrice() {
      if (showOriginPrice) {
        const slot = slots['origin-price'];
        const curPrice = currency(originPrice || 0, !trailingZeros);

        return (
          <div class={bem('origin-price')}>
            <span class={bem('origin-price-value')}>{slot ? slot() : `${curPrice}`}</span>
          </div>
        );
      }
    }

    function Footer() {
      const slot = slots['origin-price'];

      // 只有普通标题风格才能显示底部插槽内容
      if (slot && bigTheme) {
        return <div class={bem('footer')}>{slot()}</div>;
      }
    }

    // ----------------------------------------
    // 标题栏风格
    // ----------------------------------------

    function ThemeTitleBar() {
      // 半透明黑底风格
      if (theme === 'base') {
        return (
          <div class={bem('detail-trans')}>
            {Title()}
            {Tags(1)}
            <div class={[bem('detail-trans-price')]}>
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
            <div>
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
      bem({
        round: this.round,
        shadow: this.shadow,
        soldout: this.soldout,
        transparent: theme === 'base'
      })
    ];

    return (
      <GridItem class={classes} onClick={this.onClick}>
        {Thumb()}
        {GoodsCartNum()}
        {SoldoutHold()}
        {ThemeTitleBar()}
        {Footer()}
      </GridItem>
    );
  }
});
