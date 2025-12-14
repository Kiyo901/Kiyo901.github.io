// === Kiyo日语 - 数据总控中心 (修复版) ===

// 1. 获取精选单词 (来自 vocab.js)
const finalVocab = (typeof coreVocab !== 'undefined') ? coreVocab : [];

// 2. 获取标准单词 (来自 dict_vocab.js) --- ⚠️ 之前漏掉的就是这里 ⚠️
const bulkVocabList = (typeof bulkVocab !== 'undefined') ? bulkVocab : [];

// 3. 强制合并：把标准单词塞到精选单词后面
// 这样搜索时就能搜到所有词了
finalVocab.push(...bulkVocabList);

// 4. 导出数据给网站使用
const kiyoData = {
    vocab: finalVocab, // 现在这里包含了所有单词
    
    // === 👇 核心语法库 (N5-N1 完整版) 👇 ===
    grammar: [
        // === N5 语法 ===
        { "level": "N5", "main": "A は B です", "meaning": "A是B (判断/定义)", "example": "私は独身です。プロの独身です。", "exampleMean": "我是单身。我是职业单身狗。" },
        { "level": "N5", "main": "A は B じゃありません", "meaning": "A不是B (否定)", "example": "これは料理じゃありません。毒です。", "exampleMean": "这不仅仅是料理。这是毒药。" },
        { "level": "N5", "main": "S + か", "meaning": "表示疑问", "example": "あなたはバカですか。", "exampleMean": "你是笨蛋吗？" },
        { "level": "N5", "main": "N + の + N", "meaning": "…的 (所属)", "example": "これは元カノの写真です。", "exampleMean": "这是前女友的照片。" },
        { "level": "N5", "main": "Place + に + います/あります", "meaning": "在… (存在)", "example": "私の心にあなたがいます。", "exampleMean": "我的心里有你。" },
        { "level": "N5", "main": "N + を + V-ます", "meaning": "做某事 (动作对象)", "example": "毎日、寂しさを食べています。", "exampleMean": "我每天都在以寂寞为食。" },
        { "level": "N5", "main": "V-ません", "meaning": "不做…/不… (否定/习惯)", "example": "明日も働きません。", "exampleMean": "明天我也不工作。" },
        { "level": "N5", "main": "V-ました", "meaning": "做了… (过去式)", "example": "給料は消えました。", "exampleMean": "工资消失了（花光了）。" },
        { "level": "N5", "main": "V-たいです", "meaning": "想做…", "example": "猫になりたいです。", "exampleMean": "我想变成一只猫。" },
        { "level": "N5", "main": "V-たくないです", "meaning": "不想做…", "example": "会社に行きたくないです。", "exampleMean": "我不想去公司。" },
        { "level": "N5", "main": "V-て + ください", "meaning": "请做… (请求)", "example": "お金をください。", "exampleMean": "请给我钱。" },
        { "level": "N5", "main": "V-て + います", "meaning": "正在做…", "example": "今、人生を無駄にしています。", "exampleMean": "现在，我正在虚度人生。" },
        { "level": "N5", "main": "V-て + もいいですか", "meaning": "可以做…吗？ (许可)", "example": "ここでキスしてもいいですか。", "exampleMean": "我可以在这里吻你吗？" },
        { "level": "N5", "main": "V-て + は いけません", "meaning": "禁止做…", "example": "私のスマホを見てはいけません。", "exampleMean": "绝对不准看我的手机。" },
        { "level": "N5", "main": "V-ないで + ください", "meaning": "请不要做…", "example": "私を捨てないでください。", "exampleMean": "请不要抛弃我。" },
        { "level": "N5", "main": "Place + へ + V(stem) + に行きます", "meaning": "去某地做某事 (目的)", "example": "イケメンを見に行きます。", "exampleMean": "我要去那个地方看帅哥。" },
        { "level": "N5", "main": "V-ましょう", "meaning": "一起做…吧 (提议)", "example": "結婚しましょう。", "exampleMean": "我们要不结婚吧。" },
        { "level": "N5", "main": "S1 + が、S2", "meaning": "虽然…但是… (转折)", "example": "好きですが、付き合えません。", "exampleMean": "虽然我喜欢你，但我不能和你交往。" },
        { "level": "N5", "main": "S1 + から、S2", "meaning": "因为…所以… (原因)", "example": "顔がいいから、許します。", "exampleMean": "因为脸长得好看，所以我原谅你。" },
        { "level": "N5", "main": "A は B より + Adj", "meaning": "A比B更… (比较)", "example": "花より団子。", "exampleMean": "与其赏花不如吃团子（实惠比外表重要）。" },
        { "level": "N5", "main": "A のほうが + Adj", "meaning": "A方面更… (比较)", "example": "愛よりお金のほうが大切です。", "exampleMean": "比起爱情，钱更重要。" },
        { "level": "N5", "main": "一番 + Adj", "meaning": "最… (最高级)", "example": "世界で一番、姫様が好きです。", "exampleMean": "在这个世界上，我最喜欢公主大人了。" },
        { "level": "N5", "main": "N / Adj + に なります", "meaning": "变成… (变化)", "example": "来年、魔法使いになります。", "exampleMean": "明年，我就要变成魔法师了（指单身到30岁）。" },
        { "level": "N5", "main": "V-たり V-たり します", "meaning": "又…又… (列举动作)", "example": "休みの日は、寝たり、寝たりします。", "exampleMean": "休息日我就睡睡觉，睡睡觉什么的。" },
        { "level": "N5", "main": "V-る + こと が できます", "meaning": "会/能做… (能力)", "example": "どこでも寝ることができます。", "exampleMean": "我拥有在哪都能睡着的超能力。" },
        { "level": "N5", "main": "V-た + こと が あります", "meaning": "曾经做过… (经历)", "example": "振られたことがあります。", "exampleMean": "我有被甩过的经历。" },
        { "level": "N5", "main": "V-る/た + んです", "meaning": "其实是…/强调说明", "example": "トイレに行きたいんです！", "exampleMean": "（别废话了）我真的很想去厕所！" },
        { "level": "N5", "main": "N + と (一緒に)", "meaning": "和…一起", "example": "二次元の嫁と一緒に住んでいます。", "exampleMean": "我和二次元的老婆住在一起。" },
        { "level": "N5", "main": "Sentence + ね", "meaning": "…呢/吧 (确认/共鸣)", "example": "今日は暑いですね。溶けそうですね。", "exampleMean": "今天真热啊，感觉要融化了呢。" },
        { "level": "N5", "main": "Sentence + よ", "meaning": "…哦 (告知/强调)", "example": "チャックが開いていますよ。", "exampleMean": "你的裤链开了哦。" },

        // === N4 语法 ===
        { "level": "N4", "main": "V-れる (可能形)", "meaning": "能/会做… (能力/可能)", "example": "私は日本語で喧嘩ができます。", "exampleMean": "我可以用日语吵架。" },
        { "level": "N4", "main": "V-よう (意向形)", "meaning": "…吧/打算… (意志)", "example": "明日から本気出そう。", "exampleMean": "从明天开始认真起来吧（常见的谎言）。" },
        { "level": "N4", "main": "V-る + つもりです", "meaning": "打算做… (计划)", "example": "イケメンと結婚するつもりです。", "exampleMean": "我打算和帅哥结婚（虽然还没有对象）。" },
        { "level": "N4", "main": "V-よう + と思います", "meaning": "我想做… (意志)", "example": "仕事を辞めようと思います。", "exampleMean": "我想辞职。" },
        { "level": "N4", "main": "V-て + しまいます", "meaning": "…了/糟糕了 (遗憾/完了)", "example": "大切なケーキを食べてしまいました。", "exampleMean": "我不小心把那个重要的蛋糕吃掉了。" },
        { "level": "N4", "main": "V-て + みます", "meaning": "试着做… (尝试)", "example": "一度、死んでみます？", "exampleMean": "要试着死一次吗？（地狱少女梗）" },
        { "level": "N4", "main": "V-た + ほうがいい", "meaning": "最好做… (建议)", "example": "その男はやめたほうがいい。", "exampleMean": "那个男人你最好还是放弃吧（渣男预警）。" },
        { "level": "N4", "main": "V-ない + ほうがいい", "meaning": "最好别做… (建议)", "example": "真実を知らないほうがいい。", "exampleMean": "你最好不要知道真相。" },
        { "level": "N4", "main": "V(stem) + すぎます", "meaning": "过于…/太… (过度)", "example": "あなたは可愛すぎます。罪です。", "exampleMean": "你太可爱了。这是犯罪。" },
        { "level": "N4", "main": "V(stem) + ながら", "meaning": "一边…一边… (同时进行)", "example": "泣きながらご飯を食べたことがありますか。", "exampleMean": "你有过一边哭一边吃饭的经历吗？" },
        { "level": "N4", "main": "V-なきゃ / なければなりません", "meaning": "必须做… (义务)", "example": "地球を守らなければなりません。", "exampleMean": "我必须守护地球（其实只是要去打工）。" },
        { "level": "N4", "main": "V-なくてもいいです", "meaning": "不…也可以 (非义务)", "example": "無理しなくてもいいですよ。", "exampleMean": "不用勉强自己也可以哦（暖男发言）。" },
        { "level": "N4", "main": "V-て + あげます", "meaning": "为别人做… (授受)", "example": "宿題を見せてあげる。", "exampleMean": "作业借给你抄（给你看）。" },
        { "level": "N4", "main": "V-て + くれます", "meaning": "别人为我做… (授受)", "example": "神様がチャンスをくれました。", "exampleMean": "神赐予了我机会。" },
        { "level": "N4", "main": "V-て + もらいます", "meaning": "请别人为我做… (授受)", "example": "彼氏にカバンを買ってもらいました。", "exampleMean": "我让男朋友给我买了包包。" },
        { "level": "N4", "main": "S + たら、S", "meaning": "如果/要是… (假定条件)", "example": "宝くじが当たったら、連絡しません。", "exampleMean": "如果中了彩票，我就不联系你了。" },
        { "level": "N4", "main": "V-て + も", "meaning": "即使…也… (逆接)", "example": "世界が滅んでも、君を守る。", "exampleMean": "即使世界毁灭，我也要守护你（中二病全开）。" },
        { "level": "N4", "main": "N + なら", "meaning": "如果是…的话 (话题)", "example": "お金なら、ありません。", "exampleMean": "如果是说钱的话，我没有。" },
        { "level": "N4", "main": "V-ば / Adj-ければ", "meaning": "如果… (条件)", "example": "押せば、開きます。", "exampleMean": "推一下，就开了（指门，或者心扉）。" },
        { "level": "N4", "main": "V-る + と、S", "meaning": "一…就… (必然结果)", "example": "夜になると、寂しくなります。", "exampleMean": "一到晚上，就会变得寂寞。" },
        { "level": "N4", "main": "S(普通形) + かもしれません", "meaning": "也许/可能… (推测)", "example": "彼は宇宙人かもしれません。", "exampleMean": "他也许是个外星人。" },
        { "level": "N4", "main": "S(普通形) + でしょう", "meaning": "…吧/大概… (推测)", "example": "犯人はあなたでしょう。", "exampleMean": "犯人大概就是你吧。" },
        { "level": "N4", "main": "S(普通形) + そうです", "meaning": "听说… (传闻)", "example": "あの二人は別れたそうです。やった！", "exampleMean": "听说那两个人分手了。太棒了！" },
        { "level": "N4", "main": "V(stem)/Adj(stem) + そうです", "meaning": "看起来… (样态)", "example": "そのケーキ、美味しそうですね。一口ちょうだい。", "exampleMean": "那个蛋糕看起来很好吃呢。给我吃一口。" },
        { "level": "N4", "main": "S(普通形) + ようです / みたいです", "meaning": "好像… (比喻/推测)", "example": "まるで夢のようです。", "exampleMean": "简直就像在做梦一样。" },
        { "level": "N4", "main": "V(stem) + やすい / にくい", "meaning": "容易/难… (难易)", "example": "このペンは書きやすいが、太りやすい。", "exampleMean": "这支笔很好写，但我很容易发胖（强行押韵）。" },
        { "level": "N4", "main": "V-る/N + ために", "meaning": "为了… (目的/利益)", "example": "推しのために働いています。", "exampleMean": "我是为了我的偶像（推）而工作的。" },
        { "level": "N4", "main": "V-る/ない + ように", "meaning": "为了能… (目标/状态变化)", "example": "クビにならないように、頑張ります。", "exampleMean": "为了不被炒鱿鱼，我会努力的。" },
        { "level": "N4", "main": "V-れる (受身形)", "meaning": "被… (被动)", "example": "みんなに笑われました。", "exampleMean": "我被大家嘲笑了。" },
        { "level": "N4", "main": "V-させる (使役形)", "meaning": "让…做… (使役)", "example": "私を待たせないで。", "exampleMean": "别让我等。" },

        // === N3 语法 ===
        { "level": "N3", "main": "V-ちゃう / じゃう", "meaning": "…了 (V-てしまう的口语缩略)", "example": "あ、彼氏のプリン、食べちゃった。", "exampleMean": "啊，不小心把男朋友的布丁吃掉了（毫无悔意）。" },
        { "level": "N3", "main": "V-とく / どく", "meaning": "先…/做好准备 (V-ておく的口语缩略)", "example": "ビール冷やしとくね。", "exampleMean": "我会先把啤酒冰好的（这是今晚最重要的事）。" },
        { "level": "N3", "main": "N + について", "meaning": "关于…", "example": "今夜の夕食について会議を始めます。", "exampleMean": "现在开始召开关于今晚晚饭的会议。" },
        { "level": "N3", "main": "N + にとって", "meaning": "对…来说", "example": "私にとって、スマホは酸素と同じです。", "exampleMean": "对我来说，手机和氧气一样重要。" },
        { "level": "N3", "main": "N + として", "meaning": "作为…", "example": "プロの独身として生きていく。", "exampleMean": "我要作为一名职业单身狗活下去。" },
        { "level": "N3", "main": "V-る + ところです", "meaning": "正要… (即将开始)", "example": "今、勉強するところでした。（嘘）", "exampleMean": "我正要开始学习呢。（弥天大谎）" },
        { "level": "N3", "main": "V-ている + ところです", "meaning": "正在… (进行中)", "example": "今、上司の悪口を言っているところです。", "exampleMean": "现在我正在说上司的坏话。" },
        { "level": "N3", "main": "V-た + ところです", "meaning": "刚刚… (刚刚结束)", "example": "お風呂から上がったところです。見てみます？", "exampleMean": "我刚洗完澡出来。要看看吗？" },
        { "level": "N3", "main": "V-る + べきです", "meaning": "应该… (义务/道理)", "example": "あなたは私を崇拝するべきです。", "exampleMean": "你应该崇拜我。" },
        { "level": "N3", "main": "V-る + べきではありません", "meaning": "不应该…", "example": "元カレに連絡するべきではありません。", "exampleMean": "你不应该联系前男友（那是自寻死路）。" },
        { "level": "N3", "main": "S(普通形) + わけではありません", "meaning": "并不是说/并非…", "example": "あなたが嫌いなわけではありません。生理的に無理なだけです。", "exampleMean": "并不是说我讨厌你。只是生理上无法接受罢了。" },
        { "level": "N3", "main": "V-ます(stem) + かけ", "meaning": "做到一半/没做完", "example": "飲みかけのタピオカが捨ててあります。", "exampleMean": "这里扔着一杯喝了一半的珍珠奶茶。" },
        { "level": "N3", "main": "V-ます(stem) + きる", "meaning": "彻底做完/到了极限", "example": "給料を使い切りました。", "exampleMean": "我把工资花得精光。" },
        { "level": "N3", "main": "V-ます(stem) + たて", "meaning": "刚刚做好的 (新鲜)", "example": "焼きたてのパンより、焼きたての恋がいい。", "exampleMean": "比起刚烤好的面包，我更想要新鲜出炉的恋爱。" },
        { "level": "N3", "main": "V-ます(stem) + 直す", "meaning": "重新…", "example": "メイクを直すから、3時間待って。", "exampleMean": "我要补妆（重画），你在那等3个小时。" },
        { "level": "N3", "main": "N + ばかり", "meaning": "光是…/净是…", "example": "文句ばかり言わないでください。", "exampleMean": "请不要净说些抱怨的话。" },
        { "level": "N3", "main": "V-て + ばかりいます", "meaning": "老是做… (负面习惯)", "example": "息子はゲームをしてばかりいます。", "exampleMean": "我儿子老是在打游戏。" },
        { "level": "N3", "main": "V-た + ものだ", "meaning": "以前常常… (回忆)", "example": "昔は私も可愛かったものです。", "exampleMean": "想当年，我也是很可爱的（岁月不饶人）。" },
        { "level": "N3", "main": "S(普通形) + といっても", "meaning": "虽说…但是…", "example": "料理ができるといっても、カップ麺だけです。", "exampleMean": "虽说我会做饭，但也只限于泡面。" },
        { "level": "N3", "main": "V-る/N-の + ついでに", "meaning": "顺便…", "example": "コンビニに行くついでに、私の人生も探してきて。", "exampleMean": "去便利店的时候，顺便帮我找找我的人生。" },
        { "level": "N3", "main": "S(普通形) + 気がします", "meaning": "感觉好像… (预感)", "example": "今日は何かいいことが起こる気がします。", "exampleMean": "感觉今天会发生什么好事（通常是错觉）。" },
        { "level": "N3", "main": "いくら/どんなに + V-て + も", "meaning": "无论怎么…也…", "example": "いくら寝ても、眠いです。", "exampleMean": "无论怎么睡，还是很困。" },
        { "level": "N3", "main": "S(普通形) + かどうか", "meaning": "是不是…/是否…", "example": "おいしいかどうか、毒見してください。", "exampleMean": "好不好吃，请你帮我试毒（试吃）。" },
        { "level": "N3", "main": "N + に比べて", "meaning": "和…相比", "example": "去年の私に比べて、今の私は老けました。", "exampleMean": "和去年的我相比，现在的我苍老了。" },
        { "level": "N3", "main": "N + だけでなく", "meaning": "不仅…而且…", "example": "彼は貧乏なだけでなく、性格も悪いです。", "exampleMean": "他不仅穷，性格还很差（没救了）。" },
        { "level": "N3", "main": "V-る + ことはありません", "meaning": "没必要…/用不着…", "example": "謝ることはありません。お金で解決しましょう。", "exampleMean": "没必要道歉。我们用钱解决吧。" },
        { "level": "N3", "main": "N + によって", "meaning": "根据… (因人而异)", "example": "人によって、態度を変えます。", "exampleMean": "我会根据对象不同而改变态度（双标）。" },
        { "level": "N3", "main": "S(普通形) + んじゃない？", "meaning": "是不是…？ (确认/推测)", "example": "それ、詐欺なんじゃない？", "exampleMean": "那个，该不会是诈骗吧？" },
        { "level": "N3", "main": "V-る + ことがあります", "meaning": "有时会… (频率)", "example": "たまに自分が誰かわからなくなることがあります。", "exampleMean": "有时候我会不知道自己是谁。" },
        { "level": "N3", "main": "N + という + N", "meaning": "叫…的/所谓的…", "example": "「推し」という概念が私を救いました。", "exampleMean": "是所谓的“推（偶像）”这一概念拯救了我。" },

        // === N2 语法 (付费) ===
        { "level": "N2", "main": "V-る + わけにはいかない", "meaning": "不能…/不可以… (基于社会常识或心理负担)", "example": "明日も仕事だから、死ぬわけにはいかない。", "exampleMean": "明天还要上班，所以我还不能死（社畜的觉悟）。" },
        { "level": "N2", "main": "V-ない + こともない", "meaning": "也不是不…/未必不… (消极肯定)", "example": "あなたのことが好きじゃないこともない。", "exampleMean": "我也不是不喜欢你（死傲娇专用）。" },
        { "level": "N2", "main": "V-ない + ざるを得ない", "meaning": "不得不…/只好… (无奈)", "example": "部長のギャグには、笑わざるを得ない。", "exampleMean": "面对部长的冷笑话，我不得不笑。" },
        { "level": "N2", "main": "V-ます(stem) + かねない", "meaning": "很有可能… (负面预测)", "example": "彼なら、私の財布を盗みかねない。", "exampleMean": "如果是他的话，很有可能会偷我的钱包。" },
        { "level": "N2", "main": "S(普通形) + に違いない", "meaning": "一定…/肯定… (确信)", "example": "犯人はヤスに違いない。", "exampleMean": "犯人肯定是阿安（经典推理梗）。" },
        { "level": "N2", "main": "V-て + しょうがない / たまらない", "meaning": "…得不得了 (无法控制)", "example": "新しいiPhoneが欲しくてしょうがない。", "exampleMean": "我想要新iPhone想得不得了（虽然没钱）。" },
        { "level": "N2", "main": "N + の / V-る/た + とおりに", "meaning": "按照…/正如…", "example": "私の言ったとおりにしないから、振られるんですよ。", "exampleMean": "正因为你不按我说的做，所以才会被甩啊。" },
        { "level": "N2", "main": "V-る / N-の + 恐れがある", "meaning": "恐怕会…/有…的危险", "example": "このままでは、一生独身の恐れがあります。", "exampleMean": "照这样下去，恐怕会注孤生。" },
        { "level": "N2", "main": "V-る + ものか / もんか", "meaning": "决不…/怎么会… (强烈否定)", "example": "二度とあいつに金を貸すものか。", "exampleMean": "我决不会再借钱给那家伙了（Flag）。" },
        { "level": "N2", "main": "V-る + 一方だ", "meaning": "不断…/越来越… (通常指负面变化)", "example": "ストレスはたまる一方です。", "exampleMean": "压力只会不断积攒。" },
        { "level": "N2", "main": "S(普通形) + からといって", "meaning": "虽说…但也…/不能因为…就…", "example": "暇だからといって、あなたに会いたいわけではない。", "exampleMean": "虽说我很闲，但也并不是想见你。" },
        { "level": "N2", "main": "S(普通形) + 上(に)", "meaning": "而且…/不仅…还… (累加)", "example": "この部屋は狭い上に、家賃が高い。", "exampleMean": "这房间不仅窄，房租还贵（坑爹）。" },
        { "level": "N2", "main": "N + はもちろん / はもとより", "meaning": "…不用说，就连…", "example": "彼は英語はもちろん、宇宙語も話せます。", "exampleMean": "英语自不必说，他连宇宙语都会说（形容人奇怪）。" },
        { "level": "N2", "main": "S(普通形) + に越したことはない", "meaning": "莫过于…/最好是…", "example": "イケメンに越したことはない。", "exampleMean": "男朋友当然是越帅越好（虽然找不到）。" },
        { "level": "N2", "main": "N + をめぐって", "meaning": "围绕着… (争论/对立)", "example": "最後の唐揚げをめぐって、兄弟が戦った。", "exampleMean": "围绕着最后一块炸鸡，兄弟俩开战了。" },
        { "level": "N2", "main": "V-た + あげく", "meaning": "结果…/最后… (负面结果)", "example": "2時間待たされたあげく、ドタキャンされた。", "exampleMean": "让人等了2个小时，结果最后还被放鸽子了。" },
        { "level": "N2", "main": "V-ます(stem) + がたい", "meaning": "难以… (心理上难)", "example": "信じがたいことですが、私はまだ20代です。", "exampleMean": "虽然难以置信，但我真的还是20多岁。" },
        { "level": "N2", "main": "V-た + きり", "meaning": "自从…就再没…/只有…", "example": "彼とは３年前に会ったきりです。", "exampleMean": "我和他自从3年前见过之后就再没见过了。" },
        { "level": "N2", "main": "S(普通形) + どころか", "meaning": "别说…就连…/非但…反而…", "example": "貯金どころか、借金が増えました。", "exampleMean": "别说存钱了，债务反而增加了。" },
        { "level": "N2", "main": "S(普通形) + に決まっている", "meaning": "一定… (口语)", "example": "それは嘘に決まっている。", "exampleMean": "那一定是谎言。" },
        { "level": "N2", "main": "V-ます(stem) + ようがない", "meaning": "无法…/没法… (手段)", "example": "スマホが壊れて、連絡しようがありません。", "exampleMean": "手机坏了，没法联系。" },
        { "level": "N2", "main": "S(普通形) + ものの", "meaning": "虽然…但是…", "example": "ジムに入会したものの、一度も行っていません。", "exampleMean": "虽然办了健身房的卡，但一次都没去过。" },
        { "level": "N2", "main": "N/V-る + 際(に)", "meaning": "…时候 (正式)", "example": "私が死んだ際には、ハードディスクを破壊してください。", "exampleMean": "在我死的时候，请务必销毁我的硬盘。" },
        { "level": "N2", "main": "N + に先立って", "meaning": "在…之前 (正式)", "example": "交際に先立って、年収を教えてください。", "exampleMean": "在交往之前，请告诉我你的年收入。" },
        { "level": "N2", "main": "V-ます(stem) + 次第（しだい）", "meaning": "一…立刻…", "example": "給料が入り次第、返します。", "exampleMean": "工资一到账，我立刻还钱（常用借口）。" },
        { "level": "N2", "main": "V-る + につれて", "meaning": "随着…", "example": "大人になるにつれて、夢が消えていきます。", "exampleMean": "随着长大成人，梦想也随之消失了。" },
        { "level": "N2", "main": "Adj/N/V + だけに", "meaning": "正因为…所以更加…", "example": "期待していただけに、ガッカリしました。", "exampleMean": "正因为曾期待过，所以更加失望。" },
        { "level": "N2", "main": "N + にしたら / にすれば", "meaning": "对…来说 (立场)", "example": "猫にしたら、人間はただの給餌機です。", "exampleMean": "对猫来说，人类不过是喂食器罢了。" },
        { "level": "N2", "main": "V-る + ことだ", "meaning": "应该… (建议/忠告)", "example": "痩せたいなら、食べないことだ。", "exampleMean": "想瘦的话，就别吃。" },
        { "level": "N2", "main": "S(普通形) + というより", "meaning": "与其说…不如说…", "example": "彼は歌手というより、コメディアンです。", "exampleMean": "与其说他是歌手，不如说他是喜剧演员。" },

        // === N1 语法 (付费) ===
        { "level": "N1", "main": "V-る + べく", "meaning": "为了… (书面目的)", "example": "神になるべく、プログラミングを始めました。", "exampleMean": "为了成为神，我开始学习编程。" },
        { "level": "N1", "main": "N + ならいざしらず", "meaning": "如果是…还情有可原，但是…", "example": "子供ならいざしらず、大人がその服は犯罪です。", "exampleMean": "如果是小孩子也就算了，成年人穿那件衣服就是犯罪。" },
        { "level": "N1", "main": "S(普通形) + かと思いきや", "meaning": "原以为…没料到… (意外)", "example": "告白かと思いきや、壺を売られました。", "exampleMean": "原以为他是要表白，结果他是要卖我壶。" },
        { "level": "N1", "main": "N + 以外の何物でもない", "meaning": "正是…/不外乎是… (断定)", "example": "この残業は、拷問以外の何物でもない。", "exampleMean": "这加班，根本就是拷问。" },
        { "level": "N1", "main": "N + あっての", "meaning": "有了…才有… (强调条件)", "example": "推しあっての私です。", "exampleMean": "正是有了我的偶像（推），才有了现在的我。" },
        { "level": "N1", "main": "N + もさることながら", "meaning": "…自不必说，…更加…", "example": "彼女は顔もさることながら、資産もすごい。", "exampleMean": "她长得好看自不必说，资产更是惊人（阿姨我不想努力了）。" },
        { "level": "N1", "main": "V-て + からというもの", "meaning": "自从…以后 (发生巨大变化)", "example": "結婚してからというもの、夫は抜け殻のようです。", "exampleMean": "自从结了婚，丈夫就像个空壳一样。" },
        { "level": "N1", "main": "N + にかかわる", "meaning": "关系到…/影响到… (重大后果)", "example": "ハゲるかどうかは、男の尊厳にかかわる問題だ。", "exampleMean": "秃不秃头，是关系到男人尊严的问题。" },
        { "level": "N1", "main": "N + を余儀（よぎ）なくされる", "meaning": "不得不…/被迫… (硬性局势)", "example": "不祥事で、辞任を余儀なくされました。", "exampleMean": "因为丑闻，被迫辞职了。" },
        { "level": "N1", "main": "N + をおいて～ない", "meaning": "除了…没有… (唯一性)", "example": "世界を救えるのは、俺をおいて他にない。", "exampleMean": "能拯救世界的，除了我没别人（中二病晚期）。" },
        { "level": "N1", "main": "N + にあるまじき", "meaning": "不该有的/不相称的 (严厉批评)", "example": "それはアイドルにあるまじき発言です。", "exampleMean": "那是作为偶像不该有的发言。" },
        { "level": "N1", "main": "V-る + に（は）あたらない", "meaning": "用不着…/没什么值得…", "example": "驚くにはあたりません。私は天才ですから。", "exampleMean": "用不着惊讶。因为我是天才。" },
        { "level": "N1", "main": "N/V-ます + こそすれ", "meaning": "虽然…但绝对不…", "example": "感謝こそすれ、恨むことなどありません。", "exampleMean": "我只有感谢，绝无怨恨（虽然眼神里充满了杀气）。" },
        { "level": "N1", "main": "V-よう + が / と", "meaning": "无论…都…", "example": "世界がどうなろうが、知ったことではない。", "exampleMean": "无论世界变得怎样，都关我屁事。" },
        { "level": "N1", "main": "N + と相まって", "meaning": "再加上…/与…配合", "example": "不細工な顔と相まって、性格も最悪です。", "exampleMean": "丑陋的脸庞再加上最差的性格（简直绝望）。" },
        { "level": "N1", "main": "V-る + きらいがある", "meaning": "有…的倾向 (负面)", "example": "彼は話を盛るきらいがある。", "exampleMean": "他有夸大其词的毛病。" },
        { "level": "N1", "main": "V-る + べからざる", "meaning": "禁止…的/不该…的 (修饰名词)", "example": "パソコンに「見るべからざるフォルダ」があります。", "exampleMean": "电脑里有一个“绝对不准看”的文件夹。" },
        { "level": "N1", "main": "N + にかこつけて", "meaning": "借口…/托辞…", "example": "残業にかこつけて、不倫しています。", "exampleMean": "借口加班，其实在搞婚外情。" },
        { "level": "N1", "main": "V-る + にかたくない", "meaning": "不难… (察觉/想象)", "example": "彼の絶望は、想像にかたくない。", "exampleMean": "他的绝望，不难想象。" },
        { "level": "N1", "main": "V-る + に足る（たる）", "meaning": "值得…/足以…", "example": "信頼に足る情報は、ネットにはない。", "exampleMean": "网上没有值得信赖的信息。" },
        { "level": "N1", "main": "N + に即して（そくして）", "meaning": "根据…/按照… (标准)", "example": "事実に即して、弁解してください。", "exampleMean": "请依据事实进行辩解。" },
        { "level": "N1", "main": "N + をものともせず", "meaning": "不顾…/克服… (正面赞扬)", "example": "親の反対をものともせず、ニートになりました。", "exampleMean": "不顾父母的反对，我毅然成为了啃老族（用法错误但很真实）。" },
        { "level": "N1", "main": "N + をよそに", "meaning": "无视…/不顾… (冷漠)", "example": "親の心配をよそに、遊びまくっています。", "exampleMean": "完全无视父母的担心，到处疯玩。" },
        { "level": "N1", "main": "V-つ + V-つ", "meaning": "时而…时而… (互相动作)", "example": "満員電車で、押しつ押されつしています。", "exampleMean": "在满员电车里，大家挤来挤去。" },
        { "level": "N1", "main": "N + めく", "meaning": "带有…气息/像…一样", "example": "別れ話が、脅迫めいてきました。", "exampleMean": "分手的话题，带上了一股威胁的味道。" },
        { "level": "N1", "main": "Number/S + といったところだ", "meaning": "大概…/顶多… (程度不高)", "example": "私の年収？猫の餌代といったところです。", "exampleMean": "我的年收入？顶多也就是猫粮钱吧。" },
        { "level": "N1", "main": "S(普通形) + とは", "meaning": "竟然… (惊讶)", "example": "彼が女だったとは。", "exampleMean": "没想到他竟然是女的（剧情反转）。" },
        { "level": "N1", "main": "V-ん + ばかりに", "meaning": "显出…的样子/简直要…", "example": "「金を出せ」と言わんばかりに、手を出した。", "exampleMean": "他伸出手，脸上写满了“把钱交出来”。" },
        { "level": "N1", "main": "Number + からある", "meaning": "…以上/多达… (强调数量多)", "example": "一億からある借金を背負っています。", "exampleMean": "我背负着多达一亿的债务。" },
        { "level": "N1", "main": "V-る + くらいなら", "meaning": "与其…不如… (极端比较)", "example": "あいつと付き合うくらいなら、死んだほうがマシだ。", "exampleMean": "与其和那家伙交往，我还不如去死。" }
    ],

    // === 👇 真题库 (升级版结构) 👇 ===
    quiz: {
        // === N5 真题 ===
        N5: {
            vocab: [
                { "type": "reading", "question": "「新しい」辞書を買いました。", "options": ["あたらしい", "うつくしい", "めずらしい", "いそがしい"], "answer": 0, "explain": "新しい（あたらしい）：新的。" },
                { "type": "reading", "question": "毎日、本を「読み」ます。", "options": ["のみ", "よみ", "すみ", "やすみ"], "answer": 1, "explain": "読む（よむ）：读。" },
                { "type": "writing", "question": "えきの「きた」に銀行があります。", "options": ["北", "外", "右", "比"], "answer": 0, "explain": "北（きた）：北边。" },
                { "type": "writing", "question": "「でんき」をつけてください。", "options": ["天気", "電気", "元気", "空気"], "answer": 1, "explain": "電気（でんき）：电灯/电。" },
                { "type": "context", "question": "カレーは　スプーンで　___。", "options": ["飲みます", "食べます", "行きます", "来ます"], "answer": 1, "explain": "用勺子吃（食べます）。" },
                { "type": "context", "question": "今日は　とても　___です。コートを着ます。", "options": ["あつい", "さむい", "ぬるい", "あまい"], "answer": 1, "explain": "很冷（さむい），所以穿大衣。" },
                { "type": "context", "question": "父と母の　___に　私がいます。", "options": ["あいだ", "うえ", "なか", "そば"], "answer": 0, "explain": "在父亲和母亲之间（あいだ）。" },
                { "type": "context", "question": "田中さんは　ギターが　___です。", "options": ["じょうぶ", "じょうず", "べんり", "ゆうめい"], "answer": 1, "explain": "吉他弹得很好（じょうず）。" },
                { "type": "paraphrase", "question": "「あしたは　やすみです。」と同じ意味の文はどれですか。", "options": ["あしたは　仕事です。", "あしたは　働きません。", "あしたは　勉強します。", "あしたは　寝ません。"], "answer": 1, "explain": "休息 = 不工作（働きません）。" },
                { "type": "paraphrase", "question": "「きれい」な花ですね。", "options": ["うつくしい", "きたない", "ちいさい", "ながい"], "answer": 0, "explain": "きれい（漂亮）= 美しい（うつくしい）。" }
            ],
            grammar: [
                { "level": "N5", "question": "毎日　コーヒー___　飲みます。", "options": ["が", "を", "に", "へ"], "answer": 1, "explain": "解析：表示动作的对象（喝咖啡），使用助词「を」。" },
                { "level": "N5", "question": "あしたは　日曜日___、学校は　休みです。", "options": ["から", "ので", "でも", "まで"], "answer": 0, "explain": "解析：表示原因（因为明天是周日），N5常用「から」。" },
                { "level": "N5", "question": "教室に　学生が　___。", "options": ["あります", "います", "ありません", "からです"], "answer": 1, "explain": "解析：表示有生命的人或动物的存在，使用「います」。" },
                { "level": "N5", "question": "図書館で　本を　___　ください。", "options": ["読む", "読んで", "読みて", "読んて"], "answer": 1, "explain": "解析：请求句型「～てください」，「読む」的て形是「読んで」。" },
                { "level": "N5", "question": "私は　日本料理が　___。", "options": ["好きです", "好きます", "好きではありません", "好きでした"], "answer": 0, "explain": "解析：表达喜好时，对象语用「が」，形容动词肯定形为「好きです」。" },
                { "level": "N5", "question": "きのう、デパートへ　買い物に　___。", "options": ["行きます", "行きました", "行きません", "行って"], "answer": 1, "explain": "解析：时间是昨天（きのう），谓语动词要用过去式「行きました」。" },
                { "level": "N5", "question": "この　靴は　___　ないです。", "options": ["大きい", "大きく", "大き", "大きくて"], "answer": 1, "explain": "解析：一类形容词（い形容词）的否定形式是将「い」变为「く」＋ない。" },
                { "level": "N5", "question": "「いっしょに　帰りませんか。」「ええ、___。」", "options": ["帰りましょう", "帰りません", "帰りますよ", "帰ってください"], "answer": 0, "explain": "解析：回应别人的提议（一起回去吧），表示同意时常用「～ましょう」。" },
                { "level": "N5", "question": "ここで　写真を　___　ください。", "options": ["撮らないで", "撮らなくて", "撮りないで", "撮りなくて"], "answer": 0, "explain": "解析：表示禁止/请不要做某事，句型「V-ないでください」。" },
                { "level": "N5", "question": "田中さんは　今　ご飯を　___　います。", "options": ["食べ", "食べて", "食べた", "食べる"], "answer": 1, "explain": "解析：正在进行时「～ています」，前接动词て形。" }
            ],
            reading: [
                { 
                    article: '今日は日曜日です。私はデパートへ行きました。', 
                    question: '私はどこへ行きましたか？', 
                    options: ['学校', '会社', 'デパート', '病院'], 
                    answer: 2, 
                    explain: '文中提到了去商场。' 
                }
            ],
            listening: [
                { 
                    audio: '', 
                    script: '男の人と女の人が話しています...', 
                    question: '男の人は何を買いますか？', 
                    options: ['りんご', 'みかん', 'バナナ', 'ぶどう'], 
                    answer: 0, 
                    explain: '男人最后说了要买苹果。' 
                }
            ]
        },

        // === N4 真题 ===
        N4: {
            vocab: [
                { "type": "reading", "question": "次の「試合」はいつですか。", "options": ["じごう", "しあい", "しご", "じあい"], "answer": 1, "explain": "試合（しあい）：比赛。" },
                { "type": "reading", "question": "彼は「親切」な人です。", "options": ["しんせつ", "たいせつ", "きんせつ", "あんぜん"], "answer": 0, "explain": "親切（しんせつ）：热情/亲切。" },
                { "type": "writing", "question": "荷物を「おく」りました。", "options": ["起", "送", "遅", "越"], "answer": 1, "explain": "送る（おくる）：寄送。" },
                { "type": "writing", "question": "明日の天気が「しんぱい」です。", "options": ["新配", "心配", "心拝", "心杯"], "answer": 1, "explain": "心配（しんぱい）：担心。" },
                { "type": "context", "question": "雨が　___　から、帰りましょう。", "options": ["やんだ", "とまった", "おわった", "消えた"], "answer": 0, "explain": "雨停了用「やむ」。" },
                { "type": "context", "question": "眼鏡をかけたら、字が　___　見えます。", "options": ["ゆっくり", "はっきり", "すっかり", "びっくり"], "answer": 1, "explain": "戴眼镜后看得清楚（はっきり）。" },
                { "type": "context", "question": "道が　___　いて、遅刻しました。", "options": ["すいて", "こんで", "あいて", "さわいで"], "answer": 1, "explain": "道路拥堵（こむ）。" },
                { "type": "context", "question": "結婚式に　___　されました。", "options": ["しょうたい", "じゅんび", "はんたい", "けいかく"], "answer": 0, "explain": "被邀请（しょうたい）参加婚礼。" },
                { "type": "paraphrase", "question": "「なるべく」早く来てください。", "options": ["必ず", "絶対に", "できるだけ", "もっと"], "answer": 2, "explain": "なるべく = 尽可能（できるだけ）。" },
                { "type": "paraphrase", "question": "母は父に「おこって」います。", "options": ["笑って", "腹を立てて", "泣いて", "謝って"], "answer": 1, "explain": "怒る（生气）= 腹を立てる。" }
            ],
            grammar: [
                { "level": "N4", "question": "この　漢字は　___　書きますか。", "options": ["どう", "どんな", "どれ", "どの"], "answer": 0, "explain": "解析：询问方法/方式时使用「どう」（怎么写）。" },
                { "level": "N4", "question": "雨が　降る___、行きません。", "options": ["と", "なら", "たら", "ば"], "answer": 1, "explain": "解析：N＋なら，表示假设话题的承接，“如果是下雨的话，就不去”。" },
                { "level": "N4", "question": "宿題は　金曜日___　出してください。", "options": ["までに", "まで", "間に", "間"], "answer": 0, "explain": "解析：表示截止期限（在...之前），使用「までに」。" },
                { "level": "N4", "question": "弟に　お菓子を　全部　___。", "options": ["食べました", "食べられました", "食べさせました", "食べてあげました"], "answer": 1, "explain": "解析：被动语态（受身），表示受害，“点心被弟弟全吃光了”。" },
                { "level": "N4", "question": "もっと　日本語が　___　なりたいです。", "options": ["上手", "上手で", "上手に", "上手く"], "answer": 2, "explain": "解析：变化表现，二类形容词（な形容词）＋になります（变得），需要用「に」。" },
                { "level": "N4", "question": "今から　友達に　会いに　___　と思います。", "options": ["行く", "行って", "行こう", "行った"], "answer": 2, "explain": "解析：表示意志/打算，句型「意向形＋と思います」。" },
                { "level": "N4", "question": "この　料理は　___　すぎて、食べられません。", "options": ["辛", "辛い", "辛く", "辛かった"], "answer": 0, "explain": "解析：表示过度「～すぎます」，接形容词时要去掉词尾的「い」。" },
                { "level": "N4", "question": "時間が　ありませんから、___　ください。", "options": ["急ぎ", "急いで", "急ぐ", "急いだ"], "answer": 1, "explain": "解析：因为没时间，所以“请快点”，「急ぐ」的て形是「急いで」。" },
                { "level": "N4", "question": "山田さんは　英語を　話す　こと___　できます。", "options": ["を", "が", "に", "で"], "answer": 1, "explain": "解析：表示能力/可能，句型「V-る ことができます」。" },
                { "level": "N4", "question": "母に　辞書を　買って　___。", "options": ["くれました", "あげました", "もらいました", "やりました"], "answer": 2, "explain": "解析：我“请”妈妈给我买了字典（我从妈妈那里得到买字典这个行为），用「もらいました」。" }
            ], 
            reading: [], listening: []
        },
        
        // === N3 真题 ===
        N3: {
            vocab: [
                { "type": "reading", "question": "「努力」すれば、夢は叶います。", "options": ["どうりょく", "どりょく", "きょうりょく", "のうりょく"], "answer": 1, "explain": "努力（どりょく）。注意短音。" },
                { "type": "reading", "question": "資料を「包」んでください。", "options": ["たた", "つづ", "つつ", "ふく"], "answer": 2, "explain": "包む（つつむ）：包裹。" },
                { "type": "writing", "question": "「ざっし」を読んでいます。", "options": ["雑紙", "雑誌", "冊誌", "雑史"], "answer": 1, "explain": "雑誌（ざっし）：杂志。" },
                { "type": "writing", "question": "席を「ゆず」りました。", "options": ["座", "許", "譲", "助"], "answer": 2, "explain": "譲る（ゆずる）：让（座）。" },
                { "type": "context", "question": "風邪を引いたので、誰かに　___　うつしたくない。", "options": ["せき", "あくび", "くしゃみ", "なみだ"], "answer": 2, "explain": "くしゃみ：喷嚏。不想把感冒传染给别人。" },
                { "type": "context", "question": "あの人は　___　だから、秘密を守れません。", "options": ["おしゃべり", "わがまま", "まじめ", "けち"], "answer": 0, "explain": "おしゃべり：话多/嘴快。" },
                { "type": "context", "question": "バスが遅れたので、駅まで　___　走りました。", "options": ["あわてて", "せっかく", "いきなり", "こっそり"], "answer": 0, "explain": "あわてて：慌慌张张地。" },
                { "type": "context", "question": "この薬は　頭痛に　___　ききます。", "options": ["よく", "いい", "よい", "よし"], "answer": 0, "explain": "よく効く：很有效。" },
                { "type": "paraphrase", "question": "「くたびれました」。", "options": ["暇でした", "疲れました", "驚きました", "困りました"], "answer": 1, "explain": "くたびれる = 疲れる（累）。" },
                { "type": "paraphrase", "question": "それは「とんでもない」話です。", "options": ["面白い", "珍しい", "信じられない", "役に立たない"], "answer": 2, "explain": "とんでもない = 荒唐的/难以置信的。" }
            ],
            grammar: [
                { "level": "N3", "question": "この　店の　料理は　美味しい___、値段も　安いです。", "options": ["上に", "くせに", "せいで", "わりに"], "answer": 0, "explain": "解析：表示累加，“不仅...而且...”，使用「上に」。" },
                { "level": "N3", "question": "彼が　犯人だ　___　証拠は　ありません。", "options": ["にとって", "という", "に対して", "について"], "answer": 1, "explain": "解析：用于定义或说明同位语内容，“所谓的...”，使用「という」。" },
                { "level": "N3", "question": "先生、荷物を　___　しましょうか。", "options": ["お持ち", "持ち", "持って", "持たせて"], "answer": 0, "explain": "解析：自谦语，表示主动为对方做某事，句型「お＋V-ます＋します」。" },
                { "level": "N3", "question": "あの　人は　寂し___　目を　しています。", "options": ["そうな", "ような", "げな", "らしい"], "answer": 2, "explain": "解析：表示某种神情、样态，形容词词干＋「げ」，「寂しげ」（寂寞的神情）。" },
                { "level": "N3", "question": "説明書を　___　とおりに、組み立ててください。", "options": ["書く", "書いて", "書いた", "書こう"], "answer": 2, "explain": "解析：表示“按照...”，接续动词时常用「V-た＋とおりに」或「V-る＋とおりに」，此处强调按照写好的内容。" },
                { "level": "N3", "question": "子供が　寝ている___　洗濯を　しました。", "options": ["あいだ", "うちに", "最中に", "たびに"], "answer": 1, "explain": "解析：表示“趁着...（如果不做就会发生变化）”，使用「うちに」。" },
                { "level": "N3", "question": "父は　毎朝　新聞を　___　まま、ご飯を　食べます。", "options": ["読む", "読んで", "読んだ", "読み"], "answer": 2, "explain": "解析：表示保持某种状态进行动作，动词接续用「V-た＋まま」。" },
                { "level": "N3", "question": "いくら　___　、上手になりません。", "options": ["練習すれば", "練習しても", "練習するなら", "練習したのに"], "answer": 1, "explain": "解析：表示逆接条件，“无论怎么...也...”，句型「いくら～ても」。" },
                { "level": "N3", "question": "社長は　会議室に　___。", "options": ["いらっしゃいます", "参ります", "申します", "お目にかかります"], "answer": 0, "explain": "解析：尊敬语，「いる」的尊敬语是「いらっしゃる」。其他选项均为自谦语。" },
                { "level": "N3", "question": "ここで　タバコを　___　いけません。", "options": ["吸っては", "吸えば", "吸うなら", "吸うと"], "answer": 0, "explain": "解析：表示禁止，“不能...”，句型「V-ては いけません」。" }
            ], 
            reading: [], listening: []
        },
        
        // === N2 真题 (付费) ===
        N2: {
            vocab: [
                { "type": "reading", "question": "注文を「承」りました。", "options": ["うけ", "うけたまわ", "こば", "さまたげ"], "answer": 1, "explain": "承る（うけたまわる）：恭敬地接受/听取。" },
                { "type": "reading", "question": "計画は「未定」です。", "options": ["みてい", "みじょう", "びてい", "みさだ"], "answer": 0, "explain": "未定（みてい）。" },
                { "type": "writing", "question": "部屋の空気を「かんき」します。", "options": ["換気", "喚気", "歓気", "関機"], "answer": 0, "explain": "換気（かんき）：换气。" },
                { "type": "writing", "question": "「ふくすう」の人が集まっています。", "options": ["復数", "複数", "複敏", "復敏"], "answer": 1, "explain": "複数（ふくすう）：复数/多个。" },
                { "type": "context", "question": "彼は冗談を言って、場を　___　。", "options": ["なぐさめた", "なごませた", "なやませた", "なじませた"], "answer": 1, "explain": "场を和ませる（なごませる）：缓和气氛。" },
                { "type": "context", "question": "その意見は、私の考えと　___　しています。", "options": ["共通", "合致", "同感", "共存"], "answer": 1, "explain": "合致（がっち）：一致/吻合。" },
                { "type": "context", "question": "説明が　___　で、よくわかりません。", "options": ["あいまい", "あざやか", "おだやか", "さわやか"], "answer": 0, "explain": "曖昧（あいまい）：含糊不清。" },
                { "type": "context", "question": "今回の失敗を　___　、次は頑張ります。", "options": ["チャンスに", "きっかけに", "あてに", "バネに"], "answer": 3, "explain": "バネにする：以此为跳板/动力。" },
                { "type": "paraphrase", "question": "「ただちに」避難してください。", "options": ["すぐに", "静かに", "順番に", "遠くに"], "answer": 0, "explain": "直ちに（ただちに） = すぐに（立刻）。" },
                { "type": "paraphrase", "question": "彼は「そっけない」態度をとった。", "options": ["真剣な", "冷たい", "失礼な", "曖昧な"], "answer": 1, "explain": "素っ気ない = 冷淡（冷たい）。" }
            ],
            grammar: [
                { "level": "N2", "question": "この　仕事は　新入社員の　私には　___　がたいです。", "options": ["引き受け", "引き受ける", "引き受けて", "引き受けよう"], "answer": 0, "explain": "解析：表示心理上难以做某事，句型「V-ます形＋がたい」。" },
                { "level": "N2", "question": "一度　決めた　ことだから、___　わけには　いかない。", "options": ["やめる", "やめない", "やめた", "やめて"], "answer": 0, "explain": "解析：表示基于社会常识或心理原因“不能...”，句型「V-る＋わけにはいかない」。" },
                { "level": "N2", "question": "彼は　日本に　来た　___、日本語が　一言も　話せない。", "options": ["くせに", "せいで", "おかげで", "わりに"], "answer": 0, "explain": "解析：含有责备语气的转折，“明明...却...”，使用「くせに」。" },
                { "level": "N2", "question": "地震の　___　、エレベーターを　使わないでください。", "options": ["際", "最中", "たび", "折"], "answer": 0, "explain": "解析：表示“...的时候”（正式场合/紧急情况），使用「際（さい）」。" },
                { "level": "N2", "question": "親の　反対を　___　、二人は　結婚した。", "options": ["めぐって", "もとに", "押し切って", "はじめ"], "answer": 2, "explain": "解析：排除阻力/反对，“强行.../坚持...”，使用「～を押し切って」。" },
                { "level": "N2", "question": "勉強も　しない　___　、文句ばかり　言っている。", "options": ["ことで", "もので", "上で", "くせして"], "answer": 3, "explain": "解析：「くせに」的口语强调形式，表示“明明...却...”。" },
                { "level": "N2", "question": "この　曲を　聞く　___　、故郷を　思い出す。", "options": ["につけ", "たびに", "とおり", "にそって"], "answer": 0, "explain": "解析：表示“每当...就会...”（常伴随感情），句型「～につけ」。" },
                { "level": "N2", "question": "彼は　天才だ。　努力家　___　。", "options": ["であることだ", "でなくてなんだろう", "にすぎない", "にほかならない"], "answer": 3, "explain": "解析：表示断定，“无非是.../正是...”，句型「～にほかならない」。" },
                { "level": "N2", "question": "お客様の　ご希望に　___　、プランを　変更しました。", "options": ["関して", "対して", "応じて", "とって"], "answer": 2, "explain": "解析：表示“响应/根据...（变化）”，使用「～に応じて」。" },
                { "level": "N2", "question": "そんな　ことを　言おう　___　なら、彼に　殺される。", "options": ["こと", "もの", "わけ", "はず"], "answer": 1, "explain": "解析：表示假设某种极端的负面情况，“万一...的话”，句型「意向形＋ものなら」。" }
            ], 
            reading: [], listening: []
        },
        
        // === N1 真题 (付费) ===
        N1: {
            vocab: [
                { "type": "reading", "question": "チームの結束を「培」う。", "options": ["にな", "つちか", "そこな", "まかな"], "answer": 1, "explain": "培う（つちかう）：培养。" },
                { "type": "reading", "question": "事態は「甚」だしい。", "options": ["はなは", "いた", "さわが", "わずら"], "answer": 0, "explain": "甚だしい（はなはだしい）：甚/非常（多含贬义）。" },
                { "type": "writing", "question": "両国の関係を「きんみつ」にする。", "options": ["近密", "緊密", "近蜜", "緊蜜"], "answer": 1, "explain": "緊密（きんみつ）：紧密。" },
                { "type": "writing", "question": "「てぎわ」よく料理を作る。", "options": ["手際", "手技", "手極", "手木"], "answer": 0, "explain": "手際（てぎわ）：手法/本领。" },
                { "type": "context", "question": "会社の　___　に背いた行為は許されない。", "options": ["指図", "規範", "規約", "軌道"], "answer": 1, "explain": "規範（きはん）：规范。" },
                { "type": "context", "question": "彼は入社早々、大仕事を　___　やってのけた。", "options": ["まんまと", "さらりと", "てっきり", "まるきり"], "answer": 1, "explain": "さらりと：利落地/轻而易举地。" },
                { "type": "context", "question": "この議論は、問題の本質から　___　している。", "options": ["逸脱", "分散", "棄権", "遮断"], "answer": 0, "explain": "逸脱（いつだつ）：偏离。" },
                { "type": "context", "question": "その言い訳は、あまりにも　___　。", "options": ["苦しい", "痛い", "辛い", "激しい"], "answer": 0, "explain": "苦しい言い訳：牵强的/站不住脚的借口。" },
                { "type": "paraphrase", "question": "「あくどい」商売をしている。", "options": ["賢い", "悪質な", "派手な", "人気のある"], "answer": 1, "explain": "あくどい = 恶劣/手段肮脏（悪質な）。" },
                { "type": "paraphrase", "question": "計画が「頓挫」した。", "options": ["成功した", "延期になった", "途中でだめになった", "完了した"], "answer": 2, "explain": "頓挫（とんざ） = 受挫/中途停顿（途中でだめになった）。" }
            ],
            grammar: [
                { "level": "N1", "question": "彼女は　有名女優　___　、プライドが　高い。", "options": ["とあって", "あれば", "あって", "あっても"], "answer": 0, "explain": "解析：表示原因/特别的状况，“正因为是...”，句型「N ＋ とあって」。" },
                { "level": "N1", "question": "いかなる　理由が　___　、暴力は　許されない。", "options": ["あると", "あろうと", "あれば", "あったり"], "answer": 1, "explain": "解析：表示“无论...都...”，句型「(疑问词) ～うと / ～うが」。" },
                { "level": "N1", "question": "彼は　一言も　挨拶する　___　、帰って　しまった。", "options": ["ことなしに", "ことなくて", "ことなく", "ことないで"], "answer": 2, "explain": "解析：书面语，表示“没有做...就...”，句型「V-る＋ことなく」。" },
                { "level": "N1", "question": "スマホが　ない　生活など、今の　若者には　考え___　。", "options": ["うる", "かねない", "ざる", "ようがない"], "answer": 3, "explain": "解析：表示“无法.../没办法...”，句型「V-ます形＋ようがない」。" },
                { "level": "N1", "question": "この　絵は　趣味の　___　を　出ない。", "options": ["範囲", "限界", "領域", "域"], "answer": 3, "explain": "解析：惯用搭配，「域を出ない」表示“没超出...的程度”，意为水平一般。" },
                { "level": "N1", "question": "大臣の　発言は、国民を　侮辱する　___　。", "options": ["ものがある", "ものではない", "ものでしかない", "ものを禁じ得ない"], "answer": 1, "explain": "解析：表示强烈的否定劝诫，“决不能.../不该...”，句型「～ものではない」。" },
                { "level": "N1", "question": "事実を　知った　___　、黙っている　わけには　いかない。", "options": ["手前", "反面", "以上", "始末"], "answer": 2, "explain": "解析：表示“既然...就...”，句型「～以上（は）」。" },
                { "level": "N1", "question": "あの　映画は　見る　___　価値が　ない。", "options": ["に", "と", "や", "で"], "answer": 0, "explain": "解析：表示“值得.../经得起...”，句型「V-る＋に足る」，否定形常用「見るにたえない」或此处的「見るに（足る）価値がない」。" },
                { "level": "N1", "question": "手術は　成功したが、まだ　楽観は　___　。", "options": ["許さない", "許されない", "許せない", "許そう"], "answer": 1, "explain": "解析：惯用搭配，「予断を許さない」或「楽観は許されない」，表示“不容.../不能...”。" },
                { "level": "N1", "question": "家に　帰る　___　、倒れ込んで　しまった。", "options": ["そばから", "なり", "やいなや", "が早いか"], "answer": 1, "explain": "解析：表示前项动作刚一结束，紧接着发生后项（通常是意外的），主语通常为第三人称，句型「V-る＋なり」。" }
            ], 
            reading: [], listening: []
        }
    }
};