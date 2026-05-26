<template>
  <section class="section4 guest">
    <h2 class="section-title white">貴賓 / 講者</h2>
    <div class="content">
      <div v-for="(item, idx) in speakers" :key="idx">
        <h3 class="subtitle" :class="{ white: idx === 0 }">- {{ item.title }} -</h3>
        <!-- <h3 v-if="item.title == '大師專講'" class="text" :class="{ white: idx === 0 }">順序依議程表排列</h3> -->
        <div class="speaker-area" :class="{'many': item.title == '大師專講' || item.title == '國內講師'}">
          <div class="speaker" v-for="x in item.data" :key="x.name">
            <div class="speaker-img">
              <img :src="x.img" :alt="x.name" loading="lazy">
            </div>
            <div class="speaker-name">{{ x.name }}</div>
            <div class="name-eng">{{ x.name_eng }}</div>
            <div class="speaker-title-wrap">
              <div class="speaker-title" v-html="x.title1"></div>
              <div class="speaker-title" :class="{little: x.name_eng != ''}" v-html="x.title2"></div>
            </div>
            <div class="btn more-btn" @click="$emit('speaker-popup', x)">More</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  speakers: {
    type: Array,
    required: true
  }
})

defineEmits(['speaker-popup'])
</script>

<style scoped>
.section4 {
    background: transparent;
    padding-top: 60px;
}
.guest .white {
    color: #fff !important;
    -webkit-text-fill-color: #fff !important;
}

.guest .section-title {
    margin-bottom: 80px;
}

.guest .subtitle {
    color: #1E1D61;
    text-align: center;
    font-size: 1.5rem;
}

.guest .text {
    color: #575757;
    text-align: center;
}

.guest .content {
    max-width: 1280px;
    margin: 0 auto;
}

.speaker-area {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    margin: 0 auto 100px;
}

.speaker-area.many {
    /* justify-content: start; */
    justify-content: center;

}

.speaker {
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 2rem 0rem 2rem;
    text-align: center;
    /* 讓每張卡高度一致，More 按鈕推到底部 */
}

.speaker-img {
    width: 16rem;
    height: 16rem;
    background-color: #ffffff;
    border-radius: 10%;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 1px 10px rgba(32, 32, 32, 0.2);
}

.speaker-img img {
    width: 100%;
    transform: scale(1.1);
}

.speaker-name {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000000;
}

.name-eng {
    font-size: 1.1rem;
    color: #242424;
    font-weight: 600;
}

.speaker-title-wrap {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
}

.speaker-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #666666;
}

.speaker-title.little {
    font-size: 1rem;
    font-weight: 600;
}

.more-btn {
    padding: 8px 30px;
    margin-top: 15px;
}
.more-btn {
    cursor: pointer;
    background-color: #efcb35;
    color: #666666;
    padding: 2px 26px;
    border-radius: 5px;
    transition: 0.5s;
    width: fit-content;
    font-size: 1rem;
    margin: 0 auto;
}
@media screen and (max-width:1540px) {
    .speaker-area.many {
        max-width: 960px;
    }

    .speaker-img {
        width: 14rem;
        height: 14rem;
    }

    .speaker {
        margin: 4rem 2rem 0rem 2rem;
    }
}

@media screen and (max-width:1300px) {
    .speaker-detail {
        width: 50%;
    }

    .top-img {
        width: 15rem;
        height: 15rem;
    }
}

@media screen and (max-width:1130px) {
    .speaker-area.many {
        max-width: 640px;
    }
}

@media screen and (max-width:860px) {
    .speaker-detail {
        width: 80%;
    }
}

@media screen and (max-width:754px) {
    .speaker {
        margin: 4rem 2rem 0rem 2rem;
    }
}

@media screen and (max-width:660px) {
    .speaker-area.many {
        max-width: 320px;
    }
}

@media screen and (max-width:540px) {
    .section4 {
        padding-top: 40px;
    }
    
    .speaker-area {
        flex-direction: column;
        align-items: center;
    }

    .speaker {
        margin: 2rem 2rem 2rem 2rem;
    }

    .speaker-img {
        width: 15rem;
        height: 15rem;
    }
    
    .speaker-detail {
        width: 100%;
    }
    .top-img {
        width: 10rem;
        height: 10rem;
        margin: 10px;
    }
    .national {
        font-size: 1.1rem;
    }
    .speaker-name {
        margin-top: 10px;
    }
    .name-eng,
    .speaker-title {
        font-size: 1rem;
    }
}
</style>
