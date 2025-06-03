const studentData = [
    {
        grade: "6-1",
        name: "Б.Ангараг",
        scratch: "shooter",
        image: "",
    },
    {
        grade: "6-1",
        name: "А.Мөнгөнзул",
        scratch: "duck",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Э.Аригбөх",
        scratch: "coockie clicker",
        certificates: [
            "images/spoj-certificate/6-1Э.Аригбөх.png"
        ],
        image: "image",
    },
    {
        grade: "6-1",
        name: "Б.Арми",
        scratch: "flappy bird",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Б.Болд-Оргил",
        scratch: "sigma ronaldo",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Б.Есүй",
        scratch: "jumping",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Б.Тэнүүнтөрч",
        scratch: "jumping",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Б.Хишигжаргал",
        scratch: "change of clothes",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Б.Хүслэн",
        scratch: "change of clothes",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Г.Тэмүүлэн",
        scratch: "change of clothes",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Л.Сайнхүү",
        scratch: "soccer ball clicker",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Л.Сайханзаяа",
        scratch: "anger game",
        image: "image",
    },
    {
        grade: "6-1",
        name: "М.Баярцэцэг",
        scratch: "anger game",
        image: "image",
    },
    {
        grade: "6-1",
        name: "М.Сарангуа",
        scratch: "must play",
        image: "image",
    },
    {
        grade: "6-1",
        name: "О.Чингүүн",
        scratch: "ping pong",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Ө.Даваа-Очир",
        scratch: "clicker 4",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Т.Баттулга",
        scratch: "coockie clicker",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Ц.Биндэръяа",
        scratch: "lady egg",
        image: "image",
    },
    {
        grade: "6-1",
        name: "Э.Хулангоо",
        scratch: "platform",
        image: "image",
    },
    {
        grade: "6-2",
        name: "А.Мишээл",
        scratch: "jimmys adventure",
        image: "",
    },
    {
        grade: "6-2",
        name: "Б.Номин-Эрдэнэ",
        scratch: "delden gegdeehii",
        image: "",
    },
    {
        grade: "6-2",
        name: "Б.Төгөлдөр",
        scratch:"delden gegdeehii",
        image: "",
    },
    {
        grade: "6-2",
        name: "Б.Тэмүүлэн",
        scratch: "bumbulug unagah",
        image: "",
    },
    {
        grade: "6-2",
        name: "Б.Чингүүн",
        scratch: "shooting zombie",
        image: "",
    },
    {
        grade: "6-2",
        name: "Г.Анударь",
        scratch: "snake",
        image: "",
    },
    {
        grade: "6-2",
        name: "Г.Мөнхбилэг",
        scratch: "үсрэлт",
        image: "",
    },
    {
        grade: "6-2",
        name: "Г.Цэцүүхэн",
        scratch: "bumbugnuus bultah",
        image: "",
    },
    {
        grade: "6-2",
        name: "Д.Ган-Үжин",
        scratch: "",
        image: "",
    },
    {
        grade: "6-2",
        name: "М.Гал",
        scratch: "",
        image: "",
    },
    {
        grade: "6-2",
        name: "М.Есөн-Эрдэнэ",
        scratch: "jumpman",
        image: "",
    },
    {
        grade: "6-2",
        name: "М.Эгшиглэн",
        scratch: "space waves",
        image: "",
    },
    {
        grade: "6-2",
        name: "О.Бодьхүү",
        scratch: "2 noob",
        image: "",
    },
    {
        grade: "6-2",
        name: "О.Тэмүүлэн",
        scratch: "shaar tsohig",
        image: "",
    },
    {
        grade: "6-2",
        name: "Т.Энхболд",
        scratch: "shaar tsohig",
        image: "",
    },
    {
        grade: "6-2",
        name: "У.Маргад",
        scratch: "",
        image: "",
    },
    {
        grade: "6-2",
        name: "Х.Тод-Эрдэнэ",
        scratch: "uraldaanii mashin",
        image: "",
    },
    {
        grade: "6-2",
        name: "Х.Ууганбаяр",
        scratch: "help",
        image: "",
    },
    {
        grade: "6-2",
        name: "Ш.Индра",
        scratch: "😂 dardag togloom",
        image: "",
    },
    {
        grade: "6-2",
        name: "Э.Дэлгэрмөрөн",
        scratch: "car racking game",
        image: "",
    },
    {
        grade: "6-2",
        name: "Э.Хишигтөгөлдөр",
        scratch: "zombie fight",
        image: "",
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
        name: "Б.Эрмүүн",
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
        name: "Нарансолонго",
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
        grade: "8-1",
        name: "Б.Дэлгэрдалай",
        spoj: "Бодлого-41 rank-8833",
        certificates: [
        ],
    },
    {
        grade: "8-1",
        name: "Б.Дэлгэрдалай",
        spoj: "Бодлого-41 rank-8833",
        certificates: [
        ],
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

        ]
    },
    {
    grade: "11-2",
        name: "Н.Тэнгис",
        certificates: [

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

        ]
    },
    {
        grade: "11-2",
        name: "Б.Төвөргөөн",
        certificates: [

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
            "https://api2.sololearn.com/v2/certificates/CC-BETEUEMV/image/png?t=638827159517118950",
        ]
    },
    {
        grade: "11-1",
        name: "Г.Түвшин",
        certificates: [

        ]
    },
    {
        grade: "11-1",
        name: "Б.Билгүүн",
        certificates: [

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
        ]
    },
    {
        grade: "11-1",
        name: "А.Амарболд",
        certificates: [
            "https://www.sololearn.com/certificates/CC-GXMTCCYH",
            "https://www.sololearn.com/certificates/CC-8OJSJ0LE",
            "https://www.sololearn.com/certificates/CC-EL5QVHLH",
        ]
    },
    {
        grade: "11-1",
        name: "Э.Од-Эрдэнэ",
        certificates: [
            "https://www.sololearn.com/certificates/CC-GJQZT7GU",
            "https://www.sololearn.com/certificates/CC-JS9K52GX",
            "https://www.sololearn.com/certificates/CC-IHEABOEB",
        ]
    },
    {
        grade: "11-1",
        name: "Д.Анужин",
        certificates: [
            "https://blob.sololearn.com/certificates/acb65359-46f5-4f2c-a643-7ffc19ab93ec.pdf",
            "https://blob.sololearn.com/certificates/33fa621f-bf7f-4ea6-ab71-4280e0c9b773.pdf",
            "https://api2.sololearn.com/v2/certificates/CC-EKGHB0IL/image/pdf?t=638794377592077570",
            "https://api2.sololearn.com/v2/certificates/CC-A2HFYWF0/image/pdf?t=638794399687437560",
            "https://api2.sololearn.com/v2/certificates/CC-NOI0T9OZ/image/pdf?t=638794443439551780",
            "https://api2.sololearn.com/v2/certificates/CC-9KSPAECM/image/pdf?t=638794463756076880",
            "https://api2.sololearn.com/v2/certificates/CC-WSWPAYF9/image/pdf?t=638812545089796360",
        ]
    },
    {
        grade: "11-1",
        name: "О.Бодьмөнхнаран",
        certificates: [
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
            "https://blob.sololearn.com/certificates/8fbcd6e7-a734-4303-94a7-77a855cfeb02.pdf",
            "https://blob.sololearn.com/certificates/2e1cdb0b-a044-4872-899e-88d10191594c.pdf",
            "https://api2.sololearn.com/v2/certificates/CC-REKWRZOO/image/pdf?t=638817490777468060",
            "https://blob.sololearn.com/certificates/3f5b38a8-a466-4226-992a-1a735e3888ea.pdf",
            "https://blob.sololearn.com/certificates/486693fd-7f9b-4dd5-8aea-205e62078bc9.pdf",
            "https://blob.sololearn.com/certificates/255b72e8-c98d-44d5-8a06-3ed9fde6ff4f.pdf",
        ]
    },
    {
        grade: "11-1",
        name: "У.Хүслэн",
        certificates: [
        ]
    },
    {
        grade: "11-1",
        name: "Е.Нартулга",
        certificates: [
        ]
    },
    {
        grade: "11-1",
        name: "Б.Анужин",
        certificates: [
        ]
    },
    {
        grade: "11-1",
        name: "О.Халиунболд",
        certificates: [
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
        ]
    },
    {
        grade: "11-1",
        name: "Т.Үлэмж",
        certificates: [
        ]
    },
];

// Анги сонгоход тухайн ангийн нэрсийг оруулна
function updateStudentNames() {
    const selectedGrade = document.getElementById('searchGrade').value;
    const studentNameSelect = document.getElementById('studentName');

    // clear old options
    studentNameSelect.innerHTML = '<option value="">--Нэр сонгох--</option>';

    if (!selectedGrade) return;

    const filteredStudents = studentData.filter(student => student.grade === selectedGrade);

    filteredStudents.forEach(student => {
        const option = document.createElement('option');
        option.value = student.name;
        option.textContent = student.name;
        studentNameSelect.appendChild(option);
    });
}

// Жишээ: хайлт хийх функц (нэр эсвэл ангиар)
function filterStudents() {
    const grade = document.getElementById('searchGrade').value;
    const selectedName = document.getElementById('studentName').value;

    if (grade && !selectedName) {
        const studentsInGrade = studentData.filter(s => s.grade === grade);
        const encodedData = encodeURIComponent(JSON.stringify(studentsInGrade));
        window.location.href = `studentDetail.html?grade=${encodeURIComponent(grade)}&students=${encodedData}`;
    } else if (grade && selectedName) {
        const matchedStudent = studentData.find(s => s.grade === grade && s.name === selectedName);
        if (matchedStudent) {
            const certs = encodeURIComponent(JSON.stringify(matchedStudent.certificates || []));
            const spoj = encodeURIComponent(JSON.stringify(matchedStudent.spoj || []));
            const scratch = encodeURIComponent(JSON.stringify(matchedStudent.scratch || []));
            const image = encodeURIComponent(JSON.stringify(matchedStudent.image || ""));
            window.location.href = `studentDetail.html?grade=${grade}&name=${encodeURIComponent(selectedName)}&image=${image}&scratch=${scratch}&spoj=${spoj}&certificates=${certs}`;
        } else {
            alert("Сурагч олдсонгүй.");
        }
    } else {
        alert("Анги сонгоно уу.");
    }
}

// URL параметруудыг авах
const params = new URLSearchParams(window.location.search);
const grade = params.get('grade') || "";
const name = params.get('name') || "";
const certsRaw = params.get('certificates') || "[]";
const spoj = params.get('spoj') || "[]";
const scratch = params.get('scratch') || "";
const image = params.get('image') || "";

const certContainer = document.getElementById('certificatesContainer');
const imageElement = document.getElementById('studentImage');
const gradeTypeElement = document.getElementById("gradeType");
const spojCerf = document.getElementById("spojCertificate");
const scratchWork = document.getElementById("scratchWork");

// Хувийн зураг оруулах
if (grade) {
    imageElement.src = `images/students/${grade}${name}.jpg`;
} else {
    imageElement.src = 'images/default.jpg'; // анги байхгүй үед default зураг
}

// Сэдвийн гарчиг (gradeType) тогтоох
if (["6-1", "6-2"].includes(grade)) {
    gradeTypeElement.innerHTML = "Бүтээлийн Нэр:";
    certContainer.textContent = decodeURIComponent(scratch);
    if(image == "image") {
        scratchWork.src = `images/6-scratch-images/${grade}${name}.png`;
        console.log("hooson: ", image);
        // console.log("image/6-scratch-images/6-1Б.Ангараг.png")
    } else {
        scratchWork.src = "images/6-scratch-images/scratch-default.png";
        console.log(image);
    }
    if(certsRaw) {
        // scratchWork.src = `images/6-scratch-images/${grade}${name}.png`;
        spojCerf.src = `images/spoj-certificate/${grade}${name}.png`;
    }
} else if (["7-1", "7-2"].includes(grade)) {
    gradeTypeElement.innerHTML = "Spoj.com Алгоритмчилтал";
    certContainer.textContent = decodeURIComponent(spoj);
    if(certsRaw) {
        spojCerf.src = `images/spoj-certificate/${grade}${name}.png`;
    }
} else if (grade) {
    gradeTypeElement.innerHTML = "Сертификатууд:";

    let certificates = [];
    try {
        certificates = JSON.parse(decodeURIComponent(certsRaw));
    } catch (e) {
        console.error("Сертификатыг задлахад алдаа гарлаа:", e);
    }

    if (Array.isArray(certificates) && certificates.length > 0) {
        certificates.forEach((url, index) => {
            const a = document.createElement('a');
            a.href = url;
            a.target = "_blank";
            a.textContent = `Сертификат${index + 1}, `;
            certContainer.appendChild(a);
        });
    } else {
        certContainer.textContent = "Сертификат мэдээлэл алга.";
    }
}

// Ерөнхий мэдээллийг харуулах
if (grade) {
    document.getElementById('sectionTitle').textContent = `${grade} анги - ${name} сурагч`;
    document.getElementById('gradeText').textContent = `Анги: ${grade}`;
    document.getElementById('studentName').textContent = `Нэр: ${name}`;
}


