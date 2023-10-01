import logoLight from "@/images/logo.png";

export const LogoImage = {
  light: logoLight,
};

export const NavLinks = [
  {
    name: "Beranda",
    url: "/",
  },
  {
    name: "Perusahaan",
    url: "/tentang",
    subItems: [
      {
        name: "Tentang Perusahaan",
        url: "/tentang-perusahaan",
      },
      {
        name: "Manajemen",
        url: "/manajemen",
      },
      {
        name: "PT Pindad",
        url: "https://pindad.com/",
      },

      {
        name: "PT Pindad International Logistic (PT PIL)",
        url: "https://pindadinternationallogistic.co.id/",
      },
      {
        name: "PT Pindad Global Source & Trading (PT PGST)",
        url: "https://pindadglobal.com/",
      },
      {
        name: "PT Pindad Medika Utama (PT PMU)",
        url: "https://pindadmedika.com/",
      },

      {
        name: "Peraturan & Ketentuan Perusahaan",
        url: "/peraturan",
      },
      {
        name: "Sistem Manajemen Mutu & Komitmen Terhadap Lingkungan",
        url: "/sistem-manajemen",
      },
    ],
  },
  {
    name: "Berita",
    url: "/news",
  },

  {
    name: "Produk",
    url: "/products",
  },

  {
    name: "Kontak",
    url: "/contact",
  },
];

import sliderOne01 from "@/images/slider/PEI-Pindad-Bg.jpeg";
import sliderOne02 from "@/images/slider/sliderOne03.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "",
    title: "PT Pindad \n Enjiniring Indonesia",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderOne02,
    subTitle: "",
    title: "Petarung \n Pemenang Kompak",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
];

import AboutCompany1 from "@/images/slider/3.jpg";
import AboutCompany2 from "@/images/slider/2.jpg";
import AboutCompany3 from "@/images/slider/6.jpg";
import AboutCompany4 from "@/images/slider/4.jpeg";

export const AboutCompanyImage = [
  {
    name: "image1",
    image: AboutCompany1,
  },
  {
    name: "image2",
    image: AboutCompany2,
  },
  {
    name: "image3",
    image: AboutCompany3,
  },
  {
    name: "image4",
    image: AboutCompany4,
  },
];

import sliderTwo01 from "@/images/slider/1.jpg";
import sliderTwo02 from "@/images/slider/2.jpg";
import sliderTwo03 from "@/images/slider/3.jpg";
import sliderTwo04 from "@/images/slider/4.jpeg";
import sliderTwo05 from "@/images/slider/5.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,

    title: "Selamat Datang di PT. Pindad Enjiniring Indonesia.",
  },
  {
    image: sliderTwo02,
    subTitle:
      "Berkontribusi penuh serta mengembangkan bisnis untuk\nmenghasilkan produk dan jasa berkualitas tinggi",
    title: "Peran aktif dalam optimalisasi pengembangan bisnis",
  },
  {
    image: sliderTwo03,
    subTitle:
      "Integritas, Professional, Cepat Tanggap, Kerja Cerdas,\nKreativitas,Berpengetahuan dan Inovatif, serta Pantang\nMeneyerah",
    title: "Petarung",
  },
  {
    image: sliderTwo04,
    subTitle:
      "Optimis dalam upaya proses bisnis yang\ndijalankan untuk selalu mencapai target",
    title: "Pemenang",
  },
  {
    image: sliderTwo05,
    subTitle:
      "Kerja sama tim dalam satu tekad yang\ntercermin dalam pemahaman konsepsional,\n toleransi, dan solidaritas",
    title: "Kompak",
  },
];

// import sliderThree01 from "@/images/slider/3_1.jpg";
// import sliderThree02 from "@/images/slider/3_2.jpg";

// export const SliderThreeData = [
//   {
//     image: sliderThree01,
//     subTitle: "WELCOME TO MEIPALY AGENCY",
//     title: "SMART WEB\n DESIGN AGENCY.",
//     button: {
//       label: "DISCOVER MORE",
//       url: "/about",
//     },
//   },
//   {
//     image: sliderThree02,
//     subTitle: "WELCOME TO MEIPALY AGENCY",
//     title: "SMART WEB\n DESIGN AGENCY.",
//     button: {
//       label: "DISCOVER MORE",
//       url: "/about",
//     },
//   },
// ];

export const CompanyName = [
  {
    name: "PT Daun Cakra Bhakti",
    date: "7 Oktober 1992",
  },
  {
    name: "PT Cakra Mandiri Pratama",
    date: "31 Desember 1999",
  },
  {
    name: "PT Pindad Enjiniring Indonesia",
    date: "4 Desember 2015 - Sekarang",
  },
];

export const ContactInfosBlock = {
  title: "Hubungi Kami",
  description: "Hubungi Kami untuk bekerja sama, Alamat dan Kontak Tertera.",
};

export const ContactInfosList = [
  {
    title: "Alamat",
    infos: [
      {
        name: "Jl. Gatot Subroto, No.517, Bandung, Indonesia, 40285.",
        location: "Kantor Pusat",
        telp: "+62 22 730 8158, 731 2073 (Ext. 2322)",
      },
      {
        name: "Jl. Bromo No.5, Turen, Malang, Indonesia, 65175",
        location: "Kantor Cabang (PEI Bisnis Turen)",
        telp: "+62 341 814500",
      },
      {
        name: "Jl. Batu Ceper No. 28, Jakarta 10120",
        location: "Kantor Perwakilan Jakarta",
        telp: "62 21 3806929",
      },
    ],
  },
  {
    title: "Telepon",
    infos: [
      {
        name: "+62 22 730 8158, 731 2073 (Ext. 2322) ",
      },
      {
        name: "+62 341 814500",
      },
      {
        name: "62 21 3806929 ",
      },
    ],
  },
  {
    title: "Fax",
    infos: [
      {
        name: "022 – 7321077",
      },
      {
        name: "021 – 3814039",
      },
    ],
  },
  {
    title: "Media Social",
    infos: [
      {
        name: "Instagram :",
        title: " @pindad_enjiniringid",
        link: "https://www.instagram.com/pindad_enjiniringid/",
      },
      {
        name: "Facebook :",
        title: "@Pindadenjid",
        link:
          "https://www.facebook.com/PT-Pindad-Enjiniring-Indonesia-387084261834874/",
      },
      {
        name: "Twitter :",
        title: "@PT Pindad Enjiniring Indonesia",
        link: "https://twitter.com/pindadenjind",
      },
    ],
  },
  {
    title: "Email",
    infos: [
      {
        name: "setper@pindad-enjiniring.com",
        link: "mailto:setper@pindad-enjiniring.com",
      },
    ],
  },
];

export const ContactFormTitle = {
  subTitle: "Contact with us",
  title: "write us a message",
  description:
    "We are committed to providing our customers with exceptional service while \n      offering our employees the best training. ",
};

export const InformationChannel = [
  {
    name: "Website Resmi",
    title: "www.pindad-enjiniring.com",
    link: "https://pindad-enjiniring.com",
  },
  {
    name: "Instagram",
    title: "pindad_enjiniringid",
    link: "https://www.instagram.com/pindad_enjiniringid/",
  },
  {
    name: "Youtube",
    title: "PT Pindad Enjiniring Indonesia",
    link: "https://www.youtube.com/channel/UCLLK6bU3H0tISVxanoCXorA",
  },
  {
    name: "Email",
    title: "setper@pindad-enjiniring.com",
    link: "mailto:setper@pindad-enjiniring.com",
  },
];

import ptPindad from "@/images/about/Pindad.png";
import PtPil from "@/images/about/PT-PIL-SKEP.png";
import PtPgst from "@/images/about/PT-PGST-SKEP.png";
import PtMedika from "@/images/about/PMU-new1.png";

export const MotherCompany = {
  image: ptPindad,
  name: "PT Pindad (Persero)",
  social: [
    {
      title: "Website",
      name: "www.pindad.com",
      url: "https://www.pindad.com",
    },
    {
      title: "Instagram",
      name: "pt_pindad",
      url: "https://www.instagram.com/pt_pindad/",
    },
    {
      title: "Youtube",
      name: "PT PINDAD (PERSERO) OFFICIAL",
      url: "https://www.youtube.com/channel/UCLqhC4mRKpK30xDSJhnt0FA",
    },
    {
      title: "Email",
      name: "info@pindad.com",
      url: "mailto:info@pindad.com",
    },
  ],
};

export const ChildCompany = [
  {
    name: "PT Pindad International Logistic (PT PIL)",
    image: PtPil,
    social: [
      {
        title: "Website",
        name: "https://pindadinternationallogistic.co.id/",
        url: "https://pindadinternationallogistic.co.id/",
      },
      {
        title: "Instagram",
        name: "pindadinternationallogistic",
        url: "https://www.instagram.com/pindadinternationallogistic/",
      },
      {
        title: "Email",
        name: "ptpindadinternationallogistic@gmail.com",
        url: "mailto:ptpindadinternationallogistic@gmail.com",
      },
    ],
  },
  {
    name: "PT Pindad Global Source & Trading (PT PGST)",
    image: PtPgst,
    social: [
      {
        title: "Website",
        name: "www.pindadglobal.com",
        url: "https://www.pindadglobal.com",
      },
      {
        title: "Instagram",
        name: "pt_pindadglobal",
        url: "https://www.instagram.com/pt_pindadglobal/",
      },
      {
        title: "Email",
        name: "info@pindadglobal.com",
        url: "mailto:info@pindadglobal.com",
      },
    ],
  },
  {
    name: "PT Pindad Medika Utama (PT PMU) / RSU Pindad",
    image: PtMedika,
    social: [
      {
        title: "Website",
        name: "www.rsupindad.com",
        url: "https://www.rsupindad.com",
      },
      {
        title: "Instagram",
        name: "rspindad",
        url: "https://www.instagram.com/rspindad/",
      },
      {
        title: "Email",
        name: "admin.sesper@pindadmedika.com",
        url: "mailto:admin.sesper@pindadmedika.com",
      },
    ],
  },
];

export const VisionMissionData = [
  {
    title: "Visi",
    desc:
      "Menjadi Perusahaan yang profesional di bidang bisnis yang dijalankan dan memiliki kondisi finansial yang sehat.",
  },
  {
    title: "Misi",
    desc:
      "Melakukan kontribusi penuh dalam mencapai tujuan pengembangan bisnis, disamping sebagai komplemen dari aktivitas bisnis yang dilakukan oleh PT Pindad, Berupaya menghasilkan produk dan jasa yang berkualitas guna memberikan nilai-nilai terbaik bagi kebutuhan Pelanggan, Selalu berusaha mencapai kondisi finansial yang sehat, dan Meningkatkan kemampuan (Knowledge, Skill, Attitude) sumber daya manusia pada bidang bisnis yang dijalankan secara profesional, melalui upaya :",
    subs: [
      "Membangun serta meningkatkan SDM, Bisnis dan Kemitraan Usaha secara professional.",
      "Peran aktif sebagai komplemen bisnis Induk Perusahaan (PT Pindad).",
      "Inovasi Produksi dan Jasa.",
      "Optimalisasi pengembangan bisnis Perusahaan.",
    ],
  },
];

export const CompanyCultureData = [
  {
    title: "Petarung",
    subs: [
      "Integritas",
      "Profesional",
      "Cepat Tanggap",
      "Kerja Cerdas",
      "Kreatifitas",
      "Berpengetahuan dan Inovatif",
      "Pantang Menyerah",
    ],
  },
  {
    title: "Pemenang",
    desc:
      "Optimis, percaya diri dan yakin dalam segala upaya pencapaian norma-norma yang telah ditargetkan. Output dari proses bisnis yang dijalankan oleh Perusahaan untuk selalu mencapai target.",
  },
  {
    title: "Kompak",
    desc:
      "Kesamaan persepsi serta solidaritas Kerjasama tim dalam satu tekad tercapainya target Perusahaan, Bersatu padu dalam menanggapi atau menghadapi suatu perkara dan sebagainya yang tercermin dalam tindakan :",
    subs: [
      "Pemahaman konsepsional",
      "Pemahaman konsepsional",
      "Semangat",
      "Pemahaman konsepsional",
    ],
  },
];

export const FieldDevelopmentData = [
  {
    title: " PRODUKSI/MANUFAKTUR",
    desc:
      "PT. Pindad Enjiniring Indonesia adalah satu-satunya anak perusahaan yang berdiri dibawah naungan PT. Pindad (Persero) yang bergerak dalam bidang pembuatan komponen Alutsista (Alat Utama Sistem Persenjataan) dan produk komersial untuk PT pindad (persero), beberapa diantara nya adalah sebagai berikut : <br/> Melakukan produksi komponen untuk produk alutsista maupun nonalutsista, dan melengkapi proses assembling (perakitan) pada beberapa komponen produksi, diantara nya :",
    component: [
      " Komponen senjata dan munisi",
      " Komponen kendaraan khusus",
      " Komponen kendaraan khusus",
      "Komponen, sarana dan prasarana dalam bidang transportasi",
      "Komponen, sarana dan prasarana dalam bidang transportasi",
    ],
  },
  {
    title: "JASA",
    desc: "Komponen, sarana dan prasarana dalam bidang transportasi",
    component: [
      "Komponen, sarana dan prasarana dalam bidang transportasi",
      "Konstruksi",
      "Excavator",
      " Komponen, sarana dan prasarana dalam bidang transportasi",
      "Komponen Alat Berat",
    ],
  },
];

export const CompanyHistoryData = [
  {
    title: "PT Pindad Enjiniring Indonesia.",
    desc: "Berdiri sejak tahun 1992, diawali dengan nama PT Daun Cakra Bhakti.",
    startDate: "2015/12",
  },
  {
    title: "PT. Cakra Mandiri Pratama",
    desc: "Tahun 1999 berganti menjadi PT Cakra Mandiri Pratama Indonesia.",
    startDate: "1999/12",
  },
  {
    title: "PT. Daun Cakra Bhakti",
    desc: "Berdiri sejak tahun 1992, diawali dengan nama PT Daun Cakra Bhakti.",
    startDate: "1992/10",
  },
];

export const BlogHomeSection = {
  subTitle: "Artikel Baru Kami",
  title: "Artikel Terbaru",
};

export const ServicePostThreeData = {
  sectionContent: {
    title: "Berita Terbaru Kami",
  },
};

import team01 from "@/images/team/DSC023001-1-500x500.jpg";
import team02 from "@/images/team/pas-foto-website-2-500x500.jpg";
import team03 from "@/images/team/pas-foto-website-500x500.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "Dewan Direksi Kami",
    subTitle:
      "Perkenalkan Dewan Direksi Kami, Mereka Merupakan Ahli Di Bidangnya Masing-Masing",
    text:
      "Perkenalkan Dewan Direksi Kami, Mereka Merupakan Ahli Di Bidangnya Masing-Masing",
  },
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "Great things in business are never done by one person.",
  specialText: "They’re done by a team of people.",
  text:
    "We are committed to providing our customers with exceptional service while \n offering our employees the best training.",
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "Bisnis Kami",
    subTitle: "Lihat Semua Bisnis Kami",
  },
};

import aboutTwo01 from "@/images/about/2.jpg";
import aboutTwo02 from "@/images/about/1.png";

export const AboutTwoData = {
  sectionContent: {
    title: "Tentang Kami",
    subTitle: "INTERGRATED & INNOVATION",
    text:
      "PT. Pindad Enjiniring Indonesia adalah satu-satunya anak perusahaan PT pindad yang berdiri sejak tahun 1992 dengan nama PT Daun Cakra Bhakti. Pada Tahun 1999 dilakukan perubahan nama perusahaan menjadi PT Cakra Mandiri Pratama, sebelum akhir nya pada tanggal 4 Desember 2015 menjadi PT pindad Enjiniring Indonesia yang berdiri dibawah naungan PT. Pindad. \n\n Bidang pekerjaan yang kami jalankan diantara nya Manufaktur, Enjiniring, perdagangan, pemborongan, pengembang (developer), perindustrian, mekanial elektrikal, pertanian, pertambangan, jasa, perhotelan, percetakan, dan pengembangan bidang pelayanan kesehatan mulai dari pelayanan, penunjang medis, serta Apotik. \n\n Membawahi 3 anak perusahaan, yaitu PT Pindad Medika Utama (PT PMU), PT Pindad International Logistic(PT PIL), dan PT pindad Global Source & Trading (PT PGST).\n\n PT PEI selalu berkomitmen untuk terus berkontribusi penuh serta mengembangkan bisnis nya untuk menghasilkan produk dan jasa yang berkualitas tinggi.",
  },
  button: {
    label: "Learn More",
    url: "#",
  },
  gallery: [aboutTwo01, aboutTwo02],
};

import Axios from "axios";

const URL = "http://localhost:4000";

//get
export const getArticles = async () => {
  try {
    const response = await Axios.get(`${URL}/blog/articles`);
    const result = await response.data;
    return { data: result };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getProducts = async () => {
  try {
    const response = await Axios.get(`${URL}/products`);
    const result = await response.data;

    return { data: result };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getManagements = async () => {
  try {
    const response = await Axios.get(`${URL}/managements`);
    const result = await response.data;

    return { data: result };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//getDetail
export const getArticleBySlug = async slug => {
  try {
    const response = await Axios.get(`${URL}/blog/article/${slug}`);
    const result = response.data;

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getProductBySlug = async slug => {
  try {
    const response = await Axios.get(`${URL}/product/${slug}`);
    const result = response.data;

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getManagementBySlug = async slug => {
  try {
    const response = await Axios.get(`${URL}/management/${slug}`);
    const result = response.data;

    return result;
  } catch (error) {
    console.log(error);
  }
};

//create

export const createArticle = async formData => {
  try {
    await Axios.post(`${URL}/blog/article/create`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response.message));
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async formData => {
  try {
    await Axios.post(`${URL}/product/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => response.data.message)
      .then(data => console.log("Berhasil Upload: ", data))
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const createManagement = async formData => {
  try {
    await Axios.post(`${URL}/management/create`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(response => console.log(response.data.message))
      .catch(error => console.log(error.response.message));
  } catch (error) {
    console.log(error);
  }
};

//update
export const updateArticle = async ({ slug, formData }) => {
  try {
    await Axios.put(`${URL}/blog/article/update/${slug}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(response => console.log("respon server: ", response.data))
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = async ({ slug, formData }) => {
  try {
    await Axios.put(`${URL}/product/update/${slug}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => console.log(response.data.message))
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const updateManagement = async ({ slug, formData }) => {
  try {
    await Axios.put(`${URL}/management/update/${slug}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => console.log(response.data.message))
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

//delete
export const deleteArticle = async slug => {
  try {
    await Axios.delete(`${URL}/blog/article/delete/${slug}`).catch(error =>
      console.log(error)
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async slug => {
  try {
    await Axios.delete(`${URL}/product/delete/${slug}`)
      .then(response => console.log(response.data.message))
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const deleteManagement = async slug => {
  try {
    await Axios.delete(`${URL}/management/delete/${slug}`)
      .then(response => console.log(response.data.message))
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

const showFormattedDate = date => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
const showFormattedDate2 = date => {
  const options = {
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { showFormattedDate, showFormattedDate2 };
