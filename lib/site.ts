const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const phoneDisplay = "ابداء الشات";
const email = "digital.board.pro@gmail.com";
const hours = "من 10 صباحًا حتى 10 مساءً، طوال أيام الأسبوع";
const links = {
  home: "/",
  contact: "/contact/",
  collections: "/#collections",
  schoolGifts: "/#school-gifts",
  occasions: "/#occasions",
  why: "/#why",
};

type Collection = {
  title: string;
  description: string;
  image?: string;
};

type Product = {
  name: string;
  price: string;
  tag: string;
  image?: string;
};

const collections: Collection[] = [
  {
    title: "بوكسات الهدايا",
    description: "تشكيلة متكاملة مغلّفة وجاهزة للإهداء.",
  },
  {
    title: "هدايا الأحبة",
    description: "لمسات خاصة تعبّر عن مشاعرك.",
  },
  {
    title: "هدايا المناسبات",
    description: "أعياد ميلاد وخطوبة وتخرج وأكثر.",
  },
  {
    title: "تغليف وتنسيق",
    description: "نغلّف هديتك بأسلوب أنيق يشبهك.",
  },
];

const products: Product[] = [
  { name: "[اسم المنتج الأول]", price: "[السعر]", tag: "الأكثر طلبًا" },
  { name: "[اسم المنتج الثاني]", price: "[السعر]", tag: "جديد" },
  { name: "[اسم المنتج الثالث]", price: "[السعر]", tag: "هدية مميزة" },
  { name: "[اسم المنتج الرابع]", price: "[السعر]", tag: "جديد" },
];

export const site = {
  name: "ملاذ للهدايا",
  nameEn: "Malaz Gifts",
  description:
    "اكتشفي هدايا ملاذ وتوزيعات المدارس والحضانات، مع أدوات مدرسية مخصصة باسم وصورة الطفل وقصص تعليمية مرحة. تغليف أنيق لكل المناسبات وطلبات سهلة عبر واتساب.",
  homeTitle: "ملاذ للهدايا | توزيعات مدرسية وهدايا مخصصة للأطفال",
  keywords: [
    "ملاذ للهدايا",
    "هدايا",
    "بوكسات هدايا",
    "تغليف هدايا",
    "هدايا مناسبات",
    "هدايا أعياد ميلاد",
    "هدايا خطوبة",
    "هدايا في مصر",
    "توزيعات مدارس",
    "توزيعات حضانات",
    "أدوات مدرسية بالاسم والصورة",
    "قصص تعليمية مخصصة للأطفال",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://malaz-gifts.pages.dev",
  links,
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  phoneDisplay,
  email,
  hours,
  facebookGroup: "https://www.facebook.com/groups/1060581723439619/",
  logoPath: "/logo.png",
  logoAvailable: true,
  announcement: "اطلبي هديتك بسهولة عبر واتساب — تغليف أنيق بلمسة ملاذ",
  orderNowAction: "اطلب الآن",
  homeNavigationLabel: "التنقل الرئيسي",
  mobileNavigationLabel: "التنقل للجوال",
  menuOpenLabel: "فتح القائمة",
  menuCloseLabel: "إغلاق القائمة",
  logoAlt: "شعار ملاذ",
  trustItemsAriaLabel: "مميزات ملاذ",
  navigation: [
    { label: "الرئيسية", href: links.home },
    { label: "التشكيلات", href: links.collections },
    { label: "المدارس والحضانات", href: links.schoolGifts },
    { label: "المناسبات", href: links.occasions },
    { label: "لماذا ملاذ", href: links.why },
    { label: "تواصل معنا", href: links.contact },
  ],
  hero: {
    badge: "هدايا مختارة بحب",
    headlineStart: "هدية تقول ما",
    headlineMiddle: "تعجز عنه",
    headlineAccent: "الكلمات",
    description:
      "في ملاذ نجهّز لك هدية مغلّفة بعناية وذوق، تليق بالمناسبة وبمن تحبين.",
    primaryAction: "تصفّحي الهدايا",
    secondaryAction: "تواصلي معنا",
  },
  trustItems: [
    { label: "تغليف مصنوع بعناية", icon: "gift" },
    { label: "تخصيص حسب ذوقك", icon: "heart" },
    { label: "طلب سريع عبر واتساب", icon: "message" },
  ],
  collectionsHeading: "اختاري هديتك من تشكيلات ملاذ",
  collectionsLabel: "تشكيلاتنا",
  placeholderCollectionImage: "[صورة من جروب الفيس]",
  collections,
  schoolGifts: {
    label: "فرحة التعلّم",
    heading: "أنشطة وهدايا للمدارس والحضانات",
    description:
      "نحوّل أيام المدرسة والأنشطة إلى ذكريات لطيفة، بتوزيعات وهدايا مصممة خصيصًا للأطفال.",
    imagePlaceholder: "[صورة توزيعات المدارس]",
    items: [
      {
        title: "توزيعات المدارس والحضانات",
        description:
          "توزيعات أنيقة ولطيفة للأنشطة المدرسية، استقبال الأطفال، والحفلات والمناسبات.",
        icon: "gift",
      },
      {
        title: "أدوات التلميذ باسمه وصورته",
        description:
          "ننسّق أدوات وملصقات مدرسية مخصصة باسم الطفل وصورته لتكون أغراضه مميزة.",
        icon: "star",
      },
      {
        title: "قصص وكتب تعليمية مرحة",
        description:
          "قصص مصوّرة وأنشطة تعليمية يظهر فيها الطفل بطلًا، لتصبح القراءة والتعلّم أقرب لقلبه.",
        icon: "heart",
      },
    ],
    action: "اطلبي توزيعات مخصصة",
  },
  schoolStory: {
    label: "كل مناسبة لها لمسة من ملاذ",
    heading: "هدايا وتوزيعات تحكي حكايتكم",
    paragraphs: [
      "أهلًا بكم في ملاذ؛ مكانكم لأجمل الهدايا والتوزيعات المميزة، بتصميم راقٍ يناسب مناسباتكم.",
      "من توزيعات المدارس والحضانات إلى هدية تحمل اسم الطفل وصورته، نهتم بالتفاصيل لنصنع ذكرى شخصية تبقى في القلب.",
    ],
    image: "/images/malaz-school-gifts.jpg",
    imageAlt: "تصميم ملاذ للهدايا والتوزيعات للمناسبات والمدارس",
    action: "احكي لنا فكرتك",
  },
  featuredLabel: "الأكثر طلبًا",
  featuredHeading: "هدايا جاهزة للإهداء",
  customOrderLink: "اطلبي تنسيقًا خاصًا",
  productImagePlaceholder: "[صورة المنتج]",
  products,
  orderAction: "اطلبي",
  occasionsHeading: "لكل مناسبة هدية",
  occasions: [
    "عيد ميلاد",
    "خطوبة وزفاف",
    "مولود جديد",
    "تخرج ونجاح",
    "عيد الأم",
    "شكر وتقدير",
    "نشاط مدرسي أو حضانة",
  ],
  whyLabel: "لماذا ملاذ",
  whyHeading: "مكان تجدين فيه الهدية",
  whyHeadingSecondLine: "التي تشبه من تحبين",
  whyDescription:
    "نهتم بكل تفصيلة: من اختيار الألوان إلى الشريطة الأخيرة، لتصل هديتك كما تخيلتها تمامًا.",
  startOrderAction: "ابدئي طلبك",
  benefits: [
    {
      title: "تغليف أنيق",
      description: "تفاصيل مدروسة بألوان هادئة وشريطة ساتان.",
    },
    {
      title: "تخصيص كامل",
      description: "نختار معك المحتوى والألوان والرسالة.",
    },
    {
      title: "طلب سهل",
      description: "تواصلي معنا وسنرتب كل شيء لك.",
    },
  ],
  groupHeading: "انضمي لمجتمع ملاذ على فيسبوك",
  groupDescription: "شاهدي أحدث التصاميم وآراء العميلات وكل جديد قبل الجميع.",
  joinGroupAction: "انضمي للجروب",
  contactPage: {
    pageTitle: "تواصلي مع ملاذ للهدايا | طلب هدايا عبر واتساب",
    metaDescription:
      "تواصلي مع ملاذ للهدايا لطلب بوكس هدايا أو توزيعات مدارس مخصصة باسم وصورة الطفل. أرسلي تفاصيل فكرتك وموعد التسليم وسنساعدك في تجهيزها.",
    accessibilityLabel: "معلومات التواصل",
    heroLabel: "نسعد بخدمتك",
    heroHeading: "تواصلي معنا",
    heroDescription:
      "أخبرينا عن هديتك وسنساعدك في اختيار الأنسب وتجهيزها بأجمل صورة.",
    formHeading: "أرسلي طلبك",
    formDescription: "املئي البيانات وسنرد عليك في أقرب وقت.",
    nameLabel: "الاسم",
    namePlaceholder: "اسمك الكريم",
    phoneLabel: "رقم الواتساب",
    phonePlaceholder: "01xxxxxxxxx",
    occasionLabel: "المناسبة",
    occasionPlaceholder: "اختاري المناسبة",
    deliveryDateLabel: "موعد التسليم",
    detailsLabel: "تفاصيل الهدية",
    detailsPlaceholder:
      "اكتبي لنا الألوان المفضلة، الميزانية، أو أي فكرة تخطر ببالك",
    submitAction: "إرسال الطلب",
    requiredError: "هذا الحقل مطلوب",
    whatsappReadyNote: "تم تجهيز رسالتك على واتساب",
    whatsappMessageTitle: "طلب جديد من موقع ملاذ",
    whatsappMessageLabels: {
      name: "الاسم",
      phone: "واتساب",
      occasion: "المناسبة",
      deliveryDate: "موعد التسليم",
      details: "التفاصيل",
    },
    whatsappCardHeading: "الطلب عبر واتساب",
    whatsappCardDescription:
      "أسرع طريقة لطلب هديتك. أرسلي لنا فكرتك وسنتولى الباقي.",
    whatsappAction: "ابدئي المحادثة",
    details: [
      {
        title: "الهاتف / واتساب",
        value: phoneDisplay,
        icon: "phone",
        href: `https://wa.me/${whatsappNumber}`,
      },
      { title: "البريد الإلكتروني", value: email, icon: "mail" },
      { title: "مواعيد العمل", value: hours, icon: "clock" },
    ],
    facebookHeading: "جروب ملاذ على فيسبوك",
    facebookDescription: "شاهدي أحدث تصاميمنا وآراء العميلات",
  },
  footerTagline: "هدايا مغلّفة بحب وذوق، لكل مناسبة ولكل من تحبين.",
  quickLinksHeading: "روابط سريعة",
  socialHeading: "تابعينا",
  facebookGroupLabel: "جروب فيسبوك",
  whatsappFooterLabel: `واتساب: ${phoneDisplay}`,
  copyright: "© ملاذ للهدايا — جميع الحقوق محفوظة",
  sectionTitle: {
    collections: "تشكيلاتنا",
    featured: "الأكثر طلبًا",
    occasions: "لكل مناسبة",
    why: "لماذا ملاذ",
  },
  footerLinks: [
    { label: "الرئيسية", href: links.home },
    { label: "تواصل معنا", href: links.contact },
  ],
} as const;

export const occasionOptions = [...site.occasions, "مناسبة أخرى"] as const;

export type IconName =
  | "gift"
  | "heart"
  | "message"
  | "star"
  | "phone"
  | "mail"
  | "clock"
  | "chevron"
  | "menu"
  | "close";
