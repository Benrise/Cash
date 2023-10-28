<script>
export default {
  props: {
    icon: String,
  },
};
</script>

<template>
    <div class="empty-state">
      <div class="empty-state__container">
        <i class="empty-state__icon material-icons">{{ icon }}</i>
        <h1 class="empty-state__title"><slot name="title"></slot></h1>
        <h2 class="empty-state__text"><slot name="text"></slot></h2>
      </div>
    </div>
  </template>