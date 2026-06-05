<template>
  <section class="section9 logos">
    <div class="content">
      <h4 class="title">主辦單位</h4>
      <a href="https://www.businesstoday.com.tw/" target="_blank" class="main-logo">
        <img src="@/assets/images/logos/BT_logo.svg" alt="今周刊" loading="lazy">
      </a>
    </div>
    <div class="content" v-for="item in logos" :key="item.title">
      <h4 class="title">{{ item.title }}</h4>
      <div class="partner-logo-sec">
        <a :href="x.link" target="_blank" class="partner-logo" :class="x.name" v-for="x in item.partner" :key="x.name">
          <img :src="getImageUrl(x.name)" :alt="x.alt" v-if="x.alt">
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  logos: {
    type: Array,
    required: true
  }
})

const getImageUrl = (name) => {
  return `${import.meta.env.BASE_URL}assets/images/logos/${name}_logo.png`
}
</script>

<style scoped>
</style>
