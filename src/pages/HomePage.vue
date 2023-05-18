<template>
  <div class="container-fluid">
    <!-- HERO IMAGE -->
    <section class="row">
      <div class="col-12 d-flex px-0 background-img">
        <div class="header-card">
          <h1 class="text-dark my-font header-text">Hello, I'm Elizabeth.</h1>
        </div>
      </div>
    </section>

    <!-- ABOUT ME -->
    <section class="row">
      <div class="col-6 about-container">
        <!-- TODO Break out about section into "work" and "play" or some variation?-->
        <h2 class="about-header" id="about-me">About Me</h2>
        <p class="my-text">I'm a Full Stack Software Developer with strong logical thinking and problem solving skills. To
          me, it feels like there's something about writing code that just clicks with the way my brain is 'wired'. My
          first introduction to development was in high school; I wrote a very basic webpage using strictly HTML/CSS. I
          loved
          being able to customize the appearance and content of my very own website, as well as having even a rudimentary
          understanding of what was going on behind the scenes of many sites I visited. Through my education in
          development, I continue to appreciate the flexibility and adaptability that can be achieved with well-written
          code.</p>
      </div>
      <div class="col-6 headshot-container">
        <img src="../assets/img/headshot.png" alt="a photo of Elizabeth" class="headshot-img">
      </div>
    </section>

    <!-- MY WORK -->
    <section class="row">
      <div class="col-12">
        <h1 id="my-work">this is my work section</h1>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="row">
      <div class="col-12">
        <h1 id="contact">this is my contact section</h1>
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
  background-image: url('https://images.unsplash.com/photo-1515508268448-8d0d292bc49a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80');
  // background-image: url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.header-card {
  align-self: end;
  border-radius: 5px;
  padding: .5em;
  margin-bottom: 3em;
}

.header-text {
  margin-left: 1em;
  font-size: 60px
}

.about-container {
  padding: 3em;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headshot-container {
  padding: 3em;
  display: flex;
  justify-content: center;
}

.headshot-img {
  object-fit: cover;
  object-position: center;
  height: 50vh;
  border-radius: 5px;
}

#my-work {
  height: 100vh;
}

#contact {
  height: 100vh;
}
</style>
