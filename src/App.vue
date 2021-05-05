<template>
  <div class="container p-5">
    <h3>Learning HTTP communication in Vue 3</h3>
  </div>
</template>

<script>
export default {
  //  Essential reading:
  //  Promise API: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  //  Async functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  //  Video: https://www.youtube.com/watch?v=PoRJizFvM7s
  //  Video: https://www.youtube.com/watch?v=vn3tm0quoqE
  async mounted() {
    try {
      //  since the http client is configured as the global cofiguration (as a plugin),
      //  we can use it as part of every child of the app
      //  More info: https://github.com/axios/axios#axios-api
      const data = await this.$reqresService.get(`users?page=2`);
      console.log("Server", data);
    } catch (error) {
      console.log("Error", error);
    }
  },
};
</script>

<style>
</style>
