<template>
  <div>
    <p>hey i'm the converter</p>
    <input type="file" name="pic" accept="image/*" ref="imageUpload" @change="onUpload">
  </div>  
</template>

<script>
import * as Vibrant from 'node-vibrant'

export default {
  data() {
    return {
      files: [],
    }
  },
  methods: {
    onUpload(evt) {
      this.files = evt.target.files;
      this.generateGradient();
    },
    generateGradient() {
      const reader = new FileReader();
      const file = this.files[0]
      reader.onload = function(e) {
        const v = new Vibrant(e.target.result);
        v.getPalette((err, palette) => console.log("palette", palette))
      }
      reader.readAsDataURL(file);
    }
  }
}
</script>

<style>

</style>


