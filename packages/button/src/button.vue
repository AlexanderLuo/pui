<template>
  <button
    class="p-button"
    @click="$emit('click')"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"


    :class="[
      type ? 'p-button--' + type : '',
      buttonSize ? 'p-button--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round
      }
    ]"
  >

    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>

    <slot></slot>

  </button>
</template>

<script>

  export default {
    name: 'PButton',


    props: {
      // 类型 primary / success / warning / danger / info / text
      type: {
        type: String,
        default: 'default'
      },
      // 尺寸 medium / small / mini
      size: String,
      // 图标类名
      icon: {
        type: String,
        default: ''
      },
      // 原生type属性 button / submit / reset
      nativeType: {
        type: String,
        default: 'button'
      },

      buttonSize:{
        type:String,
        default:''
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean
    },


    computed: {},
    methods: {}
  };
</script>
<style scoped>


</style>
