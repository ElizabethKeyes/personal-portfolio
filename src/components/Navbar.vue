<template>
  <div class="container-fluid">
    <section class="row nav-row" id="transparent-nav">
      <div class="col-md-4 d-flex justify-content-evenly">
        <h1 class="my-font menu-text" @click="scrollPage('about-me')">About Me</h1>
        <h1 class="my-font menu-text" @click="scrollPage('my-work')">My Work</h1>
        <h1 class="my-font menu-text" @click="scrollPage('contact')">Contact</h1>
      </div>
    </section>
    <section class="row nav-row hidden-nav elevation-2" id="white-nav">
      <div class="col-md-4 d-flex justify-content-evenly">
        <h1 class="my-font menu-text" @click="scrollPage('about-me')">About Me</h1>
        <h1 class="my-font menu-text" @click="scrollPage('my-work')">My Work</h1>
        <h1 class="my-font menu-text" @click="scrollPage('contact')">Contact</h1>
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
      if (window.scrollY >= 5) {
        document.getElementById("transparent-nav").classList.add("hidden-nav")
        document.getElementById("white-nav").classList.remove("hidden-nav")
      } else if (window.scrollY < 5) {
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
      scrollPage(location) {
        const yValue = document.getElementById(`${location}`).offsetTop
        scrollTo(0, (yValue - 115))
      }
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
  transition: all .3s ease;
  z-index: 2
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
  background-color: #e5e5e5;
}

.menu-text {
  color: #111927;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  #transparent-nav {
    visibility: hidden;
  }

  .hidden-nav {
    visibility: visible;
    opacity: 1;
  }
}
</style>
