// ------------------------------------------------------------------------------
// name: container 决定指定组件被安装到指定父级元素
// author: mudas( fnd.cool )
// created: 2021/5/10 16:12
// ------------------------------------------------------------------------------

function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

export function ContainerMixin({ ref, after } = {}) {
  return {
    props: {
      getContainer: [String, Function]
    },

    watch: {
      getContainer: 'setupContainer'
    },

    mounted() {
      if (this.getContainer) {
        this.setupContainer();
      }
    },

    methods: {
      setupContainer() {
        const { getContainer } = this;
        const el = ref ? this.$refs[ref] : this.$el;

        let container;
        if (getContainer) {
          container = getElement(getContainer);
        }
        else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }

        if (after) {
          after.call(this);
        }
      }
    }
  };
}
