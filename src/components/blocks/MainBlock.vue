<script>
export default {
  name: "MainBlock",
  props: {
    title: {
        type: String,
        default: 'Заголовок'
    },
    center: {
        type: Boolean,
        default: false
    }
  },
  computed: {
    containerClasses(){
        return {
            'align-items-center': this.center,
        }
    }
  }
};
</script>

<template>
    <section class="main-block">
      <div class="main-block__container" :class="containerClasses">
        <div class="main-block__header">
            <h1 class="main-block__title">
                {{ title }}
            </h1>
            <slot name="header-button"></slot> 
        </div>
        <div class="main-block__elements">
          <slot name="elements"></slot>
          <slot name="empty-state"></slot>
        </div>
        <slot name="footer-button"></slot>
      </div>
    </section>
  </template>