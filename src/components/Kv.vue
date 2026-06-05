<template>
  <section class="section1 home">
    <div class="kv">
      <img class="kv-earth" src="@/assets/images/kv-Earth.png" alt="kv-Earth">

      <div class="kv-content">
        <img class="taiwanfuture-logo" src="@/assets/images/taiwanfuture-logo.png" alt="2026大未來論談-logo">
        <img class="kv-title" src="@/assets/images/main-title-1.svg" alt="2026大未來論壇-主標">
        <img class="kv-slogan" src="@/assets/images/main-title-2.svg" alt="2026大未來論壇-副標">
        <img class="logo-30th" src="@/assets/images/30th-logo.svg" alt="2026大未來論壇-30週年logo">
      </div>

      <div class="scroll-container">
        <img src="@/assets/images/scrollicon.png" alt="scroll down">
      </div>
    </div>


    <div class="foreword-wrapper">
      <div class="foreword-new" data-aos="fade-up">
        <h3 class="foreword-new-title">在斷裂的全球秩序中<span class="mobile-break"> </span>奪回戰略主動權</h3>
        <p class="foreword-new-subtitle">2026 年，世界正處於一個結構性斷點。</p>
        <p class="foreword-new-text">
          隨著伊朗衝突引發的中東局勢震盪，全球能源供應體系面臨高度威脅，油價的波動已不再僅是經濟指標，<br>而是直接左右全球通膨與金融命脈的政治籌碼。與此同時，川普強硬的關稅政策與供應鏈重組壓力，<br>正迫使企業從「效率優先」轉向「安全優先」，徹底改寫了國際貿易的底層邏輯。在避險資產如金價頻創新高、<br>利率循環懸而未決的焦慮時刻，我們面臨的已不只是短期波動，而是系統性的權力轉移。
          
          <br><br>適逢《今周刊》創刊 30 週年，本屆「台灣大未來國際高峰會」不只是為了傳遞資訊，<br>更是為了在失序的亂流中，協助台灣產業重拾防禦性與進攻性並進的戰略視野。
        </p>
      </div>
    </div>

    <!-- <div class="latest-news">
      <h3 class="subtitle">最新消息</h3>
      <div class="content">
        <p class="text">
          2026 第九屆【台灣大未來 國際高峰會】問卷回饋得獎名單出爐！<br><br class="ss-show">
          主辦單位將陸續與得獎者聯繫領獎事宜，敬請留意E-mail收信。
        </p>
        <div class="btn go-list-btn" @click="$emit('scrollTo', 'award-list')">得獎名單</div>
      </div>
    </div> -->

    <div class="video">
      <!-- <div class="live-btns">
        <a href="YOUR_LINK_1" target="_blank" class="live-btn live-btn-1">
          <span class="live-label">線上直播</span>
          <span class="live-arrow">▶</span>
          <span class="live-day">第一日 6/24(三)</span>
          <span class="live-go">GO</span>
        </a>
        <a href="YOUR_LINK_2" target="_blank" class="live-btn live-btn-2">
          <span class="live-label">線上直播</span>
          <span class="live-arrow">▶</span>
          <span class="live-day">第二日 6/25(四)</span>
          <span class="live-go">GO</span>
        </a>
      </div> -->

      <!-- <div class="day1">
        <img class="dot1" src="@/assets/images/dot.png" alt="dot1" loading="lazy">
        <h2 class="title"><span class="subtitle">第一日</span> 6/24(三)</h2>
        <div class="video-iframe">
          <iframe src="https://www.youtube.com/embed/b9I9Il7AkS4?si=mqaqDLBFBnI1ZVUx"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div class="day2">
        <img class="dot2" src="@/assets/images/dot.png" alt="dot2" loading="lazy">
        <h2 class="title"><span class="subtitle">第二日</span> 6/25(四)</h2>
        <div class="video-iframe">
          <iframe src="https://www.youtube.com/embed/b9I9Il7AkS4?si=mqaqDLBFBnI1ZVUx"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
defineEmits(['scrollTo'])
</script>

<style scoped>
.section1 {
  background: transparent;
  position: relative;
  padding: 0 0 70px;
}
.kv {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 650px;
  background: url('@/assets/images/kv-bg.webp') center/cover no-repeat;
  overflow: hidden;
}

.kv::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: linear-gradient(180deg, transparent 0%, #171721 100%);
  pointer-events: none;
  z-index: 5;
}

.kv-earth {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -40%);
  height: 110vh;
  z-index: 1;
  animation: opacityAni 1s forwards;
  pointer-events: none;
}

.kv-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
}

.taiwanfuture-logo {
  width: 16vw;
  animation: opacityAni 1s forwards 0.3s;
  opacity: 0;
  margin-bottom: 1.5vw;
}

.kv-title {
  width: 45vw;
  animation: slideUp 1s forwards 0.3s, shine 12s infinite 1s;
  opacity: 0;
  margin-bottom: 1.2vw;
}

.kv-slogan {
  width: 26vw;
  animation: slideUp 1s forwards 0.7s;
  opacity: 0;
  margin-bottom: 1.2vw;
}

.logo-30th {
  width: 16vw;
  animation: slideUp 1s forwards 0.9s;
  opacity: 0;
}

.wave1 {
  mix-blend-mode: lighten;
  width: 100vw;
  position: absolute;
  top: 0vw;
  left: 0;
  opacity: 0;
  animation: opacityAni 1s forwards 0.8s, wave 11s ease-in-out infinite alternate;
}

.wave2 {
  mix-blend-mode: lighten;
  width: 95vw;
  position: absolute;
  bottom: -17vw;
  left: 0vw;
  opacity: 0;
  animation: opacityAni 1s forwards 1s, wave 10s ease-in-out infinite alternate;
}

.wave3 {
  mix-blend-mode: lighten;
  width: 85vw;
  position: absolute;
  bottom: -11vw;
  right: -25vw;
  opacity: 0;
  animation: opacityAni 1s forwards 1s, wave 8.5s ease-in-out infinite alternate;
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes shine {
  0%   { filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0)); }
  25%  { filter: drop-shadow(0 0 5px #2da0ff80) drop-shadow(0 0 10px #2da0ff80); }
  50%  { filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0)); }
  75%  { filter: drop-shadow(0 0 5px #ff41b380) drop-shadow(0 0 12px #ff41b380); }
  100% { filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0)); }
}

@keyframes opacityAni {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes wave {
  0%   { transform: skewX(0deg); }
  50%  { transform: skewX(20deg); }
  100% { transform: skewX(0deg); }
}

.scroll-container {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: bounce 2s infinite alternate;
}

.scroll-container img {
  width: 45px;
}

@keyframes bounce {
  0%   { transform: translateY(0) translateX(-50%); }
  100% { transform: translateY(-15px) translateX(-50%); }
}

.foreword-wrapper {
  width: 100%;
  position: relative;
  margin-top: 0;
  padding-top: 60px;
  z-index: 2;
}

.foreword-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/assets/images/bg-foreword.png') top center/cover no-repeat;
  z-index: -1;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 250px), rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 50px), rgba(0,0,0,0) 100%);
  pointer-events: none;
}

.foreword-new {
  position: relative;
  color: #fff;
  margin: 0 auto;
  padding: 150px 80px 200px;
  max-width: 1200px;
  width: 90vw;
}

.foreword-new-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 auto 30px;
  position: relative;
  width: fit-content;
  letter-spacing: 0.1rem;
}

.foreword-new-title::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #5061ff;
}

.foreword-new-subtitle {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 50px auto 30px;
  letter-spacing: 0.1rem;
}

.foreword-new-text {
  line-height: 2.2rem;
  letter-spacing: 0.15rem;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
}

.foreword {
  position: relative;
  color: #fff;
  transition: 0.5s;
  background: linear-gradient(0deg, rgba(105, 81, 131, 0.9) 0%, rgba(30, 29, 97, 0.9) 100%);
  margin: 0 auto;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.4);
  padding: 40px 60px 55px;
  max-width: 1200px;
  border-radius: 30px;
  width: 90vw;
}

.foreword::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 3px;
  background: linear-gradient(75deg, #2DA1FF, #FF41B3);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  border-radius: 30px;
  pointer-events: none;
  z-index: -1;
}

.foreword .subtitle {
  margin: 0 auto 30px;
  position: relative;
  width: fit-content;
  text-align: center;
}

.foreword .subtitle::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 4px;
  border-radius: 50%;
  mix-blend-mode: color-dodge;
  background: radial-gradient(white 0%, black 100%);
}

.foreword .text {
  line-height: 2.25rem;
  letter-spacing: 0.2rem;
}

.latest-news {
  width: 90vw;
  position: relative;
  text-align: center;
  max-width: 900px;
  margin: 80px auto;
  padding: 30px;
  border: 1px solid #fff;
  background: linear-gradient(to right, #5061ff 0%, #033175 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.4);
}

.latest-news .text {
  text-align: center;
}

.latest-news .subtitle {
  position: relative;
  width: fit-content;
  margin: 0 auto 30px;
}

.latest-news .subtitle::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 3px;
  border-radius: 0;
  mix-blend-mode: normal;
  background: rgba(255, 255, 255, 0.8);
}

.go-list-btn {
  background-color: #1a1a1a;
  margin: 40px auto 0;
  border-radius: 50px;
  padding: 6px 60px;
  width: fit-content;
  cursor: pointer;
  transition: 0.5s;
  border: 3px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.go-list-btn:hover {
  filter: hue-rotate(0deg);
  background-color: #333;
}

.live-btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
}

.live-btn-1 {
  margin-right: 180px;
}

.live-btn-2 {
  margin-left: 180px;
}

.live-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 50px;
  padding: 10px 35px;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  transition: 0.3s ease;
  min-width: 340px;
  border: 5px solid transparent;
  background-image:
    linear-gradient(rgba(3, 2, 16, 0.85), rgba(3, 2, 16, 0.85)),
    linear-gradient(to right, #81b3ff 0%, #5061ff 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 0 15px rgba(31, 76, 253, 0.6), inset 0 0 15px rgba(100, 80, 255, 0.1);
}

.live-btn:hover {
  box-shadow: 0 0 25px rgba(100, 80, 255, 0.9), inset 0 0 20px rgba(100, 80, 255, 0.2);
  border-color: rgba(160, 140, 255, 1);
}

.live-label {
  font-weight: 700;
  color: #fff;
}

.live-arrow {
  color: #fff;
  font-size: 0.9rem;
}

.live-day {
  flex: 1;
  color: #5061ff;
  margin-right: 40px;
}

.live-go {
  background: linear-gradient(135deg, #a399ff, #160eff);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 0 10px rgba(100, 80, 255, 0.6);
  flex-shrink: 0;
}

.video {
  text-align: center;
  width: 90vw;
  max-width: 900px;
  margin: 100px auto 0;
}

.video > div {
  position: relative;
}

.dot1 {
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  right: -33%;
  width: 50vw;
  max-width: 669px;
  opacity: 0.6;
}

.dot2 {
  position: absolute;
  top: 55%;
  transform: translateY(-50%) scale(-1);
  left: -33%;
  width: 50vw;
  max-width: 550px;
  opacity: 0.6;
}

.video .title {
  color: #ffffff;
  margin: 80px auto 30px;
}

.video .day1 .subtitle {
  color: #FF41B3;
}

.video .day2 .subtitle {
  color: #2DA1FF;
}

.video-iframe {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px #FF41B3;
  border: 3px solid #FFAEDF;
}

.video .day2 .video-iframe {
  box-shadow: 0px 0px 10px #2DA1FF;
  border: 3px solid #AED4FF;
}

.video-iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

@supports not (aspect-ratio: 1) {
  .video-iframe {
    height: 0;
    padding-top: 56.25%;
  }
}


@media screen and (max-width: 1024px) {
  .kv-title { width: 60vw; margin-bottom: 2.5vw; }
  .kv-slogan { width: 40vw; margin-bottom: 2.5vw; }
  .taiwanfuture-logo { width: 26vw; margin-bottom: 3.5vw; }
  .logo-30th { width: 26vw; margin-bottom: 10vw; }
  .foreword { padding: 50px; }
  .kv-earth {
    height: auto;
    width: 150vw;
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 75%) rotate(-45deg);
  }
}

@media screen and (max-width: 768px) {
  .mobile-break { display: block; height: 0; }
  .kv-title { width: 72vw; margin-bottom: 3vw; }
  .kv-slogan { width: 55vw; margin-bottom: 3vw; }
  .taiwanfuture-logo { width: 34vw; margin-bottom: 5vw; }
  .logo-30th { width: 34vw; margin-bottom: 15vw; }
  .foreword { padding: 40px 35px; }
  .foreword-new { padding: 40px 40px 150px; }
  .foreword-new-title { font-size: 1.8rem; }
  .foreword-new-subtitle { font-size: 1.2rem; }
  .foreword-new-text { font-size: 0.95rem; line-height: 2rem; }
  .live-btn { min-width: 280px; }
  .live-btn-1 { margin-right: 80px; }
  .live-btn-2 { margin-left: 80px; }
}

@media screen and (max-width: 480px) {
  .section1 { padding: 0 0 50px; }
  .kv {
    height: 100vh;
    min-height: 600px;
    background: url('@/assets/images/kv-bg-m.png') center/cover no-repeat;
  }
  .kv-earth {
    height: auto;
    width: 200vw;
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 65%) rotate(-45deg);
  }
  .kv-title { width: 85vw; margin-bottom: 4vw; }
  .kv-slogan { width: 70vw; margin-bottom: 4vw; }
  .taiwanfuture-logo { width: 40vw; margin-bottom: 6vw; }
  .logo-30th { width: 45vw; margin-bottom: 20vw; }
  .foreword { padding: 30px; }
  .foreword .text { letter-spacing: 0.15rem; line-height: 1.5rem; }
  .go-list-btn { margin: 20px auto 0; }
  .foreword-new { padding: 30px 30px 100px; }
  .foreword-new-title { font-size: 1.4rem; }
  .foreword-new-text { font-size: 0.9rem; line-height: 1.8rem; letter-spacing: 0.1rem; }
  .live-btn { min-width: unset; width: 100%; font-size: 0.95rem; padding: 12px 16px 12px 20px; }
  .live-btn-1, .live-btn-2 { margin-left: 0; margin-right: 0; }
  .scroll-container { display: none; }
}
</style>