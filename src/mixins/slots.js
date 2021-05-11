// ------------------------------------------------------------------------------
// name: slots
// author: mudas( fnd.cool )
// created: 2021/5/8 17:54
// ------------------------------------------------------------------------------

/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
export const SlotsMixin = {
  methods: {
    slots(name = 'default', props) {
      const { $slots, $scopedSlots } = this;
      const scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
};
