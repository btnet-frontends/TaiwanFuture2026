<template>
  <section class="section2 result">
    <h2 class="section-title">歷屆成果</h2>
    <div class="content">
      <div v-for="(item, index) in achievement" :key="index" class="circle-wrap" data-aos="zoom-out" :data-aos-delay="index * 100">
        <div class="glow"></div>
        <div class="circle">
          <div class="circle-word">
            <h3 class="subtitle">{{ item.title }}</h3>
            <hr class="circle-line">
            <p class="text" v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  achievement: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.section2 {
  background: transparent;
  padding-bottom: 150px;
  overflow: hidden;
}

.section-title {
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  width: fit-content;
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 auto 150px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  min-width: 40px;
  height: 3px;
  background: #5061ff;
}

.result > .content {
  margin: 0 auto;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-wrap {
  flex: 1;
  min-width: 0;
  aspect-ratio: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 -10px;
}

.glow {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(200, 80, 255, 1) 0%, rgba(50, 200, 160, 1) 100%);
  filter: blur(50px);
  opacity: 1;
  z-index: 0;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle-wrap:nth-child(2) .glow { background: linear-gradient(135deg, rgba(50, 255, 200, 1) 0%, rgba(50, 100, 255, 1) 100%); }
.circle-wrap:nth-child(3) .glow { background: linear-gradient(135deg, rgba(80, 180, 255, 1) 0%, rgba(120, 40, 255, 1) 100%); }
.circle-wrap:nth-child(4) .glow { background: linear-gradient(135deg, rgba(160, 80, 255, 1) 0%, rgba(40, 120, 255, 1) 100%); }
.circle-wrap:nth-child(5) .glow { background: linear-gradient(135deg, rgba(80, 120, 255, 1) 0%, rgba(160, 60, 255, 1) 100%); }

.circle {
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 50%;
  position: relative;
  width: 75%;
  aspect-ratio: 1;
  background: radial-gradient(circle at center, #13133d 55%, #0b0b25 100%);
  z-index: 1;
}

.circle-word {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.result > .content .subtitle {
  text-align: center;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
}

.circle-line {
  border: none;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.45);
  margin: 8px auto 10px;
  width: 50%;
}

.result > .content .text {
  text-align: center;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
}
@media screen and (max-width: 1360px) {
  .result > .content {
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  }

  .circle-wrap {
    flex: 0 0 50%;
    max-width: 50%;
    margin: 15px 0;
  }
}

@media screen and (max-width: 540px) {
  .result > .content {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .circle-wrap {
    flex: 0 0 auto;
    max-width: none;
    width: 75%;
    margin: 5% 0;
  }

  .result > .content .subtitle {
    font-size: 1.3rem;
  }

  .result > .content .text {
    font-size: 0.8rem;
  }
}
</style>