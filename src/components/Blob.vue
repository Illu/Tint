<template>
  <div class="blob" v-bind:style="{left: `${target.x}vw`, top: `${target.x}vh`} "/>
</template>

<script>
export default {
  data: function() {
    return {
      target: { x: 0, y: 0 }
    };
  },
  mounted: function() {
    this.launchMovement();
    this.updateTarget();
  },
  beforeDestroy() {
    clearInterval(this.tick);
  },
  methods: {
    launchMovement: function() {
      this.tick = setInterval(() => {
        this.updateTarget();
      }, 15000);
    },
    updateTarget: function() {
      this.target = {
        x: Math.floor(Math.random() * 91),
        y: Math.floor(Math.random() * 90)
      };
    }
  }
};
</script>

<style scoped>
.blob {
  position: absolute;
  top: 0;
  left: 0;
  height: 30vw;
  width: 30vw;
  z-index: -1;
  background: rgba(33, 33, 33, 0.03);
  border-radius: 39% 61% 27% 73% / 62% 27% 73% 38%;
  animation: morph 20s ease 1s infinite;
  transition: 15s ease;
}

@keyframes morph {
  0% {
    border-radius: 39% 61% 27% 73% / 62% 27% 73% 38%;
  }
  25% {
    border-radius: 56% 44% 45% 55% / 36% 70% 30% 64%;
  }
  50% {
    border-radius: 63% 37% 66% 34% / 83% 63% 37% 17%;
  }
  75% {
    border-radius: 41% 59% 39% 61% / 11% 31% 69% 89%;
  }
  100% {
    border-radius: 39% 61% 27% 73% / 62% 27% 73% 38%;
  }
}
</style>
