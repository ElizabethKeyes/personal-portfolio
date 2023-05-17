<template>
  <div class="container-fluid">
    <section class="row nav-row" id="transparent-nav">
      <div class="col-4 d-flex justify-content-evenly">
        <h1 class="my-font text-light fs-5">About Me</h1>
        <h1 class="my-font text-light fs-5">My Work</h1>
      </div>
    </section>
    <section class="row nav-row d-none" id="white-nav">
      <div class="col-4 d-flex justify-content-evenly">
        <h1 class="my-font text-light fs-5">About Me</h1>
        <h1 class="my-font text-light fs-5">My Work</h1>
      </div>
    </section>
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    function setNavStyle() {
      logger.log('setting nav style')
      if (window.scrollY >= 100) {
        document.getElementById("transparent-nav").classList.add("d-none")
        document.getElementById("white-nav").classList.remove("d-none")
      } else if (window.scrollY < 100) {
        document.getElementById("transparent-nav").classList.remove("d-none")
        document.getElementById("white-nav").classList.add("d-none")
      }
    }

    onMounted(() => {
      window.addEventListener("scroll", () => {
        setNavStyle()
      })
    })
    return {

    }
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

#transparent-nav {
  background-color: transparent;
}

#white-nav {
  background-color: white;
}
</style>
