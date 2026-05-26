const fs = require('fs');

let content = fs.readFileSync('src/components/Agenda.vue', 'utf-8');

// Replace dates in tabs
content = content.replace('Day1 | 6/18', 'Day1 | 6/24');
content = content.replace('Day2 | 6/19', 'Day2 | 6/25');

// Find the schedule chart section exactly based on start and end tags
const startIndex = content.indexOf('<div class="schedule-chart">');
const endIndex = content.indexOf('<div class="btn agenda-more-btn"');
const oldChart = content.substring(startIndex, endIndex);

const newChart = `<div class="schedule-chart">
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
                  <th>08:30 — 09:00</th>
                  <td><div class="agenda-title">報到入場</div></td>
                </tr>
                <tr>
                  <th>09:00 — 09:03</th>
                  <td><div class="agenda-title">大會開場</div></td>
                </tr>
                <tr>
                  <th>09:03 — 09:08</th>
                  <td>
                    <div class="agenda-title blue">主辦單位致詞</div>
                    <div class="agenda-speaker">今周刊發行人 <span class="highlight">梁永煌</span></div>
                  </td>
                </tr>
                <tr>
                  <th>09:08 — 09:18</th>
                  <td>
                    <div class="agenda-title blue">貴賓致詞</div>
                    <div class="agenda-speaker">副總統 <span class="highlight">蕭美琴</span>(邀約中)</div>
                  </td>
                </tr>
                <tr>
                  <th>09:18 — 09:25</th>
                  <td>
                    <div class="agenda-title blue">貴賓致詞</div>
                    <div class="agenda-speaker">經濟部部長 <span class="highlight">龔明鑫</span>(邀約中)</div>
                  </td>
                </tr>
                <tr>
                  <th>09:25 — 09:35</th>
                  <td><div class="agenda-title">貴賓合影</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">全球變局與經濟新秩序</td>
                </tr>
                <tr>
                  <th>09:35 — 10:25</th>
                  <td>
                    <div class="speech-category">【大師專講一】</div>
                    <div class="speech-title">世界經濟正在重組：貨幣、貿易與新秩序</div>
                    <div class="agenda-speaker">前白宮經濟政策顧問 <span class="highlight">Todd Buchholz</span></div>
                  </td>
                </tr>
                <tr>
                  <th>10:25 — 10:45</th>
                  <td>
                    <div class="speech-category">【專題演講1】</div>
                    <div class="speech-title">全球貿易重組下的台灣產業韌性</div>
                    <div class="agenda-speaker">經濟部國際貿易署署長 <span class="highlight">劉威廉</span></div>
                  </td>
                </tr>
                <tr class="rest">
                  <th>10:45 — 11:00</th>
                  <td colspan="2"><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">川普變數─ 半導體因應之道</td>
                </tr>
                <tr>
                  <th>11:00 — 11:30</th>
                  <td>
                    <div class="speech-category">【大師專講二】</div>
                    <div class="speech-title">台日美半導體競爭力大解析</div>
                    <div class="agenda-speaker">早稻田大學商學學術院經營管理研究科教授 <span class="highlight">長內 厚 Osanai Atsushi</span></div>
                  </td>
                </tr>
                <tr>
                  <th>11:30 — 12:10</th>
                  <td>
                    <div class="speech-category">【高峰對談1】</div>
                    <div class="agenda-speaker" style="margin-top: 10px;">
                      主持人｜今周刊顧問 <span class="highlight">林宏文</span><br><br>
                      與談人｜早稻田大學商學學術院經營管理研究科教授 <span class="highlight">長內 厚</span><br>
                      <span style="display:inline-block; margin-left: 3.5rem;">訊芯科技董事長 <span class="highlight">蔣尚義</span></span>
                    </div>
                  </td>
                </tr>
                <tr class="rest">
                  <th>12:10 — 13:30</th>
                  <td colspan="2"><div class="agenda-title">中午休息</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">迎向全球競局&nbsp;&nbsp;區域經濟轉型</td>
                </tr>
                <tr>
                  <th>13:30 — 13:50</th>
                  <td>
                    <div class="speech-category">【專題演講2】</div>
                    <div class="speech-title">美國關稅新政對台灣產業影響及因應</div>
                    <div class="agenda-speaker">經濟部產業發展署署長 <span class="highlight">邱求慧</span></div>
                  </td>
                </tr>
                <tr>
                  <th>13:50 — 14:10</th>
                  <td>
                    <div class="speech-category">【專題演講3】</div>
                    <div class="speech-title">雲林轉型契機！從農業永續到產業升級</div>
                    <div class="agenda-speaker">雲林縣縣長 <span class="highlight">張麗善</span></div>
                  </td>
                </tr>
                <tr>
                  <th>14:10 — 14:30</th>
                  <td>
                    <div class="speech-category">【專題演講4】</div>
                    <div class="speech-title">智慧應用賦能未來 企業數位轉型的實戰之道</div>
                    <div class="agenda-speaker">叡揚資訊董事長 <span class="highlight">張培鏞</span></div>
                  </td>
                </tr>
                <tr class="rest">
                  <th>14:30 — 14:45</th>
                  <td colspan="2"><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">鏈結科技與治理打造全球競爭新引擎</td>
                </tr>
                <tr>
                  <th>14:45 — 15:05</th>
                  <td>
                    <div class="speech-category">【專題演講5】</div>
                    <div class="speech-title">AI智慧金融新時代</div>
                    <div class="agenda-speaker">玉山金控科技長 <span class="highlight">張智星</span></div>
                  </td>
                </tr>
                <tr>
                  <th>15:05 — 15:25</th>
                  <td>
                    <div class="speech-category">【專題演講6】</div>
                    <div class="speech-title">從區域轉型到全球競爭力 嘉義縣改變及轉型</div>
                    <div class="agenda-speaker">嘉義縣縣長 <span class="highlight">翁章梁</span></div>
                  </td>
                </tr>
                <tr class="rest">
                  <th>15:25 — 15:40</th>
                  <td colspan="2"><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">科技轉型永續新解方&nbsp;&nbsp;跨域合作力</td>
                </tr>
                <tr>
                  <th>15:40 — 16:00</th>
                  <td>
                    <div class="speech-category">【專題演講7】</div>
                    <div class="speech-title">數位孿生新治理 城市AI新發展</div>
                    <div class="agenda-speaker">高雄市副市長 <span class="highlight">羅達生</span></div>
                  </td>
                </tr>
                <tr>
                  <th>16:00 — 16:20</th>
                  <td>
                    <div class="speech-category">【專題演講8】</div>
                    <div class="speech-title">AI與電信科技跨界共融 共創永續智慧城市新未來</div>
                    <div class="agenda-speaker">中華電信研究院院長 <span class="highlight">蘇添財</span></div>
                  </td>
                </tr>
                <tr>
                  <th>16:20 — 16:40</th>
                  <td>
                    <div class="speech-category">【專題演講9】</div>
                    <div class="speech-title">三個切面故事 看待桃園城市大環境</div>
                    <div class="agenda-speaker">桃園市副市長 <span class="highlight">蘇俊賓</span></div>
                  </td>
                </tr>
                <tr class="topic">
                  <td colspan="2">經濟新格局&nbsp;&nbsp;挑戰與機遇</td>
                </tr>
                <tr>
                  <th>16:40 — 17:10</th>
                  <td>
                    <div class="speech-category">【大師專講3】</div>
                    <div class="speech-title">科技風雲再起 台灣科技未來的下個挑戰</div>
                    <div class="agenda-speaker">今周刊董事長 <span class="highlight">謝金河</span></div>
                  </td>
                </tr>
                <tr>
                  <th>17:10 — 17:10</th>
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
                  <th>08:30 — 09:00</th>
                  <td><div class="agenda-title">報到入場</div></td>
                </tr>
                <tr>
                  <th>09:00 — 09:05</th>
                  <td><div class="agenda-title">大會開場</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">數位金融與美日台經濟</td>
                </tr>
                <tr>
                  <th>09:05 — 09:35</th>
                  <td>
                    <div class="speech-category">【大師專講4】</div>
                    <div class="speech-title">美中貿易戰下的經濟變局</div>
                    <div class="agenda-speaker">知名經濟學家 <span class="highlight">陶冬</span></div>
                  </td>
                </tr>
                <tr>
                  <th>09:35 — 10:00</th>
                  <td>
                    <div class="speech-category">【專題演講10】</div>
                    <div class="speech-title">永豐金控的AI轉型旅程</div>
                    <div class="agenda-speaker">永豐金控數位科技長 <span class="highlight">張天豪</span></div>
                  </td>
                </tr>
                <tr>
                  <th>10:00 — 10:25</th>
                  <td>
                    <div class="speech-category">【專題演講11】</div>
                    <div class="speech-title">關稅下的美日台經濟展望</div>
                    <div class="agenda-speaker">元大投信董事長 <span class="highlight">劉宗聖</span></div>
                  </td>
                </tr>
                <tr class="rest">
                  <th>10:25 — 10:40</th>
                  <td colspan="2"><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">智慧醫療新革命&nbsp;&nbsp;AI驅動未來醫療</td>
                </tr>
                <tr>
                  <th>10:40 — 11:00</th>
                  <td>
                    <div class="speech-category">【專題演講12】</div>
                    <div class="speech-title">大健康產業的智慧升級(DCB)</div>
                    <div class="agenda-speaker">財團法人生物技術開發中心董事長 <span class="highlight">涂醒哲</span></div>
                  </td>
                </tr>
                <tr>
                  <th>11:00 — 11:20</th>
                  <td>
                    <div class="speech-category">【專題演講13】</div>
                    <div class="speech-title">智慧醫療新革命，AI驅動未來醫療</div>
                    <div class="agenda-speaker">研華智能服務事業群副總經理 <span class="highlight">江明志</span></div>
                  </td>
                </tr>
                <tr>
                  <th>11:20 — 11:40</th>
                  <td>
                    <div class="speech-category">【專題演講14】</div>
                    <div class="speech-title">AI賦能 打造智慧醫療大健康生態圈</div>
                    <div class="agenda-speaker">中國醫藥大學附設醫院內科系副院長 <span class="highlight">張坤正</span></div>
                  </td>
                </tr>
                <tr>
                  <th>11:40 — 12:00</th>
                  <td>
                    <div class="speech-category">【專題演講15】</div>
                    <div class="speech-title">從台灣到世界 AI智慧醫療新時代</div>
                    <div class="agenda-speaker">雲象科技執行長 <span class="highlight">葉肇元</span></div>
                  </td>
                </tr>
                <tr class="rest">
                  <th>12:00 — 13:30</th>
                  <td colspan="2"><div class="agenda-title">中午休息</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">轉型與蛻變&nbsp;&nbsp;永續新台灣</td>
                </tr>
                <tr>
                  <th>13:30 — 13:50</th>
                  <td>
                    <div class="speech-category">【專題演講16】</div>
                    <div class="speech-title">打造台美聯合艦隊 搶佔AI革命商機</div>
                    <div class="agenda-speaker">外交部部長 <span class="highlight">林佳龍</span></div>
                  </td>
                </tr>
                <tr>
                  <th>13:50 — 14:05</th>
                  <td>
                    <div class="speech-category">【專題演講17】</div>
                    <div class="speech-title">雁行啟航 串連全球 中小企業的韌性突圍</div>
                    <div class="agenda-speaker">台數科集團董事長/大肚山產業創新基金會執行長 <span class="highlight">廖紫岑</span></div>
                  </td>
                </tr>
                <tr>
                  <th>14:05 — 14:35</th>
                  <td>
                    <div class="speech-category">【高峰對談2】</div>
                    <div class="agenda-speaker" style="margin-top: 10px;">
                      主持人｜今周刊發行人 <span class="highlight">梁永煌</span><br><br>
                      與談人｜台數科集團董事長/大肚山產業創新基金會執行長 <span class="highlight">廖紫岑</span><br>
                      <span style="display:inline-block; margin-left: 3.5rem;">佳研智聯總經理 <span class="highlight">羅佐良</span></span>
                    </div>
                  </td>
                </tr>
                <tr class="rest">
                  <th>14:35 — 14:50</th>
                  <td colspan="2"><div class="agenda-title">休息時間</div></td>
                </tr>
                <tr class="topic">
                  <td colspan="2">永續觀光&nbsp;&nbsp;地方韌性與文化傳承</td>
                </tr>
                <tr>
                  <th>14:50 — 15:10</th>
                  <td>
                    <div class="speech-category">【專題演講18】</div>
                    <div class="speech-title">低碳旅遊啟航 共築綠色願景</div>
                    <div class="agenda-speaker">交通部觀光署企劃組組長 <span class="highlight">吳潔萍</span></div>
                  </td>
                </tr>
                <tr>
                  <th>15:10 — 15:30</th>
                  <td>
                    <div class="speech-category">【專題演講19】</div>
                    <div class="speech-title">減碳與低碳運輸的綠色哲學</div>
                    <div class="agenda-speaker">桃園國際機場股份有限公司 <span class="highlight">楊偉甫</span></div>
                  </td>
                </tr>
                <tr>
                  <th>15:30 — 15:50</th>
                  <td>
                    <div class="speech-category">【專題演講20】</div>
                    <div class="speech-title">行動悠遊建構永續新生活</div>
                    <div class="agenda-speaker">悠遊卡公司董事長 <span class="highlight">林志盈</span></div>
                  </td>
                </tr>
                <tr class="topic">
                  <td colspan="2">全球經濟展望</td>
                </tr>
                <tr>
                  <th>15:50 — 16:30</th>
                  <td>
                    <div class="speech-category">【專題演講21】</div>
                    <div class="speech-title">美、中競爭與台灣挑戰</div>
                    <div class="agenda-speaker">中央研究院特聘研究員 <span class="highlight">朱敬一</span></div>
                  </td>
                </tr>
                <tr>
                  <th>16:30 — 16:30</th>
                  <td>
                    <div class="agenda-title">司儀結尾</div>
                    <div class="agenda-speaker">第二天高峰會圓滿結束</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          `;

content = content.replace(oldChart, newChart);

const cssChanges = `
.agenda-title { font-weight: 700; color: #242424; margin-bottom: 5px; font-size: 1.1rem; }
.agenda-title.blue { color: #5061ff; }
.speech-category { font-weight: 700; color: #242424; margin-bottom: 5px; font-size: 1.1rem; }
.speech-title { font-weight: 700; color: #5061ff; margin-bottom: 5px; font-size: 1.1rem; line-height: 1.4; }
.agenda-speaker { color: #737373; font-size: 0.95rem; line-height: 1.5; }
.agenda-speaker .highlight { background-color: #efcb35; color: #242424; padding: 2px 6px; font-weight: 700; border-radius: 2px; margin-left: 5px;}
`;

content = content.replace('</style>', cssChanges + '\\n</style>');
content = content.replace('background-color: #e6e6e6;', 'background-color: #ffffff;');
content = content.replace('color: #1E5786;', 'color: #4d4d4d; font-weight: 500;');
content = content.replace('border-bottom: solid 2px #737373;', 'border-bottom: solid 1px #737373;');
content = content.replace('font-size: 1.3rem;', 'font-size: 1.1rem;');

fs.writeFileSync('src/components/Agenda.vue', content, 'utf-8');
