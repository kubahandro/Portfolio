// import digiCosmetics from './assets/digiCosmetics.png';
// import portfolio from './assets/portfolio.png';
// import appleStore from './assets/appleStore.png';
// import golsam from './assets/golsam.png';


export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const service = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Custom Development',
    description:
      'I can develop custom websites using the latest frontend technologies, such as React.js and JavaScript, to create fast and dynamic websites.',
  },
  {
    id: 2,
    name: 'User Experience',
    title: 'User Experience Design',
    description:
      'I can design user experiences that are intuitive, easy to use, and visually appealing, so your customers will keep coming back.',
  },
  {
    id: 3,
    name: 'Web Optimization',
    title: 'Speed Optimization',
    description:
      ' I can optimize speed and performance of your website, so it loads quickly and efficiently, which can improve your search engine rankings and keep your customers engaged.',
  },
  {
    id: 4,
    name: 'Web Maintenance',
    title: 'Maintenance and Support',
    description:
      'I can provide ongoing maintenance and support for your website, including bug fixes, security updates, and content updates, so you can focus on growing your business.',
  },
  {
    id: 5,
    name: 'Interactive Effects',
    title: 'Animations and Effects',
    description:
      'Animations and interactive effects can make your website more engaging and memorable. I can create custom animations and effects using CSS, framer-motion to bring your website to life.',
  },
];

export const skill = [
  {
    id: 1,
    name: 'HTML',
    percentage: 99,
    description:
      'Hypertext Markup Language (HTML) is the standard markup language used to create web pages and web applications.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 90,
    description:
      'JavaScript is a scripting language used for creating dynamic web pages and web applications.',
  },

  {
    id: 3,
    name: 'React.js',
    percentage: 85,
    description:
      'A popular JavaScript library for building user interfaces, React is used to create dynamic and responsive web applications.',
  },
  {
    id: 4,
    name: 'TypeScript',
    percentage: 50,
    description:
      'TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.',
  },

  {
    id: 5,
    name: 'Tailwind CSS',
    percentage: 50,
    description:
      'Tailwind CSS is a utility-first CSS framework that provides developers with a set of pre-built CSS classes for styling web applications.',
  },

  {
    id: 6,
    name: 'Git',
    percentage: 85,
    description:
      'Git is a widely used version control system that is essential for collaborative development and project management. ',
  },

  {
    id: 7,
    name: 'RESTful API',
    percentage: 85,
    description:
      'RESTful API is an interface that two computer systems use to exchange information securely over the internet.',
  },

  {
    id: 8,
    name: 'Sass',
    percentage: 99,
    description:
      'Sass is a CSS preprocessor that allows developers to write CSS in a more concise and structured way.',
  },

  {
    id: 9,
    name: 'Css',
    percentage: 99,
    description:
      'CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
  },


  {
    id: 10,
    name: 'Bootstrap',
    percentage: 65,
    description:
      'Bootstrap is a popular CSS framework that provides developers with a set of pre-built UI components.',
  },

  {
    id: 11,
    name: 'Redux',
    percentage: 80,
    description:
      'Redux is a predictable state container for JavaScript apps, used to manage the state of complex applications.',
  },

];

export const project = [
  {
    id: 1,
    // img: digiCosmetics,
    category: 'Landing',
    title: 'digiCosmetics',
    description:
      'Landing page designed for selling cosmetic products. It typically includes a visually appealing design, easy navigation, and clear product descriptions.',
    url: 'https://digicosmetics.netlify.app',
    sourceUrl: 'https://github.com/khakiiman/digiCosmetics',
  },

  {
    id: 2,
    // img: portfolio,
    category: 'Portfolio',
    title: 'Developer Portfolio',
    description:
      'This Portfolio involves creating a visually appealing and user-friendly website that showcases the skills and portfolio of a frontend developer.',
    url: 'http://imankhaki.netlify.app/',
    sourceUrl: 'https://github.com/khakiiman/portfolio',
  },

  {
    id: 3,
    // img: appleStore,
    category: 'Ecommerce',
    title: 'New Apple Store',
    description:
      'The new Apple Store landing page is a web page designed for showcasing and promoting Apple products, services, and features.',
    url: 'https://newapplestore.netlify.app/',
    sourceUrl: 'https://github.com/khakiiman/applestore',
  },

  {
    id: 4,
    // img: golsam,
    category: 'Blog',
    title: 'Golsam Sepahan',
    description:
      'A new design blog provides informative content related to the agricultural industry, including tips and advice on the use of fertilizers and pesticides. ',
    url: 'https://golsamsepahan.netlify.app',
    sourceUrl: 'https://github.com/khakiiman/golsam-sepahan',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Jalal-Abad Kurmanbek Baatyr High school',
    subtitle: 'Sapat international educational institution',
    date: '2014 - 2019',
    description:
      'The international institution “Sapat” is the only private comprehensive educational institution in Kyrgyzstan.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Ala-Too international university',
    subtitle: 'Computer science',
    date: '2019 - 2021',
    description:
      'Ala-Too International University (AIU) is one of the leading international universities in Central Asia, founded in 1996. The founder of the AIU is the “Sapat” International Educational Institution. The AIU is a legal entity, a private institution operating in accordance with the legislation of the Kyrgyz Republic.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Okurmen It',
    subtitle: 'Course',
    date: '01.03.2024 - 20.09.2024',
    description:
      'The Okurmen_it center is one of the leading academies that teach in the field of Computer science',
    category: 'education',
  },

  {
    id: 4,
    title: 'Kyrgyz State Technical University named after I.Razzakov',
    subtitle: 'Computer science',
    date: '2024  - PRESENT',
    description:
      'Kyrgyz State Technical University, named after, I. Razzakov (KSTU), was founded in 1954. It is the biggest technical university in the Kyrgyz Republic, with about 14,000 students and about 1500 staff members. The university comprises of 6 faculties, 4 institutes, and 4 research institutes',
    category: 'education',
  },

  {
    id: 5,
    title: 'Coming Soon...',
    subtitle: 'Coming Soon...',
    date: '0000 - 0000',
    description:
      'Coming Soon...',
    category: 'education',
  },

  {
    id: 6,
    title: 'English Language',
    subtitle: 'Language',
    date: '2014 - PRESENT',
    description:
      'B-2 level',
    category: 'experience',
  },

  {
    id: 7,
    title: 'Turkish Language',
    subtitle: 'Language',
    date: '2014 - Present',
    description:
      'B-2 Level',
    category: 'experience',
  },

  {
    id: 8,
    title: 'Russian Language',
    subtitle: 'Language',
    date: '',
    description:
      'B-2 Level',
    category: 'experience',
  },
  
  {
    id: 9,
    title: 'Kyrgyz Language',
    subtitle: 'Language',
    date: '',
    description:
      'Kyrgyz language is my native language',
    category: 'experience',
  },

  {
    id: 10,
    title: 'Uzbek Language',
    subtitle: 'Language',
    date: '',
    description:
      '',
    category: 'experience',
  },

];


export const post = [
  {
    id: 1,
    date: 'October 31, 2022',
    imgURL:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/freeCodeCamp-Cover.png',
    title: 'Introduction to React Hooks',
    description:
      'Learn how to use React Hooks to simplify state management and improve performance in your frontend applications.',
  },
  {
    id: 2,
    date: 'November 19, 2022',
    imgURL: 'https://softagency.in/wp-content/uploads/2023/02/vuejsfeat.jpg',
    title: 'Getting Started with Vue.js',
    description:
      'Explore the basics of Vue.js, a progressive JavaScript framework for building user interfaces.',
  },
  {
    id: 3,
    date: 'April 12, 2022',
    imgURL:
      'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qF8LfAwUhl57g9T0BVvVdg.jpeg',
    title: 'Best Practices for Responsive Web Design',
    description:
      'Discover the key principles and techniques for creating responsive web designs that look great on any device.',
  },
  {
    id: 4,
    date: 'March 5, 2022',
    imgURL:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--CHCog3Bn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/3200/1%2AtiS4RzayAJdIeTEkNL1ztw.png',
    title: 'Mastering CSS Flexbox',
    description:
      'Get up to speed with CSS Flexbox, a powerful layout tool for building modern, flexible, and responsive web designs.',
  },
  {
    id: 5,
    date: 'June 25, 2022',
    imgURL:
      'https://silktide.com/app/uploads/2021/05/We-analyzed-6554-websites-1024x576.jpg',
    title: 'Creating Accessible Web Content',
    description:
      'Learn how to make your web content more accessible to users with disabilities, including tips for designing for screen readers and other assistive technologies.',
  },
  {
    id: 6,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OyXMz4TaaY4FJOg00N6c7zsYKuqAAA8VUA&usqp=CAU',
    title: '10 Tips for Writing Clean Code in JavaScript',
    description:
      'Discover best practices for writing clean, maintainable, and efficient JavaScript code that will help you become a better developer.',
  },
  {
    id: 7,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lU_0yLYzO5o9oKAeShqM-8y_s1BWudtcyQ&usqp=CAU',
    title: 'The Future of Frontend Development: What to Expect in 2022',
    description:
      'Explore the latest trends and technologies in frontend development.',
  },
  {
    id: 8,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuqChNWRh2a5AbtgPZYPnAogzqDsBQ-dAg&usqp=CAU',
    title: '10 Essential Tools for Every Frontend Developer',
    description:
      'Check out our list of must-have tools for frontend developers, from code editors.',
  },
  {
    id: 9,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpPs_cWDHKLvC45gy0btz4sNfD9LOArjcdA&usqp=CAU',
    title: 'Mastering the Fundamentals of Web Development',
    description:
      'Learn the basics of web development, including HTML, CSS, and JavaScript, and start building your own web applications from scratch.',
  },
  {
    id: 10,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KXJ50sZkMTcGcKBRpGj3Vnwz8g6iTnqKSQ&usqp=CAU',
    title: 'Creating Beautiful and Responsive UI Designs with CSS Grid',
    description:
      'Get up to speed with CSS Grid, a powerful layout tool for creating complex and responsive user interfaces that adapt to any screen size.',
  },
];
