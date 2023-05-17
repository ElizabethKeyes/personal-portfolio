<template>
  <div class="container-fluid">
    <section class="row nav-row" id="transparent-nav">
      <div class="col-4 d-flex justify-content-evenly">
        <h1 class="my-font text-light fs-5">About Me</h1>
        <h1 class="my-font text-light fs-5">My Work</h1>
      </div>
    </section>
    <section class="row nav-row hidden-nav" id="white-nav">
      <div class="col-4 d-flex justify-content-evenly">
        <h1 class="my-font text-dark fs-5">About Me</h1>
        <h1 class="my-font text-dark fs-5">My Work</h1>
      </div>
    </section>
  </div>
</template>


<script>
import { onMounted } from "vue";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    function setNavStyle() {
      logger.log('setting nav style')
      if (window.scrollY >= 100) {
        document.getElementById("transparent-nav").classList.add("hidden-nav")
        document.getElementById("white-nav").classList.remove("hidden-nav")
      } else if (window.scrollY < 100) {
        document.getElementById("transparent-nav").classList.remove("hidden-nav")
        document.getElementById("white-nav").classList.add("hidden-nav")
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
  transition: all .3s ease
}

.hidden-nav {
  visibility: hidden;
  opacity: 0;
  transition: all .3s ease
}

#transparent-nav {
  background-color: transparent;
}

#white-nav {
  background-color: white;
}
</style>
