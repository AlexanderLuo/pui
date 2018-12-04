<template>
  <footer class="p-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
	export default {
		name: "PFooter",
    props: {
		  height: {
		    type: String,
        default: '60px'
      }
    }
	}
</script>

<style scoped>

</style>
