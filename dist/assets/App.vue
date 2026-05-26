<template>
  <div id="app">
    <!-- Preload -->
    <!-- <div class="preload" :class="{active: isPreload}">
      <div class="lds-circle" :class="{active: isPreload}">
        <div></div>
      </div>
    </div> -->

    <div class="navbar">
      <div class="logo">
        <a href="#" @click.prevent="scrollTo('home')">
          <img src="@/assets/images/logo.svg" alt="今周刊logo">
        </a>
      </div>
      <div class="nav-right">
        <ul class="menu" :class="{active: menuIsopen}">
        <li @click="scrollTo('home')">
          <p>首頁</p>
          <p>HOME</p>
        </li>
        <li @click="scrollTo('issue')">
          <p>趨勢議題</p>
          <p>KEY ISSUE</p>
        </li>
        <li @click="scrollTo('guest')">
          <p>貴賓/講者</p>
          <p>GUEST</p>
        </li>
        <li @click="scrollTo('agenda')">
          <p>活動議程</p>
          <p>AGENDA</p>
        </li>
        <li @click="scrollTo('information')">
          <p>活動資訊</p>
          <p>INFORMATION</p>
        </li>
        <li @click="scrollTo('article')">
          <p>前瞻觀點</p>
          <p>REPORT</p>
        </li>
        <li @click="scrollTo('review')">
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
      </div>
      <div class="menu-btn" @click="menuIsopen = !menuIsopen">
        <img v-if="menuIsopen" src="@/assets/images/cross-white.svg" alt="menu-btn">
        <img v-else src="@/assets/images/menu-btn.svg" alt="menu-btn">
      </div>
    </div>

    <!-- Fixed Buttons -->
    <div class="right-fixed-area" :class="{active: isScroll}">
      <!-- <div class="go-to-signup" @click="scrollTo('signup')">
        <img src="@/assets/images/sign-up.svg" alt="sign-up">
        <div>立即報名</div>
      </div> -->
      <a href="mailto:cc＠btnet.com.tw">
        <div class="contact-us">
          <img src="@/assets/images/contact.svg" alt="contact">
          聯絡我們
        </div>
      </a>
      <div class="go-to-top" @click="scrollTo('home')">
        <img src="@/assets/images/go-to-top.svg" alt="go-to-top">
      </div>
    </div>

    <!-- Global Fixed Background for iOS compatibility -->
    <div class="global-fixed-bg"></div>

    <!-- Components -->
    <div class="top-wrapper">
      <Kv @scrollTo="scrollTo" />
      <Achievement :achievement="achievement" />
      <Issue :issue="issue" />
      <div class="guest-overlap-spacer"></div>
    </div>

    <div class="guest-container">
      <Guest :speakers="speakers" @speaker-popup="openSpeakerModal" />
    </div>

    <div class="event-wrapper">
      <Agenda />
      <Information />
      <Article :articles="articles1" :reviews="reviews" />
    </div>
    <Partner :logos="logos" />
    <Footer />

    <!-- Popups -->
    <SpeakerModal 
      :isOpen="popupIsopen" 
      :speaker="current_speaker" 
      @close="closeSpeakerModal" 
    />

    <!-- Signup Success Popup (Commented out functional logic but markup exists) -->
    <div class="signup-popup" :class="{active: signup_popup}">
      <div class="popup-bg">
        <div class="news-popup-content">
          <div class="news-popup-close signup-close" @click="signup_popup = false">×</div>
          <h3 class="subtitle">感謝您報名參與2025 第八屆 <br class="ss-show">台灣大未來 國際高峰會！</h3>
          <p>
            主辦單位將保留最終審核權利，並且將於活動前1-2周發送一封確認信以及簡訊通知。<br>
            <br>
            如果有任何疑問，請電郵至<span><a href="mailto:cc＠btnet.com.tw">cc@btnet.com.tw</a></span>
          </p>
        </div>
      </div>
    </div>

    <!-- Prize Popup -->
    <div class="prize-popup popup" :class="{active: false}"> <!-- 暂时设为 false 或由变量控制 -->
      <div class="popup-bg">
        <div class="prize-popup-content">
          <div class="close-sec">
            <div class="popup-close prize-close">×</div>

            <h2>使用方式：</h2>
            <ul class="prize-notice text">
              <li>
                獲獎者須於<span class="red">2024/08/03 (日) 23:59</span>前提供使用者護照影本、姓名、聯絡電話。逾期繳交、未繳交皆視同放棄獎項。
              </li>
              <li>
                限以<span class="red">9/11-9/14</span>此梯次為主：去程 2024/09/11 (三)、回程 2024/09/14 (六)，共4天
              </li>
              <li>
                「挪威郵輪奮進號-海景雙人房」價值新台幣20,999；該獎項超過新台幣1,000元(含)，將依法申報得獎人所得；外籍人士不限中獎金額，一律代扣繳20%稅款。若未繳交，視同放棄獎項。
              </li>
              <li>
                【費用包含】
                <ul>
                  <li>含郵輪燃油費、靠港稅。</li>
                  <li>郵輪艙房住宿、免付費餐廳、各項免付費娛樂活動、免付費活動設施、免付費表演(郵輪設施及活動依登船後每日郵輪日報表列項目為準)。</li>
                  <li>旅遊責任險(郵輪航行期間)：15歲以上，未滿70歲：250萬責任險/20萬元意外醫療(實支實付)；未滿15歲及70歲以上：250萬責任險/10萬元意外醫療（實支實付）。若旅客想獲得更多保險的保障，可自行投保旅行平安保險或旅遊綜合保險。
                  </li>
                </ul>
              </li>
              <li>
                【費用不包含】
                <ul>
                  <li>不含郵輪付費餐廳、付費娛樂活動、付費設施及郵輪各項需旅客自費等項目。</li>
                  <li>不含郵輪付費餐廳、付費娛樂活動、付費設施及郵輪各項需旅客自費等項目。</li>
                  <li>不含郵輪艙房服務費 (USD／每人每晚) ，收費如下所示：
                    <ul>
                      <li>非套房客人服務費標準：USD$20 / 每人每晚 。</li>
                      <li>套房客人服務費標準： USD$25 / 每人每晚 。</li>
                      <li>未滿3歲兒童：不收取郵輪服務費。</li>
                      <li>郵輪艙房服務費依郵輪公司公告為準，費用將自旅客的船上消費帳戶計算並由郵輪公司於船上收取。</li>
                    </ul>
                  </li>
                  <li>不含日本徵收「國際觀光旅客稅」每人1,000元日幣（隨同郵輪艙房服務費一起支付）。</li>
                  <li>不含停靠點岸上觀光行程丶領隊服務費。</li>
                  <li>不含全省定點至基隆港接送。</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- News Popup -->
    <div class="news-popup">
      <div class="popup-bg">
        <div class="news-popup-content">
          <div class="news-popup-close">×</div>
          <h2>⎯ 最新消息 ⎯</h2>
        </div>
      </div>
    </div>

    <div class="bg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dataJson from './data/data.json'
import { getImageUrl } from './utils/image-util.js'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Components
import Kv from './components/Kv.vue'
import Achievement from './components/Achievement.vue'
import Issue from './components/Issue.vue'
import Guest from './components/Guest.vue'
import Agenda from './components/Agenda.vue'
import Information from './components/Information.vue'
import Article from './components/Article.vue'
import Partner from './components/Partner.vue'
import Footer from './components/Footer.vue'
import SpeakerModal from './components/SpeakerModal.vue'

// State
const menuIsopen = ref(false)
const isPreload = ref(false)
const isScroll = ref(false)
const popupIsopen = ref(false)
const signup_popup = ref(false)
const current_speaker = ref(null)

// Data Processing
const achievement = ref(dataJson.achievement)
const issue = ref(dataJson.issue)

// speakers
const speakers = ref(dataJson.speakers.map(group => ({
  ...group,
  data: group.data.map(s => ({
    ...s,
    img: getImageUrl(s.img)
  }))
})))

//  articles
const articles1 = ref(dataJson.articles1) 

// reviews
const reviews = ref(dataJson.reviews.map(r => ({
  ...r,
  img: getImageUrl(r.img)
})))

//logos
const logos = ref(dataJson.logos) 

// Methods
const scrollTo = (section) => {
  const target = document.querySelector(`.${section}`)
  if (target) {
    const headerOffset = window.innerWidth <= 1360 ? 120 : 150
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    
    let position = offsetPosition
    if (section === 'home') {
      position = 0
    }
    
    if (menuIsopen.value) {
      setTimeout(() => {
        window.scrollTo({ top: position, behavior: 'smooth' })
      }, 300)
    } else {
      window.scrollTo({ top: position, behavior: 'smooth' })
    }
    menuIsopen.value = false
  }
}

const openSpeakerModal = (speaker) => {
  current_speaker.value = speaker
  popupIsopen.value = true
}

const closeSpeakerModal = () => {
  popupIsopen.value = false
}

// Lifecycle
onMounted(() => {
  AOS.init({
    duration: 1000,
    offset: 120,
    mirror: true, 
    once: false
  })

  // Preload animation
  setTimeout(() => {
    isPreload.value = true
  }, 1000)

  // Scroll handler
  window.addEventListener('scroll', () => {
    const top = window.scrollY
    const kvHeight = document.querySelector('.kv')?.offsetHeight || 0
    isScroll.value = top >= (kvHeight / 2)
  })

  // Init Swipers — 等所有資源（含圖片）載入完畢後再初始化
  const initSwipers = () => {
    // Article Swiper
    const swiperConfig = {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        650: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
        1450: { slidesPerView: 4 }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    }

    new Swiper('.mySwiper1', {
      ...swiperConfig,
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1'
      },
      pagination: {
        el: '.swiper-pagination1',
        clickable: true
      }
    })

    new Swiper('.mySwiper2', {
      ...swiperConfig,
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
      },
      pagination: {
        el: '.swiper-pagination2',
        clickable: true
      }
    })

    // Review Swiper
    new Swiper('.mySwiper3', {
      modules: [Navigation, Autoplay],
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        650: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
        1450: { slidesPerView: 4 }
      },
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3'
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    })
  }

  // 若頁面已完全載入（例如 HMR 熱更新時），直接執行；否則等 load 事件
  if (document.readyState === 'complete') {
    initSwipers()
  } else {
    window.addEventListener('load', initSwipers, { once: true })
  }
})
</script>

<style>
@import './assets/css/main.css';
@import './assets/css/logo.css';
</style>

<style scoped>
/* nav-bar */
.navbar { 
  width: 95%; max-width: 1920px; height: 75px; padding: 10px 40px; position: fixed; z-index: 1000;
  display: flex; justify-content: space-between; align-items: center; 
  top: 15px; left: 0; right: 0; margin: 0 auto;
  background: transparent; border: none; transition: all 0.3s;
}
.nav-right {
  display: flex; align-items: center;
  background: linear-gradient(to right, rgba(255, 28, 193, 0.7), rgba(73, 0, 117, 0.4), rgba(28, 57, 255, 0.8));
  border: 1px solid #fff; border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); padding: 5px 20px;
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); 
}
.logo { display:flex; align-items:center; z-index: 2000; }
.logo a { background: #c1272d; border-radius: 50px; padding: 8px 25px; display: flex; align-items: center; justify-content: center; height: 50px; }
.logo img { height: 100%; transition: none; }
.logo a:hover { transform: none; }

.menu { margin-bottom: 0; }
.menu li { display: inline-block; padding: 8px 20px; margin: 0 5px; color: #ffffff; font-size: 1.1rem; cursor: pointer; position: relative; transition: all 0.3s; text-align: center; border-radius: 30px; }
.menu li p { transition: color 0.3s; margin: 0; }
.menu li p:first-child { font-weight: 800; letter-spacing: 1px; }
.menu li p:last-child { display: none; }
.menu li:hover { background: rgba(255, 255, 255, 0.9); transform: none; text-shadow: none; }
.menu li:hover p { color: #9412bc !important; }
.menu li:last-child { display: none; }

.social-media { height: 65%; display: flex; align-items: center; gap: 15px; padding-left: 10px; margin-left: 5px; }
.social-media img { height: 30px; width: 30px; cursor: pointer; transition: opacity 0.3s; margin-top: 4px; }
.social-media img:hover, .social-media-mb img:hover { opacity: 0.6; transform: none; }

.menu-btn { height: 65%; cursor: pointer; transition: 0.3s; display: none; z-index: 2000; }
.menu-btn img { height: 100%; }

/* right-fixed-area */
.right-fixed-area { position: fixed; right: 20px; bottom: 20%; display: flex; align-items: center; flex-direction: column; opacity: 0; transition: 0.5s; z-index: -1; }
.right-fixed-area.active { opacity: 1; z-index: 11; }
.go-to-signup, .contact-us { width: 50px; background-color: #6DB5EF; padding: 25px 10px; color: #fff; text-align: center; cursor: pointer; transition: 0.5s; box-shadow: 0 0 10px rgba(255, 255, 255, 0.48); border: 2px solid white; }
.go-to-signup { border-radius: 35px 35px 0 0; }
.contact-us {background: linear-gradient(
        to bottom,
        rgba(255, 28, 193, 0.7) 0%,
        rgba(73, 0, 117, 0.4) 50%,
        rgba(28, 57, 255, 0.8) 100%
    );
  border-radius: 35px; margin-top: -2px; }
.go-to-signup img, .contact-us img { width: 100%; transition: 0.5s; }
.go-to-top { width: 50px; height: 50px; margin-top: 3rem; cursor: pointer; border-radius: 50%; transition: 0.5s; box-shadow: 0 0 10px rgba(255, 255, 255, 0.48); }
.go-to-signup:hover img, .contact-us:hover img { animation: hoverAni 0.5s ease-in infinite alternate; }
.go-to-signup:hover, .contact-us:hover, .go-to-top:hover { transform: scale(1.05); box-shadow: 0 0 10px rgb(255, 255, 255); }
@keyframes hoverAni { 0% { transform: translateY(0px); } 100% { transform: translateY(-5px); } }

/* App.vue popups */
.news-popup { z-index: -1; position: fixed; }
.news-popup.active { z-index: 3000; }
.news-popup-content { background-color: #ffffff; max-width: 960px; width: 85vw; padding: 60px; position: relative; border-radius: 10px; }
.news-popup-close { position: absolute; font-size: 2rem; top: 10px; right: 15px; font-weight: 600; cursor: pointer; transition: 0.5s; }
.news-popup-close:hover { color: #2DA1FF; }

.prize-popup { z-index: -1; position: fixed; }
.prize-popup.active { z-index: 3000; }
.prize-popup-content { background-color: #fff; width: 85vw; max-width: 1080px; padding: 50px; border-radius: 10px; position: relative; max-height: 80%; overflow-x: hidden; overflow-y: auto; transform: translateY(20px); opacity: 0; transition: 0.5s; }
.active .prize-popup-content { transform: translateY(0); opacity: 1; }
.prize-notice { margin: 20px; font-size: 1.2rem; }
.prize-notice li { list-style-type: decimal; margin: 10px 0; text-align: justify; margin-left: 10px; }
.prize-notice ul { padding-left: 20px; }
.prize-notice ul li { list-style-type: square; }
.prize-notice ul li ul li { list-style-type: circle; }

.signup-popup { z-index: -1; position: fixed; }
.signup-popup.active { z-index: 3000; }
.signup-popup h3 { text-align: center; margin-bottom: 2rem; color: #1E5786; }

/* RWD */
@media screen and (max-width:1360px) {
    .navbar { height: 65px; top: 10px; width: 94%; padding: 10px 15px; border-radius: 40px; }
    .nav-right { background: transparent; border: none; box-shadow: none; backdrop-filter: none; padding: 0; }
    .menu { opacity: 0; display: none; }
    .social-media { display: none; }
    .menu-btn { display: flex; justify-content: center; align-items: center; width: 45px; height: 45px; background: linear-gradient(to right, rgba(255, 28, 193, 0.7), rgba(73, 0, 117, 0.4), rgba(28, 57, 255, 0.8)); border: 1px solid #fff; border-radius: 50%; z-index: 2001; }
    .menu-btn img { width: 25px; height: 25px; }
    .menu.active { display: flex; opacity: 1; left: 0; z-index: 1000; }
    .menu { position: fixed; top: 0; left: -100vw; width: 100vw; height: 100vh; background-color: rgba(20,20,20,0.98); flex-direction: column; justify-content: center; align-items: center; transition: 0.5s; overflow-y: auto; overflow-x: hidden; padding-top: 60px; box-sizing: border-box; margin: 0; }
    .menu li { display: block; width: 80%; padding: 15px 0; margin: 0; color: #ffffff; font-size: 1.1rem; position: relative; border-bottom: 1px solid #2DA1FF; border-radius: 0; box-sizing: border-box; text-align: center; }
    .menu li:last-child { display: flex; border-bottom: none; justify-content: center; align-items: center; gap: 10px; padding-top: 30px; margin-bottom: 20px; }
    .menu li:hover { background: transparent; }
    .menu li:hover p { color: #fff !important; }
    
    .social-media-mb { height: 50px; display: flex; justify-content: center; align-items: center; }
    .social-media-mb a { display: inline-block; width: 40px; height: 40px; margin: 0 10px; }
    .social-media-mb img { width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: 0.3s; }
}

@media screen and (max-width:540px) {
    .logo { width: 80px; }
    .right-fixed-area { bottom: 0%; right: 2px; z-index: 4; transform: scale(0.8); }
    .news-popup-content { padding: 60px 30px 30px; }
    .prize-popup-content { padding: 30px 15px; }
    .prize-notice ul { padding-left: 10px; }
}

/* Global Fixed Background (Replaces background-attachment: fixed for iOS compatibility) */
.global-fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/bg-grid.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  pointer-events: none;
}

/* Kv to Guest unified background */
.top-wrapper {
  position: relative;
  z-index: 1;
}

.guest-overlap-spacer {
  height: 440px;
}
.guest-container {
  margin-top: -440px;
  background: linear-gradient(180deg, transparent 440px, #ffffff 440px);
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 540px) {
  .guest-overlap-spacer { height: 320px; }
  .guest-container { 
    margin-top: -320px; 
    background: linear-gradient(180deg, transparent 320px, #ffffff 320px);
  }
}

/* agenda & information & article unified background */
.event-wrapper {
  position: relative;
  z-index: 1;
}

/* Ensure Partner section covers the global background */
:deep(.logos) {
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}
</style>
