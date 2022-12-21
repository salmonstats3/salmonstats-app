<template>
  <h1>Result</h1>
</template>

<!-- <script></script> -->
<script setup>
const route = useRoute()
console.log(route.params)
const baseURL  = "https://api.splatnet3.com/v1/results/"
const { data } = await useFetch(`${baseURL}${route.params.salmonId}`)
console.log(data.value)
// console.log(data.value.myResult)
console.log(Object.keys(data.value))
</script>