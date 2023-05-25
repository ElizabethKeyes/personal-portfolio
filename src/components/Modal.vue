<template>
  <div class="modal fade" id="resumeModal" tabindex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="resumeModalLabel">Resume</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="../assets/img/resume-1.png" alt="my resume" class="resume-img mb-3">
          <img src="../assets/img/resume-2.png" alt="my resume" class="resume-img">
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.resume-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
}
</style>