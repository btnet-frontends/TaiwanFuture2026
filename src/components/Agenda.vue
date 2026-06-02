<template>
  <section class="section5 agenda">
    <h2 class="section-title white">活動議程</h2>
    <div class="content">
      <div class="agenda-area">
        <div class="agenda-date">
          <div class="agenda-date-tag day1" :class="{ active: agendaStatus }" @click="agendaStatus = true">
            Day1 | 6/24
          </div>
          <div class="agenda-date-tag day2" :class="{ active: !agendaStatus }" @click="agendaStatus = false">
            Day2 | 6/25
          </div>
        </div>
        <div class="schedule-chart">
          <div class="agenda-schedule " :class="{ show: agendaStatus, active: agendaIsOpen }">
            <table>
              <thead>
                <tr>
                  <th scope="col" style="width: 25%">時間</th>
                  <th scope="col" style="width: 75%">議程</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>08:30</span><span class="dash">-</span><span>09:00</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">報到入場</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:00</span><span class="dash">-</span><span>09:05</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">大會開場</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:05</span><span class="dash">-</span><span>09:10</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title blue">主辦單位致詞</div>
                    <div class="agenda-speaker">今周刊發行人 <span class="highlight">梁永煌</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:10</span><span class="dash">-</span><span>09:18</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title blue">貴賓致詞</div>
                    <div class="agenda-speaker">經濟部部長 <span class="highlight">龔明鑫</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:18</span><span class="dash">-</span><span>09:26</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title blue">貴賓致詞</div>
                    <div class="agenda-speaker">衛生福利部部長<span class="highlight">石崇良</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:26</span><span class="dash">-</span><span>09:35</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">貴賓合影</div></td>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <!-- <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>10:45</span><span class="dash">-</span><span>11:00</span>
                        </div>
                      </div> -->
                      <div style="width: 100%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">全球變局與經濟新秩序</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:35</span><span class="dash">-</span><span>10:25</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【大師專講一】<br>世界經濟正在重組：貨幣、貿易與新秩序</div>
                    <div class="agenda-speaker">前白宮經濟政策顧問 <span class="highlight">Todd Buchholz</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>10:25</span><span class="dash">-</span><span>10:45</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講1】<br>美國新關稅時代下臺灣產業發展與布局</div>
                    <div class="agenda-speaker">經濟部產業發展署副署長 <span class="highlight">陳國軒</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>10:45</span><span class="dash">-</span><span>11:00</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:00</span><span class="dash">-</span><span>11:20</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講2】<br>關稅變局下 台灣的關鍵選擇與機會</div>
                    <div class="agenda-speaker">永豐金控首席經濟學家 <span class="highlight">黃蔭基</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:20</span><span class="dash">-</span><span>11:40</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講3】<br>台美科技投資廊道 打造全球經濟體中最具價值的軟硬整合生態系</div>
                    <div class="agenda-speaker">勤業眾信策略、風險與交易服務營運長 <span class="highlight">潘家涓</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:40</span><span class="dash">-</span><span>12:00</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講4】<br>全球供應鏈重組下：台灣中小企業的轉型韌性與新機會</div>
                    <div class="agenda-speaker">企業代表<span class="invite">(邀約中)</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>12:00</span><span class="dash">-</span><span>13:30</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">中午休息</div></td>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <!-- <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>12:00</span><span class="dash">-</span><span>13:30</span>
                        </div>
                      </div> -->
                      <div style="width: 100%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">大轉型與新商機</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>13:30</span><span class="dash">-</span><span>13:50</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講5】<br>科技新時代 AI 供應鏈的資金盛宴</div>
                    <div class="agenda-speaker">元大投信董事長 <span class="highlight">劉宗聖</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>13:50</span><span class="dash">-</span><span>14:10</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講6】<br>2026 全球財富地圖：高資產客群的配置策略與世代傳承</div>
                    <div class="agenda-speaker">企業代表<span class="invite">(邀約中)</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:10</span><span class="dash">-</span><span>14:30</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講7】<br>AI 數據驅動新金融</div>
                    <div class="agenda-speaker">企業代表<span class="invite">(邀約中)</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:30</span><span class="dash">-</span><span>14:40</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <!-- <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>14:30</span><span class="dash">-</span><span>14:40</span>
                        </div>
                      </div> -->
                      <div style="width: 100%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">文旅創新與全球競爭</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:40</span><span class="dash">-</span><span>15:00</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講8】<br>從歷史底蘊到創新價值：文化體驗驅動觀光新未來</div>
                    <div class="agenda-speaker">圓山大飯店董事長 <span class="highlight">葉菊蘭</span><span class="invite">(邀約中)</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:00</span><span class="dash">-</span><span>15:20</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講9】<br>從交通樞紐到戰略節點<br>桃園機場的轉運與韌性升級</div>
                    <div class="agenda-speaker">桃園國際機場股份有限公司董事長 <span class="highlight">楊偉甫</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:20</span><span class="dash">-</span><span>15:40</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講10】<br>從移動到體驗：打造台灣觀光新競爭力</div>
                    <div class="agenda-speaker">企業代表 <span class="invite">(邀約中)</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:40</span><span class="dash">-</span><span>16:10</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【大師專講二】<br>文化品味與文化觀光的全球視野</div>
                    <div class="agenda-speaker">前外交部政務次長、前駐外大使 <span class="highlight">楊子葆</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>16:10</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">司儀結尾</div>
                    <div class="agenda-speaker">第一天高峰會圓滿結束</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="agenda-schedule " :class="{ show: !agendaStatus, active: agendaIsOpen }">
            <table>
              <thead>
                <tr>
                  <th scope="col" style="width: 25%">時間</th>
                  <th scope="col" style="width: 75%">議程</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>08:30</span><span class="dash">-</span><span>09:00</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">報到入場</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:00</span><span class="dash">-</span><span>09:05</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">大會開場</div></td>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 100%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">科技新賽局</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:05</span><span class="dash">-</span><span>09:35</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【大師專講三】<br>AI 革命：從資料驅動到世界重構</div>
                    <div class="agenda-speaker">Surge AI 創辦人兼執行長 <span class="highlight">Edwin Chen</span> (預錄)</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:35</span><span class="dash">-</span><span>09:55</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講11】<br>AI 如何重寫企業競爭規則</div>
                    <div class="agenda-speaker">工業技術研究院資深專家 <span class="highlight">陳維超</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:55</span><span class="dash">-</span><span>10:15</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講12】<br>從 AI 的風起雲湧看企業的轉型策略</div>
                    <div class="agenda-speaker">玉山金控科技長 <span class="highlight">張智星</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>10:15</span><span class="dash">-</span><span>10:30</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 100%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">社會安全與關鍵防護</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>10:30</span><span class="dash">-</span><span>10:50</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講13】<br>《AI 時代的軟體開發：終局、轉折與新生》— 40 年銀行系統工程的實務觀察</div>
                    <div class="agenda-speaker">資拓宏宇金融事業部副總 <span class="highlight">郭勝雄</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>10:50</span><span class="dash">-</span><span>11:10</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講14】<br>從感知到決策<br>AI 邊緣算力如何構築下一代韌性城市</div>
                    <div class="agenda-speaker">英特爾智慧城市科技事業部亞太區總經理 <span class="highlight">潘劭齊</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:10</span><span class="dash">-</span><span>12:00</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【關鍵對談一】<br>產業安控新布局 建構供應鏈韌性與 AI 經濟安全網</div>
                    <div class="agenda-speaker">
                      與談主持人：財團法人資訊工業策進會總監 <span class="highlight">蔡志宏</span><br>
                      與談講師：<br>
                      ・英特爾智慧城市科技事業部亞太區總經理 <span class="highlight">潘劭齊</span><br>
                      ・台灣智慧安防工業同業公會理事長 <span class="highlight">許家雄</span><br>
                      ・中興保全科技執行長 <span class="highlight">李榮貴</span><br>
                      ・國立臺灣科技大學資訊管理系副教授 <span class="highlight">黃政嘉</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>12:00</span><span class="dash">-</span><span>13:30</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">中午休息</div></td>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 100%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">全民健康與智慧醫療</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>13:30</span><span class="dash">-</span><span>13:50</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講15】<br>長照 3.0 × 健康韌性國家</div>
                    <div class="agenda-speaker">衛生福利部政務次長 <span class="highlight">呂建德</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>13:50</span><span class="dash">-</span><span>14:10</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講16】<br>智慧醫療的商業模式：平台、數據與服務整合</div>
                    <div class="agenda-speaker">天成醫療體系董事長 <span class="highlight">張育美</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:10</span><span class="dash">-</span><span>14:30</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講17】<br>醫療創新與健康管理新模式：AI 驅動下的智慧醫療實戰</div>
                    <div class="agenda-speaker">中國附醫人工智慧暨機器人創新中心主任 <span class="highlight">張詩聖</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:30</span><span class="dash">-</span><span>14:40</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 100%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">城市治理新藍圖</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:40</span><span class="dash">-</span><span>15:00</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講18】<br>從港灣到科技<br>亞洲新灣區的城市新未來</div>
                    <div class="agenda-speaker">高雄市副市長 <span class="highlight">李懷仁</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:00</span><span class="dash">-</span><span>15:20</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講19】<br>打造地方新引擎 城市轉型</div>
                    <div class="agenda-speaker">台中市政府<span class="invite">(邀約中)</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:20</span><span class="dash">-</span><span>15:40</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【專題演講20】<br>從變革到永續<br>以臺東博覽會為核心的慢經濟八年實踐路徑</div>
                    <div class="agenda-speaker">臺東縣副縣長 <span class="highlight">王志輝</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:40</span><span class="dash">-</span><span>16:30</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">【大師專講四】<br>產業發展與世界局勢</div>
                    <div class="agenda-speaker">和碩集團董事長 <span class="highlight">童子賢</span></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>16:30</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title">司儀結尾</div>
                    <div class="agenda-speaker">第二天高峰會圓滿結束</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn agenda-more-btn" @click="agendaIsOpen = !agendaIsOpen" :class="{ active: agendaIsOpen }">
          {{ agendaIsOpen ? "Close" : "More" }}
          <img src="@/assets/images/arrow-down-white.svg" alt="arrow-down-white">
        
        </div>
      </div>
      </div>
      <!-- <div class="dowload-area">
        <hr class="line1">
        <a href="https://download.businesstoday.com.tw/events/pdf/FA_DM-2025-05TaiwanFuture_0617V1.pdf" target="_blank"
          class="btn download-btn">
          <img class="download-icon" src="@/assets/images/download-icon.svg" alt="download-icon">
          下載大會手冊
        </a>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const agendaStatus = ref(true)
const agendaIsOpen = ref(false)
</script>

<style scoped>
/* 議程 */
.section5 {
    background: transparent;
}

.agenda .content {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
}

.agenda-area {
    position: relative;
}

.agenda-date {
    display: flex;
    position: relative;
    top: 2px;
}

.agenda-date-tag {
    position: relative;
    padding: 7px 15px;
    /* border: solid 2px #242424; */
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px 10px 0 0;
    background-color: #efcb35;
    color: #4d4d4d;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
}

@media (hover: hover) {
    .agenda-date-tag:hover {
        color: #858585;
    }
}

.agenda-date-tag.active {
    background-color: #ffffff;
    color: #242424;
}

.agenda-date-tag.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
}

.schedule-chart {
    /* border: solid 2px #242424; */
    border-radius: 0 10px 10px 10px;
    padding: 60px;
    background-color: white;
}

.agenda-schedule {
    font-size: 1rem;
    display: none;
    height: 35rem;
    overflow: hidden;
    color: #242424;
}

.agenda-schedule.active {
    height: fit-content;
}

.agenda-schedule table {
    border-collapse: collapse;
    position: relative;
    letter-spacing: 1px;
    width: 100%;
}

.agenda-schedule table thead {
    color: #4d4d4d; font-weight: 500;
    border-bottom: solid 1px #737373;
    font-size: 1.1rem;
}

.agenda-schedule th,
.agenda-schedule td {
    font-size: 1rem;
    padding: 10px;
    border-bottom: solid 1px #737373;
    vertical-align: middle;
}

.agenda-schedule th:first-child {
    text-align: center;
}

.agenda-schedule td[rowspan] {
    border-left: solid 1px #242424;
}

.agenda-schedule th:nth-child(2) {
    text-align: left;
}

.agenda-schedule tbody tr:last-child th,
.agenda-schedule tbody tr:last-child td {
    border-bottom: none;
}

.agenda-schedule tr td:first-child {
    text-align: center;
}

.m-br {
    display: none;
}

.panel-group {
    display: flex;
}

.panel-label {
    color: #000;
    white-space: nowrap;
}

.text-left {
    min-width: 5rem;
}



.topic {
    background: linear-gradient(to right, #81b3ff 0%, #5061ff 100%);
    color: white;
    text-align: center;
}

.topic td {
    border-style: hidden;
}

.show {
    display: block;
}

.table-bottom {
    display: none;
}

.agenda-more-area {
    width: 100%;
    position: relative;
}

.agenda-more-btn {
    background-color: #efcb35;
    color: #4d4d4d;
    font-weight: 700;
    font-size: 1.1rem;
    position: absolute;
    display: flex;
    gap: 7px;
    justify-content: center;
    align-items: center;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    border: 2px solid #4d4d4d;
    border-radius: 5px;
    padding: 6px 30px;
    cursor: pointer;
}

.agenda-more-btn:hover {
    background-color: #efcb35;
    opacity: 1 !important;
    filter: brightness(0.8);
}

.agenda-more-btn img {
    width: 15px;
    transition: 0.5s;
    filter: invert(0.7);
}

.agenda-more-btn.active img {
    transform: rotate(180deg);
}

.dowload-area {
    margin-top: 80px;
    width: 100%;
    display: flex;
    align-items: center;
}

.line1 {
    flex: 1;
    border: none;
    height: 1px;
    background-color: #ffffff;
}

.line2 {
    border: none;
    height: 1px;
    background-color: #737373;
    margin-bottom: 70px;
}

.download-btn {
    background-color: #242424;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 8px 30px;
    white-space: nowrap;
}

.download-icon {
    width: 25px;
    transition: 0.5s;
}

.download-btn:hover {
    opacity: 1 !important;
    filter: brightness(0.8);
}

.download-btn:hover .download-icon {
    transform: translateY(-3px);
}

.time-box {
    display: inline-block;
    text-align: center;
}

.time-box .dash {
    margin: 0 5px;
}

@media screen and (max-width:920px) {
    .download-icon {
        width: 20px;
    }

    .agenda-schedule th,
    .agenda-schedule td {
        padding: 7px;
    }

    .agenda-date-tag {
        font-size: 1rem;
    }

    .download-btn {
        font-size: 1rem;
    }
}

@media screen and (max-width:860px) {
    .agenda-schedule {
        height: 26rem;
    }
}

@media screen and (max-width:540px) {
    .schedule-chart {
        padding: 20px;
    }

    .agenda-schedule th,
    .agenda-schedule td {
        font-size: 0.9rem;
        padding: 10px 5px;
    }

    .time-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.2;
    }

    .time-box .dash {
        margin: 2px 0;
    }

    .agenda-schedule {
        height: 25rem;
    }

    .m-br {
        display: block;
    }

    .panel-group {
        flex-direction: column;
    }

    .agenda-speaker .highlight {
        display: block;
        width: fit-content;
        margin-top: 5px;
    }
}

.agenda-title { font-weight: 700; color: #242424; margin-bottom: 5px; font-size: 1.1rem; }
.agenda-title.blue { color: #5061ff; }
.speech-category { font-weight: 700; color: #242424; margin-bottom: 5px; font-size: 1.1rem; }
.speech-title { font-weight: 700; color: #5061ff; margin-bottom: 5px; font-size: 1.1rem; line-height: 1.4; }
.agenda-speaker { color: #737373; font-size: 0.95rem; line-height: 1.5;}
.agenda-speaker .highlight { 
  background-color: #efcb35; 
  color: #242424; 
  padding: 2px 6px; 
  font-weight: 700; 
  border-radius: 2px; 
  }
.agenda-speaker .invite {
  color: #999;
  font-size: 0.85rem;
  margin-left: 4px;
}
</style>
