'use strict';
// The Chinese copy stays in the HTML as a no-JavaScript fallback. Keep Japanese
// translations here so every dated entry and the chapter map share one switch.
(() => {
  const root = document.querySelector('#sociology-log');
  if (!root) return;
  const translations = [
    ['.sociology-kicker', '<span class="section-index" aria-hidden="true">LEARNING /</span> 社会学 / 学習記録'],
    ['#sociology-title', '社会学<br><span>学習記録。</span>'],
    ['.sociology-header-grid > div > p', '一つの問いから始め、日々理解を修正する。<br>概念と事例、そして考え方が変わった過程を記録する。'],
    ['.sociology-count', '2026.10.05 — 10.15 · 8件の記録 / 第1章読了・振り返り'],
    ['.sociology-map-shortcut', '第1章のマインドマップを見る <span aria-hidden="true">↗</span>'],
    ['.resource-kicker', 'STUDY DESK / 大学院入試の復習'],
    ['.resource-title', '社会学用語解説<span>。</span>'],
    ['.resource-copy', '定義、研究者、具体例、混同しやすい点をつなぐ。<br>理論から調査方法まで。検索にも、暗記の確認にも。'],
    ['.resource-meta', '中文 / 日本語<br>検索 · 分類 · お気に入り · 復習 <b aria-hidden="true">↗</b>'],

    ["#study-2026-10-15", "事例は説明できた。<br>では、本文の主張は何か。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-date span", "木曜 / 08"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-card-kicker", "第1章の授業を振り返る · 本文・論証・資料"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-question", "概念を説明し、事例を挙げられれば、著者を理解したと言えるのだろうか。今回の振り返りで、本文へ意識が戻った。著者は何に答え、どのように論証を進めているのか。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(1) h3", "まず本文の主張をつかむ"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(1) p", "報告の軸は、<strong>本文の主張と論証のつながり</strong>に置く。脚注、分類表、自分の事例は理解を助けるものだ。取り上げるたびに、著者のどの主張を説明し、なぜここに置かれ、前後の議論とどうつながるのかを示したい。分類を説明するだけでは、著者がそれを必要とした理由は伝わらない。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(2) h3", "マートン：「真の問題」を誰が判断するか"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(2) p", "本章で検討される疑問は、ある定義が社会学者に<strong>「真の社会問題」を見分ける</strong>立場を与えることに向けられている。人々がまだ気づいていない問題まで発見できるとすれば、その特別な判断能力は何によって裏づけられるのか。この問いを説明することが、続く議論を理解する手がかりになる。ここでは、本章における社会問題の定義の検討に焦点を絞る。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(3) h3", "ラベリング理論：認定の過程も統計に入る"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(3) p", "ラベリング理論では、<strong>誰がある行為を逸脱と認定するのか</strong>を問う。犯罪統計の記録件数は、認定基準、被害の届け出、取締り、記録手続きにも左右され、実際の発生件数とそのまま同一視できない。地域間の数字を比べる際には、誰が記録し、どの行為が記録され、手続きが共通しているかも確かめる必要がある。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(4) h3", "構築主義：クレイムの活動を追う"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(4) p", "スペクターとキツセの<strong>「クレイム申し立て活動」</strong>を理解するには、問題を提起する活動を具体的に捉える必要がある。誰が、いつ、「これは問題だ」と述べ、誰に何を求め、周囲がどう応答し、活動がどう展開したのか。うつ病などを例にする場合も、当事者、家族、専門家それぞれの主張と、その時間的な順序を確かめたい。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(5) h3", "研究対象：まず用語を正確にする"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(5) p", "日本語の<strong>「高校卒業者」は高校を卒業した人</strong>を指し、大学を卒業した人なら「大学卒業者／大卒者」と書く。まず必要なのは用語の確認であり、研究対象は、研究上の問いと資料に基づいて自分で決める必要がある。研究計画の実際の表現を確認し、なぜその集団を対象とするのかを、問いと資料に基づいて説明したい。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(6) h3", "「問題化」をたどる具体的な資料を探す"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-notes section:nth-child(6) p", "統計は雇用現象の分布や変化を示す。一方、報道、団体の声明、政策文書は、その現象が対処すべき問題としてどう提起されたかを追う資料になる。今後は<strong>「行為者―時期―一次資料―主張―研究対象との関係」</strong>の表を作り、具体的に示して引用できる証拠を探したい。現象の深刻さだけでは、問題化の過程を説明したことにはならない。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-paragraph", "本文を整理するときは、小節ごとに<strong>「問い―主張―根拠―事例の役割―前後のつながり」</strong>を書き出し、ページ番号を添える方法を試したい。「本文の要約」と「自分の考察」を分け、自分の連想が本文のどの主張に対応するかを明示する。そのうえで本を閉じ、日本語で主張と論証を説明し、説明できない箇所は本文に戻って確認する。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-reflection", "これからの復習では本文を軸に、概念を著者の論証の中へ戻して考えたい。ベッカーとマートンの間にも連続する点がある。本章がマートン、ラベリング理論、構築主義と進む順序を、それぞれが前の理論を完全に置き換える一直線の図にはできない。後の議論が何に応え、何を引き継ぎ、どこを進めたのかを説明する必要がある。"],
    ["article[aria-labelledby=\"study-2026-10-15\"] .sociology-tags", "<span>第1章の振り返り</span><span>本文と論証</span><span>ラベリング理論</span><span>クレイム申し立て活動</span><span>研究資料</span>"],

    ["#study-2026-10-14", "なぜ従うのか。<br>自分の活動を誰が掌握するのか。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-date span", "水曜 / 07"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-card-kicker", "概念を確かめる · 支配・規則・疎外"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-question", "今日はウェーバーの正当な支配から、マルクスの疎外へと理解を深めた。日常語の意味と理論上の概念を区別し、自分の事例がどの条件を満たすかを確かめたい。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(1) h3", "正当性：行為者が認める根拠を問う"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(1) p", "まず区別したいのは、ウェーバーの<strong>正当性</strong>が、関係する行為者が支配の根拠を認めることを指す点だ。研究者が道徳的に賛成することとは分けて考える。また、服従が見られても、内面で承認しているとは限らない。恐れ、利害の計算、他の選択肢の欠如も服従を生む。三類型が分析するのは正当性への信念であり、服従の動機すべてではない。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(2) h3", "三類型：服従の根拠を比べる"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(2) p", "三つの仮定で覚えた。宗族の成員が代々の慣習に従って後継の長を受け入れるのは伝統的支配、支持者が運動の指導者に非凡な使命を認めるのはカリスマ的支配、教員が大学の教務責任者の規則に基づく職務権限を認めるのは合法的支配だ。根拠はそれぞれ<strong>伝統、非凡な個人、規則と職務</strong>にある。これらは理念型であり、現実では混合しうる。必ず順に通過する三つの歴史段階にはできない。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(3) h3", "非人格性：人が替わっても規則は続く"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(3) p", "「非人格的」は、<strong>一般的な規則と職務権限</strong>から理解したい。「人間味がない」という意味ではない。教務手続きに二種類の書類が必要なら、適切な手続きで就任した別の担当者に替わっても、その要件は続く。私的な好き嫌いで基準は変えられない。担当者自身も規則に拘束され、権限は教務に限られるため、申請者の私生活まで指図できるわけではない。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(4) h3", "疎外：自分の創造が自分を支配する"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(4) p", "午後に「疎外」を確かめたとき、マルクスの概念を、<strong>人が自分の活動と成果を掌握できず、自らの創造が外的な支配力になる関係</strong>として覚えた。労働者が製品を作っても、その用途や生産の方法、速度を決められず、生産物が資本の力として自分に対立する場面を想定する。分析したいのはこの労働関係であり、「仕事がつらい」という一言だけでは判断できない。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(5) h3", "四つの側面と概念の境界"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(5) p", "四つの側面を<strong>生産物、活動、類的本質、人間相互の関係</strong>に沿って整理した。成果が他者に掌握され、活動が外部から支配され、自由で意識的な創造や能力の発展が制限され、人間関係が支配、競争、手段としての計算によって組織されることだ。考えを作品にするのは対象化であり、それ自体が疎外なのではない。孤独感、苦労、低賃金だけでは労働の支配関係を判断できず、高賃金も疎外がない証明にはならない。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(6) h3", "夜の事例選び：二つの軸を分ける"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-notes section:nth-child(6) p", "夜には、無理があると感じた事例を外し、隠れた逸脱の説明には<strong>論文の盗用が発見されていない場合</strong>を引き続き用いた。「実際に規則に違反しているか」と「逸脱として認定されたか」を別々に確認する必要がある。この場合は規則違反がある一方、それに対応する認定はない。事例を選び直して、親しみやすさだけで残さず、分類の条件を説明できるか確かめたいと思った。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-paragraph", "今日の手がかりは<strong>服従の理由、規則、労働関係</strong>だった。それぞれ異なる角度から社会関係を見る助けになるが、一つの理論にまとめることはできない。ウェーバーの正当性の類型、マルクスの疎外、ラベリング理論には、それぞれ固有の問いと分析対象がある。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-reflection", "これからは、自分の事例が概念の条件に一つずつ合うか確かめ、本文に戻って根拠を確認したい。用語を日常の言葉に置き換えるのは一歩だ。何と区別され、どの根拠で成り立つかまで説明して、覚えやすい事例だけで理論を理解したつもりにならないようにしたい。"],
    ["article[aria-labelledby=\"study-2026-10-14\"] .sociology-tags", "<span>正当な支配</span><span>理念型</span><span>非人格性</span><span>疎外</span><span>事例と概念</span>"],
    ["#study-2026-10-13", "理論を研究計画へ。<br>まず何を問うのか。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-date span", "火曜 / 06"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-card-kicker", "第1章 · 理論から研究の問いへ"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-question", "構築主義を自分の雇用研究にどう用い、学校が授業以外に果たす作用をどう検証するか。今日は、事例を資料によって答えられる問いへ変えることを考えた。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(1) h3", "雇用研究：問題をめぐる主張を分けて読む"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(1) p", "第1章を雇用研究の計画につなげるなら、誰がある状況をどのような問題と名付け、原因を個人、学校、企業、制度のどこに求め、誰に対応を要求するかを問える。政策文書、報道、研究報告を読む際には、<strong>命名、行為者、原因の説明、責任、証拠、対策</strong>を分けて記し、そのつながりを比較したい。今は分析の問いを示す段階であり、研究結果ではない。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(2) h3", "政策資料：複数の説明は併存しうる"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(2) p", "2003年の『若者自立・挑戦プラン』は、資料の候補として考えられる。若者の意識や能力に関する個人レベルの説明と、雇用機会、教育・雇用制度に関する構造的な説明が、どう併存し、組み合わされ、施策に結びつくかを確かめたい。「以前は個人の責任、後に構造の問題」という筋書きを先に置かない。広く若者の雇用を扱う資料が、自分の研究対象や<strong>「初職」の段階</strong>に当てはまるかも確認が必要である。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(3) h3", "学校の機能：判断を仮説として問い直す"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(3) p", "学校は、生活のリズム、見守り、監督、相談先とのつながり、集団への統合も提供しうる。ただし、いずれも<strong>検証すべき機能仮説</strong>である。「職業学校の生徒は攻撃的だ」というラベルを事実として扱うことはできない。誰がその判断を下し、生徒にどう影響するかも問いとなる。集団での接触や管理は異なる結果を生みうるため、見守りのない時間の減少が、衝突の減少を意味するとは限らない。実際の効果を調べる必要がある。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(4) h3", "顕在的機能と潜在的機能：意図と認識を見る"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-notes section:nth-child(4) p", "<strong>顕在的機能と潜在的機能は、意図と認識によって判断する</strong>。見守りや生活指導がもともとの目標であり、その実際の結果も意図され、認識されていれば、顕在的機能に当たりうる。意図されず、認識もされていない結果が、潜在的機能に該当する。「授業ではない」だけでは分類できない。関係者ごとの目標や認識に加え、誰に利益や損害をもたらすかも調べたい。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-paragraph", "次に、<strong>資料が適用できる範囲と、検証する命題</strong>を整理したい。雇用資料は対象、時期、就業段階を確認する。学校の例では、見守り、統合、管理、衝突を分け、それぞれの根拠を探す。異なる効果を一つの大まかな評価にまとめないようにする。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-reflection", "第1章から得たのは、問いの立て方を見直す方法である。構築主義では説明と応答を追い、機能分析では実際の結果を見極める。資料の適切さも仮説の妥当性も、これから確かめる必要がある。何らかの機能が見つかっても、それだけで教育上の不足や過度な管理が正当化されるわけではない。"],
    ["article[aria-labelledby=\"study-2026-10-13\"] .sociology-tags", "<span>第1章</span><span>雇用研究の計画</span><span>クレイム</span><span>機能仮説</span><span>顕在的機能と潜在的機能</span>"],
    ["#study-2026-10-09", "誰が規範を確かめ、<br>誰が問題を提起するのか。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-date span", "金曜 / 05"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-card-kicker", "第1章 · 規範の再確認と問題化"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-question", "犯罪やカンニングへの反応は、集団に何をもたらすのか。構築主義は、問題を提起するという活動をどう捉えるのか。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(1) h3", "デュルケーム：反応が規範を再確認する"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(1) p", "犯罪が非難され、カンニングが処分されるとき、集団は「どの行為を認めないか」も示している。これは、<strong>社会的反応が規範の境界を再確認する</strong>という分析の例である。その結果を考察することから、犯罪を奨励する結論は導けず、被害も見落としてはならない。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(2) h3", "構築主義：判断をいったん留保する意味"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(2) p", "主張の真偽や深刻さについての判断をいったん留保し、まず<strong>誰が提起し、どう説明し、誰が応答するか</strong>、活動がどう展開するかを追う。これは研究の入口を定めることであり、被害が架空だという意味ではない。資料の真偽や現象の変化は、別途検証できる。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(3) h3", "中国の学校いじめ：命名と責任"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(3) p", "中国の学校いじめを例に考える。排除、暴言、暴力は、どのように「子ども同士のけんか」から、対処すべき問題として名付けられるのか。保護者、メディア、学校は事例や統計をどう用い、誰に調査、支援、責任を求めるのか。これは調査の問いであり、その歴史的過程を実証したものではない。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(4) h3", "孤独死：個人の出来事が公的な問題となる過程"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-notes section:nth-child(4) p", "日本の孤独死・孤立死にも、同様の問いを立てられる。メディア、福祉関係者、自治体は個々の出来事を社会的孤立とどう結びつけ、なぜ見守り、地域ネットワーク、福祉サービスを提案するのか。こうした関係を確かめるには具体的な資料が必要であり、例示だけで問題化の道筋を断定することはできない。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-paragraph", "二つの例に、まず<strong>命名、行為者、論拠、応答、その後の変化</strong>という共通の観察項目を当てはめてみる。今後は、それぞれの過程が実際に存在するか、どの順序で生じたかを調べたい。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-reflection", "機能分析は現象や反応が何をもたらすかを問い、構築主義はクレイムと応答を追う。これらの例を資料によって検討し、理解しやすい説明を、そのまま確定した研究結果として扱わないようにしたい。"],
    ["article[aria-labelledby=\"study-2026-10-09\"] .sociology-tags", "<span>第1章</span><span>規範と反応</span><span>構築主義</span><span>日中の分析例</span>"],

    ['#study-2026-10-08', '数字はいかに根拠となり、<br>問題はいかに「問題」になるのか'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-date span', '木曜 / 04'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-card-kicker', '第1章読了 · 社会問題はいかに構築されるか'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-question', '「事実」や「統計」にも形成・流通・利用の過程がある。それは社会問題の研究をどう変えるのか。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(1) h3', 'クレイムから反応へ'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(1) p', '構築主義は<strong>クレイム申し立て、論争、制度的な反応</strong>を経験的な研究対象とする。主張の真偽についての判断をいったん留保し、誰が問題を提起し、どんなレトリックを用い、誰に対応を求め、主張がどう広がり、あるいは沈静化するのかを観察する。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(2) h3', '数字にも社会的な過程がある'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-notes section:nth-child(2) p', '統計には、まず<strong>定義、分類、記録、集計方法</strong>の選択がある。その後、数字はメディアや機関に選ばれ、比較され、引用される。数字が論拠になる過程を研究することは、その数字が虚偽だと決めつけることではない。資料の正確さは別途検証しなければならない。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-paragraph', '教材は『〈児童虐待〉の構築』を例に、「虐待の増加」という公的な語りを、定義の変化、関心の高まり、福祉制度、統計や事例の用いられ方と結びつけて分析する。ここで研究するのは問題が定義され制度化される過程であり、被害を否定することではない。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-reflection', '第1章を一連の問いとして整理した。その現象にはどんな社会的機能があるか。誰が規則を作り、逸脱と認定するのか。誰がある状況を社会問題として訴え、事実や数字はその主張をどう支えるのか。この流れを下のマインドマップにまとめた。'],
    ['article[aria-labelledby="study-2026-10-08"] .sociology-tags', '<span>構築主義</span><span>クレイム申し立て</span><span>統計の社会的構築</span><span>第1章読了</span>'],

    ['#study-2026-10-07', '「隠れた逸脱」から<br>「社会問題の構築」へ'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-date span', '水曜 / 03'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-card-kicker', '逸脱研究 → 社会問題'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-question', '「黙認」「未発見」「法の空白」のうち、どれが隠れた逸脱に当たるのか。'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-notes section:nth-child(1) h3', '事例を修正する'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-notes section:nth-child(1) p', '「隠れた逸脱」には、<strong>既存の規則への違反</strong>がありながら、関係者がその具体的な行為を逸脱として認定していないことが必要だ。論文の盗用が行われたのに、オリジナルと見なされている場合がわかりやすい。違反が認定されていて、ただ黙認・不処罰となった場合を、「追及されなかった」だけでこの類型に入れることはできない。適用される規則がなければ、判断の根拠から確認する。'],
    ['article[aria-labelledby="study-2026-10-07"] .sociology-notes section:nth-child(2) h3', '定義される過程を問う'],
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
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(1) h3', '機能主義'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(1) p', '家族や学校などの制度を社会システムの中に位置づけ、それがどんな結果をもたらし、他の部分とどうつながるかを考える。「機能」は当事者の主観的な目的でも、道徳的な正当性でもない。デュルケーム、パーソンズ、マートンはそれぞれ異なる分析の手がかりを与える。'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(2) h3', 'ラベリング理論'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-notes section:nth-child(2) p', 'ベッカーは「なぜ規則に違反するのか」から、<strong>誰が規則を作り、誰がラベルを貼る権力をもち、そのラベルが当人の扱われ方をどう変えるか</strong>へ視線を移した。ラベルは逸脱者という地位や社会的反応に影響するが、実際の行為の検討を不要にするわけではない。'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-reflection', '出発点は二つの定義を暗記することではなかった。同じ現象でも、問いの立て方によって、まったく異なる構造が見えてくる。'],
    ['article[aria-labelledby="study-2026-10-05"] .sociology-tags', '<span>機能主義</span><span>ラベリング理論</span><span>ハワード・S・ベッカー</span>'],

    ['.sociology-map-kicker', '第1章 / マインドマップ'],
    ['#sociology-map-title', '第1章 · マインドマップ'],
    ['.sociology-map-heading > p', '三つの理論から研究の手順へ。児童虐待の事例で、それぞれの問いを確かめる。'],
    ['.sociology-map-center span', '中心となる問い / 01'],
    ['.sociology-map-center strong', '社会問題は、<br>いかに「問題」になるのか'],
    ['.sociology-map-center p', '研究の焦点は、現象そのものから、規則、クレイム、社会的な反応へと移る。'],

    ['.sociology-synthesis-kicker', '三つの問い方'],
    ['#sociology-synthesis-title', '同じ現象に、<br>三つの問いを。'],
    ['.sociology-synthesis li:nth-child(1) span', '01 / 機能主義'],
    ['.sociology-synthesis li:nth-child(1) p', '社会システムにどんな結果をもたらすか。'],
    ['.sociology-synthesis li:nth-child(2) span', '02 / ラベリング理論'],
    ['.sociology-synthesis li:nth-child(2) p', '誰が規則を作り、誰が逸脱者と認定されるか。'],
    ['.sociology-synthesis li:nth-child(3) span', '03 / 構築主義'],
    ['.sociology-synthesis li:nth-child(3) p', '誰が公共的な問題として提起し、どんな反応を受けるか。'],
    [".sociology-source", "<a href=\"https://chatgpt.com/share/6ac58f86-b75c-83ee-abda-2fb4ac1cf96d\" target=\"_blank\" rel=\"noopener noreferrer\">10月5〜7日の学習対話 ↗</a>、<a href=\"https://chatgpt.com/share/6ac74d89-07e8-83ee-9a71-3210e27c609e\" target=\"_blank\" rel=\"noopener noreferrer\">10月8日の学習対話 ↗</a>、<a href=\"https://chatgpt.com/share/6ad059f0-7290-83e8-a059-dbb892d9d4d8\" target=\"_blank\" rel=\"noopener noreferrer\">10月9・13・14日の学習対話 ↗</a>、<a href=\"https://chatgpt.com/share/6ad056d6-2db8-83ee-8afc-48636fd212e9\" target=\"_blank\" rel=\"noopener noreferrer\">10月15日の授業録音の振り返り ↗</a>をもとに整理。学習日はメッセージの日時を日本時間に換算して記録し、共有ページの作成日で代用しない。10月15日の記録は対話中の録音分析に基づく要約であり、重要な用語・引用・ページ番号は教材で確認する。マインドマップは第1章の概念整理で、教材全文の転載ではない。書籍の刊行年は<a href=\"https://ci.nii.ac.jp/ncid/BA63871273\" target=\"_blank\" rel=\"noopener noreferrer\">CiNii Booksの書誌 ↗</a>に基づき2003年へ訂正。雇用政策の資料は<a href=\"https://www.mhlw.go.jp/shingi/2004/03/s0330-10b3a.html\" target=\"_blank\" rel=\"noopener noreferrer\">厚生労働省の公式概要 ↗</a>も参照。"]
  ];
  const nodes = translations.map(([selector, japanese]) => {
    const element = root.querySelector(selector);
    if (!element) throw new Error(`Sociology translation target missing: ${selector}`);
    return {element, chinese: element.innerHTML, japanese};
  });
  const buttons = [...root.querySelectorAll('[data-sociology-lang]')];
  const timeline = root.querySelector('.sociology-timeline');
  const switcher = root.querySelector('.sociology-language');
  const mapTiers = root.querySelector('.sociology-map-tiers');
  const fourGrid = root.querySelector('.map-four-grid');
  const pageCopy={learning:'学習',glossary:'社会学用語集',international:'国際政治用語集',journal:'社会学の学習記録',author:'記録者 Misaka10320 ↗',back:'← 学習へ戻る',top:'ページ上部へ ↑',skip:'本文へ'};
  const pageNodes=[...document.querySelectorAll('[data-journal-ui]')].map(el=>({el,zh:el.innerHTML,ja:pageCopy[el.dataset.journalUi]}));
  function setLanguage(lang) {
    const japanese = lang === 'ja';
    pageNodes.forEach(n=>n.el.innerHTML=japanese?n.ja:n.zh);
    if(document.body.classList.contains('learning-journal-page')){document.documentElement.lang=japanese?'ja':'zh-CN';document.title=japanese?'社会学の学習記録 · 复调':'社会学学习日志 · 复调';}
    for (const node of nodes) node.element.innerHTML = japanese ? node.japanese : node.chinese;
    root.lang = japanese ? 'ja' : 'zh-CN';
    timeline.setAttribute('aria-label', japanese ? '社会学の学習年表。新しい記録から順に表示' : '社会学学习时间轴，最新记录在前');
    switcher.setAttribute('aria-label', japanese ? '学習記録の言語切り替え' : '学习日志语言切换');
    mapTiers.setAttribute('aria-label', japanese ? '第1章の詳しいマインドマップ' : '第一章详细思维导图');
    fourGrid.setAttribute('aria-label', japanese ? 'ラベリング理論の四つの行動類型' : '标签理论四种行为类型');
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sociologyLang === lang)));
    try { localStorage.setItem('polyphony-sociology-language', lang); } catch { /* Storage is optional. */ }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.sociologyLang)));
  let saved = 'zh';
  try { saved = localStorage.getItem('polyphony-sociology-language') || 'zh'; } catch { /* Storage is optional. */ }
  setLanguage(saved === 'ja' ? 'ja' : 'zh');
})();
