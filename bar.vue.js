const Bar = {
  props: {
    state: {
      type: Array,
      required: true
    }
  },
  template: `
    <div class="bar">
      <div
        v-for="(item, index) in state"
        class="bar__slot"
        :class="{ bar__slot_filled: item == 1 }"
        :key="index"
      />
    </div>
  `
};
