<template>
  <div :class="[
    'p-input',
    {'p-input--prefix': prefixIcon,}
    ]"
  >
    <template>
      <input
        class="p-input__inner"

        v-bind="$attrs"
        :type="type"
        :value="nativeInputValue"
        ref="input"

        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"

        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >


      <!-- 前置内容 -->
      <span class="p-input__prefix" v-if="prefixIcon">
        <i class="p-input__icon" :class="prefixIcon"></i>
      </span>

      <!-- 后置内容 -->
      <span class="el-input__suffix" v-if="suffixIcon || showClear">
        <i class="el-input__icon" v-if="suffixIcon" :class="suffixIcon"></i>
        <i v-else class="el-input__icon el-icon-circle-close el-input__clear" @click="clear"></i>
      </span>



    </template>


  </div>
</template>

<script>
	export default {
		name: "PInput",
    props:{
      value: [String, Number],
      type: {type: String, default: 'text'},

      // 辅助项目
      prefixIcon: String,
      suffixIcon: String,
      clearable: {type: Boolean, default: false},
    },
    data(){
		  return {
		    focused:false,
        isOnComposition:false
      }
    },
    computed:{
		  nativeInputValue(){
		    return this.value === null || this.value === undefined ? '' : this.value;
      },
      showClear:{}
    },
    methods: {

		  focus() {
		    this.$refs.input.focus()
		  },
      handleFocus(){
        this.focused = true;
        this.$emit('focus', event);
      },

      blur() {
		    this.$refs.input.blur()
      },
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      },

      handleComposition(event) {
		    if (event.type === 'compositionstart') {
		      this.isOnComposition = true;
        }
        if (event.type === 'compositionend') {
          this.isOnComposition = false;
          this.handleInput(event);
        }
      },


      handleChange(event) {
        this.$emit('change', event.target.value);
      },

      handleInput(event) {
		    console.log(event.target.value )
        // hack for https://github.com/ElemeFE/element/issues/8548
        // should remove the following line when we don't support IE

        if (event.target.value === this.nativeInputValue) return;
        this.$emit('input', event.target.value);
        // set input's value, in case parent refuses the change
        // see: https://github.com/ElemeFE/element/issues/12850
        // this.$nextTick(() => { this.$refs.input.value = this.value; });

      },


    },



	}
</script>

<style scoped>
  .el-input__prefix{
    float: left;
  }

</style>
