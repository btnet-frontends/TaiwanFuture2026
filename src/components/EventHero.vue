<template>
  <div class="event-hero">
    <div class="event-hero-left">
      <h2 class="section-title">活動資訊</h2>
      <div class="event-hero-detail">
        <div class="detail-title-hero">
          <img src="@/assets/images/date-icon.svg" alt="date-icon">
          <span>活動日期:</span>
        </div>
        <p class="event-hero-text">2026/06/24(三) 09:00-16:20</p>
        <p class="event-hero-text">2026/06/25(四) 09:00-16:30</p>
        <br>
        <div class="detail-title-hero">
          <img src="@/assets/images/place-icon.svg" alt="place-icon">
          <span>活動地點:</span>
        </div>
        <p class="event-hero-text bold">香格里拉台北遠東國際大飯店三樓 - 遠東宴會廳</p>
        <p class="event-hero-text bold">(台北市敦化南路二段201號)</p>
      </div>
    </div>
    <div class="event-hero-map">
      <iframe frameborder="0" style="width:100%;height:100%;border-radius:12px;"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.23125549676!2d121.54969039999999!3d25.026224900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa32657c4a79%3A0xb4e0379c51f86e1b!2z5Y-w5YyX6YGg5p2x6aaZ5qC86YeM5ouJ!5e0!3m2!1szh-TW!2stw!4v1777528823102!5m2!1szh-TW!2stw">
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.event-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 60px 80px;
  color: #fff;
}

.event-hero-left {
  flex: 1;
  min-width: 0;
}

.detail-title-hero {
  color: #5061ff;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1.3rem;
  gap: 8px;
}

.detail-title-hero img {
  width: 26px;
  height: 26px;
}

.event-hero-text {
  color: #ffffff;
  font-size: 1.15rem;
  line-height: 1.8;
  margin-left: 34px;
}

.event-hero-text.bold {
  font-weight: 600;
  color: #fff;
}

.event-hero-map {
  width: 45%;
  flex-shrink: 0;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(120, 100, 255, 0.4);
}

@media screen and (max-width: 1200px) {
  .event-hero { padding: 50px; gap: 40px; }
}
@media screen and (max-width: 768px) {
  .event-hero { flex-direction: column; padding: 40px 30px; }
  .event-hero-map { width: 100%; }
}
@media screen and (max-width: 540px) {
  .event-hero { padding: 30px 20px; }
  .event-hero-title { font-size: 1.8rem; }
  .event-hero-text { font-size: 1.05rem; }
}
</style>
