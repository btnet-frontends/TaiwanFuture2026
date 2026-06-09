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
        <template v-for="x in item.partner" :key="x.name">

          <!-- 長榮特殊處理 -->
          <div class="partner-logo EVERGREEN_EVAAIR" v-if="x.name === 'EVERGREEN_EVAAIR'">
            <a href="https://www.evergreen-marine.com/emc/?lang=zh-tw" target="_blank" class="evergreen-half">
              <img :src="getImageUrl('EVERGREEN')" alt="長榮海運">
            </a>
            <a href="https://www.evaair.com/zh-tw/index.html" target="_blank" class="evaair-half">
              <img :src="getImageUrl('EVERGREEN')" alt="長榮航空">
            </a>
          </div>

          <!-- 其他正常 logo -->
          <a :href="x.link" target="_blank" class="partner-logo" :class="x.name" v-else>
            <img :src="getImageUrl(x.name)" :alt="x.alt" v-if="x.alt">
          </a>

        </template>
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
.EVERGREEN_EVAAIR {
  display: flex;
}

.evergreen-half,
.evaair-half {
  width: 50%;
  overflow: hidden;
  display: block;
}

.evergreen-half img {
  width: 200%;
  object-position: left;
}

.evaair-half img {
  width: 200%;
  margin-left: -100%;
  object-position: right;
}
</style>