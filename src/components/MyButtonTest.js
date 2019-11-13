export default {
  functional: true,
  render(createElement, context) {
    return createElement('button', context.data, context.scopedSlots.default());
  },
};
