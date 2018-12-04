<template>
    <aside class="p-aside" :style="{ width }">
    <slot></slot>
  </aside>

</template>

<script>
	export default {
		name: "PAside",
    props: {
		  width: {
		    type: String,
        default: '300px'
		  }
    }
	}
</script>

<style scoped>

</style>
