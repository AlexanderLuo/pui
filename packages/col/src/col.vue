<template>
  <div class="p-col"
       :style="style"

       :class="classList"
  >

    <slot></slot>
  </div>

</template>

<script>
	export default {
		name: "PCol",
    props: {
		  span: {type: Number, default: 24},
      offset: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },

    computed: {
		  gutter() {
		    let parent = this.$parent;
        console.log(parent.gutter)

		    return parent ? parent.gutter : 0;
		  },

      style(){
		    let style = {};
		     if (this.gutter) {
		       style.paddingLeft = this.gutter / 2 + 'px';
		       style.paddingRight = style.paddingLeft;
		     }
		     return style

      },

      classList(){
		    let classList = [];
        ['span', 'offset'].forEach(prop => {
          if (this[prop] || this[prop] === 0) {
            classList.push(
              prop !== 'span' ? `p-col-${prop}-${this[prop]}` : `p-col-${this[prop]}`);
          }
        });
        return classList
      }
    },

	}
</script>

