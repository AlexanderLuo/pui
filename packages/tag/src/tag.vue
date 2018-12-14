<template>

  <span :class="['p-tag']"
        :style="{backgroundColor:color}"
  >
    <slot></slot>

    <i v-if="closable" class="p-tag__close el-icon-close" @click="handleClose"></i>

  </span>
</template>

<script>
	export default {
		name: "PTag",
    props: {
		  text: String,
      color: String,
      closable: false
    },
    methods:{
		  handleClose(evt){

      }
    },
	}
</script>

<style scoped>


</style>
