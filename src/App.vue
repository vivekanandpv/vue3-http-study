<template>
  <div class="container p-5">
    <h3>Learning HTTP communication in Vue 3</h3>
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('POST')">POST</button>
    {{ postResult }}
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('PUT')">PUT</button>
    {{ putResult }}
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('PATCH')">
      PATCH
    </button>
    {{ patchResult }}
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('DELETE')">
      DELETE
    </button>
    {{ deleteResult }}
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      postResult: "",
      putResult: "",
      patchResult: "",
      deleteResult: "",
    };
  },
  methods: {
    async makeCall(httpMethod) {
      switch (httpMethod) {
        case "POST":
          try {
            const data = await this.$reqresService.post(`users`, {
              firstName: "Vue3 Test",
            });
            console.log("Server: POST", data);
            this.postResult = data.data;
          } catch (error) {
            console.log("Error: POST", error);
          }
          break;
        case "PUT":
          try {
            const data = await this.$reqresService.put(`users/3456`, {
              firstName: "Vue3 Test",
            });
            console.log("Server: PUT", data);
            this.putResult = data.data;
          } catch (error) {
            console.log("Error: PUT", error);
          }
          break;

        case "PATCH":
          try {
            const data = await this.$reqresService.patch(`users/3456`, {
              firstName: "Vue3 Test",
            });
            console.log("Server: PATCH", data);
            this.patchResult = data.data;
          } catch (error) {
            console.log("Error: PATCH", error);
          }
          break;

        case "DELETE":
          try {
            const data = await this.$reqresService.delete(`users/57845`);
            console.log("Server: DELETE", data);

            this.deleteResult =
              data.status >= 200 && data.status < 300
                ? "DELETE successful"
                : "DELETE failed";
          } catch (error) {
            console.log("Error: DELETE", error);
          }
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style>
</style>
