'use strict';
// The Chinese copy stays in the HTML as a no-JavaScript fallback. Keep Japanese
// translations here so every dated entry and the chapter map share one switch.
(() => {
  const root = document.querySelector('#sociology-log');
  if (!root) return;
  const translations = [
    ['.sociology-kicker', '<span class="section-index" aria-hidden="true">02 /</span> 社会学 / 学習記録'],
    ['#sociology-title', '社会学<br><span>学習記録。</span>'],
    ['.sociology-header-grid > div > p', '一つの問いから始め、日々理解を修正する。<br>概念と事例、そして考え方が変わった過程を記録する。'],
    ['.sociology-count', '2026.10.05 — 10.08 · 4件の記録 / 第1章読了'],
    ['.sociology-map-shortcut', '第1章のマインドマップを見る <span aria-hidden="true">↗</span>'],

    ['#study-2026-10-08', '数字はいかに根拠となり、<br>問題はいかに「問題」になるのか'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-date span', '木曜 / 04'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-card-kicker', '第1章読了 · 社会問題はいかに構築されるか'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-question', '「事実」や「統計」にも形成・流通・利用の過程がある。それは社会問題の研究をどう変えるのか。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(1) h4', 'クレイムから反応へ'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(1) p', '構築主義は<strong>クレイム申し立て、論争、制度的な反応</strong>を経験的な研究対象とする。主張の真偽についての判断をいったん留保し、誰が問題を提起し、どんなレトリックを用い、誰に対応を求め、主張がどう広がり、あるいは沈静化するのかを観察する。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(2) h4', '数字にも社会的な過程がある'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(2) p', '統計には、まず<strong>定義、分類、記録、集計方法</strong>の選択がある。その後、数字はメディアや機関に選ばれ、比較され、引用される。数字が論拠になる過程を研究することは、その数字が虚偽だと決めつけることではない。資料の正確さは別途検証しなければならない。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-paragraph', '教材は『〈児童虐待〉の構築』を例に、「虐待の増加」という公的な語りを、定義の変化、関心の高まり、福祉制度、統計や事例の用いられ方と結びつけて分析する。ここで研究するのは問題が定義され制度化される過程であり、被害を否定することではない。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-reflection', '第1章を一連の問いとして整理した。その現象にはどんな社会的機能があるか。誰が規則を作り、逸脱と認定するのか。誰がある状況を社会問題として訴え、事実や数字はその主張をどう支えるのか。この流れを下のマインドマップにまとめた。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-tags', '<span>構築主義</span><span>クレイム申し立て</span><span>統計の社会的構築</span><span>第1章読了</span>'],

    ['#study-2026-10-07', '「隠れた逸脱」から<br>「社会問題の構築」へ'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-date span', '水曜 / 03'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-card-kicker', '逸脱研究 → 社会問題'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-question', '「黙認」「未発見」「法の空白」のうち、どれが隠れた逸脱に当たるのか。'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-notes section:nth-child(1) h4', '事例を修正する'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-notes section:nth-child(1) p', '「隠れた逸脱」には、<strong>既存の規則への違反</strong>がありながら、関係者がその具体的な行為を逸脱として認定していないことが必要だ。論文の盗用が行われたのに、オリジナルと見なされている場合がわかりやすい。違反が認定されていて、ただ黙認・不処罰となった場合を、「追及されなかった」だけでこの類型に入れることはできない。適用される規則がなければ、判断の根拠から確認する。'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-notes section:nth-child(2) h4', '定義される過程を問う'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-notes section:nth-child(2) p', '社会問題の構築主義は、<strong>誰がクレイムを申し立て、どう名付け、誰に責任を求め、機関がどう反応するか</strong>に注目する。うつ病を公共的な議題として扱う例では、個人の苦痛が集団的な支援を要する問題としてどう提起されるかを調べる。「構築された」と言っても、苦痛が架空だという意味ではない。'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-reflection', '今日の学び：研究者は、ある主張の真偽の判断をいったん留保し、クレイムと反応の過程を観察できる。これは研究対象を限定する方法であり、主張を無条件に支持することではない。最後に、機能主義、ラベリング理論、構築主義を一枚の日本語の図に整理した。'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-tags', '<span>隠れた逸脱</span><span>構築主義</span><span>クレイム申し立て</span>'],

    ['#study-2026-10-06', '行為が起きたとき、<br>社会はどう認定するのか'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-date span', '火曜 / 02'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-card-kicker', '規則と社会的な認定'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-question', 'かつての「投機倒把」（投機的な売買を取り締まった中国の罪名）の変化から考えた。逸脱の境界は規則とともに変わるのだろうか。'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-paragraph', 'この事例から、<strong>行為、適用される規則、社会的な評価</strong>を分けて考える必要があるとわかった。ある経済活動の法的地位が変わっても、旧罪名に含まれたすべての行為が合法化されたわけではない。また、誰も問題視しなくなったとも推論できない。'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(1) span', '規則を守る・逸脱と認定されない'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(1) strong', '同調行動'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(2) span', '規則に違反・逸脱と認定されない'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(2) strong', '隠れた逸脱'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(3) span', '規則を守る・逸脱と認定される'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(3) strong', '誤って告発された行動'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(4) span', '規則に違反・逸脱と認定される'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-matrix div:nth-child(4) strong', '正真正銘の逸脱'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-reflection', '四つの組み合わせは、「実際に何をしたか」と「周囲が何をしたと考えたか」の隔たりを示している。逸脱者と呼ばれたことだけでは違反の事実を推論できず、違反が発見されなかったからといって規則が存在しないわけでもない。'],
    ['article[aria-labelledby="study-2026-10-06"] .sociology-tags', '<span>ラベリング理論</span><span>四つの行動類型</span><span>規則の歴史性</span>'],

    ['#study-2026-10-05', '「何の役割があるか」から<br>「誰が逸脱と呼ぶか」へ'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-date span', '月曜 / 01'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-card-kicker', '二つの理論への入口'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-question', '「機能主義？」「ラベリング理論？」——日本語の教材に出てきた二つの用語から始まった。'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(1) h4', '機能主義'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(1) p', '家族や学校などの制度を社会システムの中に位置づけ、それがどんな結果をもたらし、他の部分とどうつながるかを考える。「機能」は当事者の主観的な目的でも、道徳的な正当性でもない。デュルケーム、パーソンズ、マートンはそれぞれ異なる分析の手がかりを与える。'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(2) h4', 'ラベリング理論'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(2) p', 'ベッカーは「なぜ規則に違反するのか」から、<strong>誰が規則を作り、誰がラベルを貼る権力をもち、そのラベルが当人の扱われ方をどう変えるか</strong>へ視線を移した。ラベルは逸脱者という地位や社会的反応に影響するが、実際の行為の検討を不要にするわけではない。'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-reflection', '出発点は二つの定義を暗記することではなかった。同じ現象でも、問いの立て方によって、まったく異なる構造が見えてくる。'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-tags', '<span>機能主義</span><span>ラベリング理論</span><span>ハワード・S・ベッカー</span>'],

    ['.sociology-map-kicker', '第1章 / マインドマップ'],
    ['#sociology-map-title', '第1章 · マインドマップ'],
    ['.sociology-map-heading > p', '五つの枝をたどり、社会問題研究の視点の変化を振り返る。'],
    ['.sociology-map-center span', '中心となる問い / 01'],
    ['.sociology-map-center strong', '社会問題は、<br>いかに「問題」になるのか'],
    ['.sociology-map-center p', '研究の焦点は、現象そのものから、規則、クレイム、社会的な反応へと移る。'],
    ['.sociology-map-branch:nth-child(1) .map-number', '01 / 機能主義'],
    ['.sociology-map-branch:nth-child(1) h4', '機能主義'],
    ['.sociology-map-branch:nth-child(1) p', '現象は社会システムにどんな結果をもたらすか。デュルケームは犯罪が規範を明確にする可能性を論じた。「機能がある」ことは「正当である」ことではない。'],
    ['.sociology-map-branch:nth-child(2) .map-number', '02 / ラベリング理論'],
    ['.sociology-map-branch:nth-child(2) h4', 'ラベリング理論'],
    ['.sociology-map-branch:nth-child(2) p', '誰が規則を作り、誰が逸脱者と認定されるのか。実際の規則違反と社会的な認定を分けると、四つの組み合わせが見える。'],
    ['.sociology-map-branch:nth-child(3) .map-number', '03 / 構築主義'],
    ['.sociology-map-branch:nth-child(3) h4', '社会問題の構築主義'],
    ['.sociology-map-branch:nth-child(3) p', '誰がクレイムを申し立て、どう問題を名付け、支持を集め、反応を引き出すのか。主張の真偽の判断をいったん留保し、観察可能な相互作用を研究する。'],
    ['.sociology-map-branch:nth-child(4) .map-number', '04 / 経験的研究'],
    ['.sociology-map-branch:nth-child(4) h4', '経験的研究の道筋'],
    ['.sociology-map-branch:nth-child(4) p', '定義、レトリック、制度的文脈、統計の生産と利用を追う。事実が論拠になる過程を分析すると同時に、証拠を丁寧に確かめる。'],
    ['.sociology-map-branch:nth-child(5) .map-number', '05 / 事例研究'],
    ['.sociology-map-branch:nth-child(5) h4', '児童虐待をめぐる研究'],
    ['.sociology-map-branch:nth-child(5) p', '『〈児童虐待〉の構築』は、「増加・深刻化」という語りが、定義の変化、機関の置かれた状況、メディア、統計とどう結びつくかを検討する。'],
    ['.sociology-map-note', '方法上の境界：主張がどう形成されたかを説明することは、現実の被害を否定することではない。クレイム活動の記述にも証拠が必要である。'],

    ['.sociology-synthesis-kicker', '三つの問い方'],
    ['#sociology-synthesis-title', '同じ現象に、<br>三つの問いを。'],
    ['.sociology-synthesis li:nth-child(1) span', '01 / 機能主義'],
    ['.sociology-synthesis li:nth-child(1) p', '社会システムにどんな結果をもたらすか。'],
    ['.sociology-synthesis li:nth-child(2) span', '02 / ラベリング理論'],
    ['.sociology-synthesis li:nth-child(2) p', '誰が規則を作り、誰が逸脱者と認定されるか。'],
    ['.sociology-synthesis li:nth-child(3) span', '03 / 構築主義'],
    ['.sociology-synthesis li:nth-child(3) p', '誰が公共的な問題として提起し、どんな反応を受けるか。'],
    ['.sociology-source', '<a href="https://chatgpt.com/share/6ac58f86-b75c-83ee-abda-2fb4ac1cf96d" target="_blank" rel="noopener noreferrer">10月5〜7日の学習対話 ↗</a>と<a href="https://chatgpt.com/share/6ac74d89-07e8-83ee-9a71-3210e27c609e" target="_blank" rel="noopener noreferrer">10月8日の学習対話 ↗</a>をもとに整理。日付は日本時間。マインドマップは対話で扱った第1章の内容を要約したもので、教材全文の転載ではない。']
  ];
  const nodes = translations.map(([selector, japanese]) => {
    const element = root.querySelector(selector);
    if (!element) throw new Error(`Sociology translation target missing: ${selector}`);
    return {element, chinese: element.innerHTML, japanese};
  });
  const buttons = [...root.querySelectorAll('[data-sociology-lang]')];
  const timeline = root.querySelector('.sociology-timeline');
  const switcher = root.querySelector('.sociology-language');
  function setLanguage(lang) {
    const japanese = lang === 'ja';
    for (const node of nodes) node.element.innerHTML = japanese ? node.japanese : node.chinese;
    root.lang = japanese ? 'ja' : 'zh-CN';
    timeline.setAttribute('aria-label', japanese ? '社会学の学習年表。新しい記録から順に表示' : '社会学学习时间轴，最新记录在前');
    switcher.setAttribute('aria-label', japanese ? '学習記録の言語切り替え' : '学习日志语言切换');
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sociologyLang === lang)));
    try { localStorage.setItem('polyphony-sociology-language', lang); } catch { /* Storage is optional. */ }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.sociologyLang)));
  let saved = 'zh';
  try { saved = localStorage.getItem('polyphony-sociology-language') || 'zh'; } catch { /* Storage is optional. */ }
  setLanguage(saved === 'ja' ? 'ja' : 'zh');
})();
