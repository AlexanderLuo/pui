<template>
  <header class="p-header"
          :style="{ height }"
          :class="[{'is-fixed': fixed}]"
  >
    <slot></slot>
  </header>
</template>


<script>
	export default {
		name: "PHeader",
    props: {
		  height: {
		    type: String,
        default: '60px'
      },
      fixed:Boolean
    }
	}
</script>
