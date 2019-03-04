<template>
  <div class="wrapper">
    <label class="fileContainer">

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
      <span class="blue">&nbsp;Add an image</span>&nbsp;or drop it here
      <input
        class
        type="file"
        name="pic"
        accept="image/*"
        ref="imageUpload"
        @change="onUpload"
      >
    </label>
    <div id="preview" :style="gradient"></div>
    <div class="color-codes">
      <p class="blue">{{DarkVibrant}}</p>
      <p class="blue">{{LightVibrant}}</p>
    </div>
  </div>
</template>

<script>
import Vibrant from "node-vibrant";

export default {
  data: function() {
    return {
      files: [],
      DarkVibrant: "",
      LightVibrant: ""
    };
  },
  computed: {
    gradient() {
      if (this.DarkVibrant && this.LightVibrant){
      return `
      background-image: linear-gradient(${this.DarkVibrant}, ${
        this.LightVibrant
      });
      margin: 30px 0;
      height: 200px;
      `;
      } else {
        return "height: 0px;"
      }
    }
  },
  methods: {
    onUpload(evt) {
      this.files = evt.target.files;
      this.generateGradient();
    },
    generateGradient() {
      const reader = new FileReader();
      const file = this.files[0];
      reader.onload = e => {
        const v = new Vibrant(e.target.result);
        v.getPalette((err, palette) => {
          this.DarkVibrant = palette.DarkVibrant.hex;
          this.LightVibrant = palette.LightVibrant.hex;
          console.log(this.DarkVibrant);
        });
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.2);
  transition: ease .5s;
  margin: 0 20px;
}

#preview {
  
  height: 200px;
  width: 200px;
  border-radius: 12px;
  background: grey;
  transition: .5s ease;
}

.fileContainer {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 12px;
  padding: 20px 100px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: rgb(200, 200, 200);
}

.fileContainer [type="file"] {
  cursor: inherit;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
}

.blue {
  color: rgb(0, 165, 255);
  font-weight: bold;
}

.color-codes {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  font-size: 22px;
}

@media only screen and (max-width: 600px) {
  .fileContainer {
    padding: 20px;
  }
}
</style>


