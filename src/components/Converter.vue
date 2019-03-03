<template>
  <div>
    <input type="file" name="pic" accept="image/*" ref="imageUpload" @change="onUpload">
    <div id="preview" :style="gradient"></div>
    <p>{{DarkVibrant}}</p>
    <p>{{LightVibrant}}</p>
  </div>
</template>

<script>
import Vibrant from "node-vibrant";

export default {
  data: function () {
    return {
      files: [],
      DarkVibrant: '',
      LightVibrant: '',
    }
  },
  computed: {
    gradient() {
      return `background-image: linear-gradient(${this.DarkVibrant}, ${this.LightVibrant});`
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
          console.log(this.DarkVibrant)
        });
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style>
#preview {
  height: 200px;
  width: 200px;
  background: grey;
  
}


</style>


