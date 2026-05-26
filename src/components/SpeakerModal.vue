<template>
  <div class="speaker-popup popup" :class="{active: isOpen}" v-if="speaker">
    <div class="popup-bg">
      <div class="popup-content">
        <div class="close-sec">
          <div class="popup-close" @click="$emit('close')">×</div>
        </div>
        <div class="popup-top">
          <div class="top-img">
            <img :src="speaker.img" :alt="speaker.name">
          </div>
          <div class="speaker-detail">
            <h2 class="national">{{ speaker.national }}</h2>
            <div class="speaker-name">{{ speaker.name }}</div>
            <div class="name-eng">{{ speaker.name_eng }}</div>
            <div class="speaker-title">
              <span v-if="!speaker.title1_2">{{ speaker.title1 }}</span>
              <span v-else>{{ speaker.title1_2 }}</span>
              <span>{{ speaker.title2 }}</span>
            </div>
            <div v-if="speaker.intro">
              <div v-for="(x, idx) in speaker.intro" :key="idx">
                <br>
                <div class="intro" v-html="x"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  speaker: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script>

<style scoped>
.speaker-popup {
    z-index: -1;
    position: fixed;
}

.speaker-popup.active {
    z-index: 3000;
}

.popup-bg {
    width: 100vw;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
}

.speaker-popup .popup-content {
    background-color: #fff;
    width: 85vw;
    max-width: 1080px;
    padding: 50px;
    border-radius: 10px;
    position: relative;
    max-height: 80%;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    transition: 0.3s;
    transform: translateY(10px);
}

.speaker-popup.active .popup-content {
    opacity: 1;
    transform: translateY(0);
}

.close-sec {
    position: sticky;
    top: 0px;
    z-index: 2;
}

.popup-close {
    font-size: 2rem;
    position: absolute;
    right: -42px;
    top: -42px;
    cursor: pointer;
    font-weight: 600;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
    letter-spacing: 0;
}

.popup-close:hover {
    color: #5061ff;
}

.popup-top {
    display: flex;
}

.top-img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin: 30px;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 1px 10px rgba(32, 32, 32, 0.2);
}

.top-img img {
    width: 100%;
    transform: scale(1.1);
}

.national {
    font-size: 1.3rem;
    color: #1E1D61;
}

.speaker-detail {
    width: 70%;
}

.career,
.academic,
.intro {
    text-align: justify;
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

@media screen and (max-width:860px) {
    .popup-top {
        flex-direction: column;
        align-items: center;
    }

    .speaker-detail {
        width: 80%;
    }
}

@media screen and (max-width:540px) {
    .speaker-popup .popup-content {
        padding: 20px;
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

    .speaker-detail {
        width: 100%;
    }

    .popup-close {
        right: 0px;
        top: 0px;
    }
}
</style>
