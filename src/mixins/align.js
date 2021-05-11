// ------------------------------------------------------------------------------
// name: text-align
// author: mudas( fnd.cool )
// created: 2020/11/4 17:03
// ------------------------------------------------------------------------------

const Align = {
  'justify-content': {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  },
  'text-align': {
    left: 'left',
    center: 'center',
    right: 'right'
  }
};

/**
 * 水平对齐属性支持
 * @param type 文本对齐：text，flex 对齐：flex
 * @param defaultValue
 * @return {ComponentOptions}
 */
export default function(type = 'text', defaultValue = 'left') {
  const propName = type === 'text' ? 'text-align' : 'justify-content';

  return {
    props: {
      align: {
        type: String,
        default: defaultValue
      }
    },

    computed: {
      alignStyle() {
        return { [propName]: Align[propName][this.align] || this.align };
      }
    }
  };
}
