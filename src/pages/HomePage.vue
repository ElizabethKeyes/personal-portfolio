<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 d-flex px-0 background-img">
        <h1 class="text-light my-font header-text">Hello, I'm Elizabeth.</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.background-img {
  background-image: url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}



.header-text {
  align-self: center;
  margin-left: 1em;
  font-size: 60px
}
</style>
