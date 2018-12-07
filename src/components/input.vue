<template>
  <div>

    <p-input placeholder="输入" v-model="msg"></p-input>
    <div>{{msg}}</div>
  </div>

</template>

<script>
	export default {
		name: "DInput",
    data(){
		  return {
		    msg:'ok'
      }
    }
	}
</script>

<style scoped>

</style>
