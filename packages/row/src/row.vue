<!--todo
  use flex 启用对齐方式
-->

<template>
  <div class="p-row"
       :style="style"
  >
    <slot></slot>
  </div>

</template>

<script>
	export default {
		name: "PRow",
    props: {
		  gutter: Number,
    },

    computed: {
		  style() {
		    const ret = {};
		    if (this.gutter) {
		      ret.marginLeft = `-${this.gutter / 2}px`;
		      ret.marginRight = ret.marginLeft;
		    }
		    return ret;
    }
    },

	}
</script>

