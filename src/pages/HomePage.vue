<template>
  <div class="container-fluid my-font">
    <!-- #region HERO IMAGE -->
    <section class="row">
      <div class="col-12 d-flex px-0 background-img">
        <div class="header-card">
          <h1 class="text-dark my-font header-text">Hello, I'm Elizabeth.</h1>
        </div>
      </div>
    </section>
    <!-- #endregion HERO IMAGE -->
    <!-- #region ABOUT ME -->
    <section class="row" id="about-me">
      <div class="col-md-7 order-2 order-md-1 about-container">
        <!-- TODO Break out about section into "work" and "play" or some variation?-->
        <h2 class="about-header"><u>About Me</u></h2>
        <p>I'm a Full Stack Software Developer with strong logical thinking and problem solving skills. To
          me, it feels like there's something about writing code that just clicks with the way my brain is 'wired'. My
          first introduction to development was in high school; I wrote a very basic webpage using strictly HTML/CSS. I
          loved
          being able to customize the appearance and content of my very own website, as well as having even a rudimentary
          understanding of what was going on behind the scenes of many sites I visited. Through my education in
          development, I continue to appreciate the flexibility and adaptability that can be achieved with well-written
          code.</p>
      </div>
      <div class="col-md-5 order-1 order-md-2 headshot-container">
        <img src="../assets/img/headshot.png" alt="a photo of Elizabeth" class="headshot-img">
      </div>
    </section>
    <!-- #endregion ABOUT ME -->
    <!-- #region MY WORK -->
    <section class="row application-container">
      <div class="col-12">
        <h2 id="my-work"><u>Featured Applications</u></h2>
      </div>
      <!-- #region PARKITECT -->
      <div class="col-md-6 application-description">
        <h3 class="text-center">Parkitect</h3>
        <p>Parkitect is an application developed as a team of four over the course of two weeks.
          During this time, we
          abided by Agile Methodologies and I acted as the Product Owner. This application provides a place for users
          to
          research and plan a trip to any (or multiple) of the 63 National Parks in the United States. We utilized
          multiple APIs including National Parks Service, Google Maps, and EmailJS in order to achieve our desired
          functionality. The backend of this application was written using Node.js in conjunction with MongoDB, while
          the front end was written using Vue.js.</p>
      </div>
      <div class="col-md-6 application-card-container">
        <a href="https://joeparkitect.onrender.com/#/" target="blank">
          <div class="application-card">
            <img src="../assets/img/parkitect.png" alt="a screenshot of the Parkitect application"
              class="application-img">
            <img src="../assets/img/parkitect-mobile.png" alt="a screenshot of the Parkitect application"
              class="mobile-application-img">
          </div>
        </a>
      </div>
      <!-- #endregion PARKITECT-->
      <!-- #region KEEPR -->
      <div class="col-md-6 order-md-1 order-2 application-card-container">
        <a href="https://keepr-310k.onrender.com/#/" target="blank">
          <div class="application-card">
            <img src="../assets/img/keepr.png" alt="a screenshot of the Keepr application" class="application-img">
            <img src="../assets/img/keepr-mobile.png" alt="a screenshot of the Keepr application"
              class="mobile-application-img">
          </div>
        </a>
      </div>
      <div class="col-md-6 order-md-2 order-1 application-description">
        <h3 class="text-center">Keepr</h3>
        <p>Keepr is a social platform that allows users to post 'Keeps' with brief descriptions. Those Keeps may be saved
          so a user's 'Vault', which can be marked either public or private. All users have a public profile which
          displays the Keeps they have created, as well as their public Vaults. This application was written using Vue as
          well as C# and SQL with a MySQL database.</p>
      </div>
      <!-- #endregion KEEPR -->
      <!-- #region TOWER -->
      <div class="col-md-6 order-3 application-description">
        <h3 class="text-center">Tower</h3>
        <p>Tower is a ticketing website that allows users to post their events for the community to see. Users may mark
          themselves as 'attending' an event and their name and photo will be added to the attendees component. Events may
          be cancelled and will stop accepting new attendees if they are cancelled or capacity is reached. Users may also
          utilize the comments section to share their thoughts on the upcoming activity. The front end was written using
          Vue.js, while the back end utilizes Node.js.</p>
      </div>
      <div class="col-md-6 order-4 application-card-container">
        <a href="https://tower-ds80.onrender.com/#/" target="blank">
          <div class="application-card">
            <img src="../assets/img/tower.png" alt="a screenshot of the Tower application" class="application-img">
            <img src="../assets/img/tower-mobile.png" alt="a screenshot of the Tower application"
              class="mobile-application-img">
          </div>
        </a>
      </div>
      <!-- #endregion TOWER -->
    </section>
    <!-- #endregion MY WORK -->
    <!-- #region CONTACT -->
    <section class="row justify-content-center">
      <div class="col-12">
        <h3>Contact Me</h3>
      </div>
      <div class="col-7">
        <form ref="form" class="row" @submit.prevent="sendEmail()">
          <div class="col-md-6">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" class="form-control form-input" required :value="inputFieldReset">
          </div>
          <div class="col-md-6">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-control form-input" required :value="inputFieldReset">
          </div>
          <div class="col-12">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" class="form-control form-input" required
              :value="inputFieldReset"></textarea>
            <div class="d-flex justify-content-end mb-3">
              <button class="btn btn-success" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- #endregion CONTACT-->
  </div>
</template>

<script>
import { ref } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { emailsService } from "../services/EmailsService.js"


export default {
  setup() {
    const form = ref(null)
    const inputFieldReset = ref(null)

    return {
      form,
      inputFieldReset,

      async sendEmail() {
        try {
          const emailData = form.value
          await emailsService.sendEmail(emailData)
          inputFieldReset.value = " ";
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.background-img {
  // TODO need an alternate background image for mobile displays
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
  max-height: 50vh;
  border-radius: 5px;
}

#my-work {
  margin-bottom: 1em;
}

.application-container {
  padding: 3em;
}

.application-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3em;
}

.application-card-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
}

.application-card {
  background-color: white;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 45vh;
  padding: .5em;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
}

.application-card:hover {
  cursor: pointer;
  transform: scale(1.02);
}

.application-img {
  object-fit: cover;
  object-position: top;
  width: 100%;
  border-radius: 5px;
}


.mobile-application-img {
  display: none;
}

.form-input {
  border: none !important;
  margin-bottom: 1em;
}

@media screen and (max-width: 768px) {
  .headshot-container {
    padding-bottom: 0;
  }

  .about-container {
    padding-top: 2em;
  }

  .header-text {
    font-size: 33px;
    margin-left: .5em;
  }

  .application-container {
    padding: .5em;
  }


  .application-img {
    display: none;
  }

  .mobile-application-img {
    display: block;
    object-fit: cover;
    object-position: center;
    height: 100%;
  }
}
</style>
