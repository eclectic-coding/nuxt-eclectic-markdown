<template>
  <div>
    <Navbar />
    <section class="section columns">
      <div class="column is-offset-1 is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
