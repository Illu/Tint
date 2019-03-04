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
  font-size: 4em;
  font-weight: bold;
  margin: 70px 0 10px 0;
  color: white;
}

p {
  font-weight: 500;
  margin-bottom: 50px;
  color: white;
}
</style>
