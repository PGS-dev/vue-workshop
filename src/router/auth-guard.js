// eslint-disable-next-line import/no-cycle
import store from '@/store/store';

export default (to, from, next) => {
  if (store.getters.getUser) {
    next();
  } else {
    next('/login');
  }
};
