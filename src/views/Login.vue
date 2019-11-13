<template>
  <div class="login-page">
    <div class="card">
      <span class="title">Logowanie</span>
      <form @submit.prevent="loginUser">
        <label for="name">Imię</label>
        <my-input id="name" v-model.trim="user.name"></my-input>
        <label for="password">Hasło</label>
        <my-input id="password" type="password" v-model.trim="user.password"></my-input>
        <div class="action-buttons">
          <my-button class>Rejestracja</my-button>
          <my-button class="btn-action" type="submit">Zaloguj</my-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';

export default {
  components: { MyButton, MyInput },
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
    };
  },
  computed: {
    validCredentials() {
      return this.user.name && this.user.password;
    },
  },
  methods: {
    loginUser() {
      if (this.validCredentials) {
        this.$store.dispatch('login', this.user);
        this.$router.push('/');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 400px;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
}
</style>
