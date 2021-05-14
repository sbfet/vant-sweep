// ------------------------------------------------------------------------------
// name: CategoryTitle
// author: mudas( fnd.cool )
// created: 2021/5/8 17:54
// ------------------------------------------------------------------------------

import { Image, Icon } from 'vant';
import { createNamespace, addUnit, isAbsoluteURL, isDataURL } from '../utils';
import mixText from '../mixins/text';
import mixSpacing from '../mixins/spacing';
import mixAlign from '../mixins/align';
import mixBackground from '../mixins/background';

const [createComponent, bem] = createNamespace('category-title');

const ICON_TYPE = {
  url: 'url',
  icon: 'icon'
};

const isIconName = (url) => /^[a-z0-9\-]+$/i.test(url);

export default createComponent({
  mixins: [
    mixText,
    mixSpacing,
    mixBackground,
    mixAlign('flex')
  ],

  props: {
    // 标题，可使用插槽覆盖
    title: {
      type: String
    },

    // 文本左右边距
    textPadding: {
      type: [Number, String],
      default: 5
    },

    leftIcon: {
      type: String
    },

    rightIcon: {
      type: String
    },

    // 图标颜色
    iconPrefix: {
      type: String,
      default: 'van-icon'
    },

    iconSize: {
      type: [Number, String],
      default: 20
    },

    iconColor: {
      type: String,
      default: 'rgba(238,10,36,.6)'
    }
  },

  computed: {
    iconStyle() {
      return {
        color: this.iconColor,
        'font-size': addUnit(this.iconSize)
      };
    },

    leftIconType() {
      if (this.leftIcon) {
        if (isDataURL(this.leftIcon) || isAbsoluteURL(this.leftIcon)) {
          return ICON_TYPE.url;
        }
        else if (isIconName(this.leftIcon)) return ICON_TYPE.icon;
      }
      return '';
    },

    rightIconType() {
      if (this.rightIcon) {
        if (isDataURL(this.rightIcon) || isAbsoluteURL(this.rightIcon)) {
          return ICON_TYPE.url;
        }
        else if (isIconName(this.rightIcon)) return ICON_TYPE.icon;
      }
      return '';
    },

    textPaddingStyle() {
      const padding = addUnit(this.textPadding);
      return { padding: `0 ${padding}` };
    },

    finalStyle() {
      return {
        ...this.marginStyle,
        ...this.paddingStyle,
        ...this.alignStyle,
        ...this.backgroundStyle
      };
    }
  },

  methods: {
    clickHandler(event) {
      this.$emit('click', event);
    }
  },

  render(h, context) {
    const title = this.slots() || this.title;
    const style = { ...this.textStyle, ...this.textPaddingStyle };
    const events = { click: this.clickHandler };

    const inner = (
      <div class={bem('inner')} style={style}>
        {title}
      </div>
    );

    const iconContent = (type, place, shown, icon) => {
      const iconElement = type === ICON_TYPE.url
                          ? (<Image class={bem('image')} src={icon} fit="contain"/>)
                          : (<Icon class-prefix={this.iconPrefix} name={icon}/>);

      return shown ? (
        <div class={bem(place)} style={this.iconStyle}>
          {iconElement}
        </div>
      ) : null;
    };

    return (
      <div class={[bem()]} style={this.finalStyle} on={events}>
        {iconContent(this.leftIconType, 'left', !!this.leftIconType, this.leftIcon)}
        {inner}
        {iconContent(this.rightIconType, 'right', !!this.rightIconType, this.rightIcon)}
      </div>
    );
  }
});
