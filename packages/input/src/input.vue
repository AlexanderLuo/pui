<template>
  <div :class="[
    'p-input',
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
    </template>
  </div>
</template>

<script>
	export default {
		name: "PInput",
    props:{
      type: {type: String, default: 'text'},
      value: [String, Number],
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
      }
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

</style>
