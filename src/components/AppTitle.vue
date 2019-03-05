<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<style scoped>
h1 {
  font-size: 4em;
  font-weight: bold;
  margin: 50px 0 10px 0;
  color: white;
}

p {
  font-weight: 500;
  margin-bottom: 50px;
  color: white;
}
</style>
