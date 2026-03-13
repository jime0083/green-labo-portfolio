<template>
  <header class="header">
    <div class="header-container">
      <h1 class="site-title">
        <router-link to="/">Green Labo</router-link>
      </h1>
      <button
        class="menu-toggle"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        aria-label="メニュー"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="global-nav" :class="{ active: isMenuOpen }">
        <ul class="nav-list">
          <li><router-link to="/" @click="closeMenu">HOME</router-link></li>
          <li><a href="#" @click="closeMenu">GREEN LABO</a></li>
          <li><a href="#" @click="closeMenu">EVENT</a></li>
          <li><a href="#" @click="closeMenu">NEWS</a></li>
          <li><router-link to="/works" @click="closeMenu">WORKS</router-link></li>
          <li><router-link to="/company" @click="closeMenu">COMPANY</router-link></li>
          <li><a href="#" @click="closeMenu">RECRUIT</a></li>
          <li class="contact-button">
            <a href="#" class="contact-link" @click="closeMenu">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>
