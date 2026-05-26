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
                      <span>09:00</span><span class="dash">-</span><span>09:03</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">大會開場</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:03</span><span class="dash">-</span><span>09:08</span>
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
                      <span>09:08</span><span class="dash">-</span><span>09:20</span>
                    </div>
                  </th>
                  <td>
                    <div class="agenda-title blue">貴賓致詞</div>
                    <div class="agenda-speaker">政府官員代表</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:20</span><span class="dash">-</span><span>09:25</span>
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
                      <span>09:25</span><span class="dash">-</span><span>09:30</span>
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
                      <span>09:25</span><span class="dash">-</span><span>09:35</span>
                    </div>
                  </th>
                  <td><div class="agenda-title">貴賓合影</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:35</span><span class="dash">-</span><span>10:25</span>
                    </div>
                  </th>
                  <td rowspan="2"><div class="agenda-title">全球變局與經濟新秩序</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>10:25</span><span class="dash">-</span><span>10:45</span>
                    </div>
                  </th>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>10:45</span><span class="dash">-</span><span>11:00</span>
                        </div>
                      </div>
                      <div style="width: 75%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">休息時間</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:00</span><span class="dash">-</span><span>11:20</span>
                    </div>
                  </th>
                  <td rowspan="3"><div class="agenda-title">全球變局與經濟新秩序</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:20</span><span class="dash">-</span><span>11:40</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:40</span><span class="dash">-</span><span>12:00</span>
                    </div>
                  </th>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>12:00</span><span class="dash">-</span><span>13:30</span>
                        </div>
                      </div>
                      <div style="width: 75%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">中午休息</span>
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
                  <td rowspan="3"><div class="agenda-title">大轉型與新商機</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>13:50</span><span class="dash">-</span><span>14:10</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:10</span><span class="dash">-</span><span>14:30</span>
                    </div>
                  </th>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>14:30</span><span class="dash">-</span><span>14:40</span>
                        </div>
                      </div>
                      <div style="width: 75%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">休息時間</span>
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
                  <td rowspan="4"><div class="agenda-title">文旅創新與全球競爭</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:00</span><span class="dash">-</span><span>15:20</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:20</span><span class="dash">-</span><span>15:40</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:40</span><span class="dash">-</span><span>16:10</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>16:10～</span>
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
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:05</span><span class="dash">-</span><span>09:35</span>
                    </div>
                  </th>
                  <td rowspan="3"><div class="agenda-title">科技新賽局</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:35</span><span class="dash">-</span><span>09:55</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>09:55</span><span class="dash">-</span><span>10:15</span>
                    </div>
                  </th>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>10:15</span><span class="dash">-</span><span>10:30</span>
                        </div>
                      </div>
                      <div style="width: 75%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">休息時間</span>
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
                  <td rowspan="3"><div class="agenda-title">社會安全與關鍵防護</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>10:50</span><span class="dash">-</span><span>11:10</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>11:10</span><span class="dash">-</span><span>12:00</span>
                    </div>
                  </th>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>12:00</span><span class="dash">-</span><span>13:30</span>
                        </div>
                      </div>
                      <div style="width: 75%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">中午休息</span>
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
                  <td rowspan="3"><div class="agenda-title">全民健康與智慧醫療</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>13:50</span><span class="dash">-</span><span>14:10</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>14:10</span><span class="dash">-</span><span>14:30</span>
                    </div>
                  </th>
                </tr>
                <tr class="rest topic">
                  <td colspan="2" style="padding: 0;">
                    <div style="display: flex; width: 100%; align-items: center;">
                      <div style="width: 25%; padding: 10px; box-sizing: border-box;">
                        <div class="time-box" style="font-weight: 700;">
                          <span>14:30</span><span class="dash">-</span><span>14:40</span>
                        </div>
                      </div>
                      <div style="width: 75%; padding: 10px; box-sizing: border-box; text-align: center;">
                        <span style="font-weight: 700; font-size: 1.1rem;">休息時間</span>
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
                  <td rowspan="5"><div class="agenda-title">城市治理新藍圖</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:00</span><span class="dash">-</span><span>15:20</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:20</span><span class="dash">-</span><span>15:40</span>
                    </div>
                  </th>
                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>15:40</span><span class="dash">-</span><span>16:30</span>
                    </div>
                  </th>
  <td style="border-left: solid 1px #242424;"><div class="agenda-title">產業發展與世界局勢</div></td>
                </tr>
                <tr>
                  <th>
                    <div class="time-box">
                      <span>16:30～</span>
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
