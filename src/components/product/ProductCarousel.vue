<template>
  <div class="carousel__image" :style="backgroundImageStyle"></div>
  <button class="carousel__arrow-left" @click="slideLeft">
    <i class="fa-solid fa-circle-arrow-left fa-xl"></i>
  </button>
  <button class="carousel__arrow-right" @click="slideRight">
    <i class="fa-solid fa-circle-arrow-right fa-xl"></i>
  </button>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {
      slideID: 0,
    };
  },
  methods: {
    slideLeft() {
      if (this.slideID > 0) {
        this.slideID--;
      } else {
        this.slideID = this.images.length - 1;
      }
    },
    slideRight() {
      if (this.slideID < this.images.length - 1) {
        this.slideID++;
      } else {
        this.slideID = 0;
      }
    },
  },
  computed: {
    backgroundImageStyle() {
      return {
        "background-image": `url(${this.images[this.slideID]}?v=${Date.now()})`,
      };
    },
  },
  created() {
    console.log(this.images);
  },
  mounted() {
    console.log(this.images);
  },
};
</script>

<style scoped>
.carousel__image {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 0.3rem;
}

.carousel__arrow-left,
.carousel__arrow-right {
  position: absolute;
  background-color: transparent;
  border: none;

  cursor: pointer;
}

.carousel__arrow-left {
  top: 50%;
  left: 20px;
}

.carousel__arrow-right {
  top: 50%;
  right: 20px;
}
</style>
