import {
  cms_food_delivery,
  pos_food_delivery,
  south_asian_e_commerce,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Beverage Franchise Management System",
    technology_used:"REACTJS | MATERiAL‐UI | AWS | S3 | TWiLiO | iOS | SWiFT UI | CORE DATA",
    company_name: "Aiprus Software pvt. ltd.",
    date: "2018 - 2019",
    details: [
      "Collaborated with US based clients to gather requirements, ensuring the delivery of tailored solutions that meet their needs.",
      "Engineered an advanced web application and CMS for store user resulting in a <span style='color: white;'>40%</span> improvement in website performance and <span style='color: white;'>25%</span> increase in user engagement metrics"
    ],
  },
  {
    title: "The Logistics Management System",
    technology_used:"ANGULAR 12+ | RXJS",
    company_name: "Aiprus Software pvt. ltd.",
    date: "2020 - Present",
    details: [
      "Developed an Angular platform for cargo transportation via ships, integrating multilingual support with modes for <span style='color: white;'>Arabic and Farsi.</span>",
      "Enhanced user experience through efficient form handling and <span style='color: white;'>role-based dashboards for Shippers and Carriers</span>, achieving a <span style='color: white;'>30%</span> reduction in booking response times and improved operational efficiency, leading to quicker decision-making and enhanced productivity in shipping logistics."
    ],
  },
  {
    title: "E‐Commerce Marketplace for Asian Community",
    technology_used:"ANGULAR 12+ | RXJS | NODEJS | EXPRESSJS | TWiLiO | MYSQL | DiGiTAL OCEAN",
    company_name: "Aiprus Software pvt. ltd.",
    date: "2016 - Present",
    details: [
      "<span style='color: white;'>Optimized a product insertion system</span> for various specifications and pricing, <span style='color: white;'>reducing app load time by 30% and improving debounce time by 20%</span>", 
      "Developed a comprehensive admin system for ad, event, job, and product approvals, enabling partners to display ads based on module selection, increasing ad placement efficiency by <span style='color: white;'>40%.</span>", 
      "Enhanced the platform with advanced search and filter features, allowing users to complete orders within 5 clicks, thereby increas‐ ing order efficiency by <span style='color: white;'>30%</span>",
    ],
  },
  {
    title: "Beverage Franchise POS",
    technology_used:"iOS | SWiFT STORYBOARD | CORE DATA | TWiLiO | AWS | S3 | EC2",
    company_name: "Aiprus Software pvt. ltd.",
    date: "2019 - 2023",
    details: [
      "Refined POS system which was operational on <span style='color: white;'>200+ stores</span> over USA.",
      "The app was integrated with various peripheral devices like: Thermal Receipt printer, Label printer , PAX device and third party",
      "Payment System using SDK and APIs which even made it operational in <span style='color: white;'>offline mode</span> too.",
      "Worked in a team of 5 with contractors and internal team to design and maintain application architecture, gather client require‐ments, and convert them into business logic."
    ],
  }
];

const portfolio = [
  {
    name: "My Technical Proficiencies",
    description:
      "",
    image: "SkillBall",
  },
  {
    name: "Beverage Franchise POS",
    description:
      "The app was integrated with various peripheral devices like: Thermal Receipt printer, Label printer , PAX device and thrird party Payment System using SDK and APIs which even made it operational in offline mode too.",
    image: pos_food_delivery,
  },
  {
    name: "Beverage Franchise Management System",
    description:
      "Engineered an advanced web application and CMS for store user resulting in a 40% improvement in website performance and 25% increase in user engagement metrics",
    image: cms_food_delivery,
  },
  {
    name: "E‐Commerce Marketplace for Asian Community",
    description:
      "Developed a comprehensive admin system for ad, event, job, and product approvals, enabling partners to display ads based on module selection, increasing ad placement efficiency by 40%.",
    image: south_asian_e_commerce,
  },
];

export { experiences, portfolio };

