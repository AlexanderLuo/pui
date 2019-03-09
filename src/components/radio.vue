<template>
  <div>
    <!--<input type="radio" name="a" v-model="das" value="1"/>123-->
    <!--<input type="radio" name="a" v-model="das" value="2"/>234-->


    <p-radio-group v-model="das">
      <p-radio   label="2" name="as"></p-radio>
      <p-radio   label="3" name="as"></p-radio>
    </p-radio-group>


    {{das}}


  </div>

</template>

<script>
	export default {
		name: "DRadio",
    mounted(){
		  console.log(this.$parent.$options.name === 'PContent')
    },
    data(){
		  return {
		    das : '3'
      }
    }
	}
</script>

<style scoped>

</style>
