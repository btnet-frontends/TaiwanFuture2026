<template>
  <div class="navbar">
    <div class="logo">
      <a href="#" @click.prevent="scrollToTop">
        <img src="@/assets/images/logo.svg" alt="今周刊logo">
      </a>
    </div>
    
    <ul class="menu" :class="{active: menuIsopen}">
      <li @click="$emit('scroll-to', 'home')">
        <p>首頁</p>
        <p>HOME</p>
      </li>
      <li @click="$emit('scroll-to', 'issue')">
        <p>趨勢議題</p>
        <p>KEY ISSUE</p>
      </li>
      <li @click="$emit('scroll-to', 'guest')">
        <p>貴賓/講者</p>
        <p>GUEST</p>
      </li>
      <li @click="$emit('scroll-to', 'agenda')">
        <p>活動議程</p>
        <p>AGENDA</p>
      </li>
      <li @click="$emit('scroll-to', 'information')">
        <p>活動資訊</p>
        <p>INFORMATION</p>
      </li>
      <li @click="$emit('scroll-to', 'article')">
        <p>前瞻觀點</p>
        <p>REPORT</p>
      </li>
      <li @click="$emit('scroll-to', 'review')">
        <p>歷屆回顧</p>
        <p>REVIEW</p>
      </li>
      <li class="social-media-mb">
        <a href="https://www.facebook.com/BToday/" target="_blank">
          <img src="@/assets/images/logo-fb.svg" alt="logo-fb">
        </a>
        <a href="https://line.me/R/ti/p/%40btoday" target="_blank">
          <img src="@/assets/images/logo-line.svg" alt="logo-line">
        </a>
        <a href="https://www.instagram.com/btoday_ig/" target="_blank">
          <img src="@/assets/images/logo-ig.svg" alt="logo-ig">
        </a>
      </li>
    </ul>
    
    <div class="social-media">
      <a href="https://www.facebook.com/BToday/" target="_blank">
        <img src="@/assets/images/logo-fb.svg" alt="logo-fb">
      </a>
      <a href="https://line.me/R/ti/p/%40btoday" target="_blank">
        <img src="@/assets/images/logo-line.svg" alt="logo-line">
      </a>
      <a href="https://www.instagram.com/btoday_ig/" target="_blank">
        <img src="@/assets/images/logo-ig.svg" alt="logo-ig">
      </a>
    </div>
    
    <div class="menu-btn" @click="$emit('toggle-menu')">
      <img v-if="menuIsopen" src="@/assets/images/cross-white.svg" alt="close-menu">
      <img v-else src="@/assets/images/menu-btn.svg" alt="open-menu">
    </div>
  </div>
</template>

<script setup>
defineProps({
  menuIsopen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-menu', 'scroll-to'])

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1920px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, rgba(255, 28, 193, 0.7), rgba(73, 0, 117, 0.4), rgba(28, 57, 255, 0.8));
  border: 1px solid #fff;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s;
}

.logo a {
  display: flex;
  align-items: center;
  background: #c1272d;
  border-radius: 12px;
  padding: 8px 15px;
}

.logo img {
  height: 35px;
}

.menu {
  display: flex;
  list-style: none;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.menu li {
  cursor: pointer;
  text-align: center;
  color: #fff;
  padding: 6px 16px;
  border-radius: 30px;
  transition: all 0.3s;
}

.menu li:hover {
  background: rgba(255, 255, 255, 0.9);
}

.menu li:hover p {
  color: #9412bc !important;
}

.menu li p:first-child {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2px;
  transition: color 0.3s;
}

.menu li p:last-child {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s;
}

.social-media {
  display: flex;
  gap: 15px;
}

.social-media img {
  width: 30px;
  height: 30px;
  transition: filter 0.3s;
}

.social-media img:hover {
  filter: invert(17%) sepia(85%) saturate(4155%) hue-rotate(276deg) brightness(90%) contrast(121%);
}

.social-media-mb {
  display: none !important;
}

.menu-btn {
  display: none;
  cursor: pointer;
}

.menu-btn img {
  width: 30px;
  height: 30px;
}

@media (max-width: 1024px) {
  .navbar {
    top: 10px;
    width: 94%;
    padding: 10px 15px;
    border-radius: 40px;
  }

  .menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background: #00417e;
    flex-direction: column;
    padding: 80px 30px;
    gap: 20px;
    transition: right 0.3s;
  }

  .menu.active {
    right: 0;
  }

  .menu li {
    color: white;
  }

  .menu li p:last-child {
    color: #ccc;
  }

  .social-media {
    display: none;
  }

  .social-media-mb {
    display: flex !important;
    gap: 15px;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    width: 45px;
    height: 45px;
    background: linear-gradient(to right, rgba(255, 28, 193, 0.7), rgba(73, 0, 117, 0.4), rgba(28, 57, 255, 0.8));
    border: 1px solid #fff;
    border-radius: 50%;
  }

  .menu-btn img {
    width: 25px;
    height: 25px;
  }
}
</style>
