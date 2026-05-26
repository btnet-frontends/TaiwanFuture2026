<template>
  <section class="section3 issue">
    <!-- <img src="@/assets/images/wave-blue.svg" alt="wave-blue" class="wave-blue" loading="lazy">
    <img src="@/assets/images/wave-white.svg" alt="wave-white" class="wave-white" loading="lazy"> -->
    <h2 class="section-title">趨勢議題</h2>
    <div class="content">
      <div class="issue-card" v-for="(item, index) in issue" :key="index" :data-active="activeIndex === index" @click="toggleCard(index)" :data-aos-delay="index * 100" data-aos="fade-up">
        <div class="card-border"></div>

        <!-- 用於撐開高度的隱藏佔位層，確保卡片永遠夠高，不會被截斷且展開時不會跳動 -->
        <div class="card-content placeholder-content" aria-hidden="true">
          <h3 v-html="item.title" class="subtitle"></h3>
          <div class="issue-describe-placeholder">
            <p v-html="item.text"></p>
          </div>
        </div>

        <div class="card-content">
          <h3 v-html="item.title" class="subtitle"></h3>
          <div class="issue-describe">
            <p v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  issue: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(null)

const toggleCard = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.section3 {
  padding-bottom: 135px;
  background: transparent;
}

.wave-blue {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.wave-white {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
}

.issue > .content {
  width: 80vw;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.issue-card {
  position: relative;
  border-radius: 0;
  color: white;
  overflow: hidden;
  min-height: 420px;
  cursor: pointer;
  box-shadow: 0 0 20px 4px rgba(80, 150, 255, 0.5);
  transition: 0.8s;
}



.issue-card:nth-child(1) { background: url(@/assets/images/issue1.jpg) center center no-repeat; background-size: cover; }
.issue-card:nth-child(2) { background: url(@/assets/images/issue2.jpg) center center no-repeat; background-size: cover; }
.issue-card:nth-child(3) { background: url(@/assets/images/issue3.jpg) center center no-repeat; background-size: cover; }
.issue-card:nth-child(4) { background: url(@/assets/images/issue4.jpg) center center no-repeat; background-size: cover; }

.issue-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2, 10, 40, 0.75);
  z-index: 0;
  transition: 0.8s;
}

.card-border {
  position: absolute;
  inset: 0;
  border: 6px solid transparent;
  background: linear-gradient(180deg, rgba(80, 150, 255) 0%, rgba(50, 100, 200) 100%) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  z-index: 3;
  transition: 0.8s;
  pointer-events: none;
}





.card-content {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  box-shadow: inset 0 0 15px rgba(80, 150, 255, 0.2);
  transition: 0.8s;
}

.placeholder-content {
  position: relative !important;
  visibility: hidden;
  pointer-events: none;
  z-index: -1;
}

.issue-describe-placeholder {
  width: 100%;
  font-size: 15px;
  text-align: justify;
  margin-bottom: auto;
}
.issue-describe-placeholder p {
  margin: 0;
}



.issue-card .subtitle {
  width: 100%;
  text-align: center;
  padding: 0 0 24px 0;
  position: relative;
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.6;
  transition: 0.8s;
  margin-top: auto;
  flex-shrink: 0;
}

.issue-card .subtitle::after {
  content: '';
  position: absolute;
  bottom: 8px;
  width: 20%;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  background: #ffffff;
  transition: 0.8s;
}

.issue-describe {
  width: 100%;
  opacity: 0;
  font-size: 15px;
  transition: 0.8s;
  text-align: justify;
  max-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translateY(10px);
  margin-bottom: auto;
  min-height: 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.issue-describe::-webkit-scrollbar {
  display: none;
}

.issue-describe p {
  margin: 0;
}

@media screen and (min-width: 769px) {
  .issue-card:hover {
    box-shadow: 0 0 30px 8px rgba(140, 80, 255, 0.6);
  }
  .issue-card:hover .card-border {
    background: linear-gradient(90deg, rgba(200, 100, 255, 1) 0%, rgb(92, 193, 236) 100%) border-box;
  }
  .issue-card:hover .card-content {
    box-shadow: inset 0 0 30px 8px rgba(140, 80, 255, 0.2);
  }
  .issue-card:hover::before {
    background: rgba(2, 10, 40, 0.6);
  }
  .issue-card:hover .subtitle::after {
    width: calc(100% - 60px);
  }
  .issue-card:hover .issue-describe {
    opacity: 1;
    max-height: 600px;
    transform: translateY(0);
  }
}

@media screen and (max-width: 768px) {
  .issue > .content {
    grid-template-columns: 1fr;
    width: 90vw;
  }



  .issue-card[data-active="true"] {
    box-shadow: 0 0 30px 8px rgba(140, 80, 255, 0.6);
  }
  .issue-card[data-active="true"] .card-border {
    background: linear-gradient(90deg, rgba(200, 100, 255, 1) 0%, rgb(92, 193, 236) 100%) border-box;
  }
  .issue-card[data-active="true"] .card-content {
    box-shadow: inset 0 0 30px 8px rgba(140, 80, 255, 0.2);
  }
  .issue-card[data-active="true"]::before {
    background: rgba(2, 10, 40, 0.6);
  }
  .issue-card[data-active="true"] .subtitle::after {
    width: calc(100% - 60px);
  }
  .issue-card[data-active="true"] .issue-describe {
    opacity: 1;
    max-height: 1000px;
    transform: translateY(0);
  }
}

@media screen and (max-width: 540px) {
  .section3 {
    padding-bottom: 80px;
  }



  .issue-card .subtitle {
    font-size: 1.2rem;
  }
}
</style>