<template>
  <section class="section6 information">

    
    <EventHero />

    <div class="award-header">
      <h2 class="section-title white" v-if="showForm">即刻報名！出席享好禮 <br>填寫問卷再抽大獎</h2>
      <h2 class="section-title white" v-else>報名已額滿，感謝踴躍參加！</h2>
    </div>
    <div class="content">
      <div class="award">
        <div class="award-detail">
          <div class="award-qualification">
            <div class="award-plan-title">
              <!-- <img src="@/assets/images/place-icon.svg" alt="place" class="place-icon" /> -->
              <p class="award-plan">【出席好禮】</p>
            </div>
            <p class="award-plan-desc">出席「台灣大未來」國際高峰會論壇，並參與至各場次議程結束，即可獲得咖啡禮券乙張<br>全日參與者再加贈蜂蜜禮乙份。</p>
          </div>
                    <div class="award-qualification">
            <div class="award-plan-title">
              <!-- <img src="@/assets/images/place-icon.svg" alt="place" class="place-icon" /> -->
              <p class="award-plan">【抽獎資格】</p>
            </div>
            <p class="award-plan-desc">出席「台灣大未來」國際高峰會論壇，並於各場次議程結束後填寫現場提供之問卷者，即可獲得抽獎資格。</p>
          </div>
          <div class="award-pic">
            <p class="notice-title">注意事項：</p>
            <ul class="award-notice">
              <li>活動結束後，主辦單位以電腦抽獎系統採隨機方式抽出，於2026/7/1(三)公布於本活動網站。同時以email通知中獎者並提供領獎資訊，未中獎者不另行通知。若因E-mail錯誤或擋信等非主辦單位可控因素未收到通知，主辦單位恕不負責，請參加者仍須主動上網查詢，以保障自身權益。</li>
              <li>中獎者收到【中獎通知單】後，請務必完整填寫通知單上所列的相關資料，並附上身分證正反面影本，於2026/7/17(五)前，一律以〈掛號郵寄〉〈期限日期以郵戳為憑〉至104408台北市南京東路一段96號8樓「2026台灣大未來專案團隊收」。若超過期限或資料填寫不完整者，將視同放棄且喪失得獎資格，主辦單位不另行通知。</li>
              <li>主辦單位將於2026/7/31(五)前寄出全部得獎獎品。</li>
              <li>每人限一次得獎，若該獎項超過新台幣1,000元(含)以上者，將依法申報得獎人所得；外籍人士不限中獎金額，一律代扣繳20%稅款。若未繳交，視同放棄獎項。</li>
              <li>本活動獎項寄送地點僅限台灣本島，不含澎湖、金門、馬祖等外島。</li>
              <li>主辦單位《今周刊》保有取消、終止、修改或暫停本活動相關內容之權利，如有未盡事宜，悉依本公司相關規定或解釋辦理，並得隨時補充公告於活動官網。</li>
            </ul>
            <p class="award-plan text">【峰會抽獎好禮】</p>
            <div class="prize-grid">
              <div class="prize">
                <img src="@/assets/images/prize_1.png" alt="" class="prize-pic">
                <p class="prize-title">奇美50型4K<br>Google TV液晶顯元器</p>
                <p>(TL-50G200)</p>
                <p>共1名</p>
              </div>
              <div class="prize">
                <img src="@/assets/images/prize_2.png" alt="" class="prize-pic">
                <p class="prize-title">奇美12升高效能除濕機</p>
                <p>(RH-12F5UM)</p>
                <p>共1名</p>
              </div>
              <div class="prize">
                <img src="@/assets/images/prize_3.png" alt="" class="prize-pic">
                <p class="prize-title">奇美360度智能全淨化<br>空氣清淨機</p>
                <p>(AP-15SRH1)</p>
                <p>共1名</p>
              </div>
              <div class="prize">
                <img src="@/assets/images/prize_4.png" alt="" class="prize-pic">
                <p class="prize-title">奇美10L氣炸烤箱</p>
                <p>(EV-10S0FM)</p>
                <p>共1名</p>
              </div>
              <div class="prize">
                <img src="@/assets/images/prize_5.png" alt="" class="prize-pic">
                <p class="prize-title">奇美咖啡果汁雙享機</p>
                <p>(CG-028A20)</p>
                <p>共1名</p>
              </div>
              <div class="prize">
                <img src="@/assets/images/prize_6.png" alt="" class="prize-pic">
                <p class="prize-title">Knirps德國紅點商務<br>三用電腦包</p>
                <p>共1名</p>
              </div>
              <div class="prize">
                <img src="@/assets/images/prize_7.png" alt="" class="prize-pic">
                <p class="prize-title">奇美健康隨行杯果汁機</p>
                <p>(MX-0600T1)</p>
                <p>共1名</p>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="award-list">
          <h2 class="section-title">得獎名單</h2>
          <div class="award-list-content">
            <div class="award-list-item">
              <div class="award-list-title">
                <p>奇美65型4K <br class="ss-show">Google TV液晶顯元器</p>
                <p>共1名</p>
              </div>
              <div class="name-list">
                <p>洪O雅&nbsp;&nbsp;0909910***</p>
              </div>
            </div>
            <div class="award-list-item">
              <div class="award-list-title">
                <p>奇美50型4K <br class="ss-show">Google TV液晶顯元器</p>
                <p>共1名</p>
              </div>
              <div class="name-list">
                <p>吳O玲&nbsp;&nbsp;0920171***</p>
              </div>
            </div>
            <div class="award-list-item">
              <div class="award-list-title">
                <p>奇美QLED安卓大4K</p>
                <p>共1名</p>
              </div>
              <div class="name-list">
                <p>Alice Yang&nbsp;&nbsp;0952812***</p>
              </div>
            </div>
            <div class="award-list-item">
              <div class="award-list-title">
                <p>奇美12升高效能除濕機</p>
                <p>共1名</p>
              </div>
              <div class="name-list">
                <p>陳O鳳&nbsp;&nbsp;0928832***</p>
              </div>
            </div>
            <div class="award-list-item">
              <div class="award-list-title">
                <p>奇美冷熱破壁調理機</p>
                <p>共1名</p>
              </div>
              <div class="name-list">
                <p>梁O豪&nbsp;&nbsp;0922967***</p>
              </div>
            </div>
            <div class="award-list-item">
              <div class="award-list-title">
                <p>奇美25L微電腦微波爐</p>
                <p>共1名</p>
              </div>
              <div class="name-list">
                <p>胡蔡O蓮&nbsp;&nbsp;0918767***</p>
              </div>
            </div>
            <div class="award-list-item">
              <div class="award-list-title">
                <p>奇美仿手沖咖啡機</p>
                <p>共1名</p>
              </div>
              <div class="name-list">
                <p>楊O安&nbsp;&nbsp;0966682***</p>
              </div>
            </div>
          </div>
        </div> -->

        <div class="signup" v-if="showForm">
          <h2 class="section-title signup-title">報名參加</h2>
          <form action="">
            <div class="signup-top">
              <div class="signup-input">
                <label class="input-title"><span class="red">*</span>姓名</label>
                <input type="text" placeholder="請填寫真實姓名" v-model="formData.Name">
              </div>
              <div class="signup-input">
                <label class="input-title"><span class="red">*</span>性別</label>
                <img class="select-arrow" src="@/assets/images/arrow-down.svg" alt="arrow-down">
                <select class="input-option" :class="{ 'placeholder-text': formData.Gender === '' }" v-model="formData.Gender">
                  <option value="">請選擇您的性別</option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </div>
                            <div class="signup-input">
                <label class="input-title"><span class="red">*</span>年齡</label>
                <img class="select-arrow" src="@/assets/images/arrow-down.svg" alt="arrow-down">
                <select class="input-option" :class="{ 'placeholder-text': formData.Age === '' }" v-model="formData.Age">
                  <option value="">請選擇您的年齡層</option>
                  <option value="35歲以下">35歲以下</option>
                  <option value="36-45歲">36-45歲</option>
                  <option value="46-55歲">46-55歲</option>
                  <option value="56-65歲">56-65歲</option>
                  <option value="65歲以上">65歲以上</option>
                </select>
              </div>
              <div class="signup-input">
                <label class="input-title"><span class="red">*</span>手機</label>
                <input type="tel" class="input-option" placeholder="請填寫手機號碼 每支號碼限報名一次" v-model="formData.Cell_phone">
              </div>
              <div class="signup-input">
                <label class="input-title"><span class="red">*</span>電子郵件</label>
                <input type="email" class="input-option" placeholder="請填寫Email" v-model="formData.Email">
              </div>
              <div class="signup-input">
                <label class="input-title"><span class="red">*</span>產業別</label>
                <img class="select-arrow" src="@/assets/images/arrow-down.svg" alt="arrow-down">
                <select class="input-option" :class="{ 'placeholder-text': formData.Industry_type === '' }" v-model="formData.Industry_type">
                  <option value="">請選擇您工作的產業別</option>
                  <option value="金融及保險業">金融及保險業</option>
                  <option value="製造業">製造業</option>
                  <option value="電力及燃氣供應業">電力及燃氣供應業</option>
                  <option value="營造業">營造業</option>
                  <option value="批發及零售業">批發及零售業</option>
                  <option value="運輸及倉儲業">運輸及倉儲業</option>
                  <option value="資訊及通訊傳播業">資訊及通訊傳播業</option>
                  <option value="醫療保健及社會工作服務業">醫療保健及社會工作服務業</option>
                  <option value="教育服務業">教育服務業</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div class="signup-input">
                <label class="input-title"><span class="red">*</span>公司/單位</label>
                <input type="text" class="input-option" placeholder="請填寫公司/單位" v-model="formData.Company_name">
              </div>
              <div class="signup-input">
                <label class="input-title"><span class="red">*</span>職稱</label>
                <input type="text" class="input-option" placeholder="請填寫職稱" v-model="formData.Job_title">
              </div>

            </div>
            <div class="signup-bottom">
              <div class="signup-input">
                <legend class="input-title"><span class="red">*</span>報名場次<span class="red">(可複選)</span></legend>
                <div class="agenda-select">
                  <div>
                    <input type="checkbox" id="day1-morning" name="Session1" value="v" v-model="formData.Session1" />
                    <label for="day1-morning">第一日(6/24) : 上午場(全球變局與經濟新秩序)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="day1-afternoon" name="Session2" value="v" v-model="formData.Session2" />
                    <label for="day1-afternoon">第一日(6/24) : 下午場(大轉型與新商機、文旅創新與全球競爭)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="day2-morning" name="Session3" value="v" v-model="formData.Session3" />
                    <label for="day2-morning">第二日(6/25) : 上午場(科技新賽局、社會安全與關鍵防護)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="day2-afternoon" name="Session4" value="v" v-model="formData.Session4" />
                    <label for="day2-afternoon">第二日(6/25) : 下午場(全民健康與智慧醫療、城市治理新藍圖、台灣產業發展與世界局勢)</label>
                  </div>
                </div>
              </div>
              <div class="agree-pact">
                <p>謹依個人資料保護法第 8 條規定告知以下事項： <br><br>
                  您為本次活動的參與者（以下簡稱參與人）。參與人所填寫的資料將會提供予今周刊。請確認所有參與人在勾選同意前已詳閱並同意以下條款：<br>
                  今周刊基於客戶管理、統計及調查分析、行銷及其他合於營業登記項目或章程所定業務需要或其他法令所准許之特定目的， 向參與人蒐集前述個人資料，並管理維護及處理利用，其得就該等個人資料用於寄送出版物、提供各項服務或活動訊息與調查分析使用。 參與人得向今周刊請求查閱、提供複本、更正或補充個人資訊，及請求刪除或停止處理利用。 若參與人填寫資料不完整時，可能會影響參與人獲得今周刊所提供之服務或各項訊息通知與活動之權益。
                </p>
                <div class="agree">
                  <input type="checkbox" id="check" name="Is_agree" value="check" v-model="formData.Is_agree" />
                  <label for="check" class="input-title">我已詳閱並同意個資告知事項</label>
                </div>
              </div>
              <!-- <div class="notice">
                <div class="input-title">注意事項</div>
                <ul class="signup-notice red">
                  <li>本峰會活動為免費參加，報名完成後主辦單位將進行審核，審核通過者將會於活動前一週取得簡訊序號，活動舉辦日憑簡訊序號報到入場。</li>
                  <li>主辦單位保留變更日期、終止活動及受理報名之權利。</li>
                </ul>
              </div> -->
            </div>
<div class="btn sign-btn" @click="signup()" :class="{ 'submitting': isSubmitting }">
  送 出 報 名
  <span class="sign-btn-arrow"></span>
</div>
            </form>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import EventHero from './EventHero.vue'

defineProps({
  showForm: {
    type: Boolean,
    default: true
  }
})

const isSubmitting = ref(false)

const formData = ref({
  Name: "",
  Gender: "",
  Cell_phone: "",
  Email: "",
  Industry_type: "",
  Company_name: "",
  Job_title: "",
  Age: "",
  Session1: "",
  Session2: "",
  Session3: "",
  Session4: "",
  Is_agree: ""
})

const signup = async () => {
  if (isSubmitting.value) return;
  if (!formData.value.Is_agree) {
    alert("請詳閱並同意個資告知事項");
    return;
  }

  const requiredFields = [
    { key: "Name", label: "姓名" },
    { key: "Gender", label: "性別" },
    { key: "Age", label: "年齡" },
    { key: "Cell_phone", label: "手機" },
    { key: "Email", label: "E-mail" },
    { key: "Industry_type", label: "產業別" },
    { key: "Company_name", label: "公司/單位" },
    { key: "Job_title", label: "職稱" },
    
  ];

  for (const field of requiredFields) {
    if (!formData.value[field.key]) {
      alert(`請輸入${field.label}`);
      return;
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.Email)) {
    alert("請輸入正確的 E-mail 格式");
    return;
  }

  const phoneRegex = /^09\d{8}$/;
  if (!phoneRegex.test(formData.value.Cell_phone)) {
    alert("請輸入正確的手機號碼格式");
    return;
  }

  if (!formData.value.Session1 && !formData.value.Session2 && !formData.value.Session3 && !formData.value.Session4) {
    alert("請至少選擇一個報名場次");
    return;
  }

isSubmitting.value = true
try {
    const apiURL = "https://events.businesstoday.com.tw/backend/TaiwanFuture2026/sign_up";

    // 檢查是否已報名過
    const registeredPhone = localStorage.getItem('registered_phone');
    if (registeredPhone === formData.value.Cell_phone) {
      alert("此手機號碼已完成報名，每支手機號碼限報名一次。");
      return;
    }

    const params = new URLSearchParams();

    const basicFields = ["Name", "Gender", "Cell_phone", "Email", "Industry_type", "Company_name", "Job_title", "Age"];
    for (const key of basicFields) {
      params.append(key, formData.value[key]);
    }

    const sessions = ["Session1", "Session2", "Session3", "Session4"];
    for (const key of sessions) {
      params.append(key, formData.value[key] ? "v" : "");
    }

    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const result = await response.json();

    if (result.bIsSuccess === 1 || result.bIsSuccess === true) {
      // 記錄已報名的手機號碼
      localStorage.setItem('registered_phone', formData.value.Cell_phone);

      alert("感謝報名！主辦單位將於活動前1~3日，以簡訊方式通知報名結果並發送報到序號，敬請留意手機簡訊通知。");
      Object.keys(formData.value).forEach(key => {
        formData.value[key] = "";
      });
    } else {
      let errorMsg = result.sError;
      if (errorMsg && errorMsg.includes("此手機已參與過此次活動了喔")) {
        errorMsg = "此手機號碼已完成報名，每支手機號碼限報名一次。";
      }
      alert(errorMsg || "報名失敗，請確認資料是否正確或已報名過。");
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("系統忙碌中，請稍後再試。");
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
\.section6 {
  background: transparent;
  padding: 80px 0 10px;
}
.section-title.white{
text-align: center;
}

.information > .content {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 80px 100px;
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  border: 2px solid #242424;
}

.event-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 30px 60px;
}

.detail-title {
  color: #2DA1FF;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.detail-title img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}

.map {
  width: 100%;
  max-width: 500px;
}

.map-box {
  width: 100%;
  padding-bottom: 70%;
  position: relative;
}

.map-box iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.award-header {
  margin-bottom: 30px;
}

.award-header .section-title, .award-header .subtitle {
  color: #fff;
}

.award .subtitle, .award-header .subtitle {
  text-align: center;
}

.award-detail {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.award-plan-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.place-icon {
  width: 26px;
}

.award-plan {
  color: #5061ff;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 0;
}

.award-list .section-title {
  color: #5061ff;
}

.award-plan-desc {
  padding-left: 10px;
  line-height: 1.6;
  text-align: justify;
  font-size: 1.15rem;
}

.notice-title {
  color: #4d4d4d;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: left;
  margin-bottom: 15px;
  padding-left: 10px;
}

.award-notice {
  padding-left: 30px;
  margin-bottom: 30px;
  text-align: justify;
  font-size: 1.15rem;
  line-height: 1.6;
}

.award-notice li {
  list-style-type: decimal;
  margin-bottom: 20px;
}

.award-notice li:last-child {
  margin-bottom: 0px;
}

.award-pic {
  margin-top: 30px;
  background-color: #eef1ff;
  border-radius: 10px;
  padding: 35px;
}

.award-pic .award-plan.text {
  text-align: left;
  color: #4d4d4d;
  margin-bottom: 15px;
}

.prize-grid {
  display: grid;
  gap: 20px 15px;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 15px;
}

.prize-pic {
  width: 100%;
}

.prize-title {
  font-weight: 600;
  color: #1E5786;
  height: 4.5rem;
  font-size: 1.25rem;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.prize p:not(.prize-title) {
  font-size: 1.1rem;
  line-height: 1.5;
}

.award-list {
  margin-top: 80px;
}

.award-list-content {
  border-top: 2px solid #444;
}

.award-list-item {
  display: flex;
  border-bottom: 1px solid #737373;
  padding: 20px;
  gap: 10px 30px;
}

.award-list-title {
  width: 50%;
  color: #2DA1FF;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px 15px;
  text-align: center;
}

.name-list {
  display: flex;
  gap: 15px 30px;
  flex-wrap: wrap;
  flex: 1;
}

.name-list p {
  font-size: 1.15rem;
}

.signup {
  margin-top: 80px;
}

.signup-title {
  color: #5061ff;
}

.signup-top,
.signup-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.signup-top input,
.signup-top select {
  border-radius: 5px;
  padding: 10px 15px;
  border: solid 1px #a9a9a9;
  width: 100%;
  font-size: 1rem;
  font-family: "Noto Sans TC", sans-serif;
  color: #242424;
}

.signup-top input::placeholder {
  color: #a0a0a0;
  opacity: 1;
}

.placeholder-text {
  color: #444 !important;
}

.signup-top select option {
  color: #242424;
}

.signup select {
  cursor: pointer;
  appearance: none;
  background-color: white;
}

.signup-top .signup-input {
  width: calc((100% - 20px)/2);
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
}

.signup-bottom .signup-input {
  width: 100%;
}

.input-title {
  font-weight: bold;
  color: #4d4d4d;
  text-align: left;
  margin: 0 0 10px 0;
  font-size: 1.1rem;
}

.agree .input-title {
  margin: 0;
}

.select-arrow {
  position: absolute;
  top: 72%;
  transform: translateY(-50%);
  right: 18px;
  width: 16px;
  z-index: 2;
  opacity: 0.7;
}

.agenda-select {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

input[type=checkbox] {
  margin-top: 3px;
  width: 20px;
  height: 20px;
  background-color: #2DA1FF;
  flex-shrink: 0;
}

.agenda-select > div {
  display: flex;
  flex: 0 0 calc(50% - 15px);
  gap: 5px;
}

.agree-pact {
  background-color: #F2F4F4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
}

.private-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #2677ba;
  margin: 0 0 10px;
}

.private-btn img {
  height: 16px;
}

.agree-pact p {
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-align: justify;
}

.agree {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.agenda-select > div > input,
.agenda-select > div > label,
.agree > input,
.agree > .input-title {
  cursor: pointer;
}

.signup-notice {
  text-align: justify;
  padding-left: 20px;
  font-size: 1.1rem;
}

.signup-notice li {
  list-style-type: decimal;
  margin-bottom: 10px;
}

.sign-btn {
  margin: 60px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 6px 6px 32px;
  border-radius: 50px;
  background: linear-gradient(90deg, #81b3ff 0%, #5061ff 100%);
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  width: fit-content;
  min-width: 220px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 4px 20px rgba(100, 80, 220, 0.3);
}

.sign-btn:hover {
  box-shadow: 0 6px 28px rgba(100, 80, 220, 0.5);
  transform: translateY(-2px);
}

.sign-btn.submitting {
  cursor: not-allowed;
  opacity: 0.7;
  pointer-events: none;
  background: linear-gradient(90deg, #a0b8e0 0%, #8890cc 100%);
  box-shadow: none;
  transform: none;
}



.sign-btn-arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 20px;
}

.sign-btn-arrow::after {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  border-top: 4px solid #5548d9;
  border-right: 4px solid #5548d9;
  transform: rotate(45deg) translateX(-1px);
} 
@media screen and (max-width: 1300px) {
  .event-detail { flex-direction: column; }
  .award-list-title { flex-direction: column; }
}

@media screen and (max-width: 1200px) {
  .information > .content { padding: 60px; }
  .award-notice { padding-left: 10px; }
}

@media screen and (max-width: 1130px) {
  .ss-show { display: block; }
}

@media screen and (max-width: 1093px) {
  .agenda-select { flex-direction: column; }
}

@media screen and (max-width: 754px) {
  .information > .content { padding: 30px; }
}

@media screen and (max-width: 570px) {
  .signup-top, .signup-bottom { gap: 10px; margin-bottom: 10px; }
  .signup-top .signup-input { width: 100%; }
  .input-title { margin: 5px 0; font-size: 1rem; }
  .input-option { width: 100%; font-size: 1rem; }
  .agree-pact { width: 100%; }
  .signup-notice { font-size: 1rem; padding-left: 15px; }
}

@media screen and (max-width: 540px) {
  .information > .content { padding: 30px; }
  .prize-grid { gap: 25px 10px; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
  .prize-title { height: auto; font-size: 1rem; }
  .award .subtitle { font-size: 1rem; }
  .award-list-item { flex-direction: column; }
  .award-list-title { width: 100%; }
  .name-list { justify-content: center; }
  .ss-show-check { display: block; }
}
</style>