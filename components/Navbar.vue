<template>
  <div>
    <nav
      class="navbar is-spaced"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item is-size-3 has-text-weight-bold">
          Eclectic Saddlebag
        </nuxt-link>

        <a
          :class="{'is-active': showHeaderNavbarMenu}"
          @click="toggleHeaderNavbarMenu"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="header-navbar-menu">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="header-navbar-menu"
        :class="{'is-active': showHeaderNavbarMenu}"
        class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item" exact-active-class="is-active">
            Home
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showHeaderNavbarMenu: false
    }
  },
  methods: {
    toggleHeaderNavbarMenu () {
      this.showHeaderNavbarMenu = !this.showHeaderNavbarMenu
    }
  }
}
</script>

<style scoped>

</style>
