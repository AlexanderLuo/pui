<template>


  <label>
    <input
          class="el-radio__original"
          :name="name"
          :value="label"
          type="radio"
          @change="handleChange"
          tabindex="-1"/>




    <!--按钮后续插槽-->
    <span class="el-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>


</template>


<script>
	export default {
		name: "PRadio",
    props:{
		  label:{},
      name:String,

    },
    data(){
		  return {

      }
    },
    computed:{
		  isGroup(){
		    let parent = this.$parent;
		    if(parent.$options.name !== 'PRadioGroup'){
		      return false
        }
        return true
      }
    },
    methods:{
		  handleChange() {

      }
    },
	}
</script>

<style scoped>

</style>
