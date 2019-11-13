import MyInput from '@/components/MyInput.vue';
import MySelect from '@/components/MySelect.vue';

export default {
  functional: true,
  render(h, context) {
    switch (context.props.fieldType) {
      case 'select':
        return h(MySelect, context.data);
      case 'input':
        return h(MyInput, context.data);
    }
  },
  props: {
    fieldType: {
      type: String,
      required: true,
    },
  },
};
