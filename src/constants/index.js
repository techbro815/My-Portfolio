export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const achievements = [
  {
    id: 1,
    title: 'Top 30 - Internal SIH Hackathon',
    description:
      'Among 550 teams, we secured a place in the TOP 30 and qualified for the Smart India Hackathon main event.',
    img: 'assets/sih_hackathon.png',
    tags: ['Hackathon', 'SIH', 'Top 30'],
  },
  {
    id: 2,
    title: 'Best Outstanding Award - AI Hackathon',
    description: 'Received the Best Outstanding Award in an AI-focused hackathon at Cummins College, Pune.',
    img: 'assets/ai_hackathon.png',
    tags: ['AI', 'Hackathon', 'Award'],
  },
  {
    id: 3,
    title: 'National Coding League 2024 Semi-Finalist',
    description:
      'Ranked in the TOP 100 out of 5275 teams across India, securing a place in the East/West Regional Semi-finals.',
    img: 'assets/ncl_coding.png',
    tags: ['Competitive Coding', 'Semi-Finalist', 'Top 100'],
  },
  {
    id: 4,
    title: 'Certificate of Recognition - IEEE International Conference',
    description:
      'Presented at the 1st IEEE International Conference on Emerging Technologies & Innovation for Sustainability.\n\n' +
      'Spoke on "Navigating Governance Challenges in AI and Web Development", exploring sustainable solutions in technology.',
    img: 'assets/ieee_conference.png',
    tags: ['IEEE', 'Conference', 'AI', 'Web Development', 'Sustainability'],
  },
];

export const myProjects = [
  {
    title: 'AR Wardrobe - Virtual Try-On Experience',
    desc: 'AR Wardrobe is an innovative platform designed to revolutionize the retail experience through AI and AR technology. It enables users to virtually try on clothes using machine learning and 3D modeling, enhancing personalized fashion insights.',
    subdesc:
      'Developed as a Smart India Hackathon project, AR Wardrobe integrates Next.js, Three.js, Tailwind CSS, TypeScript, and TensorFlow to deliver a seamless and immersive virtual try-on experience.',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    texture: '/textures/project/project1.mp4',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

  {
    title: 'AI Health Companion',
    desc: 'AI Health Companion is a user-friendly health-tracking platform that integrates AI-powered tools to monitor both physical and mental well-being. The app provides personalized insights and gamifies health goals with interactive features.',
    subdesc:
      'Key features include Daily Logs, Goal Tracker, Activity Suggestions, Calorie Estimation from food images, and AI-generated Motivational Messages. Built with Streamlit, WorqHat APIs, MongoDB, and Plotly, it processes mood and activity data to offer real-time health advice.',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#FFEECC',
      border: '0.2px solid #FFCC99',
      boxShadow: '0px 0px 60px 0px rgba(255, 153, 102, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    texture: '/textures/project/project2.mp4',
    tags: [
      {
        id: 1,
        name: 'Streamlit',
        path: '/assets/streamlit.svg',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
      {
        id: 3,
        name: 'AI',
        path: '/assets/ai.svg',
      },
      {
        id: 4,
        name: 'Plotly',
        path: '/assets/plotly.svg',
      },
    ],
  },
  {
    title: 'CounsellorNavigator.com',
    desc: 'CounsellorNavigator.com is a data-driven online platform that helps students find the right college based on their academic performance, preferences, and career aspirations. It provides personalized college recommendations using machine learning and real-time analytics.',
    subdesc:
      'Key features include personalized recommendations, real-time analytics, an interactive React.js interface, comprehensive college data, and a secure backend built with Node.js & Express.js. The platform leverages MongoDB for data storage and AWS for cloud-powered ML model hosting.',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#E8F0FE',
      border: '0.2px solid #B0C4DE',
      boxShadow: '0px 0px 60px 0px rgba(176, 196, 222, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    texture: '/textures/project/project3.mp4',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.svg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
      {
        id: 4,
        name: 'AWS',
        path: '/assets/aws.svg',
      },
    ],
  },
  {
    title: 'Chrome Extension – Accelerating Results with No Copy-Paste Hassle',
    desc: 'This Chrome extension enhances online research by automatically detecting and selecting relevant content on web pages, eliminating the need for manual copy-pasting and speeding up information gathering.',
    subdesc:
      'Key features include auto-selection of content, instant dictionary integration for hover-over definitions, text summarization & translation via APIs, and a seamless, intuitive browser integration. Built with HTML, CSS, and JavaScript with language processing APIs.',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#FFF5E6',
      border: '0.2px solid #FFDAB9',
      boxShadow: '0px 0px 60px 0px rgba(255, 218, 185, 0.3)',
    },
    spotlight: '/assets/spotlight4.png',
    texture: '/textures/project/project4.mp4',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: '/assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
      {
        id: 4,
        name: 'APIs',
        path: '/assets/api.svg',
      },
    ],
  },
  {
    title: 'Plant Disease Detection and Diagnosis',
    desc: 'An AI-powered application that detects and diagnoses plant diseases, helping farmers and agriculturists take preventive actions early by identifying issues like Early Blight, Downy Mildew, and Rust Infections.',
    subdesc:
      'Utilizing a CNN-based deep learning model built with TensorFlow, this tool offers real-time image analysis via a web app (using Flask/Django) and stores disease reports in MongoDB. It also provides treatment recommendations in collaboration with agricultural specialists.',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#E0F7E9',
      border: '0.2px solid #A3D9A5',
      boxShadow: '0px 0px 60px 0px rgba(163, 217, 165, 0.3)',
    },
    spotlight: '/assets/spotlight5.png',
    texture: '/textures/project/project5.mp4',
    tags: [
      {
        id: 1,
        name: 'TensorFlow',
        path: '/assets/tensorflow.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 3,
        name: 'Flask/Django',
        path: '/assets/flask.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const aboutMe = [
  {
    id: 1,
    name: 'Who Am I?',
    pos: 'Code, Ride, Conquer',
    duration: 'Since I Googled "How to print Hello World"',
    title:
      'I write code, lift heavy weights, and eat like a warrior (except on Tuesdays—rules matter for kings). \n\n' +
      'When I’m not cracking my head on my laptop, I’m riding into the sunset towards the mountains, cooking up something in the kitchen, or smashing sixes on the cricket field.',
    icon: '/assets/mountain.png',
    animation: 'hiker',
  },
  {
    id: 2,
    name: 'What I Do?',
    pos: 'Full-Stack Magician & Road Trip Navigator',
    duration: '24/7 (Except When On a Bike Ride)',
    title:
      'Best ideas hit me at 120 km/h, mid-ride, wondering if I took the wrong turn. \n\n' +
      'Other skills? Finding the best roadside dhabas, converting night owls to dark mode believers, and delivering match-winning performances both in code and on the pitch.',
    icon: '/assets/bike.png',
    animation: 'wheelie',
  },
  {
    id: 3,
    name: 'Random Fun Fact',
    pos: 'Bug Slayer & Adventure Junkie',
    duration: 'Since I Thought Ctrl+C was a Save Button',
    title:
      'Tried to order biryani online—ended up deploying my website. \n\n' +
      'When I’m not coding, I’m: \n' +
      '✔️ Convincing friends for bike rides \n' +
      '✔️ Hunting the best roadside food \n' +
      '✔️ Wondering why my best ideas come in the shower ',
    icon: '/assets/road.png',
    animation: 'travel',
  },
];
