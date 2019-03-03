<template>
  <div>
    <h1 v-html="title" />
    <p>Generate a beautiful gradient from any image</p>
  </div>
</template>

<script>
import twemoji from 'twemoji';

export default {
  data:function () {
    return {
      title: "Tint"
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  font-size: 3.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-weight: 500;
}
</style>
