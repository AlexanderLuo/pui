<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>


<script>
	export default {
		name: "PRadioGroup",
    props:{
		  value:{},
		  disabled: Boolean
    },
    created(){
      this.$on('handleChange', value => {this.$emit('change', value)})
    },
    mounted(){},
	}
</script>

<style scoped>

</style>
