<template>
  <nav>
    <ul>
      <router-link
        v-for="item in menu"
        :key="item.label"
        :to="item.link"
        tag="li"
        :exact="true"
      >
        <span>{{item.label}}</span>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          link: "/",
          label: "Strona główna"
        },
        {
          link: "/new-employee",
          label: "Dodaj pracownika"
        }
      ]
    };
  }
};
</script>
<style scoped>
nav {
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

ul li {
  padding: 5px 10px;
  margin: 0 20px;
  align-self: center;
  border-bottom: 2px solid #ccc;
  color: #757575;
  font-weight: 600;
  display: flex;
  align-items: center;
}

li img {
  margin-right: 8px;
}

ul li:hover {
  border-bottom: 2px solid#039BE5;
  cursor: pointer;
}

.router-link-active {
  border-bottom: 2px solid #039be5;
  cursor: pointer;
}
</style>
