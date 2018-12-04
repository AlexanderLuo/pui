<template>
    <section class="p-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
    </section>
</template>

<script>
	export default {
		name: "PContainer",

    computed: {
		  isVertical() {
		    return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'p-header' || tag === 'p-footer';
          })
          : false;
      }
    },


	}
</script>


