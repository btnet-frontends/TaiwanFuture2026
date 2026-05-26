<template>
  <section class="section7 article">
    <!-- <img src="@/assets/images/wave-purple.svg" alt="wave-blue" class="wave-purple" loading="lazy">
    <img src="@/assets/images/wave-white.svg" alt="wave-white" class="wave-white2" loading="lazy"> -->
    <div class="light"></div>
    <div class="article1">
      <!-- <img src="@/assets/images/light.png" class="light light1" alt="light"> -->
      <h2 class="section-title white">前瞻觀點</h2>
      <div class="swiper_area">
        <div class="swiper mySwiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in articles" :key="item.link">
              <a :href="item.link" class="article-box" target="_blank">
                <div class="article-img">
                  <img :src="item.img" :alt="item.title">
                </div>
                <div class="text">
                  {{ item.title }}
                </div>
              </a>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination1"></div>
        </div>
        <div class="swiper-button-next swiper-button-next1"></div>
        <div class="swiper-button-prev swiper-button-prev1"></div>
      </div>
    </div>

    <!-- <div class="article2">
      <img src="@/assets/images/light.png" class="light light2" alt="light">
      <img src="@/assets/images/light.png" class="light light3" alt="light">
      <h2 class="section-title white">產業新知</h2>
      <div class="swiper_area">
        <div class="swiper mySwiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in articles" :key="item.link">
              <a :href="item.link" class="article-box" target="_blank">
                <div class="article-img">
                  <img :src="item.img" :alt="item.title" loading="lazy">
                </div>
                <div class="text">
                  {{item.title}}
                </div>
              </a>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination2"></div>
        </div>
        <div class="swiper-button-next swiper-button-next2"></div>
        <div class="swiper-button-prev swiper-button-prev2"></div>
      </div>
    </div> -->

    <div class="article3 review">
      <h2 class="section-title white">歷屆回顧</h2>
      <div class="swiper_area">
        <div class="swiper mySwiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in reviews" :key="item.link">
              <a :href="item.link" target="_blank" class="review-box">
                <img :src="item.img" :alt="item.title">
                <div class="text">{{ item.title }}</div>
              </a>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination3"></div>
        </div>
        <div class="swiper-button-next swiper-button-next3"></div>
        <div class="swiper-button-prev swiper-button-prev3"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  articles: {
    type: Array,
    required: true
  },
  reviews: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.section7 {
    padding: 135px 0 70px;
    background: transparent;
}

.wave-purple {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}

.wave-white2 {
    position: absolute;
    left: 0;
    top: -1px;
    width: 100%;
    transform: scale(-1);
}

.light {
    position: absolute;
    mix-blend-mode: color-dodge;
    animation: lightAni 1s infinite alternate;
}

.light1 {
    width: 4vw;
    top: 0;
    left: -2vw;
    min-width: 50px;
}

.light2 {
    width: 4vw;
    top: 2vw;
    right: -1vw;
    min-width: 50px;
    animation-delay: -0.8s;
}

.light3 {
    width: 3vw;
    top: 0vw;
    right: 2vw;
    min-width: 30px;
    animation-delay: -0.5s;
}

@keyframes lightAni {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0.5;
        transform: scale(0.8);
    }
}

.article1,
.article2,
.article3 {
    position: relative;
    max-width: 1400px;
    width: 85vw;
    margin: 0 auto;
}

.article2, .article3 {
    margin-top: 160px;
}

.swiper_area {
    position: relative;
}

.mySwiper1,
.mySwiper2,
.mySwiper3 {
    width: calc(95% - 50px);
    padding-bottom: 40px;
    overflow: hidden;
}

/* 未初始化前隱藏 wrapper，避免重整時卡片閃現過大 */
.mySwiper1:not(.swiper-initialized) .swiper-wrapper,
.mySwiper2:not(.swiper-initialized) .swiper-wrapper,
.mySwiper3:not(.swiper-initialized) .swiper-wrapper {
    visibility: hidden;
}

.mySwiper1 .swiper-slide {
    border: 3px solid #5061ff;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    height: auto;
}

.mySwiper2 .swiper-slide {
    border: 3px solid #9b7fe8;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    height: auto;
}

.mySwiper3 .swiper-slide {
    border-radius: 0px;
    overflow: hidden;
    border: none;
    height: auto;
}

.swiper-button-prev1,
.swiper-button-prev2,
.swiper-button-prev3,
.swiper-button-next1,
.swiper-button-next2,
.swiper-button-next3 {
  width: 48px;
  height: 48px;
  top: calc(50% - 20px) !important;
  margin-top: -24px;
  border-radius: 50%;
  background-color: rgba(30, 20, 80, 0.7);
  border: 2px solid #9b7fe8;
  box-shadow: 0 0 12px rgba(155, 127, 232, 0.6);
  background-image: none; 
}

.swiper-button-prev1,
.swiper-button-prev3 {
  border: 3px solid transparent;
  background-image: linear-gradient(#171721, #171721), linear-gradient(to right, #5061ff, #81b3ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.swiper-button-next1,
.swiper-button-next3 {
  border: 3px solid transparent;
  background-image: linear-gradient(#171721, #171721), linear-gradient(to right, #81b3ff, #5061ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.swiper-button-prev1::after,
.swiper-button-prev3::after {
  content: '';
  display: block;
  clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
  width: 16px;
  height: 20px;
  background: linear-gradient(to right, #5061ff, #81b3ff);
  transform: translateX(-2px);
}

.swiper-button-prev2::after {
  content: '';
  display: block;
  clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
  width: 16px;
  height: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #9b7fe8 100%);
  transform: translateX(-2px);
}

.swiper-button-next1::after,
.swiper-button-next3::after {
  content: '';
  display: block;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  width: 16px;
  height: 20px;
  background: linear-gradient(to right, #81b3ff, #5061ff);
  transform: translateX(2px);
}

.swiper-button-next2::after {
  content: '';
  display: block;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  width: 16px;
  height: 20px;
  background: linear-gradient(135deg, #9b7fe8 0%, #ffffff 100%);
  transform: translateX(2px);
}

.swiper-button-prev1,
.swiper-button-prev2,
.swiper-button-prev3 {
  left: -1%;
  transform: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-next1,
.swiper-button-next2,
.swiper-button-next3 {
  right: -1%;
  transform: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-prev1:hover,
.swiper-button-prev2:hover,
.swiper-button-prev3:hover,
.swiper-button-next1:hover,
.swiper-button-next2:hover,
.swiper-button-next3:hover {
  box-shadow: 0 0 20px rgba(155, 127, 232, 0.9);
  transform: scale(1.1);
}

.article-box .text {
    padding: 10px;
    text-align: justify;
    color: #242424;
    transition: 0.3s;
}

.article-img {
    width: 100%;
    position: relative;
    padding-top: calc(3 / 5 * 100%);
    overflow: hidden;
}

.article-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
}

.article-box:hover .text {
    color: #5061ff;
}

.article-box:hover .article-img img {
    transform: scale(1.1);
}

/* Review styles */
.review-box {
    position: relative;
    display: block; 
    width: 100%;
    height: 100%;
}

.review-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: 0.5s;
}

.review-box:hover img {
    transform: scale(1.1);
}

.review .text {
    opacity: 0;
    transition: 0.3s;
    color: white;
    letter-spacing: 0px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000008e;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.review-box:hover .text {
    opacity: 1;
}

.swiper-button-next:after,
.swiper-button-prev:after {
    content: '';
}

.swiper-pagination-bullet {
    background-color: #ffffff;
}

.swiper-pagination {
    display: none !important;
}

@media screen and (max-width:1300px) {
    .swiper-button-prev1,
    .swiper-button-prev2,
    .swiper-button-prev3 {
        left: 0;
    }

    .swiper-button-next1,
    .swiper-button-next2,
    .swiper-button-next3 {
        right: 0;
    }
}

@media screen and (max-width:754px) {
    .mySwiper1,
    .mySwiper2,
    .mySwiper3 {
        width: 70%;
    }

    .swiper-button-prev1,
    .swiper-button-prev2,
    .swiper-button-prev3,
    .swiper-button-next1,
    .swiper-button-next2,
    .swiper-button-next3 {
        width: 36px;
        height: 36px;
        margin-top: -18px;
    }

    .swiper-button-prev1::after,
    .swiper-button-prev2::after,
    .swiper-button-prev3::after,
    .swiper-button-next1::after,
    .swiper-button-next2::after,
    .swiper-button-next3::after {
        width: 12px;
        height: 16px;
    }

    .swiper-button-prev1,
    .swiper-button-prev2,
    .swiper-button-prev3 {
        left: -3%;
    }

    .swiper-button-next1,
    .swiper-button-next2,
    .swiper-button-next3 {
        right: -3%;
    }
}

@media screen and (max-width:540px) {
    .section7 {
        padding: 80px 0 50px;
    }

    .light3 {
        right: 8vw;
    }

    .article2, .article3 {
        margin-top: 100px;
    }

    .swiper-button-prev1,
    .swiper-button-prev2,
    .swiper-button-prev3 {
        left: -5%;
    }

    .swiper-button-next1,
    .swiper-button-next2,
    .swiper-button-next3 {
        right: -5%;
    }
}
</style>
