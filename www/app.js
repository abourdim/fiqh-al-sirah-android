/* فقه السيرة — UNDERSTANDING THE PROPHET'S BIOGRAPHY — app.js v1.0 */
/* Based on "Fiqh al-Sirah" by Sheikh Mohammed al-Ghazali (1917-1996) */
/* Hadith verified by Sheikh Nasir al-Din al-Albani */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'فقه السيرة',
    splashSub: 'دروس وعبر من حياة النبي ﷺ',
    splashHint: 'اضغط للتخطي',
    sacredVerse: 'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',
    sacredRef: 'سورة الأحزاب ٣٣: ٢١',
    tabHome: 'الرئيسية', tabSirah: 'السيرة', tabLessons: 'الدروس',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    sirahTitle: 'محطات السيرة النبوية',
    sirahDesc: '٢٠ محطة من حياة النبي ﷺ — كل محطة تحمل درساً عملياً للحياة',
    lessonsTitle: 'دروس وعبر',
    lessonsDesc: 'كيف نستخرج الفقه والحكمة من أحداث السيرة',
    habitsTitle: 'عاداتي النبوية',
    habitsDesc: 'عادات يومية مستوحاة من سنة النبي ﷺ',
    quizTitle: 'من يريد أن يكون عالماً؟',
    quizDesc: 'اختبر معرفتك بالسيرة النبوية',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية نبوية',
    resetBtn: 'إعادة تعيين اليوم',
    dailyLabel: '✨ محطة اليوم',
    event: '📅 الحدث',
    lesson: '📖 الدرس',
    fiqh: '🔍 الفقه',
    hadith: '🕌 الحديث',
    youngMode: '🧒 مستكشف صغير',
    teenMode: '🎓 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    badgeLabel: 'الأوسمة',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في السيرة...',
    streakMsg: 'يوم متتالي!',
    allDone: 'ما شاء الله! أكملت جميع العادات!',
    quizCorrect: 'أحسنت! إجابة صحيحة!',
    quizWrong: 'حاول مرة أخرى!',
    quizNext: 'السؤال التالي',
    quizFinish: 'النتيجة النهائية',
    quizRestart: 'أعد الاختبار',
    quizScore: 'نتيجتك',
    quizLifeline5050: '50/50',
    quizLifelineHint: 'تلميح',
    quizLifelineQuran: 'دليل قرآني',
    splashFeatures: [
      '٢٠ محطة من السيرة النبوية',
      'دروس وعبر عملية للحياة',
      'اختبار "من يريد أن يكون عالماً؟"',
      'نظام نقاط وأوسمة + عادات نبوية'
    ],
  },
  en: {
    appTitle: 'Understanding the Sirah',
    splashSub: 'Lessons from the Prophet\'s Life (pbuh)',
    splashHint: 'tap to skip',
    sacredVerse: 'Indeed, in the Messenger of Allah you have an excellent example',
    sacredRef: 'Surah Al-Ahzab 33:21',
    tabHome: 'Home', tabSirah: 'Sirah', tabLessons: 'Lessons',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    sirahTitle: 'Milestones of the Prophetic Sirah',
    sirahDesc: '20 milestones from the Prophet\'s life (pbuh) — each carries a practical lesson for life',
    lessonsTitle: 'Lessons & Reflections',
    lessonsDesc: 'How to extract wisdom and understanding from the events of the Sirah',
    habitsTitle: 'My Prophetic Habits',
    habitsDesc: 'Daily habits inspired by the Prophet\'s Sunnah (pbuh)',
    quizTitle: 'Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of the Prophetic Sirah',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Prophetic Duas',
    resetBtn: 'Reset Today',
    dailyLabel: '✨ Today\'s Milestone',
    event: '📅 The Event',
    lesson: '📖 The Lesson',
    fiqh: '🔍 The Understanding',
    hadith: '🕌 The Hadith',
    youngMode: '🧒 Young Explorer',
    teenMode: '🎓 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    badgeLabel: 'Badges',
    share: 'Share',
    searchPlaceholder: 'Search the Sirah...',
    streakMsg: 'day streak!',
    allDone: 'Masha\'Allah! All habits completed!',
    quizCorrect: 'Well done! Correct answer!',
    quizWrong: 'Try again!',
    quizNext: 'Next Question',
    quizFinish: 'Final Score',
    quizRestart: 'Retake Quiz',
    quizScore: 'Your Score',
    quizLifeline5050: '50/50',
    quizLifelineHint: 'Hint',
    quizLifelineQuran: 'Quran Clue',
    splashFeatures: [
      '20 milestones of the Prophetic Sirah',
      'Practical lessons and reflections',
      '"Who Wants to Be a Scholar?" quiz',
      'XP & badges system + Prophetic habits'
    ],
  },
  fr: {
    appTitle: 'Comprendre la Sirah',
    splashSub: 'Lecons de la vie du Prophete (sws)',
    splashHint: 'appuyez pour passer',
    sacredVerse: 'Vous avez dans le Messager d\'Allah un excellent modele',
    sacredRef: 'Sourate Al-Ahzab 33:21',
    tabHome: 'Accueil', tabSirah: 'Sirah', tabLessons: 'Lecons',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    sirahTitle: 'Etapes de la Sirah Prophetique',
    sirahDesc: '20 etapes de la vie du Prophete (sws) — chacune porte une lecon pratique pour la vie',
    lessonsTitle: 'Lecons et Reflexions',
    lessonsDesc: 'Comment extraire la sagesse et la comprehension des evenements de la Sirah',
    habitsTitle: 'Mes Habitudes Prophetiques',
    habitsDesc: 'Habitudes quotidiennes inspirees de la Sunnah du Prophete (sws)',
    quizTitle: 'Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances de la Sirah Prophetique',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Prophetiques',
    resetBtn: 'Reinitialiser',
    dailyLabel: '✨ Etape du Jour',
    event: '📅 L\'Evenement',
    lesson: '📖 La Lecon',
    fiqh: '🔍 La Comprehension',
    hadith: '🕌 Le Hadith',
    youngMode: '🧒 Jeune Explorateur',
    teenMode: '🎓 Jeune Savant',
    xpLabel: 'Points d\'Experience',
    levelLabel: 'Niveau',
    badgeLabel: 'Badges',
    share: 'Partager',
    searchPlaceholder: 'Rechercher dans la Sirah...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Masha\'Allah ! Toutes les habitudes accomplies !',
    quizCorrect: 'Bravo ! Bonne reponse !',
    quizWrong: 'Essayez encore !',
    quizNext: 'Question Suivante',
    quizFinish: 'Score Final',
    quizRestart: 'Refaire le Quiz',
    quizScore: 'Votre Score',
    quizLifeline5050: '50/50',
    quizLifelineHint: 'Indice',
    quizLifelineQuran: 'Indice Coranique',
    splashFeatures: [
      '20 etapes de la Sirah Prophetique',
      'Lecons et reflexions pratiques',
      'Quiz « Qui Veut Devenir Savant ? »',
      'Systeme XP & badges + habitudes prophetiques'
    ],
  }
};

// ═══════════════ SIRAH MILESTONES DATA (20 events) ═══════════════
const SIRAH = [
  {
    id:1, emoji:'🌙', year:'570',
    ar:{title:'مولد النبي ﷺ',event:'ولد محمد ﷺ في مكة عام الفيل. يتيم الأب، نشأ في بيئة صحراوية عند مرضعته حليمة السعدية.',lesson:'اليتم لا يمنع العظمة. الله يصنع أبطاله في أصعب الظروف.',fiqh:'الغزالي يقول: لم يكن يتم النبي ﷺ نقصاً بل إعداداً ربانياً ليكون رحمة للعالمين. كل محنة قد تكون منحة.',hadith:'قال ﷺ: "أنا سيد ولد آدم ولا فخر" — رواه الترمذي وصححه الألباني',young:'ولد النبي ﷺ يتيماً بلا أب، لكن الله رعاه وحماه وجعله أعظم إنسان في التاريخ!'},
    en:{title:'Birth of the Prophet (pbuh)',event:'Muhammad (pbuh) was born in Mecca in the Year of the Elephant. An orphan from birth, he was raised in the desert by his wet nurse Halimah.',lesson:'Being an orphan doesn\'t prevent greatness. God shapes His heroes in the most difficult circumstances.',fiqh:'Al-Ghazali says: The Prophet\'s orphanhood was not a deficiency but divine preparation to be a mercy for all worlds. Every trial may be a gift.',hadith:'The Prophet (pbuh) said: "I am the master of the children of Adam, and it is no boast" — reported by al-Tirmidhi, authenticated by al-Albani',young:'The Prophet (pbuh) was born without a father, but God protected him and made him the greatest person in history!'},
    fr:{title:'Naissance du Prophete (sws)',event:'Muhammad (sws) est ne a La Mecque l\'Annee de l\'Elephant. Orphelin de pere, il fut eleve dans le desert par sa nourrice Halima.',lesson:'Etre orphelin n\'empeche pas la grandeur. Dieu faconne Ses heros dans les circonstances les plus difficiles.',fiqh:'Al-Ghazali dit : L\'orphelinat du Prophete n\'etait pas un defaut mais une preparation divine pour etre une misericorde pour tous les mondes.',hadith:'Le Prophete (sws) a dit : « Je suis le maitre des enfants d\'Adam, et ce n\'est pas de la vanite » — rapporte par al-Tirmidhi, authentifie par al-Albani',young:'Le Prophete (sws) est ne sans pere, mais Dieu l\'a protege et en a fait la plus grande personne de l\'histoire !'}
  },
  {
    id:2, emoji:'👦', year:'575-595',
    ar:{title:'الطفولة والشباب',event:'عُرف بالصادق الأمين. رعى الغنم، عمل في التجارة مع عمه أبي طالب، وتزوج خديجة رضي الله عنها.',lesson:'الأمانة والصدق أساس كل نجاح. السمعة الحسنة تُبنى قبل أي رسالة.',fiqh:'الغزالي يؤكد: لقب "الأمين" لم يكن مصادفة. أربعون سنة من الأخلاق الحسنة كانت تمهيداً للنبوة. الدعوة بالقدوة قبل الكلمة.',hadith:'قال ﷺ: "إنما بُعثت لأتمم مكارم الأخلاق" — رواه أحمد وحسّنه الألباني',young:'كان الناس يسمونه "الصادق الأمين" لأنه لم يكذب أبداً ولم يخن أحداً!'},
    en:{title:'Childhood & Youth',event:'Known as "The Truthful" and "The Trustworthy." He shepherded sheep, traded with his uncle Abu Talib, and married Khadijah (may Allah be pleased with her).',lesson:'Honesty and trustworthiness are the foundation of all success. A good reputation is built before any mission.',fiqh:'Al-Ghazali emphasizes: The title "The Trustworthy" was no coincidence. Forty years of excellent character were preparation for prophethood. Leading by example precedes words.',hadith:'The Prophet (pbuh) said: "I was sent to perfect noble character" — reported by Ahmad, graded hasan by al-Albani',young:'People called him "The Truthful and Trustworthy" because he never lied or betrayed anyone!'},
    fr:{title:'Enfance et Jeunesse',event:'Connu comme « Le Veridique » et « Le Digne de Confiance ». Il garda les moutons, commercca avec son oncle Abu Talib, et epousa Khadijah.',lesson:'L\'honnetete et la fiabilite sont le fondement de tout succes. Une bonne reputation se construit avant toute mission.',fiqh:'Al-Ghazali souligne : Le titre « Le Digne de Confiance » n\'etait pas un hasard. Quarante ans de noble caractere etaient une preparation a la prophetie.',hadith:'Le Prophete (sws) a dit : « J\'ai ete envoye pour perfectionner le noble caractere » — rapporte par Ahmad, juge hasan par al-Albani',young:'Les gens l\'appelaient « Le Veridique et Le Digne de Confiance » car il n\'a jamais menti ni trahi personne !'}
  },
  {
    id:3, emoji:'💡', year:'610',
    ar:{title:'نزول الوحي',event:'في غار حراء، نزل جبريل عليه السلام بأول آيات القرآن: "اقرأ". بدأت الرسالة الخاتمة.',lesson:'العزلة للتأمل ليست هروباً بل استعداداً. أعظم الأفكار تولد في السكون.',fiqh:'الغزالي يشرح: اختيار "اقرأ" أول كلمة في الوحي يدل على أن العلم أساس هذا الدين. الإسلام لا يعادي العقل بل يحترمه.',hadith:'قال ﷺ: "ما منكم من أحد إلا وقد وُكّل به قرينه من الجن" — رواه مسلم',young:'نزل الملك جبريل على النبي ﷺ في كهف حراء وقال له: اقرأ! كانت أول كلمة من القرآن!'},
    en:{title:'The First Revelation',event:'In the Cave of Hira, Angel Gabriel descended with the first verses of the Quran: "Read!" The final message began.',lesson:'Solitude for reflection is not escapism but preparation. The greatest ideas are born in silence.',fiqh:'Al-Ghazali explains: The choice of "Read" as the first word of revelation shows that knowledge is the foundation of this religion. Islam does not oppose reason but honors it.',hadith:'The Prophet (pbuh) said: "There is none among you but has a companion from the jinn appointed for him" — reported by Muslim',young:'Angel Gabriel came to the Prophet (pbuh) in a cave called Hira and told him: Read! That was the first word of the Quran!'},
    fr:{title:'La Premiere Revelation',event:'Dans la grotte de Hira, l\'ange Gabriel descendit avec les premiers versets du Coran : « Lis ! » Le message final commenca.',lesson:'La solitude pour la reflexion n\'est pas une fuite mais une preparation. Les plus grandes idees naissent dans le silence.',fiqh:'Al-Ghazali explique : Le choix de « Lis » comme premier mot de la revelation montre que le savoir est le fondement de cette religion.',hadith:'Le Prophete (sws) a dit : « Il n\'y a personne parmi vous qui n\'ait un compagnon parmi les djinns » — rapporte par Muslim',young:'L\'ange Gabriel est venu au Prophete (sws) dans une grotte appelee Hira et lui a dit : Lis ! C\'etait le premier mot du Coran !'}
  },
  {
    id:4, emoji:'🏠', year:'610-613',
    ar:{title:'الدعوة السرية',event:'ثلاث سنوات من الدعوة السرية. آمن أبو بكر وخديجة وعلي وزيد. اجتمعوا في دار الأرقم بن أبي الأرقم.',lesson:'كل مشروع عظيم يبدأ صغيراً. الصبر على البدايات الصعبة سمة الناجحين.',fiqh:'الغزالي يقول: الحكمة تقتضي التدرج. النبي ﷺ لم يبدأ بمواجهة المجتمع كله بل بنى قاعدة صلبة أولاً.',hadith:'قال ﷺ: "بدأ الإسلام غريباً وسيعود غريباً فطوبى للغرباء" — رواه مسلم',young:'بدأ النبي ﷺ بدعوة أقرب الناس إليه سراً. أول من آمن به زوجته خديجة وصديقه أبو بكر!'},
    en:{title:'The Secret Call',event:'Three years of secret preaching. Abu Bakr, Khadijah, Ali, and Zayd believed. They gathered in the house of al-Arqam.',lesson:'Every great project starts small. Patience with difficult beginnings is a trait of the successful.',fiqh:'Al-Ghazali says: Wisdom requires gradualism. The Prophet (pbuh) did not confront the entire society at once but first built a solid foundation.',hadith:'The Prophet (pbuh) said: "Islam began as something strange and will return strange, so blessed are the strangers" — reported by Muslim',young:'The Prophet (pbuh) started by secretly inviting the closest people to him. The first to believe were his wife Khadijah and his friend Abu Bakr!'},
    fr:{title:'L\'Appel Secret',event:'Trois annees de predication secrete. Abu Bakr, Khadijah, Ali et Zayd crurent. Ils se reunissaient dans la maison d\'al-Arqam.',lesson:'Tout grand projet commence petit. La patience avec les debuts difficiles est un trait des gens qui reussissent.',fiqh:'Al-Ghazali dit : La sagesse exige la progressivite. Le Prophete (sws) n\'a pas confronte toute la societe d\'un coup mais a d\'abord construit une base solide.',hadith:'Le Prophete (sws) a dit : « L\'Islam a commence comme quelque chose d\'etrange et reviendra etrange, alors heureux sont les etrangers » — rapporte par Muslim',young:'Le Prophete (sws) a commence par inviter secretement ses proches. Les premiers croyants furent sa femme Khadijah et son ami Abu Bakr !'}
  },
  {
    id:5, emoji:'📢', year:'613',
    ar:{title:'الجهر بالدعوة',event:'أمر الله نبيه بالجهر: "وأنذر عشيرتك الأقربين". صعد على الصفا ودعا قريشاً.',lesson:'الحق لا بد أن يُعلن. الخوف من رد الفعل لا يجب أن يمنع قول الحقيقة.',fiqh:'الغزالي يوضح: الانتقال من السر للعلن كان بتوقيت إلهي. الداعية يحتاج شجاعة لكن أيضاً حكمة في اختيار الوقت.',hadith:'قال ﷺ: "أفضل الجهاد كلمة حق عند سلطان جائر" — رواه أبو داود وصححه الألباني',young:'أمر الله النبي ﷺ أن يخبر الناس جميعاً عن الإسلام بصوت عالٍ وبلا خوف!'},
    en:{title:'The Public Call',event:'God commanded His Prophet to go public: "Warn your closest relatives." He climbed Mount Safa and called Quraysh.',lesson:'Truth must be declared. Fear of reaction should not prevent speaking the truth.',fiqh:'Al-Ghazali explains: The transition from secret to public was divinely timed. A caller needs courage but also wisdom in choosing the right moment.',hadith:'The Prophet (pbuh) said: "The best jihad is a word of truth before an unjust ruler" — reported by Abu Dawud, authenticated by al-Albani',young:'God ordered the Prophet (pbuh) to tell everyone about Islam loudly and without fear!'},
    fr:{title:'L\'Appel Public',event:'Dieu ordonna a Son Prophete de rendre l\'appel public : « Avertis tes proches parents. » Il monta sur le mont Safa et appela Quraysh.',lesson:'La verite doit etre proclamee. La peur de la reaction ne doit pas empecher de dire la verite.',fiqh:'Al-Ghazali explique : Le passage du secret au public etait divinement chronometre. Un predicateur a besoin de courage mais aussi de sagesse.',hadith:'Le Prophete (sws) a dit : « Le meilleur jihad est une parole de verite devant un dirigeant injuste » — rapporte par Abu Dawud, authentifie par al-Albani',young:'Dieu a ordonne au Prophete (sws) de parler de l\'Islam a tout le monde, a voix haute et sans peur !'}
  },
  {
    id:6, emoji:'😰', year:'614-619',
    ar:{title:'الاضطهاد والصبر',event:'عُذّب بلال وآل ياسر. حُوصر بنو هاشم في شِعب أبي طالب ثلاث سنوات. قاطعتهم قريش.',lesson:'الابتلاء اختبار للإيمان. الثبات على الحق أصعب من اعتناقه.',fiqh:'الغزالي يؤكد: لم يكن الاضطهاد عشوائياً بل كان يستهدف الضعفاء أولاً. الإسلام انتصر لأن أصحابه صبروا ولم يتراجعوا.',hadith:'قال ﷺ: "صبراً آل ياسر فإن موعدكم الجنة" — أخرجه الحاكم وصححه الألباني',young:'عذّب الكفار المسلمين الأوائل كثيراً. بلال كان يُعذّب تحت الشمس وهو يقول: أحدٌ أحد!'},
    en:{title:'Persecution & Patience',event:'Bilal and the family of Yasir were tortured. Banu Hashim were besieged in the Valley of Abu Talib for three years. Quraysh boycotted them.',lesson:'Trials are a test of faith. Standing firm on truth is harder than accepting it.',fiqh:'Al-Ghazali emphasizes: The persecution was not random but targeted the weak first. Islam prevailed because its followers endured and never retreated.',hadith:'The Prophet (pbuh) said: "Patience, O family of Yasir, for your appointment is Paradise" — reported by al-Hakim, authenticated by al-Albani',young:'The disbelievers tortured the early Muslims badly. Bilal was tortured under the sun but kept saying: One God, One God!'},
    fr:{title:'Persecution et Patience',event:'Bilal et la famille de Yasir furent tortures. Les Banu Hashim furent assieges dans la Vallee d\'Abu Talib pendant trois ans.',lesson:'Les epreuves sont un test de foi. Rester ferme sur la verite est plus difficile que de l\'accepter.',fiqh:'Al-Ghazali souligne : La persecution n\'etait pas aleatoire mais ciblait les faibles en premier. L\'Islam a prevalu car ses adeptes ont endure.',hadith:'Le Prophete (sws) a dit : « Patience, famille de Yasir, car votre rendez-vous est le Paradis » — rapporte par al-Hakim, authentifie par al-Albani',young:'Les mecreants ont beaucoup torture les premiers musulmans. Bilal etait torture sous le soleil mais continuait a dire : Un seul Dieu !'}
  },
  {
    id:7, emoji:'😢', year:'619',
    ar:{title:'عام الحزن',event:'توفيت خديجة رضي الله عنها وأبو طالب في نفس العام. فقد النبي ﷺ السند العاطفي والحماية القبلية.',lesson:'الأحزان لا تأتي فُرادى. لكن بعد كل ضيق فرجاً.',fiqh:'الغزالي يشير إلى حكمة الأحزان: فقدان السند البشري كان تمهيداً لتعلق القلب بالله وحده. من فقد كل شيء وجد الله.',hadith:'قال ﷺ: "ما أبدلني الله خيراً منها: آمنت بي حين كفر الناس" — رواه أحمد',young:'في سنة واحدة حزينة، فقد النبي ﷺ زوجته الحبيبة خديجة وعمه أبا طالب الذي كان يحميه.'},
    en:{title:'The Year of Sorrow',event:'Khadijah (may Allah be pleased with her) and Abu Talib both died in the same year. The Prophet (pbuh) lost emotional support and tribal protection.',lesson:'Sorrows don\'t come one at a time. But after every hardship comes relief.',fiqh:'Al-Ghazali points to the wisdom in grief: Losing human support was preparation for the heart to attach solely to God. Whoever loses everything finds God.',hadith:'The Prophet (pbuh) said about Khadijah: "God did not replace her with anyone better: she believed in me when people disbelieved" — reported by Ahmad',young:'In one sad year, the Prophet (pbuh) lost his beloved wife Khadijah and his uncle Abu Talib who used to protect him.'},
    fr:{title:'L\'Annee de la Tristesse',event:'Khadijah et Abu Talib moururent la meme annee. Le Prophete (sws) perdit le soutien emotionnel et la protection tribale.',lesson:'Les chagrins ne viennent pas seuls. Mais apres chaque difficulte vient le soulagement.',fiqh:'Al-Ghazali indique la sagesse dans le deuil : Perdre le soutien humain etait une preparation pour que le coeur s\'attache uniquement a Dieu.',hadith:'Le Prophete (sws) a dit a propos de Khadijah : « Dieu ne l\'a pas remplacee par quelqu\'un de mieux : elle a cru en moi quand les gens ont mecru » — rapporte par Ahmad',young:'En une annee triste, le Prophete (sws) a perdu sa femme bien-aimee Khadijah et son oncle Abu Talib qui le protegeait.'}
  },
  {
    id:8, emoji:'🌌', year:'620',
    ar:{title:'الإسراء والمعراج',event:'أسري بالنبي ﷺ ليلاً من المسجد الحرام إلى المسجد الأقصى، ثم عُرج به إلى السماوات. فُرضت الصلوات الخمس.',lesson:'بعد أشد المحن تأتي أعظم المنح. الصلاة هبة سماوية لتسكين القلوب.',fiqh:'الغزالي يوضح: الإسراء كان جائزة ربانية بعد أصعب فترة. الصلاة لم تُفرض على الأرض بل في السماء، لأنها صلة مباشرة بالله.',hadith:'قال ﷺ: "فرض الله على أمتي خمسين صلاة... فما زلت أراجع ربي حتى جعلها خمساً" — متفق عليه',young:'في ليلة واحدة مذهلة، سافر النبي ﷺ إلى القدس ثم صعد إلى السماء وقابل الأنبياء!'},
    en:{title:'The Night Journey & Ascension',event:'The Prophet (pbuh) was taken by night from the Sacred Mosque to Al-Aqsa Mosque, then ascended to the heavens. The five daily prayers were prescribed.',lesson:'After the hardest trials come the greatest gifts. Prayer is a heavenly gift to soothe hearts.',fiqh:'Al-Ghazali explains: The Night Journey was a divine reward after the hardest period. Prayer was prescribed not on earth but in heaven, because it is a direct connection with God.',hadith:'The Prophet (pbuh) said: "God prescribed fifty prayers for my ummah... I kept returning to my Lord until He made them five" — agreed upon',young:'In one amazing night, the Prophet (pbuh) traveled to Jerusalem then went up to the sky and met all the prophets!'},
    fr:{title:'Le Voyage Nocturne et l\'Ascension',event:'Le Prophete (sws) fut emmene de nuit de la Mosquee Sacree a la Mosquee Al-Aqsa, puis il monta aux cieux. Les cinq prieres furent prescrites.',lesson:'Apres les plus dures epreuves viennent les plus grands dons. La priere est un cadeau celeste pour apaiser les coeurs.',fiqh:'Al-Ghazali explique : Le Voyage Nocturne etait une recompense divine apres la periode la plus difficile. La priere ne fut pas prescrite sur terre mais au ciel.',hadith:'Le Prophete (sws) a dit : « Dieu a prescrit cinquante prieres pour ma communaute... J\'ai continue a retourner vers mon Seigneur jusqu\'a ce qu\'Il les ramene a cinq » — rapporte par al-Bukhari et Muslim',young:'En une nuit incroyable, le Prophete (sws) a voyage a Jerusalem puis est monte au ciel et a rencontre tous les prophetes !'}
  },
  {
    id:9, emoji:'🤝', year:'621-622',
    ar:{title:'بيعة العقبة',event:'جاء أهل يثرب (المدينة) وبايعوا النبي ﷺ في العقبة مرتين. استعدوا لاستقباله وحمايته.',lesson:'النصر يأتي من حيث لا نحتسب. أبواب مغلقة هنا قد تفتح أبواباً هناك.',fiqh:'الغزالي يلاحظ: مكة رفضت الدعوة بينما المدينة احتضنتها. على الداعية ألا يستسلم إذا رُفض في مكان، فالأرض واسعة.',hadith:'قال ﷺ: "اللهم إنك أخرجتني من أحب البلاد إلي، فأسكنّي أحب البلاد إليك" — حسّنه الألباني',young:'جاء ناس طيبون من مدينة أخرى اسمها يثرب ودعوا النبي ﷺ ليعيش عندهم ويحموه!'},
    en:{title:'The Pledge of Aqabah',event:'People of Yathrib (Medina) came and pledged allegiance to the Prophet (pbuh) at Aqabah twice. They prepared to receive and protect him.',lesson:'Victory comes from unexpected places. Closed doors here may open doors elsewhere.',fiqh:'Al-Ghazali observes: Mecca rejected the message while Medina embraced it. A caller should not give up if rejected in one place — the earth is wide.',hadith:'The Prophet (pbuh) said: "O God, You expelled me from the land most beloved to me, so let me dwell in the land most beloved to You" — graded hasan by al-Albani',young:'Kind people from another city called Yathrib came and invited the Prophet (pbuh) to live with them and protect him!'},
    fr:{title:'Le Serment d\'Aqabah',event:'Les gens de Yathrib (Medine) vinrent et preterent allegeance au Prophete (sws) a Aqabah deux fois. Ils se preparerent a le recevoir et le proteger.',lesson:'La victoire vient d\'ou on ne l\'attend pas. Des portes fermees ici peuvent ouvrir des portes ailleurs.',fiqh:'Al-Ghazali observe : La Mecque a rejete le message tandis que Medine l\'a adopte. Un predicateur ne doit pas abandonner s\'il est rejete quelque part.',hadith:'Le Prophete (sws) a dit : « O Dieu, Tu m\'as fait quitter la terre qui m\'est la plus chere, alors fais-moi habiter la terre qui T\'est la plus chere » — juge hasan par al-Albani',young:'Des gens gentils d\'une autre ville appelee Yathrib sont venus et ont invite le Prophete (sws) a vivre avec eux et a le proteger !'}
  },
  {
    id:10, emoji:'🐪', year:'622',
    ar:{title:'الهجرة إلى المدينة',event:'هاجر النبي ﷺ وأبو بكر سراً. اختبأ في غار ثور. بنى أول مسجد في قباء وأسس دولة المدينة.',lesson:'التضحية بالوطن من أجل المبدأ أعظم أنواع الجهاد. الهجرة ليست هروباً بل بداية جديدة.',fiqh:'الغزالي يحلل: الهجرة كانت تخطيطاً محكماً لا عشوائياً. اختيار الوقت والطريق والرفيق — كلها دروس في التخطيط والتوكل معاً.',hadith:'قال ﷺ لأبي بكر: "لا تحزن إن الله معنا" — القرآن الكريم، التوبة: ٤٠',young:'سافر النبي ﷺ وصديقه أبو بكر مسافة طويلة من مكة إلى المدينة. اختبأ في كهف والعنكبوت نسجت عليه!'},
    en:{title:'The Migration to Medina',event:'The Prophet (pbuh) and Abu Bakr migrated secretly. They hid in the Cave of Thawr. He built the first mosque in Quba and established the state of Medina.',lesson:'Sacrificing one\'s homeland for principle is the greatest form of struggle. Migration is not escape but a new beginning.',fiqh:'Al-Ghazali analyzes: The migration was meticulous planning, not random. The choice of timing, route, and companion — all are lessons in planning and trust in God together.',hadith:'The Prophet (pbuh) said to Abu Bakr: "Do not grieve, indeed God is with us" — Quran, At-Tawbah: 40',young:'The Prophet (pbuh) and his friend Abu Bakr traveled a long way from Mecca to Medina. He hid in a cave and a spider spun its web over it!'},
    fr:{title:'L\'Emigration vers Medine',event:'Le Prophete (sws) et Abu Bakr emigrerent secretement. Ils se cacherent dans la grotte de Thawr. Il construisit la premiere mosquee a Quba.',lesson:'Sacrifier sa patrie pour un principe est la plus grande forme de lutte. L\'emigration n\'est pas une fuite mais un nouveau depart.',fiqh:'Al-Ghazali analyse : L\'emigration etait une planification meticuleuse, pas aleatoire. Le choix du moment, de l\'itineraire et du compagnon — tout est lecon.',hadith:'Le Prophete (sws) dit a Abu Bakr : « Ne sois pas triste, certes Dieu est avec nous » — Coran, At-Tawbah : 40',young:'Le Prophete (sws) et son ami Abu Bakr ont voyage loin de La Mecque a Medine. Il s\'est cache dans une grotte et une araignee a tisse sa toile dessus !'}
  },
  {
    id:11, emoji:'🕌', year:'622',
    ar:{title:'بناء المجتمع في المدينة',event:'بنى المسجد النبوي. آخى بين المهاجرين والأنصار. وضع وثيقة المدينة التي تنظم حقوق الجميع.',lesson:'المجتمع القوي يُبنى على الأخوة والعدل. القيادة الحقيقية تبدأ بالبناء لا بالهدم.',fiqh:'الغزالي يشرح: وثيقة المدينة كانت أول دستور في التاريخ ينظم التعايش. الإسلام ليس ديناً منعزلاً بل يبني حضارة.',hadith:'قال ﷺ: "مثل المؤمنين في توادهم وتراحمهم كمثل الجسد الواحد" — متفق عليه',young:'بنى النبي ﷺ مسجداً جميلاً في المدينة وجعل كل مهاجر أخاً لواحد من أهل المدينة!'},
    en:{title:'Building Society in Medina',event:'He built the Prophet\'s Mosque. He paired the Muhajirun (emigrants) with the Ansar (helpers). He drafted the Medina Charter organizing everyone\'s rights.',lesson:'A strong community is built on brotherhood and justice. True leadership starts with building, not destroying.',fiqh:'Al-Ghazali explains: The Medina Charter was the first constitution in history organizing coexistence. Islam is not an isolated religion but one that builds civilization.',hadith:'The Prophet (pbuh) said: "The believers in their mutual love and compassion are like one body" — agreed upon',young:'The Prophet (pbuh) built a beautiful mosque in Medina and made every emigrant a brother to one of the people of Medina!'},
    fr:{title:'Construire la Societe a Medine',event:'Il construisit la Mosquee du Prophete. Il jumela les Muhajirun (emigrants) avec les Ansar (auxiliaires). Il redigea la Charte de Medine.',lesson:'Une communaute forte est construite sur la fraternite et la justice. Le vrai leadership commence par construire, pas detruire.',fiqh:'Al-Ghazali explique : La Charte de Medine etait la premiere constitution de l\'histoire organisant la coexistence. L\'Islam n\'est pas une religion isolee mais une civilisation.',hadith:'Le Prophete (sws) a dit : « Les croyants dans leur amour et compassion mutuels sont comme un seul corps » — rapporte par al-Bukhari et Muslim',young:'Le Prophete (sws) a construit une belle mosquee a Medine et a fait de chaque emigrant un frere pour un habitant de Medine !'}
  },
  {
    id:12, emoji:'⚔️', year:'624',
    ar:{title:'غزوة بدر',event:'أول معركة كبرى. ٣١٣ مسلماً ضد ألف من قريش. انتصر المسلمون نصراً مؤزراً في ١٧ رمضان.',lesson:'العدد لا يصنع النصر. الإيمان والإعداد والتوكل على الله هم مفاتيح الفوز.',fiqh:'الغزالي يحلل: بدر لم تكن معجزة بلا أسباب. النبي ﷺ خطط وتشاور واختار الموقع. الأخذ بالأسباب سنة ربانية.',hadith:'قال ﷺ يوم بدر: "اللهم إن تهلك هذه العصابة لا تُعبد في الأرض" — رواه مسلم',young:'في معركة بدر، كان المسلمون ٣١٣ فقط ضد ألف من الأعداء. لكنهم انتصروا بعون الله!'},
    en:{title:'The Battle of Badr',event:'The first major battle. 313 Muslims against 1,000 from Quraysh. The Muslims achieved a decisive victory on 17th Ramadan.',lesson:'Numbers don\'t determine victory. Faith, preparation, and trust in God are the keys to success.',fiqh:'Al-Ghazali analyzes: Badr was not a miracle without causes. The Prophet (pbuh) planned, consulted, and chose the location. Taking practical measures is a divine principle.',hadith:'The Prophet (pbuh) said on the day of Badr: "O God, if this group is destroyed, You will not be worshipped on earth" — reported by Muslim',young:'At the Battle of Badr, the Muslims were only 313 against 1,000 enemies. But they won with God\'s help!'},
    fr:{title:'La Bataille de Badr',event:'La premiere grande bataille. 313 musulmans contre 1000 de Quraysh. Les musulmans remporterent une victoire decisive le 17 Ramadan.',lesson:'Les chiffres ne determinent pas la victoire. La foi, la preparation et la confiance en Dieu sont les cles du succes.',fiqh:'Al-Ghazali analyse : Badr n\'etait pas un miracle sans causes. Le Prophete (sws) a planifie, consulte et choisi l\'emplacement.',hadith:'Le Prophete (sws) a dit le jour de Badr : « O Dieu, si ce groupe est detruit, Tu ne seras pas adore sur terre » — rapporte par Muslim',young:'A la bataille de Badr, les musulmans n\'etaient que 313 contre 1000 ennemis. Mais ils ont gagne avec l\'aide de Dieu !'}
  },
  {
    id:13, emoji:'🏔️', year:'625',
    ar:{title:'غزوة أُحد',event:'انقلبت المعركة على المسلمين بعد أن ترك الرماة مواقعهم. جُرح النبي ﷺ وقُتل حمزة.',lesson:'العصيان يجلب الهزيمة. النصر ليس دائماً — والهزيمة معلّمة عظيمة.',fiqh:'الغزالي يستخلص: أُحد درس في أن النصر مشروط بالطاعة والانضباط. المسلمون لم يُهزموا بسبب ضعف إيمانهم بل بسبب خطأ تكتيكي.',hadith:'قال ﷺ: "عجب لأمر المؤمن! إن أمره كله خير: إن أصابته سراء شكر فكان خيراً له، وإن أصابته ضراء صبر فكان خيراً له" — رواه مسلم',young:'في معركة أُحد، لم يسمع بعض المسلمين أوامر النبي ﷺ ففقدوا المعركة. تعلموا أن الطاعة مهمة جداً!'},
    en:{title:'The Battle of Uhud',event:'The battle turned against the Muslims after the archers left their positions. The Prophet (pbuh) was injured and Hamzah was killed.',lesson:'Disobedience brings defeat. Victory is not permanent — and defeat is a great teacher.',fiqh:'Al-Ghazali extracts: Uhud is a lesson that victory is conditional on obedience and discipline. The Muslims were not defeated due to weak faith but a tactical error.',hadith:'The Prophet (pbuh) said: "How wonderful is the affair of the believer! All of it is good: if good times come, he is grateful; if hardship comes, he is patient" — reported by Muslim',young:'At the Battle of Uhud, some Muslims didn\'t follow the Prophet\'s orders and lost the battle. They learned that obedience is very important!'},
    fr:{title:'La Bataille d\'Uhud',event:'La bataille tourna contre les musulmans apres que les archers quitterent leurs positions. Le Prophete (sws) fut blesse et Hamzah tue.',lesson:'La desobeissance apporte la defaite. La victoire n\'est pas permanente — et la defaite est un grand professeur.',fiqh:'Al-Ghazali tire la lecon : Uhud enseigne que la victoire est conditionnee par l\'obeissance et la discipline. Les musulmans n\'ont pas ete vaincus par manque de foi mais par une erreur tactique.',hadith:'Le Prophete (sws) a dit : « Comme l\'affaire du croyant est merveilleuse ! Tout est bon pour lui : si le bonheur vient, il est reconnaissant ; si l\'epreuve vient, il est patient » — rapporte par Muslim',young:'A la bataille d\'Uhud, certains musulmans n\'ont pas suivi les ordres du Prophete et ont perdu la bataille. Ils ont appris que l\'obeissance est tres importante !'}
  },
  {
    id:14, emoji:'🛡️', year:'627',
    ar:{title:'غزوة الخندق (الأحزاب)',event:'تحالفت كل قريش واليهود ضد المدينة. حفر المسلمون خندقاً بفكرة سلمان الفارسي. حُوصروا أسابيع لكنهم صمدوا.',lesson:'الأفكار الذكية قد تغلب أعتى الجيوش. التشاور والاستماع لأصحاب الخبرات سنة نبوية.',fiqh:'الغزالي يقول: قبول النبي ﷺ فكرة سلمان الفارسي — رغم أنه ليس عربياً — يثبت أن الحكمة ضالة المؤمن أنى وجدها أخذها.',hadith:'قال ﷺ: "الحكمة ضالة المؤمن فحيث وجدها فهو أحق بها" — رواه الترمذي وحسّنه الألباني',young:'حفر المسلمون خندقاً كبيراً حول المدينة لمنع الأعداء. كانت فكرة ذكية من سلمان الفارسي!'},
    en:{title:'The Battle of the Trench (Ahzab)',event:'All of Quraysh and allied tribes attacked Medina. The Muslims dug a trench, an idea from Salman al-Farisi. They were besieged for weeks but held firm.',lesson:'Smart ideas can defeat the mightiest armies. Consultation and listening to experts is a prophetic tradition.',fiqh:'Al-Ghazali says: The Prophet\'s acceptance of Salman\'s idea — despite not being Arab — proves that wisdom is the believer\'s lost treasure, wherever found.',hadith:'The Prophet (pbuh) said: "Wisdom is the believer\'s lost treasure; wherever he finds it, he is most deserving of it" — reported by al-Tirmidhi, graded hasan by al-Albani',young:'The Muslims dug a big trench around Medina to stop the enemies. It was a smart idea from Salman, who came from Persia!'},
    fr:{title:'La Bataille du Fosse (Ahzab)',event:'Tout Quraysh et les tribus alliees attaquerent Medine. Les musulmans creuserent un fosse, idee de Salman al-Farisi. Ils furent assieges des semaines.',lesson:'Les idees intelligentes peuvent vaincre les armees les plus puissantes. La consultation et l\'ecoute des experts est une tradition prophetique.',fiqh:'Al-Ghazali dit : L\'acceptation par le Prophete de l\'idee de Salman — bien qu\'il ne soit pas Arabe — prouve que la sagesse est le tresor perdu du croyant.',hadith:'Le Prophete (sws) a dit : « La sagesse est le tresor perdu du croyant ; ou qu\'il la trouve, il en est le plus digne » — rapporte par al-Tirmidhi, juge hasan par al-Albani',young:'Les musulmans ont creuse un grand fosse autour de Medine pour arreter les ennemis. C\'etait une idee intelligente de Salman, qui venait de Perse !'}
  },
  {
    id:15, emoji:'📜', year:'628',
    ar:{title:'صلح الحديبية',event:'خرج النبي ﷺ معتمراً فصدته قريش. عقد معها صلحاً بدا في ظاهره تنازلاً لكنه كان فتحاً عظيماً.',lesson:'السلام قد يحقق ما لا تحققه الحرب. التنازل الذكي ليس ضعفاً بل حكمة بعيدة النظر.',fiqh:'الغزالي يؤكد: الحديبية كانت "الفتح المبين" رغم أن الصحابة لم يفهموا ذلك وقتها. القائد الحكيم يرى ما لا يراه غيره.',hadith:'قال ﷺ: "لا تتمنوا لقاء العدو واسألوا الله العافية" — متفق عليه',young:'عقد النبي ﷺ صلحاً مع أعدائه. بدا كأنه خسر لكنه في الحقيقة فاز فوزاً كبيراً!'},
    en:{title:'The Treaty of Hudaybiyyah',event:'The Prophet (pbuh) went for Umrah but Quraysh blocked him. He made a treaty that seemed like a concession but was in fact a great victory.',lesson:'Peace can achieve what war cannot. Smart compromise is not weakness but far-sighted wisdom.',fiqh:'Al-Ghazali emphasizes: Hudaybiyyah was the "clear victory" even though the Companions did not understand this at the time. A wise leader sees what others cannot.',hadith:'The Prophet (pbuh) said: "Do not wish to meet the enemy, and ask God for well-being" — agreed upon',young:'The Prophet (pbuh) made a peace deal with his enemies. It looked like he lost, but actually he won big time!'},
    fr:{title:'Le Traite de Hudaybiyyah',event:'Le Prophete (sws) alla pour la Umrah mais Quraysh le bloqua. Il conclut un traite qui semblait une concession mais etait une grande victoire.',lesson:'La paix peut accomplir ce que la guerre ne peut pas. Le compromis intelligent n\'est pas faiblesse mais sagesse clairvoyante.',fiqh:'Al-Ghazali souligne : Hudaybiyyah etait la « victoire eclatante » meme si les Compagnons ne l\'ont pas compris a l\'epoque. Un leader sage voit ce que les autres ne voient pas.',hadith:'Le Prophete (sws) a dit : « Ne souhaitez pas rencontrer l\'ennemi, et demandez a Dieu le bien-etre » — rapporte par al-Bukhari et Muslim',young:'Le Prophete (sws) a fait un accord de paix avec ses ennemis. Ca avait l\'air d\'une defaite, mais en fait c\'etait une grande victoire !'}
  },
  {
    id:16, emoji:'✉️', year:'628-629',
    ar:{title:'رسائل الملوك',event:'أرسل النبي ﷺ رسائل إلى ملوك وأباطرة العالم: هرقل والنجاشي وكسرى والمقوقس، يدعوهم للإسلام.',lesson:'الرسالة للعالم كله. لا حدود للدعوة ولا سقف للطموح.',fiqh:'الغزالي يلاحظ: رسائل النبي ﷺ كانت دبلوماسية راقية. خاطب كل ملك بما يناسبه. فن الخطاب جزء من الحكمة.',hadith:'قال ﷺ: "بُعثت إلى الناس كافة" — رواه مسلم',young:'أرسل النبي ﷺ رسائل إلى ملوك الدول الكبرى في العالم يدعوهم للإسلام. كان شجاعاً جداً!'},
    en:{title:'Letters to Kings',event:'The Prophet (pbuh) sent letters to the kings and emperors of the world: Heraclius, Negus, Chosroes, and Muqawqis, inviting them to Islam.',lesson:'The message is for the whole world. There are no borders for the call and no ceiling for ambition.',fiqh:'Al-Ghazali observes: The Prophet\'s letters were refined diplomacy. He addressed each king appropriately. The art of communication is part of wisdom.',hadith:'The Prophet (pbuh) said: "I was sent to all of mankind" — reported by Muslim',young:'The Prophet (pbuh) sent letters to the great kings of the world inviting them to Islam. He was very brave!'},
    fr:{title:'Lettres aux Rois',event:'Le Prophete (sws) envoya des lettres aux rois et empereurs du monde : Heraclius, le Negus, Chosroes et le Muqawqis, les invitant a l\'Islam.',lesson:'Le message est pour le monde entier. Il n\'y a pas de frontieres pour l\'appel et pas de plafond pour l\'ambition.',fiqh:'Al-Ghazali observe : Les lettres du Prophete etaient une diplomatie raffinee. Il s\'adressait a chaque roi de maniere appropriee.',hadith:'Le Prophete (sws) a dit : « J\'ai ete envoye a toute l\'humanite » — rapporte par Muslim',young:'Le Prophete (sws) a envoye des lettres aux grands rois du monde pour les inviter a l\'Islam. Il etait tres courageux !'}
  },
  {
    id:17, emoji:'🏆', year:'630',
    ar:{title:'فتح مكة',event:'دخل النبي ﷺ مكة فاتحاً بعشرة آلاف مسلم. دخلها متواضعاً ورأسه يكاد يمس رقبة بعيره. عفا عن أهلها.',lesson:'النصر الحقيقي يكون بالرحمة لا بالانتقام. التواضع في ساعة القوة أعظم من القوة نفسها.',fiqh:'الغزالي يقول: "اذهبوا فأنتم الطلقاء" كلمة غيّرت التاريخ. العفو عند المقدرة ليس ضعفاً بل قوة أخلاقية خالدة.',hadith:'قال ﷺ يوم الفتح: "لا تثريب عليكم اليوم. اذهبوا فأنتم الطلقاء" — رواه البيهقي',young:'دخل النبي ﷺ مكة منتصراً لكنه لم ينتقم من أحد! قال لأعدائه: اذهبوا فأنتم أحرار!'},
    en:{title:'The Conquest of Mecca',event:'The Prophet (pbuh) entered Mecca as a conqueror with 10,000 Muslims. He entered humbly, his head nearly touching his camel. He forgave its people.',lesson:'True victory comes through mercy, not revenge. Humility in the hour of power is greater than power itself.',fiqh:'Al-Ghazali says: "Go, you are free" changed history. Forgiveness when able is not weakness but eternal moral strength.',hadith:'The Prophet (pbuh) said on the day of conquest: "No blame on you today. Go, you are free" — reported by al-Bayhaqi',young:'The Prophet (pbuh) entered Mecca as a winner but didn\'t take revenge on anyone! He told his enemies: Go, you are free!'},
    fr:{title:'La Conquete de La Mecque',event:'Le Prophete (sws) entra a La Mecque en conquerant avec 10 000 musulmans. Il entra humblement. Il pardonna a ses habitants.',lesson:'La vraie victoire vient par la misericorde, pas par la vengeance. L\'humilite a l\'heure du pouvoir est plus grande que le pouvoir lui-meme.',fiqh:'Al-Ghazali dit : « Allez, vous etes libres » a change l\'histoire. Le pardon quand on a le pouvoir n\'est pas faiblesse mais force morale eternelle.',hadith:'Le Prophete (sws) a dit le jour de la conquete : « Pas de reproche pour vous aujourd\'hui. Allez, vous etes libres » — rapporte par al-Bayhaqi',young:'Le Prophete (sws) est entre a La Mecque en vainqueur mais ne s\'est venge de personne ! Il a dit a ses ennemis : Allez, vous etes libres !'}
  },
  {
    id:18, emoji:'💔', year:'630',
    ar:{title:'غزوة حُنين',event:'بعد فتح مكة، غرّ المسلمين كثرتهم فانهزموا أولاً في حُنين. ثم ثبت النبي ﷺ فعاد المسلمون وانتصروا.',lesson:'الغرور بالنصر أخطر من الهزيمة نفسها. الاعتماد على الله لا على العدد.',fiqh:'الغزالي يستخلص: حُنين جاءت بعد بدر وأُحد لتكمل المنهج. بدر: التوكل ينتصر. أُحد: العصيان يُهزم. حُنين: الغرور يُسقط.',hadith:'قال تعالى: "ويوم حُنين إذ أعجبتكم كثرتكم فلم تغنِ عنكم شيئاً" — التوبة: ٢٥',young:'ظن المسلمون أنهم كثيرون فلن يخسروا، لكنهم تعلموا أن النصر من الله وليس من العدد!'},
    en:{title:'The Battle of Hunayn',event:'After conquering Mecca, the Muslims\' large number made them overconfident. They initially lost at Hunayn, but the Prophet (pbuh) stood firm and they rallied to victory.',lesson:'Arrogance after victory is more dangerous than defeat itself. Reliance must be on God, not on numbers.',fiqh:'Al-Ghazali extracts: Hunayn came after Badr and Uhud to complete the curriculum. Badr: trust in God wins. Uhud: disobedience loses. Hunayn: arrogance fails.',hadith:'God said: "And on the day of Hunayn, when your great number pleased you, but it did not avail you at all" — At-Tawbah: 25',young:'The Muslims thought they were too many to lose, but they learned that victory comes from God, not from numbers!'},
    fr:{title:'La Bataille de Hunayn',event:'Apres la conquete de La Mecque, le grand nombre des musulmans les rendit arrogants. Ils perdirent d\'abord a Hunayn, mais le Prophete tint bon.',lesson:'L\'arrogance apres la victoire est plus dangereuse que la defaite elle-meme. La confiance doit etre en Dieu, pas dans les chiffres.',fiqh:'Al-Ghazali tire la lecon : Hunayn vint apres Badr et Uhud pour completer le programme. Badr : la confiance en Dieu gagne. Uhud : la desobeissance perd. Hunayn : l\'arrogance echoue.',hadith:'Dieu a dit : « Et le jour de Hunayn, quand votre grand nombre vous a plu, mais il ne vous a servi a rien » — At-Tawbah : 25',young:'Les musulmans pensaient etre trop nombreux pour perdre, mais ils ont appris que la victoire vient de Dieu, pas des chiffres !'}
  },
  {
    id:19, emoji:'🕋', year:'632',
    ar:{title:'حجة الوداع',event:'حج النبي ﷺ حجته الأخيرة. خطب في ١٠٠ ألف مسلم خطبة الوداع التي أرست مبادئ حقوق الإنسان.',lesson:'المساواة بين البشر أصل في الإسلام. لا فرق بين عربي وأعجمي إلا بالتقوى.',fiqh:'الغزالي يقول: خطبة الوداع ميثاق حقوق الإنسان الأول. حرمة الدم والمال والعرض. المساواة الكاملة. كرامة المرأة. كل هذا قبل ١٤ قرناً.',hadith:'قال ﷺ: "كلكم لآدم وآدم من تراب. لا فضل لعربي على أعجمي إلا بالتقوى" — رواه أحمد وصححه الألباني',young:'خطب النبي ﷺ في آلاف المسلمين وقال لهم: كل الناس سواسية، لا فرق بينكم إلا بعمل الخير!'},
    en:{title:'The Farewell Pilgrimage',event:'The Prophet (pbuh) performed his last pilgrimage. He addressed 100,000 Muslims in the Farewell Sermon, establishing principles of human rights.',lesson:'Equality among humans is a fundamental principle of Islam. There is no difference between Arab and non-Arab except in piety.',fiqh:'Al-Ghazali says: The Farewell Sermon was the first human rights charter. Sanctity of life, property, and honor. Complete equality. Women\'s dignity. All 14 centuries ago.',hadith:'The Prophet (pbuh) said: "All of you are from Adam, and Adam was from dust. No Arab has superiority over a non-Arab except through piety" — reported by Ahmad, authenticated by al-Albani',young:'The Prophet (pbuh) spoke to thousands of Muslims and told them: All people are equal, the only difference between you is doing good deeds!'},
    fr:{title:'Le Pelerinage d\'Adieu',event:'Le Prophete (sws) accomplit son dernier pelerinage. Il s\'adressa a 100 000 musulmans dans le Sermon d\'Adieu, etablissant les principes des droits de l\'homme.',lesson:'L\'egalite entre les humains est un principe fondamental de l\'Islam. Pas de difference entre Arabe et non-Arabe sauf par la piete.',fiqh:'Al-Ghazali dit : Le Sermon d\'Adieu etait la premiere charte des droits de l\'homme. La sacralite de la vie, de la propriete et de l\'honneur. L\'egalite complete. Tout ca il y a 14 siecles.',hadith:'Le Prophete (sws) a dit : « Vous etes tous d\'Adam, et Adam est de poussiere. Pas de superiorite de l\'Arabe sur le non-Arabe sauf par la piete » — rapporte par Ahmad, authentifie par al-Albani',young:'Le Prophete (sws) a parle a des milliers de musulmans et leur a dit : Tous les gens sont egaux, la seule difference entre vous est de faire le bien !'}
  },
  {
    id:20, emoji:'⭐', year:'632',
    ar:{title:'وفاة النبي ﷺ والإرث الخالد',event:'توفي النبي ﷺ في المدينة. ترك كتاب الله وسنته. ترك أمة تحمل رسالته إلى يوم القيامة.',lesson:'العظماء يرحلون لكن إرثهم يبقى. سيرة النبي ﷺ ليست تاريخاً بل منهج حياة.',fiqh:'الغزالي يختم: فقه السيرة يعني أن نعيش بها لا أن نحفظها فقط. كل حدث فيها يحمل درساً لنا اليوم. السيرة ليست قصة ماضية بل دليل حاضر.',hadith:'قال ﷺ: "تركت فيكم ما إن تمسكتم به لن تضلوا: كتاب الله وسنتي" — رواه الحاكم وصححه الألباني',young:'رحل النبي ﷺ لكنه ترك لنا القرآن وسنته. إذا اتبعناهما لن نضل أبداً!'},
    en:{title:'The Prophet\'s Passing & Eternal Legacy',event:'The Prophet (pbuh) passed away in Medina. He left the Book of God and his Sunnah. He left a nation carrying his message until the Day of Judgment.',lesson:'Great people leave but their legacy remains. The Prophet\'s biography is not just history but a way of life.',fiqh:'Al-Ghazali concludes: Understanding the Sirah means living by it, not just memorizing it. Every event carries a lesson for us today. The Sirah is not a past story but a present guide.',hadith:'The Prophet (pbuh) said: "I have left among you what, if you hold on to it, you will never go astray: the Book of God and my Sunnah" — reported by al-Hakim, authenticated by al-Albani',young:'The Prophet (pbuh) left us but he left the Quran and his teachings. If we follow them, we will never be lost!'},
    fr:{title:'Le Deces du Prophete et l\'Heritage Eternel',event:'Le Prophete (sws) deceda a Medine. Il laissa le Livre de Dieu et sa Sunnah. Il laissa une nation portant son message jusqu\'au Jour du Jugement.',lesson:'Les grands hommes partent mais leur heritage reste. La biographie du Prophete n\'est pas qu\'histoire mais un mode de vie.',fiqh:'Al-Ghazali conclut : Comprendre la Sirah signifie la vivre, pas seulement la memoriser. Chaque evenement porte une lecon pour nous aujourd\'hui.',hadith:'Le Prophete (sws) a dit : « J\'ai laisse parmi vous ce qui, si vous le suivez, vous ne vous egarerez jamais : le Livre de Dieu et ma Sunnah » — rapporte par al-Hakim, authentifie par al-Albani',young:'Le Prophete (sws) nous a quittes mais il a laisse le Coran et ses enseignements. Si nous les suivons, nous ne serons jamais perdus !'}
  }
];

// ═══════════════ LESSONS DATA (crosscutting themes) ═══════════════
const LESSONS_DATA = [
  {
    emoji:'🌱',
    ar:{title:'التدرج في التغيير',problem:'نريد تغيير كل شيء دفعة واحدة فنفشل',solution:'النبي ﷺ غيّر مجتمعاً كاملاً في ٢٣ سنة بالتدرج. الخمر لم تُحرّم دفعة واحدة بل على ثلاث مراحل.',verse:'ورتّلناه ترتيلاً',verseRef:'سورة الفرقان ٢٥: ٣٢'},
    en:{title:'Gradual Change',problem:'We want to change everything at once and fail',solution:'The Prophet (pbuh) transformed an entire society over 23 years through gradualism. Wine was not prohibited all at once but in three stages.',verse:'And We have revealed it in stages',verseRef:'Surah Al-Furqan 25:32'},
    fr:{title:'Le Changement Progressif',problem:'Nous voulons tout changer d\'un coup et echouons',solution:'Le Prophete (sws) a transforme une societe entiere en 23 ans par la progressivite. Le vin n\'a pas ete interdit d\'un coup mais en trois etapes.',verse:'Et Nous l\'avons revele par etapes',verseRef:'Sourate Al-Furqan 25:32'}
  },
  {
    emoji:'🤝',
    ar:{title:'الشورى والقيادة',problem:'القيادة الفردية تؤدي لأخطاء كارثية',solution:'النبي ﷺ استشار أصحابه في بدر وأُحد والخندق. قبل رأي الحباب بن المنذر في بدر ورأي سلمان في الخندق.',verse:'وشاورهم في الأمر',verseRef:'سورة آل عمران ٣: ١٥٩'},
    en:{title:'Consultation & Leadership',problem:'Authoritarian leadership leads to catastrophic mistakes',solution:'The Prophet (pbuh) consulted his companions at Badr, Uhud, and the Trench. He accepted al-Hubab\'s opinion at Badr and Salman\'s at the Trench.',verse:'And consult them in the matter',verseRef:'Surah Al-Imran 3:159'},
    fr:{title:'Consultation et Leadership',problem:'Le leadership autoritaire mene a des erreurs catastrophiques',solution:'Le Prophete (sws) consulta ses compagnons a Badr, Uhud et le Fosse. Il accepta l\'avis d\'al-Hubab a Badr et celui de Salman au Fosse.',verse:'Et consulte-les dans les affaires',verseRef:'Sourate Al-Imran 3:159'}
  },
  {
    emoji:'💝',
    ar:{title:'الرحمة في القوة',problem:'المنتصر غالباً ما ينتقم بقسوة',solution:'عفا النبي ﷺ عن أهل مكة يوم الفتح رغم أنهم عذبوه وأصحابه ٢١ سنة. "اذهبوا فأنتم الطلقاء".',verse:'وما أرسلناك إلا رحمة للعالمين',verseRef:'سورة الأنبياء ٢١: ١٠٧'},
    en:{title:'Mercy in Power',problem:'Victors often take cruel revenge',solution:'The Prophet (pbuh) forgave the people of Mecca on the day of conquest, despite 21 years of persecution. "Go, you are free."',verse:'We have not sent you except as a mercy to the worlds',verseRef:'Surah Al-Anbiya 21:107'},
    fr:{title:'La Misericorde dans la Puissance',problem:'Les vainqueurs prennent souvent une cruelle revanche',solution:'Le Prophete (sws) a pardonne aux gens de La Mecque le jour de la conquete, malgre 21 ans de persecution.',verse:'Nous ne t\'avons envoye que comme misericorde pour les mondes',verseRef:'Sourate Al-Anbiya 21:107'}
  },
  {
    emoji:'📚',
    ar:{title:'العلم أساس الحضارة',problem:'الجهل يدمر المجتمعات',solution:'"اقرأ" كانت أول كلمة نزلت. النبي ﷺ جعل فدية أسرى بدر تعليم ١٠ من أبناء المسلمين القراءة والكتابة.',verse:'اقرأ باسم ربك الذي خلق',verseRef:'سورة العلق ٩٦: ١'},
    en:{title:'Knowledge: Foundation of Civilization',problem:'Ignorance destroys societies',solution:'"Read" was the first word revealed. The Prophet (pbuh) made the ransom for Badr captives the teaching of 10 Muslim children to read and write.',verse:'Read in the name of your Lord who created',verseRef:'Surah Al-Alaq 96:1'},
    fr:{title:'Le Savoir : Fondement de la Civilisation',problem:'L\'ignorance detruit les societes',solution:'« Lis » fut le premier mot revele. Le Prophete (sws) fit de la rancon des prisonniers de Badr l\'enseignement de 10 enfants musulmans a lire et ecrire.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Sourate Al-Alaq 96:1'}
  },
  {
    emoji:'⚖️',
    ar:{title:'المساواة بين البشر',problem:'العنصرية والتمييز يمزقان المجتمع',solution:'النبي ﷺ أعلن في خطبة الوداع المساواة الكاملة. جعل بلالاً الحبشي مؤذناً وسلمان الفارسي مستشاراً.',verse:'إن أكرمكم عند الله أتقاكم',verseRef:'سورة الحجرات ٤٩: ١٣'},
    en:{title:'Equality Among Humans',problem:'Racism and discrimination tear society apart',solution:'The Prophet (pbuh) declared complete equality in the Farewell Sermon. He made Bilal the Abyssinian the caller to prayer and Salman the Persian his advisor.',verse:'Indeed, the most noble of you in the sight of Allah is the most righteous',verseRef:'Surah Al-Hujurat 49:13'},
    fr:{title:'L\'Egalite entre les Humains',problem:'Le racisme et la discrimination dechirent la societe',solution:'Le Prophete (sws) declara l\'egalite complete dans le Sermon d\'Adieu. Il fit de Bilal l\'Abyssin le muezzin et de Salman le Perse son conseiller.',verse:'Le plus noble d\'entre vous aupres d\'Allah est le plus pieux',verseRef:'Sourate Al-Hujurat 49:13'}
  },
  {
    emoji:'🏗️',
    ar:{title:'التخطيط والتوكل',problem:'البعض يتواكل بلا عمل والبعض يعمل بلا توكل',solution:'الهجرة كانت نموذجاً: خطط لكل شيء (الطريق، الرفيق، الدليل، المؤن) ثم توكل على الله. هذا هو التوازن.',verse:'فإذا عزمت فتوكل على الله',verseRef:'سورة آل عمران ٣: ١٥٩'},
    en:{title:'Planning & Trust in God',problem:'Some rely on God without acting, others act without relying on God',solution:'The migration was a model: he planned everything (route, companion, guide, provisions) then trusted God. This is the balance.',verse:'When you have decided, then rely upon Allah',verseRef:'Surah Al-Imran 3:159'},
    fr:{title:'Planification et Confiance en Dieu',problem:'Certains comptent sur Dieu sans agir, d\'autres agissent sans compter sur Dieu',solution:'L\'emigration etait un modele : il planifiait tout (itineraire, compagnon, guide, provisions) puis faisait confiance a Dieu.',verse:'Quand tu t\'es decide, fie-toi a Allah',verseRef:'Sourate Al-Imran 3:159'}
  }
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'🌅',ar:{label:'صلاة الفجر في وقتها',source:'أحب الأعمال إلى الله الصلاة على وقتها'},en:{label:'Fajr prayer on time',source:'The most beloved deed to God is prayer on time'},fr:{label:'Priere du Fajr a l\'heure',source:'L\'acte le plus aime de Dieu est la priere a l\'heure'}},
  {emoji:'📖',ar:{label:'قراءة صفحة من السيرة',source:'كتاب فقه السيرة'},en:{label:'Read a page of the Sirah',source:'Book: Understanding the Sirah'},fr:{label:'Lire une page de la Sirah',source:'Livre : Comprendre la Sirah'}},
  {emoji:'🤲',ar:{label:'أذكار الصباح والمساء',source:'حصن المسلم'},en:{label:'Morning & evening adhkar',source:'Fortress of the Muslim'},fr:{label:'Invocations du matin et soir',source:'La Citadelle du Musulman'}},
  {emoji:'😊',ar:{label:'ابتسم في وجه أخيك',source:'تبسّمك في وجه أخيك صدقة'},en:{label:'Smile at someone today',source:'Your smile to your brother is charity'},fr:{label:'Souriez a quelqu\'un aujourd\'hui',source:'Votre sourire a votre frere est une charite'}},
  {emoji:'🍽️',ar:{label:'أطعم محتاجاً أو تصدق',source:'أفضل الأعمال أن تُدخل على قلب مسلم سروراً'},en:{label:'Feed or give charity',source:'The best deeds are bringing joy to a Muslim\'s heart'},fr:{label:'Nourrir ou donner en charite',source:'Les meilleures actions sont d\'apporter la joie au coeur d\'un musulman'}},
  {emoji:'🕌',ar:{label:'صلاة الجماعة',source:'صلاة الجماعة أفضل من صلاة الفذ بسبع وعشرين درجة'},en:{label:'Pray in congregation',source:'Congregational prayer is 27 times better than praying alone'},fr:{label:'Prier en congregation',source:'La priere en congregation est 27 fois meilleure que prier seul'}},
  {emoji:'💧',ar:{label:'الوضوء المتقن',source:'أسبغوا الوضوء'},en:{label:'Perfect your wudu',source:'Perfect your ablution'},fr:{label:'Perfectionnez vos ablutions',source:'Perfectionnez vos ablutions'}},
  {emoji:'🌙',ar:{label:'قيام الليل ولو ركعتين',source:'أفضل الصلاة بعد الفريضة صلاة الليل'},en:{label:'Night prayer, even 2 raka\'at',source:'The best prayer after the obligatory is the night prayer'},fr:{label:'Priere de nuit, meme 2 raka\'at',source:'La meilleure priere apres l\'obligatoire est la priere de nuit'}}
];

// ═══════════════ QUIZ DATA — "Who Wants to Be a Scholar?" ═══════════════
const QUIZ = [
  {ar:{q:'في أي عام ولد النبي ﷺ؟',opts:['عام الفيل (٥٧٠م)','عام الحزن (٦١٩م)','عام الفتح (٦٣٠م)','عام الهجرة (٦٢٢م)'],correct:0,hint:'سمي بعام الفيل لأن أبرهة حاول هدم الكعبة',quran:'ألم تر كيف فعل ربك بأصحاب الفيل'},en:{q:'In which year was the Prophet (pbuh) born?',opts:['Year of the Elephant (570 CE)','Year of Sorrow (619 CE)','Year of Conquest (630 CE)','Year of Migration (622 CE)'],correct:0,hint:'Named after Abraha\'s attempt to destroy the Ka\'bah',quran:'Have you not seen how your Lord dealt with the people of the Elephant?'},fr:{q:'En quelle annee le Prophete (sws) est-il ne ?',opts:['Annee de l\'Elephant (570)','Annee de la Tristesse (619)','Annee de la Conquete (630)','Annee de l\'Emigration (622)'],correct:0,hint:'Nomme d\'apres la tentative d\'Abraha de detruire la Ka\'bah',quran:'N\'as-tu pas vu comment ton Seigneur a agi avec les gens de l\'Elephant ?'}},
  {ar:{q:'ما هي أول كلمة نزلت من القرآن؟',opts:['اقرأ','بسم الله','قل','الحمد'],correct:0,hint:'نزلت في غار حراء',quran:'اقرأ باسم ربك الذي خلق'},en:{q:'What was the first word revealed from the Quran?',opts:['Read (Iqra)','In the name of God','Say','Praise'],correct:0,hint:'Revealed in the Cave of Hira',quran:'Read in the name of your Lord who created'},fr:{q:'Quel fut le premier mot revele du Coran ?',opts:['Lis (Iqra)','Au nom de Dieu','Dis','Louange'],correct:0,hint:'Revele dans la grotte de Hira',quran:'Lis au nom de ton Seigneur qui a cree'}},
  {ar:{q:'من أول من آمن بالنبي ﷺ من النساء؟',opts:['خديجة بنت خويلد','عائشة بنت أبي بكر','فاطمة بنت محمد','أم سلمة'],correct:0,hint:'كانت زوجته وأول من صدّقه',quran:''},en:{q:'Who was the first woman to believe in the Prophet?',opts:['Khadijah bint Khuwaylid','Aisha bint Abu Bakr','Fatimah bint Muhammad','Umm Salamah'],correct:0,hint:'She was his wife and the first to believe him',quran:''},fr:{q:'Qui fut la premiere femme a croire au Prophete ?',opts:['Khadijah bint Khuwaylid','Aisha bint Abu Bakr','Fatimah bint Muhammad','Umm Salamah'],correct:0,hint:'Elle etait son epouse et la premiere a le croire',quran:''}},
  {ar:{q:'كم مسلم شارك في غزوة بدر؟',opts:['٣١٣','١٠٠٠','٧٠٠','٣٠٠٠'],correct:0,hint:'كانوا قلة مقابل ١٠٠٠ من قريش',quran:'كم من فئة قليلة غلبت فئة كثيرة بإذن الله'},en:{q:'How many Muslims fought at the Battle of Badr?',opts:['313','1,000','700','3,000'],correct:0,hint:'They were few against 1,000 from Quraysh',quran:'How many a small group has defeated a large group by God\'s permission'},fr:{q:'Combien de musulmans ont combattu a la bataille de Badr ?',opts:['313','1 000','700','3 000'],correct:0,hint:'Ils etaient peu face a 1 000 de Quraysh',quran:'Combien de petits groupes ont vaincu de grands groupes par la permission de Dieu'}},
  {ar:{q:'من صاحب فكرة حفر الخندق؟',opts:['سلمان الفارسي','أبو بكر الصديق','عمر بن الخطاب','خالد بن الوليد'],correct:0,hint:'كان فارسياً أسلم وأصبح صحابياً',quran:''},en:{q:'Whose idea was it to dig the trench?',opts:['Salman al-Farisi','Abu Bakr','Umar ibn al-Khattab','Khalid ibn al-Walid'],correct:0,hint:'He was Persian who became a companion',quran:''},fr:{q:'A qui revient l\'idee de creuser le fosse ?',opts:['Salman al-Farisi','Abu Bakr','Umar ibn al-Khattab','Khalid ibn al-Walid'],correct:0,hint:'Il etait Perse et devint compagnon',quran:''}},
  {ar:{q:'ماذا قال النبي ﷺ لأهل مكة يوم الفتح؟',opts:['اذهبوا فأنتم الطلقاء','لا عفو اليوم','سأنتقم منكم','ادفعوا الجزية'],correct:0,hint:'عبارة تدل على رحمة وعفو عظيم',quran:'وما أرسلناك إلا رحمة للعالمين'},en:{q:'What did the Prophet say to the people of Mecca on the day of conquest?',opts:['Go, you are free','No forgiveness today','I will take revenge','Pay tribute'],correct:0,hint:'A phrase showing great mercy and forgiveness',quran:'We have not sent you except as a mercy to the worlds'},fr:{q:'Qu\'a dit le Prophete aux gens de La Mecque le jour de la conquete ?',opts:['Allez, vous etes libres','Pas de pardon aujourd\'hui','Je me vengerai','Payez le tribut'],correct:0,hint:'Une phrase montrant grande misericorde et pardon',quran:'Nous ne t\'avons envoye que comme misericorde pour les mondes'}},
  {ar:{q:'ما اسم الغار الذي اختبأ فيه النبي ﷺ أثناء الهجرة؟',opts:['غار ثور','غار حراء','غار الخندق','غار أُحد'],correct:0,hint:'يقع جنوب مكة',quran:'إذ هما في الغار إذ يقول لصاحبه لا تحزن إن الله معنا'},en:{q:'What is the name of the cave where the Prophet hid during the migration?',opts:['Cave of Thawr','Cave of Hira','Cave of Khandaq','Cave of Uhud'],correct:0,hint:'Located south of Mecca',quran:'When they were in the cave, he said to his companion: Do not grieve, indeed God is with us'},fr:{q:'Quel est le nom de la grotte ou le Prophete s\'est cache pendant l\'emigration ?',opts:['Grotte de Thawr','Grotte de Hira','Grotte de Khandaq','Grotte d\'Uhud'],correct:0,hint:'Situee au sud de La Mecque',quran:'Quand ils etaient dans la grotte, il dit a son compagnon : Ne sois pas triste, certes Dieu est avec nous'}},
  {ar:{q:'ما الدرس الرئيسي من غزوة أُحد؟',opts:['العصيان يجلب الهزيمة','العدد لا يهم','الهجرة ضرورية','الصبر على الأذى'],correct:0,hint:'ترك الرماة مواقعهم',quran:''},en:{q:'What is the main lesson of the Battle of Uhud?',opts:['Disobedience brings defeat','Numbers don\'t matter','Migration is necessary','Patience with harm'],correct:0,hint:'The archers left their positions',quran:''},fr:{q:'Quelle est la lecon principale de la bataille d\'Uhud ?',opts:['La desobeissance apporte la defaite','Les chiffres n\'importent pas','L\'emigration est necessaire','La patience face au mal'],correct:0,hint:'Les archers ont quitte leurs positions',quran:''}},
  {ar:{q:'في أي ليلة فُرضت الصلوات الخمس؟',opts:['ليلة الإسراء والمعراج','ليلة القدر','ليلة النصف من شعبان','ليلة العيد'],correct:0,hint:'الليلة التي عُرج فيها بالنبي ﷺ إلى السماء',quran:'سبحان الذي أسرى بعبده ليلاً من المسجد الحرام إلى المسجد الأقصى'},en:{q:'On which night were the five daily prayers prescribed?',opts:['The Night Journey & Ascension','The Night of Power','Mid-Sha\'ban','Eid night'],correct:0,hint:'The night the Prophet ascended to the heavens',quran:'Exalted is He who took His servant on a night journey from the Sacred Mosque to Al-Aqsa Mosque'},fr:{q:'Quelle nuit les cinq prieres quotidiennes ont-elles ete prescrites ?',opts:['Le Voyage Nocturne et l\'Ascension','La Nuit du Destin','Mi-Sha\'ban','Nuit de l\'Eid'],correct:0,hint:'La nuit ou le Prophete est monte aux cieux',quran:'Gloire a Celui qui a fait voyager Son serviteur la nuit de la Mosquee Sacree a la Mosquee Al-Aqsa'}},
  {ar:{q:'ما هي وثيقة المدينة؟',opts:['أول دستور ينظم التعايش','معاهدة حرب','عقد تجارة','وصية النبي ﷺ'],correct:0,hint:'نظّمت حقوق جميع سكان المدينة',quran:''},en:{q:'What was the Medina Charter?',opts:['First constitution organizing coexistence','A war treaty','A trade agreement','The Prophet\'s will'],correct:0,hint:'It organized the rights of all Medina\'s inhabitants',quran:''},fr:{q:'Qu\'etait la Charte de Medine ?',opts:['Premiere constitution organisant la coexistence','Un traite de guerre','Un accord commercial','Le testament du Prophete'],correct:0,hint:'Elle organisait les droits de tous les habitants de Medine',quran:''}}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء الصباح',text:'أصبحنا وأصبح الملك لله',tr:'Nous voici au matin, et le royaume appartient a Allah'},en:{label:'Morning Dua',text:'We have entered the morning and the dominion belongs to Allah',tr:''},fr:{label:'Dua du Matin',text:'Nous voici au matin, et le royaume appartient a Allah',tr:''}},
  {ar:{label:'دعاء السفر',text:'سبحان الذي سخّر لنا هذا وما كنا له مقرنين',tr:'Gloire a Celui qui nous a assujetti ceci'},en:{label:'Travel Dua',text:'Glory to Him who has made this subservient to us',tr:''},fr:{label:'Dua du Voyage',text:'Gloire a Celui qui nous a assujetti ceci',tr:''}},
  {ar:{label:'دعاء التوكل',text:'اللهم إني أسألك خير هذا اليوم وأعوذ بك من شر ما فيه',tr:'O Allah, je Te demande le bien de ce jour et je cherche refuge contre son mal'},en:{label:'Dua of Trust',text:'O Allah, I ask You for the good of this day and seek refuge from its evil',tr:''},fr:{label:'Dua de Confiance',text:'O Allah, je Te demande le bien de ce jour et je cherche refuge contre son mal',tr:''}},
  {ar:{label:'دعاء طلب العلم',text:'رب زدني علماً',tr:'Seigneur, augmente-moi en science'},en:{label:'Dua for Knowledge',text:'My Lord, increase me in knowledge',tr:''},fr:{label:'Dua pour le Savoir',text:'Seigneur, augmente-moi en science',tr:''}},
  {ar:{label:'دعاء الاستخارة',text:'اللهم إني أستخيرك بعلمك وأستقدرك بقدرتك',tr:'O Allah, je Te consulte par Ta science et Te demande par Ta puissance'},en:{label:'Istikhara Dua',text:'O Allah, I seek Your guidance by Your knowledge and seek ability by Your power',tr:''},fr:{label:'Dua de l\'Istikhara',text:'O Allah, je Te consulte par Ta science et Te demande par Ta puissance',tr:''}},
  {ar:{label:'دعاء الحفظ',text:'اللهم إني أعوذ بك من الهم والحزن',tr:'O Allah, je cherche refuge aupres de Toi contre le souci et la tristesse'},en:{label:'Dua of Protection',text:'O Allah, I seek refuge in You from worry and grief',tr:''},fr:{label:'Dua de Protection',text:'O Allah, je cherche refuge aupres de Toi contre le souci et la tristesse',tr:''}}
];

// ═══════════════ XP & BADGES SYSTEM ═══════════════
const BADGES = [
  {id:'beginner',emoji:'🌟',ar:'مبتدئ',en:'Beginner',fr:'Debutant',xp:0},
  {id:'reader',emoji:'📖',ar:'قارئ',en:'Reader',fr:'Lecteur',xp:50},
  {id:'explorer',emoji:'🔭',ar:'مستكشف',en:'Explorer',fr:'Explorateur',xp:150},
  {id:'scholar',emoji:'🎓',ar:'عالم',en:'Scholar',fr:'Savant',xp:300},
  {id:'persistent',emoji:'🏆',ar:'مثابر',en:'Persistent',fr:'Perseverant',xp:500},
  {id:'expert',emoji:'👑',ar:'خبير',en:'Expert',fr:'Expert',xp:1000}
];

function getXPData() {
  return JSON.parse(localStorage.getItem('fs-xp') || '{"xp":0,"reads":[],"quizBest":0}');
}
function saveXPData(data) {
  localStorage.setItem('fs-xp', JSON.stringify(data));
}
function addXP(amount, reason) {
  const data = getXPData();
  data.xp += amount;
  saveXPData(data);
  showToast(`+${amount} XP${reason ? ' — ' + reason : ''}`);
  updateXPDisplay();
}
function getCurrentBadge() {
  const xp = getXPData().xp;
  let badge = BADGES[0];
  for (const b of BADGES) { if (xp >= b.xp) badge = b; }
  return badge;
}
function updateXPDisplay() {
  const data = getXPData();
  const badge = getCurrentBadge();
  const nextBadge = BADGES[BADGES.indexOf(badge) + 1];
  const el = document.getElementById('xpDisplay');
  const t = T[lang];
  const progress = nextBadge ? Math.min(100, ((data.xp - badge.xp) / (nextBadge.xp - badge.xp)) * 100) : 100;
  el.innerHTML = `
    <div class="xp-badge">${badge.emoji} ${badge[lang]}</div>
    <div class="xp-bar-wrap">
      <div class="xp-bar"><div class="xp-bar-fill" style="width:${progress}%"></div></div>
      <span class="xp-text">${data.xp} XP</span>
    </div>
  `;
}

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('fs-lang') || 'ar';
let currentSirahIdx = -1;
let ageMode = localStorage.getItem('fs-ageMode') || 'teen';

// ═══════════════ INITIALIZATION ═══════════════
function initApp() {
  setLang(lang, true);
  initTabs();
  renderAll();
  initSplash();
  initScrollTop();
  initScrollReveal();
  initKeyboardNav();
  initSwipeGestures();
  initHapticFeedback();
  initAutoDarkMode();
  initParticles();
  updateXPDisplay();
}

function renderAll() {
  renderHome();
  renderSirah();
  renderLessons();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  updateXPDisplay();
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l, init) {
  lang = l;
  localStorage.setItem('fs-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  const t = T[l];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('sirahTitle'); if(_e) _e.textContent=t.sirahTitle; }
  { const _e=document.getElementById('sirahDesc'); if(_e) _e.textContent=t.sirahDesc; }
  { const _e=document.getElementById('lessonsTitle'); if(_e) _e.textContent=t.lessonsTitle; }
  { const _e=document.getElementById('lessonsDesc'); if(_e) _e.textContent=t.lessonsDesc; }
  { const _e=document.getElementById('habitsTitle'); if(_e) _e.textContent=t.habitsTitle; }
  { const _e=document.getElementById('habitsDesc'); if(_e) _e.textContent=t.habitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabSirah'); if(_e) _e.textContent=t.tabSirah; }
  { const _e=document.getElementById('tabLessons'); if(_e) _e.textContent=t.tabLessons; }
  { const _e=document.getElementById('tabHabits'); if(_e) _e.textContent=t.tabHabits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('habitsReset'); if(_e) _e.textContent=t.resetBtn; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  if (!init) renderAll();
}

// ═══════════════ THEMES ═══════════════
const THEMES = ['sirah','night','desert'];
function getTheme() { return localStorage.getItem('fs-theme') || 'sirah'; }
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem('fs-theme', t);
  const icons = {sirah:'🕌',night:'🌙',desert:'🏜️'};
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=icons[t] || '🕌'; }
}
function cycleTheme() {
  const current = getTheme();
  const idx = THEMES.indexOf(current);
  const next = THEMES[(idx + 1) % THEMES.length];
  setTheme(next);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
      try { navigator.vibrate && navigator.vibrate(10); } catch(e) {}
      setTimeout(() => {
        document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
          if (window._scrollObserver) window._scrollObserver.observe(el);
        });
      }, 350);
    });
  });
}

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  const interval = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) { clearInterval(interval); dismissSplash(); }
  }, 1000);
}

function dismissSplash() {
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.style.display = 'none', 500); }
}

// ═══════════════ AGE MODE TOGGLE ═══════════════
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem('fs-ageMode', ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  const t = T[lang];
  showToast(ageMode === 'young' ? t.youngMode : t.teenMode);
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % SIRAH.length;
  const s = SIRAH[dayIdx];
  const sd = s[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${sd.title}</div>
    <div class="daily-body">${ageMode === 'young' && sd.young ? sd.young : sd.event}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=sirah]').click()">${t.tabSirah} &#8594;</div>
  `;
  const sections = [
    {icon:'🕌',tab:'sirah',title:t.tabSirah,desc:lang==='ar'?'٢٠ محطة نبوية':lang==='fr'?'20 etapes prophetiques':'20 prophetic milestones'},
    {icon:'📖',tab:'lessons',title:t.tabLessons,desc:lang==='ar'?'دروس وعبر':lang==='fr'?'Lecons et reflexions':'Lessons & reflections'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'عادات نبوية':lang==='fr'?'Habitudes prophetiques':'Prophetic habits'},
    {icon:'🎓',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معرفتك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📚',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'A propos du livre':'About the book'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
  // XP display
  const xpEl = document.getElementById('xpDisplay');
  if (xpEl) updateXPDisplay();
}

// ═══════════════ RENDER: SIRAH ═══════════════
function renderSirah() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="sirahSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterSirah(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = SIRAH.map((s, i) => {
    const d = s[lang];
    const content = ageMode === 'young' && d.young ? d.young : `
      <p class="principle-desc">${d.event}</p>
      <div class="lesson-box"><span class="lesson-label">${t.lesson}</span><span>${d.lesson}</span></div>
      <div class="fiqh-box"><span class="fiqh-label">${t.fiqh}</span><span>${d.fiqh}</span></div>
      <div class="verse-box"><div class="verse-arabic">${d.hadith}</div></div>
    `;
    return `
    <div class="principle-card scroll-reveal" id="sirah-${s.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('sirah-${s.id}');markRead(${i})">
        <span class="principle-num">${s.emoji}</span>
        <span class="principle-emoji">${s.year}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          ${ageMode === 'young' && d.young ? `<p class="principle-desc young-text">${d.young}</p>` : `
            <p class="principle-desc">${d.event}</p>
            <div class="lesson-box"><span class="lesson-label">${t.lesson}</span> ${d.lesson}</div>
            <div class="fiqh-box"><span class="fiqh-label">${t.fiqh}</span> ${d.fiqh}</div>
            <div class="verse-box"><div class="verse-arabic">${d.hadith}</div></div>
          `}
          <button class="share-btn" onclick="event.stopPropagation();shareSirah(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('sirahContainer')||{}).innerHTML= searchBar + cards;
}

function filterSirah(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('#sirahContainer .principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    card.style.display = (!q || searchText.includes(q) || titleText.includes(q)) ? '' : 'none';
  });
}

function markRead(idx) {
  const data = getXPData();
  if (!data.reads) data.reads = [];
  if (!data.reads.includes(idx)) {
    data.reads.push(idx);
    data.xp += 10;
    saveXPData(data);
    showToast('+10 XP');
    updateXPDisplay();
  }
}

async function shareSirah(idx) {
  const s = SIRAH[idx];
  const d = s[lang];
  const text = `${s.emoji} ${d.title}\n\n${d.lesson}\n\n${d.hadith}\n\n— فقه السيرة | Understanding the Sirah`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: LESSONS ═══════════════
function renderLessons() {
  const t = T[lang];
  (document.getElementById('lessonsContainer')||{}).innerHTML= LESSONS_DATA.map(l => {
    const d = l[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${l.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${t.event}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${t.lesson}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS (with streak) ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('fs-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('fs-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  (document.getElementById('habitsContainer')||{}).innerHTML= HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('fs-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else { hs.done.push(i); addXP(5, T[lang].habitsTitle); }
  localStorage.setItem('fs-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); addXP(20, T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('fs-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = (total > 0 ? (done / total * 100) : 0) + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

// ═══════════════ STREAK SYSTEM ═══════════════
function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('fs-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('fs-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('fs-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#4E342E','#8D6E63','#D7CCC8','#FFCC80','#A5D6A7','#81D4FA','#FFD54F'];
  for (let i = 0; i < 120; i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180); ctx.fillStyle = p.color; ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ — "Who Wants to Be a Scholar?" ═══════════════
let quizState = { current: 0, score: 0, lifelines: { '5050': true, hint: true, quran: true }, answered: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, lifelines: { '5050': true, hint: true, quran: true }, answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');

  if (quizState.current >= QUIZ.length) {
    // Show final result
    const pct = Math.round((quizState.score / QUIZ.length) * 100);
    let emoji, title;
    if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم!':lang==='fr'?'Savant !':'Scholar!'; }
    else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'طالب علم':lang==='fr'?'Etudiant':'Student'; }
    else { emoji = '🌱'; title = lang==='ar'?'مبتدئ':lang==='fr'?'Debutant':'Beginner'; }
    container.innerHTML = '';
    result.classList.remove('hidden');
    result.innerHTML = `
      <div class="qr-emoji">${emoji}</div>
      <div class="qr-score">${quizState.score}/${QUIZ.length}</div>
      <div class="qr-title">${title}</div>
      <div class="qr-desc">${pct}%</div>
      <button class="quiz-submit" onclick="renderQuiz()">${t.quizRestart}</button>
    `;
    const data = getXPData();
    if (quizState.score > (data.quizBest || 0)) { data.quizBest = quizState.score; data.xp += quizState.score * 5; saveXPData(data); updateXPDisplay(); }
    return;
  }

  const q = QUIZ[quizState.current][lang];
  quizState.answered = false;

  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(quizState.current/QUIZ.length)*100}%"></div></div>
    <div class="quiz-counter">${quizState.current + 1} / ${QUIZ.length}</div>
    <div class="quiz-question">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((o, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${o}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines['5050']?'':'used'}" onclick="useLifeline5050()" ${quizState.lifelines['5050']?'':'disabled'}>${t.quizLifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useLifelineHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.quizLifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useLifelineQuran()" ${quizState.lifelines.quran?'':'disabled'}>${t.quizLifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>
  `;
}

function answerQuiz(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const t = T[lang];
  const q = QUIZ[quizState.current][lang];
  const isCorrect = idx === q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === q.correct) o.classList.add('correct');
    if (i === idx && !isCorrect) o.classList.add('wrong');
  });
  if (isCorrect) { quizState.score++; addXP(5, t.quizCorrect); playSound('success'); }
  else playSound('click');
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<div class="${isCorrect ? 'fb-correct' : 'fb-wrong'}">${isCorrect ? t.quizCorrect : t.quizWrong}</div>
    <button class="quiz-submit" onclick="quizState.current++;renderQuizQuestion()">${quizState.current < QUIZ.length - 1 ? t.quizNext : t.quizFinish}</button>`;
}

function useLifeline5050() {
  if (!quizState.lifelines['5050'] || quizState.answered) return;
  quizState.lifelines['5050'] = false;
  const q = QUIZ[quizState.current][lang];
  const wrong = q.opts.map((_, i) => i).filter(i => i !== q.correct);
  const toHide = wrong.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-' + i); if (el) { el.style.opacity = '0.3'; el.disabled = true; } });
  renderQuizQuestion.__lifelines = quizState.lifelines;
}

function useLifelineHint() {
  if (!quizState.lifelines.hint || quizState.answered) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  if (q.hint) showToast('💡 ' + q.hint);
}

function useLifelineQuran() {
  if (!quizState.lifelines.quran || quizState.answered) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  if (q.quran) showToast('📖 ' + q.quran);
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. الأحاديث محققة بواسطة الشيخ الألباني رحمه الله. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"فقه السيرة" هو من أهم كتب الشيخ الغزالي. يتناول السيرة النبوية لا كتاريخ يُحفظ بل كدروس تُعاش. الأحاديث في الكتاب حققها الشيخ ناصر الدين الألباني رحمه الله. يغطي الكتاب حياة النبي ﷺ من الميلاد حتى الوفاة مع استخراج الفقه والدروس العملية من كل حدث.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "فقه السيرة" — الشيخ محمد الغزالي — تحقيق أحاديثه: الشيخ الألباني','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. Hadith verified by Sheikh al-Albani (may Allah have mercy on him). This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Fiqh al-Sirah" (Understanding the Prophet\'s Biography) is one of Sheikh al-Ghazali\'s most important books. It treats the Sirah not as history to memorize but as lessons to live by. The hadith in this book were verified by Sheikh Nasir al-Din al-Albani (may Allah have mercy on him). It covers the Prophet\'s life from birth to death, extracting understanding and practical lessons from every event.',
      sourcesTitle: 'Sources',
      sources: ['"Fiqh al-Sirah" — Sheikh Mohammed al-Ghazali — Hadith verified by Sheikh al-Albani','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan al-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Hadiths verifies par le Sheikh al-Albani (qu\'Allah lui fasse misericorde). Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Fiqh al-Sirah » (Comprendre la Biographie du Prophete) est l\'un des livres les plus importants du Sheikh al-Ghazali. Il traite la Sirah non comme une histoire a memoriser mais comme des lecons a vivre. Les hadiths ont ete verifies par le Sheikh al-Albani.',
      sourcesTitle: 'Sources',
      sources: ['« Fiqh al-Sirah » — Sheikh Mohammed al-Ghazali — Hadiths verifies par le Sheikh al-Albani','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan al-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر فقه السيرة النبوية بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "فقه السيرة" للشيخ محمد الغزالي — الأحاديث حققها الشيخ الألباني.'},
      {title:'✨ المميزات',body:'٣ لغات، ٣ أنماط، ٢٠ محطة، ٦ دروس، اختبار مع وسائل مساعدة، عادات نبوية، نظام نقاط وأوسمة.'},
      {title:'🧒 الوضع',body:'وضع "مستكشف صغير" للأطفال مع نصوص مبسطة. وضع "باحث شاب" للمحتوى الكامل.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share the Sirah interactively.'},
      {title:'📚 Sources',body:'"Fiqh al-Sirah" by Sheikh Mohammed al-Ghazali — Hadith verified by Sheikh al-Albani.'},
      {title:'✨ Features',body:'3 languages, 3 themes, 20 milestones, 6 lessons, quiz with lifelines, prophetic habits, XP & badges.'},
      {title:'🧒 Modes',body:'"Young Explorer" mode for kids with simplified texts. "Teen Scholar" mode for full content.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la Sirah de maniere interactive.'},
      {title:'📚 Sources',body:'« Fiqh al-Sirah » par Sheikh Mohammed al-Ghazali — Hadiths verifies par le Sheikh al-Albani.'},
      {title:'✨ Fonctionnalites',body:'3 langues, 3 themes, 20 etapes, 6 lecons, quiz avec aides, habitudes prophetiques, XP & badges.'},
      {title:'🧒 Modes',body:'Mode « Jeune Explorateur » pour enfants avec textes simplifies. Mode « Jeune Savant » pour le contenu complet.'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div>${dd.tr ? `<div class="dua-item-tr">${dd.tr}</div>` : ''}</div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  window._scrollObserver = observer;
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!document.getElementById('helpPanel').classList.contains('hidden')) { toggleHelp(); return; }
      if (!document.getElementById('duaPanel').classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'), m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home', 'sirah', 'lessons', 'habits', 'quiz', 'about'];
  document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX, dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    const isRTL = document.documentElement.dir === 'rtl';
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) return;
    const currentIdx = tabOrder.indexOf(activeTab.dataset.tab);
    if (currentIdx < 0) return;
    let nextIdx = isRTL ? (dx > 0 ? currentIdx + 1 : currentIdx - 1) : (dx < 0 ? currentIdx + 1 : currentIdx - 1);
    if (nextIdx >= 0 && nextIdx < tabOrder.length) {
      const nextTab = document.querySelector(`.tab[data-tab="${tabOrder[nextIdx]}"]`);
      if (nextTab) nextTab.click();
    }
  }, { passive: true });
}

// ═══════════════ HAPTIC & AUTO DARK ═══════════════
function initHapticFeedback() { document.addEventListener('click', (e) => { if (e.target.closest('button') || e.target.closest('.home-card') || e.target.closest('.principle-head')) { try { navigator.vibrate && navigator.vibrate(10); } catch(e2) {} } }); }
function initAutoDarkMode() { if (!localStorage.getItem('fs-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('night'); }

// ═══════════════ FLOATING PARTICLES ═══════════════
function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.className = 'particles-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let particles = [];
  const colors = ['rgba(78,52,46,0.12)', 'rgba(141,110,99,0.1)', 'rgba(255,204,128,0.12)', 'rgba(165,214,167,0.08)'];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 18; i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*4+2,vy:-(Math.random()*0.3+0.1),vx:(Math.random()-0.5)*0.2,color:colors[Math.floor(Math.random()*colors.length)]});
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.fill(); p.y += p.vy; p.x += p.vx; if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; } });
    requestAnimationFrame(draw);
  }
  draw();
}

// ═══════════════ TICKER ═══════════════
function initTicker() {
  const ticker = document.getElementById('tickerText');
  const msgs = {
    ar: ['فقه السيرة — الشيخ محمد الغزالي','٢٠ محطة من حياة النبي ﷺ','الأحاديث محققة بواسطة الشيخ الألباني','لقد كان لكم في رسول الله أسوة حسنة'],
    en: ['Understanding the Sirah — Sheikh al-Ghazali','20 milestones from the Prophet\'s life','Hadith verified by Sheikh al-Albani','Indeed in the Messenger of Allah you have an excellent example'],
    fr: ['Comprendre la Sirah — Sheikh al-Ghazali','20 etapes de la vie du Prophete','Hadiths verifies par le Sheikh al-Albani','Vous avez dans le Messager d\'Allah un excellent modele']
  };
  const items = (msgs[lang] || msgs.en).map(m => `<span class="tc">&nbsp;&nbsp;${m}&nbsp;&nbsp;&#8226;</span>`).join('');
  ticker.innerHTML = items + items;
  ticker.style.animation = `tickerMarquee ${40}s linear infinite`;
  if (document.documentElement.dir === 'rtl') ticker.style.animationDirection = 'reverse';
}

// ═══════════════ BOOT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getTheme());
  initApp();
  initTicker();
});
