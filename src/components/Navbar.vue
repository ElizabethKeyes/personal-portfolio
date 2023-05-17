<template>
  <div class="container-fluid">
    <section class="row nav-row">
      <div class="col-4 d-flex justify-content-evenly">
        <h1 class="my-font text-light fs-5">About Me</h1>
        <h1 class="my-font text-light fs-5">My Work</h1>
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

<style scoped>
.nav-row {
  height: 8vh;
  position: fixed;
  width: 100%;
  justify-content: end;
  align-items: center;
}
</style>
