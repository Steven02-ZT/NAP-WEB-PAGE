<template className="">
  <header className="bg-black text-white">
    <div className="iconHeader">
      <font-awesome-icon icon="fa-solid fa-apple-whole" />
    </div>
    <div id="iconBar" @click="showNav = !showNav">
      <font-awesome-icon icon="fa-solid fa-bars" v-show="!showNav" />
      <font-awesome-icon icon="fa-solid fa-x" v-show="showNav" />
    </div>
    <!--menu ordenadores-->
    <nav className="pt-10" id="pc_menu">
      <RouterLink :to="Tr.i18nRouter({ name: 'home' })" className="link font-light"
        >Home</RouterLink
      >
      <RouterLink :to="Tr.i18nRouter({ name: 'general' })" className="link font-light"
        >General</RouterLink
      >
      <RouterLink :to="Tr.i18nRouter({name:'functionality'})" className="link font-light">Function</RouterLink>
      <RouterLink :to="Tr.i18nRouter({ name: 'about' })" className="link font-light"
        >About</RouterLink
      >
      <LenguajeSwitcher id="LenguajeSwitcher"></LenguajeSwitcher>
    </nav>

    <!--menu mobile-->
    <div id="mobile_menu" v-show="showNav">
      <nav className="bg-black">
        <RouterLink
          @click="ShowNav()"
          :to="Tr.i18nRouter({ name: 'home' })"
          className="link font-light"
        >
          <font-awesome-icon icon="fa-solid fa-house" />
          <span style="padding-left: 20px">Home</span>
        </RouterLink>
        <RouterLink
          @click="ShowNav()"
          :to="Tr.i18nRouter({ name: 'general' })"
          className="link font-light"
        >
          <font-awesome-icon icon="fa-solid fa-lines-leaning" />
          <span style="padding-left: 20px">General</span>
        </RouterLink>
        <RouterLink
          @click="ShowNav()"
          :to="Tr.i18nRouter({ name: 'functionality' })"
          className="link font-light"
        >
          <font-awesome-icon icon="fa-solid fa-lines-leaning" />
          <span style="padding-left: 20px">Function</span>
        </RouterLink>
        <RouterLink
          @click="ShowNav()"
          :to="Tr.i18nRouter({ name: 'about' })"
          className="link font-light"
        >
          <font-awesome-icon icon="fa-solid fa-address-card" />
          <span style="padding-left: 20px">About us</span>
        </RouterLink>
        <LenguajeSwitcher></LenguajeSwitcher>
      </nav>
    </div>
  </header>
</template>

<script>
import $ from "jquery";

import LenguajeSwitcher from "./LenguajeSwitcher.vue";
import Tr from "../locales/translation";

export default {
  data: () => {
    return {
      showNav: false,
    };
  },
  components: {
    LenguajeSwitcher,
  },
  methods: {
    ShowNav: function () {
      this.showNav = !this.showNav;
    },
  },
  setup() {
    return {
      Tr,
    };
  },
};
</script>
