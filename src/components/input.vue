<template>

  <p-col :span="4">
    <p-input placeholder="输入" v-model="msg" prefix-icon="el-icon-info"></p-input>
    <div>{{msg}}</div>
  </p-col>

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
