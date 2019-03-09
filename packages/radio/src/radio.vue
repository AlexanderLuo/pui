<template>


  <label>
    <input
          class="el-radio__original"
          type="radio"
          :value="label"
          v-model="model"
          :name="name"
          @change="handleChange"/>



    <!--按钮后续插槽-->
    <span class="el-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>


</template>


<script>
	export default {
		name: "PRadio",
    props:{
		  value:{},
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
        this._radioGroup = parent
        return true

      },
      model:{
		    get(){
		      return this.isGroup ? this._radioGroup.value : this.value;
        },
		    set(val){
		      this.$emit('input',val)
		    }
      }
    },
    methods:{
		  handleChange() {
        this.$nextTick(() => {
          console.log(````````````````````````)
          this.$emit('change', this.model)
        })
      }
    },
	}
</script>

<style scoped>

</style>
