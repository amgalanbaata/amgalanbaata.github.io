const studentData = [
    {
        grade: "6-1",
        name: "Б.Ангараг",
        scratch: "shooter",
        image: false,
    },
    {
        grade: "6-1",
        name: "А.Мөнгөнзул",
        scratch: "duck",
        image: true,
    },
    {
        grade: "6-1",
        name: "Э.Аригбөх",
        scratch: "coockie clicker",
        certificates: [
            "images/spoj-certificate/6-1Э.Аригбөх.png"
        ],
        image: true,
    },
    {
        grade: "6-1",
        name: "Б.Арми",
        scratch: "flappy bird",
        image: true,
    },
    {
        grade: "6-1",
        name: "Б.Болд-Оргил",
        scratch: "sigma ronaldo",
        image: true,
    },
    {
        grade: "6-1",
        name: "Б.Есүй",
        scratch: "jumping",
        image: true,
    },
    {
        grade: "6-1",
        name: "Б.Тэнүүнтөрч",
        scratch: "tag",
        image: true,
    },
    {
        grade: "6-1",
        name: "Б.Хишигжаргал",
        scratch: "change of clothes",
        image: true,
    },
    {
        grade: "6-1",
        name: "Б.Хүслэн",
        scratch: "flowey boss",
        image: true,
    },
    {
        grade: "6-1",
        name: "Г.Тэмүүлэн",
        scratch: "zombie shooter",
        image: true,
    },
    {
        grade: "6-1",
        name: "Л.Сайнхүү",
        scratch: "blading ball",
        image: true,
    },
    {
        grade: "6-1",
        name: "Л.Сайханзаяа",
        scratch: "anger game",
        image: true,
    },
    {
        grade: "6-1",
        name: "М.Баярцэцэг",
        scratch: "falling ball",
        image: true,
    },
    {
        grade: "6-1",
        name: "М.Сарангуа",
        scratch: "must play",
        image: true,
    },
    {
        grade: "6-1",
        name: "О.Чингүүн",
        scratch: "ping pong",
        image: true,
    },
    {
        grade: "6-1",
        name: "Ө.Даваа-Очир",
        scratch: "clicker 4",
        image: true,
    },
    {
        grade: "6-1",
        name: "Т.Баттулга",
        scratch: "coockie clicker",
        image: true,
    },
    {
        grade: "6-1",
        name: "Ц.Биндэръяа",
        scratch: "lady egg",
        image: true,
    },
    {
        grade: "6-1",
        name: "Э.Хулангоо",
        scratch: "Туулай",
        image: true,
    },
    {
        grade: "6-2",
        name: "А.Мишээл",
        scratch: "jimmys adventure",
        image: true,
    },
    {
        grade: "6-2",
        name: "Б.Номин-Эрдэнэ",
        scratch: "delden gegdeehii",
        image: true,
    },
    {
        grade: "6-2",
        name: "Б.Төгөлдөр",
        scratch:"delden gegdeehii",
        image: true,
    },
    {
        grade: "6-2",
        name: "Б.Тэмүүлэн",
        scratch: "bumbulug unagah",
        image: true,
    },
    {
        grade: "6-2",
        name: "Б.Чингүүн",
        scratch: "shooting zombie",
        image: true,
    },
    {
        grade: "6-2",
        name: "Г.Анударь",
        scratch: "snake",
        image: true,
    },
    {
        grade: "6-2",
        name: "Г.Мөнхбилэг",
        scratch: "үсрэлт",
        image: true,
    },
    {
        grade: "6-2",
        name: "Г.Цэцүүхэн",
        scratch: "bumbugnuus bultah",
        image: true,
    },
    {
        grade: "6-2",
        name: "Д.Ган-Үжин",
        scratch: "basketball",
        image: true,
    },
    {
        grade: "6-2",
        name: "М.Гал",
        scratch: "ping pong",
        image: true
    },
    {
        grade: "6-2",
        name: "М.Есөн-Эрдэнэ",
        scratch: "jumpman",
        image: true
    },
    {
        grade: "6-2",
        name: "М.Эгшиглэн",
        scratch: "space waves",
        image: true
    },
    {
        grade: "6-2",
        name: "О.Бодьхүү",
        scratch: "2 noob",
        image: true
    },
    {
        grade: "6-2",
        name: "О.Тэмүүлэн",
        scratch: "shaar tsohig",
        image: true
    },
    {
        grade: "6-2",
        name: "Т.Энхболд",
        scratch: "shaar tsohig",
        image: true
    },
    {
        grade: "6-2",
        name: "У.Маргад",
        scratch: "",
        image: true
    },
    {
        grade: "6-2",
        name: "Х.Тод-Эрдэнэ",
        scratch: "uraldaanii mashin",
        image: true
    },
    {
        grade: "6-2",
        name: "Х.Ууганбаяр",
        scratch: "help",
        image: true
    },
    {
        grade: "6-2",
        name: "Ш.Индра",
        scratch: "😂 dardag togloom",
        image: true
    },
    {
        grade: "6-2",
        name: "Э.Дэлгэрмөрөн",
        scratch: "car racking game",
        image: true
    },
    {
        grade: "6-2",
        name: "Э.Хишигтөгөлдөр",
        scratch: "zombie fight",
        image: true
    },
    {
        grade: "7-1",
        name: "А.Цэлмүүн",
        spoj:   "Бодлого-51 rank-7310",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Б.Төгөлдөр",
        spoj: "Бодлого-89 rank-4646",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Б.Энхжин",
        spoj: "Бодлого-95 rank-2797",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Д.Батмөнх",
        spoj: "Бодлого-111 rank-1737",
        certificates: "images/spoj-certificate/7-1Д.Батмөнх.png"
    },
    {
        grade: "7-1",
        name: "Д.Баянмөнх",
        spoj: "Бодлого-103 rank-2166",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Д.Номтхүү",
        spoj: "Бодлого-? rank-?",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Д.Нуганбилэг",
        spoj: "Бодлого-45 rank-8645",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Д.Хосшагай",
        spoj: "Бодлого-111 rank-1793",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "М.Очир-Эрдэнэ",
        spoj: "Бодлого-112 rank-1730",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "М.Ялгуумхүү",
        spoj: "Бодлого-40 rank-9249",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Т.Ану",
        spoj: "Бодлого-102 rank-2218",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Т.Энх-Үжин",
        spoj: "Бодлого-115 rank-1613",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Ц.Оргилсайхан",
        spoj: "Бодлого-80 rank-3858",
        certificates: [
        ],
    },
    {
        grade: "7-1",
        name: "Э.Энх-Амгалан",
        spoj: "Бодлого-103 rank-2179",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "А.Пүрэвжав",
        spoj: "Бодлого-82 rank-3645",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Б.Дөлбадрах",
        spoj: "Бодлого-122 rank-1373",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Б.Мөнхнасан",
        spoj: "Бодлого-111 rank-1797",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Б.Эрдэмбилэг",
        spoj: "Бодлого-50 rank-7378",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "О.Эрмүүн",
        spoj: "Бодлого-103 rank-2167",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Б.Эрхэмбилэг",
        spoj: "Бодлого-41 rank-8728",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "И.Чингүнсанаа",
        spoj: "Бодлого-94 rank-2991",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Н.Нарансолонго",
        spoj: "Бодлого-146 rank-712",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "С.Индра",
        spoj: "Бодлого-107 rank-1984",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Э.Намуунаа",
        spoj: "Бодлого-196 rank-253",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Э.Чулгар",
        spoj: "Бодлого-41 rank-8833",
        certificates: [
        ],
    },
    {
        grade: "7-2",
        name: "Ө.Эмүүжин",
        spoj: "Бодлого-329 rank-53",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Ө.Ананд",
        spoj: "Бодлого-71 rank-4561",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "М.Анунгоо",
        spoj: "Бодлого-103 rank-2181",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Д.Ариунзаяа",
        spoj: "Бодлого-77 rank-4068",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Ж.Билэгт",
        spoj: "Бодлого-71 rank-4662",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "С.Бүжин",
        spoj: "Бодлого-31 rank-10232",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Б.Дэлгэрдалай",
        spoj: "Бодлого-89 rank-3194",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Г.Мишээл",
        spoj: "Бодлого-89 rank-3194",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "М.Мөнхдөл",
        spoj: "Бодлого-90 rank-3189",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Г.Мөнхжаргал",
        spoj: "Бодлого-102 rank-2235",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "О.Мэргэд-Эрдэнэ",
        spoj: "Бодлого-105 rank-2083",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Б.Номин",
        spoj: "Мэдээлэл Олдсонгүй",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Н.Саяана",
        spoj: "Бодлого-78 rank-4026",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Б.Сэцэн",
        spoj: "Бодлого-138 rank-913",
        certificates: [
            "https://www.sololearn.com/certificates/CC-FQNKRI7E",
            "https://www.sololearn.com/certificates/CC-EGPZGDJ9",
            "https://www.sololearn.com/certificates/CC-BKQJAGCA"
        ],
    },
    {
        grade: "8-1",
        name: "Г.Төгөлдөр",
        spoj: "Бодлого-89 rank-3191",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Ц.Төгс-Эрдэнэ",
        spoj: "Бодлого-100 rank-2410",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Б.Түшиг",
        spoj: "Бодлого-97 rank-2700",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Э.Хатанбаатар",
        spoj: "Бодлого-110 rank-1792",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Н.Энэрэл",
        spoj: "Мэдээлэл Олдсонгүй",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Б.Эрдэнэ",
        spoj: "Бодлого-45 rank-8600",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Т.Баттүшиг",
        spoj: "Бодлого-44 rank-8439",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "А.Болор-Эрдэнэ",
        spoj: "Бодлого-67 rank-4900",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Б.Бүжин",
        spoj: "Бодлого-108 rank-1937",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Э.Бадрах",
        spoj: "Бодлого-70 rank-4667",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Идэрхүлэг",
        spoj: "Бодлого-45 rank-8600",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Марал",
        spoj: "Бодлого-78 rank-4028",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Б.Мишээл",
        spoj: "Бодлого-48 rank-7900",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Нандин-Эрдэнэ",
        spoj: "Бодлого-101 rank-2290",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Сугар-Эрдэнэ",
        spoj: "Мэдээлэл Олдсонгүй",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Б.Тэлмүүн",
        spoj: "Бодлого-225 rank-166",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "О.Тэмүүжин",
        spoj: "Бодлого-79 rank-3953",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Д.Тэргэл",
        spoj: "Бодлого-67 rank-4939",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Б.Чингүүн",
        spoj: "Мэдээлэл Олдсонгүй",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Э.Чингүүн",
        spoj: "Мэдээлэл Олдсонгүй",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "М.Чингүүмаа",
        spoj: "Бодлого-102 rank-2235",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Э.Эмүүжин",
        spoj: "Бодлого-77 rank-4094",
        certificates: [
        ],
    },
    {
        grade: "8-2",
        name: "Б.Эрхэмбаяр",
        spoj: "Бодлого-41 rank-8728",
        certificates: [
        ],
    },
    {
    grade: "9-1",
    name: "Ш.Амжилт",
    certificates: [
        "https://www.sololearn.com/certificates/CC-R95ERVAA",
        "https://www.sololearn.com/certificates/CC-VVAEFOPZ",
        "https://www.kaggle.com/certification/badges/amjiltshijir/8",
        "https://www.kaggle.com/certification/badges/amjiltshijir/30",
    ]
    },
    {
    grade: "9-1",
    name: "М.Базаррагчаа",
    certificates: [
        "https://www.sololearn.com/certificates/CC-YASKUZIZ",
        "https://www.sololearn.com/certificates/CC-D0GFHLR7",
    ]
    },
    {
    grade: "9-1",
    name: "Болд-Эрдэнэ",
    certificates: [
        "https://www.sololearn.com/certificates/CC-CT9UVPIV",
        "https://www.sololearn.com/certificates/CC-CT9UVPIV",
    ]
    },
    {
    grade: "9-1",
    name: "Г.Бумбаяр",
    certificates: [
        "https://www.sololearn.com/certificates/CC-RUET4NKB",
        "https://www.sololearn.com/certificates/CC-75PXUTY6",
        "https://www.sololearn.com/certificates/CC-1XEDCSZV",
    ]
    },
    {
    grade: "9-1",
    name: "С.Ирмүүн",
    certificates: [
        "https://www.sololearn.com/certificates/CC-SOX5WSRL",
        "https://www.sololearn.com/certificates/CC-TERH2AJC",
        "https://www.freecodecamp.org/certification/fcc32798fc2-5baf-4caf-afb7-9fc9988cdea8/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/Irmvvn/30",
    ]
    },
    {
    grade: "9-1",
    name: "М.Итгэлтбаатар",
    certificates: [
        "https://www.sololearn.com/certificates/CC-NBL57P9A",
        "https://www.sololearn.com/certificates/CC-64OQOUWX",
        "https://www.freecodecamp.org/certification/fcc32798fc2-5baf-4caf-afb7-9fc9988cdea8/scientific-computing-with-python-v7",
        "https://docs.google.com/spreadsheets/d/1EoQTt2NDP4wMjJwlHMyA7iSyfTsPSuK7JXNi25HwgtE/edit?gid=0#gid=0",
    ]
    },
    {
    grade: "9-1",
    name: "Э.Маргалгуа",
    certificates: [
        "https://www.sololearn.com/certificates/CC-EXPTDOGS",
        "https://www.sololearn.com/certificates/CC-GNM7ZGGY",
        "https://www.sololearn.com/certificates/CC-048Q8SLR",
    ]
    },
    {
    grade: "9-1",
    name: "А.Мөнгөнсүлд",
    certificates: [
        "https://www.sololearn.com/certificates/CC-VMW0G3FB",
        "https://www.sololearn.com/certificates/CC-5T6SHEQZ",
    ]
    },

    {
    grade: "9-1",
    name: "Мөнх-Амгалан",
    certificates: [
        "https://www.sololearn.com/certificates/CC-RUET4NKB",
        "https://www.sololearn.com/certificates/CC-75PXUTY6",
    ]
    },
    {
    grade: "9-1",
    name: "М.Мөнхбаясгалан",
    certificates: [
        "https://www.sololearn.com/certificates/CC-CFIROUD2",
        "https://www.sololearn.com/certificates/CC-75PXUTY6",
    ]
    },
    {
    grade: "9-1",
    name: "Б.Мөнххүслэн",
    certificates: [
        "https://www.sololearn.com/certificates/CC-SHFWVXEK",
        "https://www.sololearn.com/certificates/CC-AXZI5SRG",
    ]
    },
    {
    grade: "9-1",
    name: "Б.Отгон-Эрдэнэ",
    certificates: [
        "https://www.sololearn.com/certificates/CC-SHFWVXEK",
        "https://www.sololearn.com/certificates/CC-8CDT5JXL",
    ]
    },
    {
    grade: "9-1",
    name: "Б.Пүрэвбат",
    certificates: [
        "https://www.sololearn.com/certificates/CC-BQCFM68E",
    ]
    },
    {
    grade: "9-1",
    name: "А.Сэцэн-Гүнж",
    certificates: [
        "https://www.sololearn.com/certificates/CC-RUET4NKB",
        "https://www.sololearn.com/certificates/CC-75PXUTY6",
    ]
    },
    {
    grade: "9-1",
    name: "Б.Хишигдарь",
    certificates: [
        "https://www.sololearn.com/certificates/CC-QWOMSX1J",
    ]
    },
    {
    grade: "9-1",
    name: "Ч.Хосбилэг",
    certificates: [
        "https://www.sololearn.com/certificates/CC-TEA0RQ3A",
        "https://docs.google.com/spreadsheets/d/1EoQTt2NDP4wMjJwlHMyA7iSyfTsPSuK7JXNi25HwgtE/edit?usp=sharing",
        "https://www.freecodecamp.org/certification/hosbileg/scientific-computing-with-python-v7",
    ]
    },
    {
    grade: "9-1",
    name: "Э.Эгшиглэн",
    certificates: [
        "https://www.sololearn.com/certificates/CC-LXHMQQWL",
        "https://docs.google.com/spreadsheets/d/1EoQTt2NDP4wMjJwlHMyA7iSyfTsPSuK7JXNi25HwgtE/edit?usp=sharing",
    ]
    },
    {
    grade: "9-1",
    name: "Э.Энхмэнд",
    certificates: [
        "https://www.sololearn.com/certificates/CC-RUET4NKB",
        "https://www.sololearn.com/certificates/CC-75PXUTY6",
        "https://www.kaggle.com/certification/badges/enkhmends2z/8",
        "https://www.kaggle.com/certification/badges/enkhmends2z/30",
    ]
    },
    {
    grade: "9-1",
    name: "Б.Нандин-Эрдэнэ",
    certificates: [
        "https://www.sololearn.com/certificates/CC-RUET4NKB",
        "https://www.sololearn.com/certificates/CC-75PXUTY6",
    ]
    },
    {
    grade: "9-2",
    name: "Энх-Амгалан",
    certificates: [
        "https://www.sololearn.com/certificates/CC-UGVLIXAN",
        "https://www.sololearn.com/certificates/CC-MHSDFIJH",
    ]
    },
    {
    grade: "9-2",
    name: "М.Манлай",
    certificates: [
        "https://www.sololearn.com/certificates/CC-J1AZUKHR",
        "https://www.sololearn.com/certificates/CC-MHSDFIJH",
    ]
    },
    {
    grade: "9-2",
    name: "М.Бархасбадь",
    certificates: [
        "https://www.sololearn.com/certificates/CC-BUNIBFEH",
        "https://www.sololearn.com/certificates/CC-FX9PJCSF",
        "https://www.sololearn.com/certificates/CC-MHSDFIJH",
    ]
    },
    {
    grade: "9-2",
    name: "Г.Эгшиглэн",
    certificates: [
        "https://www.sololearn.com/certificates/CC-UGVLIXAN",
        "https://www.sololearn.com/certificates/CC-MHSDFIJH",
    ]
    },
    {
    grade: "9-2",
    name: "А.Пүрэвсүрэн",
    certificates: [
        "https://www.sololearn.com/certificates/CC-3QU5N45Z",
        "https://www.sololearn.com/certificates/CC-NKX9UXAT",
        "https://www.kaggle.com/certification/badges/purwsuren/8",
        "https://www.kaggle.com/certification/badges/purwsuren/30",
    ]
    },
    {
    grade: "9-2",
    name: "Б.Мөнхбаатар",
    certificates: [
        "https://www.sololearn.com/en/learn/courses/python-developer?location=2",
        "https://www.sololearn.com/en/learn/courses/python-introduction?location=2",
    ]
    },
    {
    grade: "9-2",
    name: "Б.Мишээл",
    certificates: [
        "https://www.sololearn.com/certificates/CC-VDCQRVL2",
        "https://www.sololearn.com/certificates/CC-QAA93TAM",
        "https://www.freecodecamp.org/certification/misheel_34/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/misheel419/8",
        "https://www.kaggle.com/certification/badges/misheel419/30",
    ]
    },
    {
    grade: "9-2",
    name: "С.Тэмүүлэнжав",
    certificates: [
        "https://www.sololearn.com/certificates/CC-UGVLIXAN",
        "https://www.sololearn.com/certificates/CC-MHSDFIJH",
    ]
    },
    {
    grade: "9-2",
    name: "Б.Энхтуяа",
    certificates: [
        "https://www.sololearn.com/certificates/CC-UGVLIXAN",
        "https://www.sololearn.com/certificates/CC-MHSDFIJH",
    ]
    },
    {
    grade: "9-2",
    name: "Б.Анунгоо",
    "certificates": [
        "https://www.sololearn.com/certificates/CC-CQFSE1TJ",
        "https://www.sololearn.com/certificates/CC-UULWPNO3",
    ]
    },
    {
    grade: "9-2",
    name: "Б.Ариунболд",
    certificates: [
        "https://www.sololearn.com/certificates/CC-FNSS8B2W",
        "https://www.sololearn.com/certificates/CC-IBEAETWX",
    ]
    },
    {
    grade: "9-2",
    name: "Д.Чинхүслэн",
    certificates: [
        "https://www.sololearn.com/certificates/CC-HGKICMST",
        "https://www.sololearn.com/certificates/CC-GXSHCDBJ",
    ]
    },
    {
        grade: "9-2",
        name: "Е.Балжинням",
        certificates: [
        "https://www.sololearn.com/certificates/CC-JLS2YMTK",
        "https://www.sololearn.com/certificates/CC-JGGLP0SX",
        ]
    },
    {
        grade: "9-2",
        name: "Г.Гэгээн-Анир",
        certificates: [
        "https://www.sololearn.com/certificates/CC-AHVAIYYG",
        "https://www.sololearn.com/certificates/CC-LADCHSDW",
        "https://www.freecodecamp.org/certification/gegee/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/gegeenanirgantulга/8",
        "https://www.kaggle.com/certification/badges/gegeenanirgantulга/30",
        ]
    },
    {
        grade: "9-2",
        name: "Т.Энхжин",
        certificates: [
        "https://www.sololearn.com/certificates/CC-7HLUH5CP",
        "https://www.sololearn.com/certificates/CC-LG2YJBBU",
        ]
    },
    {
        grade: "9-2",
        name: "С.Төрмөнх",
        certificates: [
        "https://www.sololearn.com/certificates/CC-UGVLIXAN",
        "https://www.sololearn.com/certificates/CC-MHSDFIJH",
        ]
    },
    {
        grade: "9-2",
        name: "М.Тэмүүжин",
        certificates: [
        "https://www.sololearn.com/certificates/CC-XLK4PYCV",
        "https://www.sololearn.com/certificates/CC-OX8G4MRQ",
        ]
    },
    {
        grade: "9-2",
        name: "Б.Ням-эрдэнэ",
        certificates: [
        "https://www.sololearn.com/certificates/CC-ID5YX4YM",
        "https://www.sololearn.com/certificates/CC-ZHA9WUTI",
        ]
    },
    {
        grade: "9-2",
        name: "Шиншин",
        certificates: [
        "https://drive.google.com/drive/u/2/folders/13Y6WB1FSMDZ6Bxp3GwiG9Dh6BFAIDmgC?ths=true",
        ]
    },
    {
        grade: "10-1",
        name: "Т.Эрдэнэ-Очир",
        certificates: [
        "https://www.sololearn.com/certificates/CC-WTW87RJJ",
        "https://www.sololearn.com/certificates/CC-N6C67GMG",
        "https://coursera.org/share/633d7c002b8b5d51a50539aed8978442",
        ]
    },
    {
        grade: "10-1",
        name: "М.Мөнх-Ариун",
        certificates: [
        "https://www.sololearn.com/certificates/CC-MHCVEOBB",
        "https://www.sololearn.com/certificates/CC-30ZJ64QU",
        "https://www.freecodecamp.org/certification/fcc2ffe0fcb-ce6f-403c-aе7a-53cb2081f7db/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/munhariunmunhbayr/30",
        "https://www.coursera.org/learn/programming-in-python/supplement/lw2KD/next-steps-after-programming-in-python",
        ]
    },
    {
        grade: "10-1",
        name: "Б.Бат-Эрдэнэ",
        certificates: [
        "https://www.sololearn.com/certificates/CC-ELZ29GCP",
        "https://www.sololearn.com/certificates/CC-MSJC6HFU",
        "https://www.sololearn.com/certificates/CC-ESZY79UF",
        "https://www.freecodecamp.org/certification/fcc4dab5155-7f06-4efa-8f59-ed1f931f6fe3/scientific-computing-with-python-v7",
        "https://www.coursera.org/learn/programming-in-python/home/module/5",
        ]
    },
    {
        grade: "10-1",
        name: "Г.Долгион",
        certificates: [
        "https://www.sololearn.com/certificates/CC-FPHW2SQF",
        "https://www.sololearn.com/certificates/CC-E1MFG74O",
        ]
    },
    {
        grade: "10-1",
        name: "Б.Оюу",
        certificates: [
        "https://www.sololearn.com/certificates/CC-9KU0OHYS",
        "https://www.sololearn.com/certificates/CC-F6FYPNPL",
        "https://freecodecamp.org/certification/Oyunjin/scientific-computing-with-python-v7",
        ]
    },
    {
        grade: "10-1",
        name: "А.Мөрөн",
        certificates: [
        "https://www.sololearn.com/certificates/CC-FPHW2SQF",
        "https://www.sololearn.com/certificates/CC-E1MFG74O",
        ]
    },
    {
        grade: "10-1",
        name: "Э.Зоригт",
        certificates: [
        "https://www.sololearn.com/certificates/CC-OMLBDFAR",
        "https://www.sololearn.com/certificates/CC-DVGVK06F",
        ]
    },
    {
        grade: "10-1",
        name: "Ч.Буянтогтох",
        certificates: [
        "https://www.sololearn.com/certificates/CC-KQPHCPUB",
        "https://www.sololearn.com/certificates/CC-HATQNCZK",
        ]
    },
    {
        grade: "10-1",
        name: "Г.Ганчимэг",
        certificates: [
        "https://www.sololearn.com/certificates/CC-JVFNUEFB",
        "https://www.sololearn.com/certificates/CC-0FCWGXRF",
        "https://www.freecodecamp.org/certification/fcc124bd4ef-14f7-44ад-aec3-33f2fb2dd907/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/gabriellaella/30",
        "https://www.coursera.org/my-purchases/financial-aid",
        ]
    },
    {
        grade: "10-1",
        name: "Б.Арвин-Эрдэнэ",
        certificates: [
        "https://www.sololearn.com/certificates/CC-FPHW2SQF",
        "https://www.sololearn.com/certificates/CC-E1MFG74O",
        ]
    },
    {
        grade: "10-1",
        name: "Ц.Оргилболд",
        certificates: [
        "https://www.sololearn.com/certificates/CC-FPHW2SQF",
        "https://www.sololearn.com/certificates/CC-5JIBKTQ8",
        "https://www.freecodecamp.org/certification/TsogtsaihanOrgilbold/scientific-computing-with-python-v7",
        ]
    },
    {
        grade: "10-1",
        name: "Ч.Асуру",
        certificates: [
        "https://www.sololearn.com/certificates/CC-FPHW2SQF",
        "https://www.sololearn.com/certificates/CC-E1MFG74O",
        ]
    },
    {
        grade: "10-1",
        name: "Хулан",
        certificates: [
        "https://www.sololearn.com/certificates/CC-QNT5UQT1",
        "https://www.sololearn.com/certificates/CC-D4ZHDJ34",
        "https://www.freecodecamp.org/certification/Hулан03326/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/hulan0326/30",
        "https://www.coursera.org/account/accomplishments/certificate/MWOC7D1OS6I0",
        ]
    },
    {
        grade: "10-1",
        name: "Эмүүжин",
        certificates: [
        "https://www.sololearn.com/certificates/CC-FPHW2SQF",
        "https://www.sololearn.com/certificates/CC-E1MFG74O",
        ]
    },
    {
        grade: "10-1",
        name: "Г.Есөнтэнгэр",
        certificates: [
        "https://www.sololearn.com/certificates/CC-IPKLU8PE",
        "https://www.sololearn.com/certificates/CC-55JP7A9Z",
        "https://www.freecodecamp.org/certification/fcc32798fc2-5baf-4caf-afb7-9fc9988cdea8/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/yusuntengeryusuu/30",
        "https://coursera.org/share/eb3c85cdce4fc6741a0768ac3f972dc",
        ]
    },
    {
        grade: "10-1",
        name: "О.Дүүрэндалай",
        certificates: [
        "https://www.sololearn.com/certificates/CC-XVDG1YHZ",
        "https://www.sololearn.com/certificates/CC-YJK1GWMM",
        "https://www.freecodecamp.org/certification/fcc8a4d8f50-21c1-4233-88fc-3e6f0e26e028/scientific-computing-with-python-v7",
        "https://www.kaggle.com/certification/badges/duurendalaiorgil/30",
        "https://coursera.org/share/2955e55e7a7afbd5a7497d219e51cbf1",
        ]
    },
    {
        grade: "10-1",
        name: "Э.Эрхэмбилэг",
        certificates: [
        "https://www.sololearn.com/certificates/CC-WWBIBOHE",
        "https://www.sololearn.com/certificates/CC-NK16Q1VX",
        ]
    },
    {
        grade: "10-1",
        name: "А.Нарантүшиг",
        certificates: [
        "https://www.sololearn.com/certificates/CC-FPHW2SQF",
        "https://www.sololearn.com/certificates/CC-E1MFG74O",
        ]
    },
    {
    grade: "10-2",
    name: "Н.Минжин",
    certificates: [
        "https://www.sololearn.com/en/certificates/CC-XT69KKRB https://www.sololearn.com/certificates/CC-6BSNQNAG",
        "https://www.sololearn.com/en/certificates/CC-XT69KKRB",
    ]
    },
    {
    grade: "10-2",
    name: "Б.Анар-Эрдэнэ",
    certificates: [
        "https://www.sololearn.com/en/certificates/CC-VXLWHVGJ",
        "https://www.sololearn.com/certificates/CC-8QDR2XQS",
    ]
    },
    {
    grade: "10-2",
    name: "Х.Баттулга",
    certificates: [
        "https://www.sololearn.com/certificates/CC-IZAO5RTA",
        "https://www.sololearn.com/certificates/CC-RM9NTPGB",
    ]
    },
    {
    grade: "10-2",
    name: "М.Билгүүн",
    certificates: [
        "https://www.sololearn.com/certificates/CC-HVPXJDNP",
        "https://www.sololearn.com/en/certificates/CC-XT69KKRB",

    ]
    },
    {
    grade: "10-2",
    name: "У.Ган-Эрдэнэ",
    certificates: [
        "https://www.sololearn.com/certificates/CC-4PYWKOFK",
        "https://drive.google.com/file/d/1zESLwrxYIPALoa8dOmzyIq9KD3PQrKLb/view?usp=sharing",
    ]
    },
    {
    grade: "10-2",
    name: "Б.Гүнжинлхам",
    certificates: [
        "https://www.sololearn.com/certificates/CC-XUFAWXRV",
        "https://www.sololearn.com/certificates/CC-DJJPWXQU",
    ]
    },

    {
    grade: "10-2",
    name: "Э.Гэрэлтуяа",
    certificates: [
        "https://www.sololearn.com/certificates/CC-VVZJJCKL",
        "https://www.sololearn.com/certificates/CC-L7BRX74I",
    ]
    },

    {
    grade: "10-2",
    name: "М.Мөнх-Учрал",
    certificates: [
        "https://www.sololearn.com/certificates/CC-2OC45FAG",
        "https://www.sololearn.com/certificates/CC-TQSTDJRM",
        "https://www.sololearn.com/certificates/CC-XOUMRRVW",
        "https://www.sololearn.com/certificates/CC-SUII0RLH",
    ]
    },

    {
        grade: "10-2",
        name: "Э.Мөнхтөр",
        certificates: [
        "https://www.sololearn.com/en/certificates/CC-TT2U72JV",
        "https://drive.google.com/file/d/1zESLwrxYIPALoa8dOmzyIq9KD3PQrKLb/view",
        ]
    },
    {
        grade: "10-2",
        name: "Б.Тэмүүлэн",
        certificates: [
            "https://drive.google.com/file/d/1FKuPUzoTfvfG20N3PfFTL1kXPSnE-bAW/view",
            "https://drive.google.com/file/d/1zESLwrxYIPALoa8dOmzyIq9KD3PQrKLb/view?usp=sharing",
        ]
    },
    {
        grade: "10-2",
        name: "Ц.Удвал",
        certificates: [
            "https://drive.google.com/file/d/1FKuPUzoTfvfG20N3PfFTL1kXPSnE-bAW/view?usp=sharing",
            "https://drive.google.com/file/d/1zESLwrxYIPALoa8dOmzyIq9KD3PQrKLb/view?usp=sharing",
        ]
    },
    {
        grade: "10-2",
        name: "Г.Хишигдэлгэрэх",
        certificates: [
            "https://www.sololearn.com/certificates/CC-LK3RRABV",
            "https://drive.google.com/file/d/1zESLwrxYIPALoa8dOmzyIq9KD3PQrKLb/view?usp=sharing",
        ]
    },
    {
        grade: "10-2",
        name: "Б.Хулан",
        certificates: [
            "https://drive.google.com/drive/u/2/folders/13Y6WB1FSMDZ6Bxp3GwiG9Dh6BFAIDmgC?ths=true",
            "https://drive.google.com/drive/u/2/folders/13Y6WB1FSMDZ6Bxp3GwiG9Dh6BFAIDmgC?ths=true",
        ]
    },

    {
        grade: "10-2",
        name: "Э.Энхтөр",
        certificates: [
        "https://www.sololearn.com/certificates/CC-PXFJKNA8",
        "https://drive.google.com/file/d/1zESLwrxYIPALoa8dOmzyIq9KD3PQrKLb/view?usp=sharing",
        ]
    },
        {
        grade: "10-2",
        name: "Г.Энэрэл",
        certificates: [
            "https://drive.google.com/drive/u/2/folders/13Y6WB1FSMDZ6Bxp3GwiG9Dh6BFAIDmgC?ths=true",
            "https://drive.google.com/drive/u/2/folders/13Y6WB1FSMDZ6Bxp3GwiG9Dh6BFAIDmgC?ths=true",
        ]
    },
    {
        grade: "10-2",
        name: "Э.Эрхэс",
        certificates: [
            "https://www.sololearn.com/certificates/CC-L2VQ23PD",
            "https://www.sololearn.com/certificates/CC-GGDKUPA2",
        ]
    },
    {
        grade: "11-2",
        name: "Д.Эрмүүн",
        certificates: [
            "https://www.sololearn.com/certificates/CC-IP74I9UU",
            "https://www.sololearn.com/certificates/CC-4ZPSUUNC",
            "https://www.sololearn.com/certificates/CC-92ZWLOCV",
            "https://www.sololearn.com/certificates/CC-UUHPBGRF",
            "https://www.sololearn.com/certificates/CC-DEJEWX20",
            "https://www.sololearn.com/certificates/CC-SUJ68A3G",
            "https://www.sololearn.com/certificates/CC-IOWC607S",
            "https://www.sololearn.com/certificates/CC-1YZGKCZU",
            "https://www.sololearn.com/certificates/CC-ARYA8T2M",
            "https://www.sololearn.com/certificates/CC-KGPR0N12",
            "https://www.sololearn.com/certificates/CC-3GD8H7OZ",
            "https://www.sololearn.com/certificates/CC-WTUQZOZT",
            "https://www.sololearn.com/certificates/CC-D75HEHQ3",
            "https://www.sololearn.com/certificates/CC-U7J5YTC6",
            "https://www.sololearn.com/certificates/CC-SNHIZTVA",
            "https://www.sololearn.com/certificates/CC-JPKBHUXQ",
            "https://www.sololearn.com/certificates/CC-HKD0C0NC",
            "https://www.sololearn.com/certificates/CC-2IIC5JSO",
            "https://www.sololearn.com/certificates/CC-ZD7AQYIH",
            "https://www.sololearn.com/certificates/CC-7PNEIXOM",
            "https://www.sololearn.com/certificates/CC-EJQ1VG1K",
            "https://courses.edx.org/certificates/fe65d6caf3764af8b9a3a524bdfe2a64?_gl=1*ptdzjc*_gcl_au*MTI2MzAxMTY2Ni4xNzQyNDQyNTk4*_ga*NTUxMTExOTc1LjE3MTI2NTQzMjk.*_ga_D3KS4KMDT0*czE3NDg4MzU0NzkkbzM2JGcxJHQxNzQ4ODM1NjIwJGo1OSRsMCRoMA",
            "https://coursera.org/share/e3478b5ccb0813821b6c0d343ddfcd75",
            "https://coursera.org/share/04d93c580d8ca8d79b682470f1dfa879",
            "https://coursera.org/share/45b5e047eadf71ea49c960179dd2daa8",
            "https://coursera.org/share/00beec641bb5f52c7d7339e081624e24",
            "https://coursera.org/share/751dfa6b40e289319cd3fa5064e22e0c",
        ]
    },
    {
        grade: "11-2",
        name: "Б.Хувьтөгөлдөр",
        certificates: [
            "https://www.sololearn.com/certificates/CC-NGBBOSAE",
            "https://www.sololearn.com/certificates/CC-Q3Y0VZMU",
            "https://www.sololearn.com/certificates/CC-UNB5WUYY",
        ]
    },
    {
    grade: "11-2",
        name: "Б.Мөнх-Од",
        certificates: [
            "https://www.sololearn.com/certificates/CC-OJOLGDLU",
            "https://www.sololearn.com/certificates/CC-BWEI7J9H",
            "https://www.sololearn.com/certificates/CC-KVQHS2U2",
        ]
    },
    {
    grade: "11-2",
        name: "А.Түвшинбат",
        certificates: [
        ]
    },
    {
        grade: "11-2",
        name: "Н.Төгсбилэг",
        certificates: [
            "https://www.sololearn.com/certificates/CC-2BBUNGIV",
            "https://www.sololearn.com/certificates/CC-EF0TMTYX",
            "https://www.sololearn.com/certificates/CC-NMXIM5DL",
        ]
    },
    {
    grade: "11-2",
        name: "Б.Үүрийнцолмон",
        certificates: [
            "https://www.sololearn.com/certificates/CC-PGABKAVA",
            "https://www.sololearn.com/certificates/CC-UFNTMMHE",
            "https://www.sololearn.com/certificates/CC-APFTZFNF",
            "https://www.sololearn.com/certificates/CC-JNKQQAN0",
            "https://www.sololearn.com/certificates/CC-K6BTLWEQ",
            "https://www.sololearn.com/certificates/CC-TV6DQ39G",
            "https://www.sololearn.com/certificates/CC-MIUKAHZI",
            "https://cs50.harvard.edu/certificates/463ccffb-da9d-4a57-b156-fb2857e24023.pdf?size=letter",
            "https://cs50.harvard.edu/certificates/463ccffb-da9d-4a57-b156-fb2857e24023",
            "https://coursera.org/share/a0bb72ea05bfcfb8fc2203c066528f4d",
            "https://coursera.org/share/81a8b539bfc48fb4d38bf487bc77259a",
            "https://coursera.org/share/c003146d1ca7a53717bf32f50458752b",
            "https://coursera.org/share/635dbd9195caeca73ec23609f4e3dba8",
            "https://coursera.org/share/1b7f0d5fbe62c26603bb9eb64d378f0b",
            "https://coursera.org/share/b72eb43ec05429a7991bc2865e324bb3",
            "https://coursera.org/share/3e3e021e93da452cc77a8796b157382e",
            "https://coursera.org/share/9bfb01a0b92f0c0437a2a677359540d7",
            "https://coursera.org/share/0b661d0feb83933dd4d8a419b17d9fa5",
            "https://coursera.org/share/dc6583971a61b69954764370f20939e4",
        ]
    },
    {
        grade: "11-2",
        name: "Т.Анударь",
        certificates: [
            "https://www.sololearn.com/certificates/CC-YSRQQWCY",
            "https://www.sololearn.com/certificates/CC-GTO6QGHE",
            "https://www.sololearn.com/certificates/CC-UGAYBLI4",
        ]
    },
    {
        grade: "11-2",
        name: "Ч.Ухаан",
        certificates: [
            "https://www.sololearn.com/certificates/CC-HZIAICAK",
            "https://www.sololearn.com/certificates/CC-XDWHVTUQ",
            "https://www.sololearn.com/certificates/CC-UYP6GUDM",
            "https://www.sololearn.com/certificates/CC-GSBBBABX",
        ]
    },
    {
        grade: "11-2",
        name: "Э.Хонгорзул",
        certificates: [
            "https://www.sololearn.com/certificates/CC-KWVKHVAG",
            "https://www.sololearn.com/certificates/CC-YOHZUYWR",
            "https://www.sololearn.com/certificates/CC-8H4N9BGE",
            "https://www.sololearn.com/certificates/CC-KLTX58CL",
        ]
    },
    {
    grade: "11-2",
        name: "Б.Баасанжав",
        certificates: [
            "images/certificate-images-11-1/11-2Б.Баасанжав-css.jpg",
            "images/certificate-images-11-1/11-2Б.Баасанжав-html.jpg",
            "images/certificate-images-11-1/11-2Б.Баасанжав-js.jpg",
        ]
    },
    {
    grade: "11-2",
        name: "Н.Тэнгис",
        certificates: [
            "images/certificate-images-11-1/11-2Н.Тэнгис-css.jpg",
            "images/certificate-images-11-1/11-2Н.Тэнгис-html.jpg",
            "images/certificate-images-11-1/11-2Н.Тэнгис-js.jpg",
        ]
    },
    {
    grade: "11-2",
        name: "М.Ерөөлтхүү",
        certificates: [
            "https://www.sololearn.com/certificates/CC-1GK81HYN",
            "https://www.sololearn.com/certificates/CC-BTRAX8VK",
            "https://www.sololearn.com/certificates/CC-RHBRYTP6",
        ]
    },
    {
    grade: "11-2",
        name: "Э.Тэмүүлэн",
        certificates: [
            "https://www.sololearn.com/certificates/CC-S0TISSMD",
            "https://www.sololearn.com/certificates/CC-CK7S5ZTV",
            "https://www.sololearn.com/certificates/CC-0OFRXCHK",
            "https://www.sololearn.com/certificates/CC-8L5WRQYY",
        ]
    },
    {
    grade: "11-2",
        name: "Б.Энхжин",
        certificates: [
            "https://www.sololearn.com/certificates/CC-QOHTDHTK",
            "https://www.sololearn.com/certificates/CC-UWO0LQLZ",
            "https://www.sololearn.com/certificates/CC-PGFURRYU",
        ]
    },
    {
    grade: "11-2",
        name: "Ц.Ганцогт",
        certificates: [
            "https://drive.google.com/file/d/1o4peWf3EGQtNri9H0pTUb7KL_Qc2VRYt/view?usp=drive_link",
            "https://cs50.harvard.edu/certificates/88a4e0a8-1e59-46b7-8cd0-6c94a8a08316",
            "https://coursera.org/share/e209bcb426cd5df16f6b5794b7452368",
            "https://www.sololearn.com/certificates/CC-8AOC3RGJ",
            "https://www.sololearn.com/certificates/CC-AD5NAVDZ",
            "https://www.sololearn.com/certificates/CC-CLVHP7PA",
            "https://www.sololearn.com/certificates/CC-XSZB4DJN",
            "https://www.sololearn.com/certificates/CC-GEF4CYBW",
            "https://www.sololearn.com/certificates/CC-I4VWWCNU",
            "https://www.sololearn.com/certificates/CC-JZ1LIXB5"
        ]
    },
    {
    grade: "11-2",
        name: "Э.Маргад-Эрдэнэ",
        certificates: [
            "images/certificate-images-11-1/11-2Маргад-Эрдэнэ-css.jpg",
            "images/certificate-images-11-1/11-2Маргад-Эрдэнэ-html.jpg",
            "images/certificate-images-11-1/11-2Маргад-Эрдэнэ-js.jpg",
        ]
    },
    {
    grade: "11-2",
        name: "А.Амирлин",
        certificates: [
            "https://courses.edx.org/certificates/e38b819d6cce459abbc7bc3483c12116?_gl=1*auf04p*_gcl_au*MjAzMzczMzcwMy4xNzQ1MjM4NDQ3*_ga*MTE3MjE1OTA1NC4xNzI4ODIwNTM4*_ga_D3KS4KMDT0*czE3NDc5MDU4ODEkbzg0JGcxJHQxNzQ3OTA1OTcxJGo0MSRsMCRoMCRkU3Q4dUVPejBHb2IxbWN6WmJVaVl3QUw5aVo0WGhLYktrUQ",
            "https://coursera.org/share/42bc179048f3a302997f68a159206549",
            "https://www.sololearn.com/certificates/CC-2JOO2X3M",
            "https://www.sololearn.com/certificates/CC-IIJ8P2MO",
            "https://www.sololearn.com/certificates/CC-VDMKDBNQ",
            "https://www.sololearn.com/certificates/CC-WPGIWO0E",
            "https://www.sololearn.com/certificates/CC-XVYSSBIV",
            "https://www.sololearn.com/certificates/CC-TZVIIMHO",
            "https://www.sololearn.com/certificates/CC-LXIWDV6W",
            "https://www.sololearn.com/certificates/CC-KQUILE1A",
        ]
    },
    {
        grade: "11-2",
        name: "В.Нурбол",
        sw: "SW2",
        certificates: [
            "https://api2.sololearn.com/v2/certificates/CC-AKXI3KGN/image/png?t=638834177224726680",
            "https://api2.sololearn.com/v2/certificates/CC-ZCUX8KV7/image/png?t=638815271200939680",
            "https://api2.sololearn.com/v2/certificates/CC-WHVYK7FJ/image/png?t=638815250319439040",
            "https://api2.sololearn.com/v2/certificates/CC-KOIHJGP2/image/png?t=638822031458618320",
            "https://api2.sololearn.com/v2/certificates/CC-2LPQEDQM/image/png?t=638822031960063120",
            "https://api2.sololearn.com/v2/certificates/CC-BDK7SZZY/image/png?t=638821974090476140",
        ]
    },
    {
        grade: "11-2",
        name: "Ж.Үржинбадам",
        certificates: {
        }
    },
    {
    grade: "11-2",
        name: "А.Батмандах",
        certificates: [
        ]
    },
    {
    grade: "11-2",
        name: "А.Нандин",
        certificates: [
            "https://api2.sololearn.com/v2/certificates/CC-YMRZ4HFG/image/png?t=638828283529630430",
            "https://www.sololearn.com/certificates/CC-RLF2GMVZ",
            "https://www.sololearn.com/certificates/CC-XNC6LHBX",
        ]
    },
    {
    grade: "11-2",
        name: "Б.Жамуха",
        certificates: [

        ]
    },
    {
    grade: "11-2",
        name: "Ихгазар",
        certificates: [
            "https://www.sololearn.com/certificates/CC-LJKFIIFF",
            "https://www.sololearn.com/certificates/CC-QSAXUMFS",
            "https://www.sololearn.com/certificates/CC-4QOO99NN"
        ]
    },
    {
        grade: "11-2",
        name: "Б.Тэбуригэн",
        certificates: [
            "images/certificate-images-11-1/11-2Тэбуригэн-css.jpg",
            "images/certificate-images-11-1/11-2Тэбуригэн-html.jpg",
            "images/certificate-images-11-1/11-2Тэбуригэн-js.jpg",
        ]
    },
    {
        grade: "11-2",
        name: "О.Билгүүдэй",
        certificates: [
            "https://drive.google.com/file/d/1T42qpaWrtiaprp9ZRmvSlvfFs2R5dOQK/view?usp=sharing",
            "https://drive.google.com/file/d/10BxPKzAOBh2BweV7KUgOoY4ylKcFDBW3/view?usp=sharing",
            "https://drive.google.com/file/d/1SKl-EZtJBXUxYxfPv5pF_PWMav7Gj4ed/view?usp=sharing",
            "https://coursera.org/share/eb623be13bb7237ecc7e63e12bd8cb7a",
            "https://www.sololearn.com/certificates/CC-6FKADMUW",
            "https://www.sololearn.com/certificates/CC-6GAI2G9N",
            "https://www.sololearn.com/certificates/CC-SPBKYA0T",
            "https://www.sololearn.com/certificates/CC-9PMWMT4G",
            "https://www.sololearn.com/certificates/CC-T2YKGR5W",
            "https://www.sololearn.com/certificates/CC-0ADMTK7T",
            "https://www.sololearn.com/certificates/CC-ZUWJH1VB",
        ]
    },
    {
        grade: "11-1",
        name: "О.Отгон-Эрдэнэ",
        certificates: [
            "images/certificate-images-11-1/11-1ТОтгон-Эрдэнэ-css.jpg",
            "images/certificate-images-11-1/11-1ТОтгон-Эрдэнэ-html.jpg",
            "images/certificate-images-11-1/11-1ТОтгон-Эрдэнэ-js.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Г.Түвшин",
        certificates: [
            "images/certificate-images-11-1/11-1Түвшин-css.jpg",
            "images/certificate-images-11-1/11-1Түвшин-html.jpg",
            "images/certificate-images-11-1/11-1Түвшин-js.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Б.Билгүүн",
        certificates: [
            "images/certificate-images-11-1/11-1Билгүүн-css.jpg",
            "images/certificate-images-11-1/11-1Билгүүн-html.jpg",
            "images/certificate-images-11-1/11-1Билгүүн-js.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Г.Нарантулга",
        certificates: [
        ]
    },
    {
        grade: "11-1",
        name: "Б.Очбадрах",
        certificates: [
            "https://www.sololearn.com/certificates/CC-WXJHJFAP",
            "https://www.sololearn.com/certificates/CC-XGFKAUKC",
            "https://www.sololearn.com/certificates/CC-TTPTIGDH",
        ]
    },
    {
        grade: "11-1",
        name: "А.Амарболд",
        certificates: [
            "images/certificate-images-11-1/11-1Амарболд-css.jpg",
            "images/certificate-images-11-1/11-1Амарболд-html.jpg",
            "images/certificate-images-11-1/11-1Амарболд-js.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Э.Од-Эрдэнэ",
        certificates: [
            "images/certificate-images-11-1/11-1Од-Эрдэнэ-css.jpg",
            "images/certificate-images-11-1/11-1Од-Эрдэнэ-html.jpg",
            "images/certificate-images-11-1/11-1Од-Эрдэнэ-js.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Д.Анужин",
        certificates: [
            "https://www.sololearn.com/certificates/CC-9KSPAECM",
            "https://www.sololearn.com/certificates/CC-WSWPAYF9",
            "https://www.sololearn.com/certificates/CC-NOI0T9OZ",
            "https://www.sololearn.com/certificates/CC-XIGVJ4G7",
            "https://www.sololearn.com/certificates/CC-EKGHB0IL",
            "https://www.sololearn.com/certificates/CC-A2HFYWF0",
            "https://www.sololearn.com/certificates/CC-UOHM7C0W",
        ]
    },
    {
        grade: "11-1",
        name: "О.Бодьмөнхнаран",
        certificates: [
            "images/certificate-images-11-1/11-1Бодьмөнхнаран-css.jpg",
            "images/certificate-images-11-1/11-1Бодьмөнхнаран-html.jpg",
            "images/certificate-images-11-1/11-1Бодьмөнхнаран-js.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Э.Номин-Эрдэнэ",
        certificates: [
            "https://www.sololearn.com/certificates/CC-I7X5THMJ",
            "https://www.sololearn.com/certificates/CC-CJX6NXEF",
            "https://www.sololearn.com/certificates/CC-QXMHBN89",
        ]
    },
    {
        grade: "11-1",
        name: "Ш.Амарсайхан",
        certificates: [
            "https://www.sololearn.com/certificates/CC-KQFVSRE1",
            "https://www.sololearn.com/certificates/CC-PNXBTLLP",
            "https://www.sololearn.com/certificates/CC-REKWRZOO",
            "https://www.sololearn.com/certificates/CC-UC5YFAJE",
            "https://www.sololearn.com/certificates/CC-O1CCRVGC",
            "https://www.sololearn.com/certificates/CC-BGBTIEHI",
        ]
    },
    {
        grade: "11-1",
        name: "У.Хүслэн",
        certificates: [
            "images/certificate-images-11-1/11-1Хүслэн-css.jpg",
            "images/certificate-images-11-1/11-1Хүслэн-js.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Е.Нартулга",
        certificates: [
            // "images/certificate-images-11-1/11-1Нартулга-css.jpg",
            // "images/certificate-images-11-1/11-1Нартулга-js.jpg",
            // "images/certificate-images-11-1/11-1Нартулга-html.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Б.Анужин",
        certificates: [
            "images/certificate-images-11-1/11-1НАнужин-css.jpg",
            // "images/certificate-images-11-1/11-1НАнужин-js.jpg",
            "images/certificate-images-11-1/11-1НАнужин-html.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "О.Халиунболд",
        certificates: [
            "images/certificate-images-11-1/11-1Халиунболд-css.jpg",
            "images/certificate-images-11-1/11-1Халиунболд-js.jpg",
            "images/certificate-images-11-1/11-1Халиунболд-html.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Б.Гэлэг",
        certificates: [
            "https://www.sololearn.com/certificates/CC-SC2YPODE",
            "https://www.sololearn.com/certificates/CC-JQVM0AAR",
            "https://www.sololearn.com/certificates/CC-2I7PPWXM",
        ]
    },
    {
        grade: "11-1",
        name: "М.Гончигсүрэн",
        certificates: [
            "images/certificate-images-11-1/11-1Гончигсүрэн-css.jpg",
            "images/certificate-images-11-1/11-1Гончигсүрэн-js.jpg",
            "images/certificate-images-11-1/11-1Гончигсүрэн-html.jpg",
            "images/certificate-images-11-1/11-1Гончигсүрэн-python.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "М.Ганжаргал",
        certificates: [
            "https://www.sololearn.com/certificates/CC-ZUVG7EAB",
            "https://www.sololearn.com/certificates/CC-I8QJLWPS",
            "https://www.sololearn.com/certificates/CC-T0RX2C9I",
        ]
    },
    {
        grade: "11-1",
        name: "Б.Бөртэ",
        certificates: [
        ]
    },
    {
        grade: "11-1",
        name: "П.Маргад",
        certificates: [
            "images/certificate-images-11-1/11-1Маргад-css.jpg",
            "images/certificate-images-11-1/11-1Маргад-js.jpg",
            "images/certificate-images-11-1/11-1Маргад-html.jpg",
        ]
    },
    {
        grade: "11-1",
        name: "Т.Үлэмж",
        certificates: [
        ]
    },
    {
    grade: "12-1",
    name: "С.Ангараг",
    certificates: [

    ]
    },
    {
    grade: "12-1",
    name: "Э.Аниржавхлан",
    certificates: [
        "https://drive.google.com/file/d/1akAWzIIeI3bw3SCF-LUqeB0_N0r73DnX/view?usp=sharing",
        "https://drive.google.com/file/d/1JOyGrv3DhOsO1XWJSzh65evhXCJwtdZl/view?usp=sharing",
        "https://drive.google.com/file/d/1LOyVVw3fMd6PBgCMv0S8Uqn5hYe2OiDd/view?usp=sharing",
        "https://drive.google.com/file/d/1pHK87AnbCf7F77HB8Kv1lErlSw1gUJoQ/view?usp=sharing",
        "https://drive.google.com/file/d/1fXAI_VjQc5zXTIfto4TMQpbahEvTBWwG/view?usp=sharing",
    ]
    },
    {
    grade: "12-1",
    name: "М.Батбилэг",
    sw: "SW1",
    certificates: [
        "https://www.sololearn.com/certificates/CC-E4OCAASF",
        "https://www.freecodecamp.org/certification/fcc4330fd71-78a2-4800-817d-9aedae8063b6/javascript-algorithms-and-data-structures-v8",
        "https://www.freecodecamp.org/certification/fcc4330fd71-78a2-4800-817d-9aedae8063b6/responsive-web-design",
        "https://courses.edx.org/certificates/3cc0e2c8e26e4036ba25b7355c5fd878",
        "https://certificates.cs50.io/a45b7f46-a0f7-4c26-a9e5-fafc736a5960.pdf?size=letter",
        "https://learn.microsoft.com/en-us/users/batbilegmyagmarsuren-7205/achievements/9y7nefeu",
        "https://learn.microsoft.com/en-us/users/batbilegmyagmarsuren-7205/achievements/vj5kurgm",      "https://learn.microsoft.com/en-us/users/batbilegmyagmarsuren-7205/achievements/cxawev79",
    ]
    },
    {
    grade: "12-1",
    name: "Б.Билгүүдэй",
    certificates: [

    ]
    },

    {
    grade: "12-1",
    name: "Д.Болдбаяр",
    sw: "SW1",
    certificates: [
        "https://www.sololearn.com/certificates/CC-CQLVNI2U",
        "https://www.freecodecamp.org/certification/Boldbayar/javascript-algorithms-and-data-structures-v8",
        "https://www.freecodecamp.org/certification/Boldbayar/responsive-web-design",
        "https://drive.google.com/file/d/1J1mwP-JYVDtW5Gz6pGfbtcb_x9nbZ1Vm/view?usp=drive_link",
        "https://drive.google.com/file/d/1Ep_DOKqW5KWDLX70SB4MuhdpX4rYfgpW/view?usp=drive_link",
        "https://drive.google.com/file/d/1RoKaDA4V7ws4w92X2xoAQXE0EXr-KdeF/view?usp=drive_link",
        "https://drive.google.com/file/d/1XPqIZVdLpBSfTgrxzd8JATdjR6tk2a2L/view?usp=drive_link",
        "https://drive.google.com/file/d/1PT4H-pg4mz0ISNZdc140H1uTTDV7efRe/view?usp=drive_link",
        "https://drive.google.com/file/d/1f8YAKA4E1Vyu7qouZfvPek-ZbcB7w8we/view?usp=drive_link",
        "https://drive.google.com/file/d/189hfzGOVz857u1sg35nGWK8Mk-08vk7_/view?usp=drive_link",
        "https://courses.edx.org/certificates/97dd079d5f654044b8123de9b1bb2099?_gl=1*1gvr9is*_gcl_au*MTIxODE3MTc4MS4xNzQ1MjQxMjk4*_ga*MjEzODUwNDk5My4xNzQ1MjQxMjk4*_ga_D3KS4KMDT0*czE3NDc4Mjk3OTYkbzIkZzEkdDE3NDc4Mjk4NDckajkkbDAkaDAkZFU5aHRpd2VSX0hzRmpGWkZyTlJTM0J4dUZnQW9rR3lWY1E.",
        "https://certificates.cs50.io/8c86bad0-8f1a-418c-b437-73f89d552b9e.pdf?size=letter",
        "https://jumpshare.com/v/ODhpZhbdvQkvduF1TySE",
        "https://jumpshare.com/v/yDO6689WRepXXaOYu66w",
        "https://jumpshare.com/v/VelDalOIgsY28dmpdJSq",
    ]
    },
    {
    grade: "12-1",
    name: "А.Болор",
    certificates: [

    ]
    },
    {
        grade: "12-1",
        name: "Д.Дөлгөөн",
        sw: "SW1",
        certificates: [  "https://drive.google.com/drive/u/2/folders/1v7pnkppcVV19XOk--T4iLuEIJvow9LZ6?ths=true",
            "https://drive.google.com/drive/u/2/folders/1v7pnkppcVV19XOk--T4iLuEIJvow9LZ6?ths=true",
            "https://drive.google.com/drive/u/2/folders/1v7pnkppcVV19XOk--T4iLuEIJvow9LZ6?ths=true",
            "https://drive.google.com/drive/u/2/folders/1v7pnkppcVV19XOk--T4iLuEIJvow9LZ6?ths=true",
            "https://drive.google.com/drive/u/2/folders/1v7pnkppcVV19XOk--T4iLuEIJvow9LZ6?ths=true",
        ]
    },
    {
        grade: "12-1",
        name: "М.Дөлгөөндалай",
        sw: "SW1",
        certificates: [
        "https://drive.google.com/drive/u/2/folders/1Yb59d5suVVgEq_P7dpu8AcJY3TMnLfle?ths=true",
        "https://drive.google.com/drive/u/2/folders/1Yb59d5suVVgEq_P7dpu8AcJY3TMnLfle?ths=true",
        "https://drive.google.com/drive/u/2/folders/1Yb59d5suVVgEq_P7dpu8AcJY3TMnLfle?ths=true",
        "https://drive.google.com/drive/u/2/folders/1Yb59d5suVVgEq_P7dpu8AcJY3TMnLfle?ths=true",
        "https://drive.google.com/drive/u/2/folders/1Yb59d5suVVgEq_P7dpu8AcJY3TMnLfle?ths=true",
        ]
    },
    {
    grade: "12-1",
    name: "Б.Золзаяа",
    certificates: [

    ]
    },
    {
    grade: "12-1",
    name: "Э.Мөнх-Эрдэнэ",
    "certificates": [

    ]
    },

    {
    grade: "12-1",
    name: "Ц.Мөнхжин",
    certificates: [

    ]
    },
    {
    grade: "12-1",
    name: "Э.Мөнхзаяа",
    certificates: [

    ]
    },
    {
    grade: "12-1",
    name: "Т.Мөнхзориг",
    sw: "SW1",
    certificates: [
        "https://www.freecodecamp.org/certification/Munkhzorig/javascript-algorithms-and-data-structures-v8",
        "https://www.freecodecamp.org/certification/Munkhzorig/responsive-web-design",
        "https://drive.google.com/drive/u/2/folders/1UcE-kIpeJo8lrzJ4lfYkYdjlK2vsjywe?ths=true",
        "https://drive.google.com/drive/u/2/folders/1UcE-kIpeJo8lrzJ4lfYkYdjlK2vsjywe?ths=true",
        "https://drive.google.com/drive/u/2/folders/1UcE-kIpeJo8lrzJ4lfYkYdjlK2vsjywe?ths=true",
        "https://drive.google.com/drive/u/2/folders/1UcE-kIpeJo8lrzJ4lfYkYdjlK2vsjywe?ths=true",      "https://drive.google.com/drive/u/2/folders/1UcE-kIpeJo8lrzJ4lfYkYdjlK2vsjywe?ths=true"
    ]
    },
    {
    grade: "12-1",
    name: "Д.Оюунтогтох",
    sw: "SW1",
    certificates: [
    ]
    },
    {
    grade: "12-1",
    name: "Г.Номин-эрдэнэ",
    sw: "SW2",
    certificates: [
        "https://drive.google.com/file/d/1WM-cpk210IzP6eEEzJqiMWhwWiXQfu_n/view?usp=drive_link",
        "https://drive.google.com/file/d/1Z1jf_ekMQV8XYjKlJWOq3Sbg8ep6WrgZ/view?usp=drive_link",
        "https://drive.google.com/file/d/14RCfLAm4Plg9aQFUD41Loo6v7DuBXSB/view?usp=drive_link",
        "https://drive.google.com/file/d/1pV9M99wS-WvmRMBadpiFg37dsOcDzMxJ/view?usp=drive_link",
        "https://drive.google.com/file/d/1YY4MZVa_0ENYTBbjbXkMqкEONцNGVmEe/view?usp=drive_link",
        "https://drive.google.com/file/d/1a_EzZQWYIaMoHvSS0oBjPUUGeCyyzNbw/view?usp=drive_link",
        "https://docs.google.com/document/d/1eyxkExVpCja5H363bIhFCmB-L6JepiKEaSXbkUqY7OA/edit?usp=drive_link",      "https://drive.google.com/file/d/1MUrFmvx0ifa8SKsBG_zejVfNoqUU2tIh/view?usp=drive_link",
    ]
    },
    {
    grade: "12-1",
    name: "С.Төгөлдөр",
    certificates: [
        "https://www.sololearn.com/certificates/CC-V0MLFRG2",
    ]
    },
    {
    grade: "12-1",
    name: "С.Төгөлдөр",
    sw: "SW1",
    certificates: [
    ]
    },
    {
    grade: "12-1",
    name: "С.Хүслэн",
    sw: "SW1",
    certificates: [
        "https://drive.google.com/file/d/1sS8NzB5hpsdstxcNsXkZPLg-smeUt9fA/view?usp=sharing",
        "https://drive.google.com/drive/u/2/folders/1cUCUSeKkx5TA-7SF4ySajMkRkFVXqElg?ths=true",
        "https://drive.google.com/drive/u/2/folders/1cUCUSeKkx5TA-7SF4ySajMkRkFVXqElg?ths=true",
        "https://drive.google.com/drive/u/2/folders/1cUCUSeKkx5TA-7SF4ySajMkRkFVXqElg?ths=true",
        "https://drive.google.com/drive/u/2/folders/1cUCUSeKkx5TA-7SF4ySajMkRkFVXqElg?ths=true",      "https://drive.google.com/drive/u/2/folders/1cUCUSeKkx5TA-7SF4ySajMkRkFVXqElg?ths=true",
    ]
    },
    {
    grade: "12-1",
    name: "М.Чингис",
    certificates: [
    ]
    },
    {
    grade: "12-1",
    name: "Н.Чингүнбилэг",
    sw: "SW1",
    certificates: [
        "https://www.sololearn.com/certificates/CC-IMEWUDJB",
        "https://www.freecodecamp.org/certification/fccfe70b107-a0f9-4c2f-ad44-a1ca2972c77b/javascript-algorithms-and-data-structures-v8",
        "https://www.freecodecamp.org/certification/fccfe70b107-a0f9-4c2f-ad44-a1ca2972c77b/responsive-web-design",
    ]
    },
    {
    grade: "12-1",
    name: "А.Чулуун-Эрдэнэ",
    sw: "SW1",
    certificates: [
        "https://jmp.sh/GZSrkwuJ",
        "https://jmp.sh/LjcfEuPP",
        "https://jmp.sh/HAmNekDE",
        "HarvardX CS50x Certificate | edX",
        "https://certificates.cs50.io/106bc3b5-ab41-4a31-ac84-d02ea34d4d3b.pdf?size=letter",
        "https://jmp.sh/HIxcHfRh",
        "https://jmp.sh/bgGvs9bI",
        "https://jmp.sh/YbJXadO9",
    ]
    },
    {
        grade: "12-1",
        name: "Б.Тэмүүлэн",
        sw: "SW2",
        certificates: [
        "https://www.sololearn.com/certificates/CC-LU9DNSO8",
        "https://www.sololearn.com/certificates/CC-J5QEEA8Q",
        "https://www.sololearn.com/certificates/CC-ETKGMDWP",
        "https://www.sololearn.com/certificates/CC-NMVC913S",
        "https://cs50.harvard.edu/certificates/1743ff4c-3ad0-409f-9b4а-aa23622508c4",
        ]
    },
    {
        grade: "12-1",
        name: "Ц.Мөнхзул",
        sw: "SW1",
        certificates: [
        "https://drive.google.com/drive/u/2/folders/1TlC8pZJ5d1EIdZIZLkBgHWQyitzWkcw6?ths=true",
        "https://drive.google.com/drive/u/2/folders/1TlC8pZJ5d1EIdZIZLkBgHWQyitzWkcw6?ths=true",
        "https://drive.google.com/drive/u/2/folders/1TlC8pZJ5d1EIdZIZLkBgHWQyitzWkcw6?ths=true",
        "https://drive.google.com/drive/u/2/folders/1TlC8pZJ5d1EIdZIZLkBgHWQyitzWkcw6?ths=true",
        "https://drive.google.com/drive/u/2/folders/1TlC8pZJ5d1EIdZIZLkBgHWQyitzWkcw6?ths=true",
        ]
    },
    {
    grade: "12-1",
    name: "З.Энхтулга",
    sw: "SW1",
    certificates: [
        "https://docs.google.com/document/d/1KHRVcGJ7pP0eCmOolG-VZ1I9TKYOJbEprB4akuTFY28/edit?usp=sharing",
        "https://docs.google.com/document/d/12NPgeBpM1aL19aGrXf8CD7dB7BkUmGXXHvx_Wf48vrc/edit?usp=sharing",
        "https://docs.google.com/document/d/1nJHhfoQZVBm9jzILdD6TVpGYldH0oIq74bWvlrafldM/edit?usp=sharing",
        "https://courses.edx.org/certificates/7afc4f76baa94516aff15266e8700e76?_gl=1*1pz0x3c*_gcl_au*NDUyODM0MDA5LjE3NDc4MzIxNjE.*_ga*MTg0MDcxNjczMC4xNzQ3ODMyMTYx*_ga_D3KS4KMDT0*czE3NDc4MzIxNjEkbzEkZzEkdDE3NDc4MzIyMDAkajIxJGwwJGgwJGRNZzkxbFBzYTFNOUVxVmdjcy1nWlZmX25ULWdYd2Vidnhn",
        "https://certificates.cs50.io/6005b6e8-d932-4862-a4ae-a75993bc7d2f.pdf?size=letter",
        "https://learn.microsoft.com/api/achievements/share/en-us/EnhtulgaZ-8462/UYCLTEQ3?sharingId=774906DDE89AB76",
        "https://learn.microsoft.com/api/achievements/share/en-us/EnhtulgaZ-8462/E5LXV8TP?sharingId=774906DDE89AB76",
        "https://learn.microsoft.com/api/achievements/share/en-us/EnhtulgaZ-8462/HAH2NHV8?sharingId=774906DDE89AB76"
    ]
    },
];