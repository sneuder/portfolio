import { v4 as uuidv4 } from 'uuid'

const baseData = {
  sections: {
    home: {
      title: "Hi, I'm Esneider",
      role: 'Full Stack Web Developer',
      text: "Hey, are looking for a web developer to build your Brand and grow your business? Let's shake hands with me."
    },
    experience: {
      title: 'Work Experience',
      text: 'Explore my work history, accomplishments, and expertise below.'
    },
    projects: {
      title: 'Some of my work',
      text: 'As a full stack web developer I have completed some personal projects'
    },
    contact: {
      title: 'Contact me',
      text: 'If you would like to type me a message, fill the form below, I will type you back'
    }
  },
  links: {
    cv: 'https://drive.google.com/file/d/18sZpAbjd7tXnluZipohVmfsS4aNkgN8b/view?usp=sharing',
    github: 'https://github.com/sneuder',
    linkedin: 'https://www.linkedin.com/in/esneider-fullstackdeveloper/'
  },
  jobs: [
    {
      id: uuidv4(),
      company: 'Imagine Apps',
      rol: 'Software Developer',
      date: 'Mar - Dec 2023',
      brief:
        'I specialize in developing web pages and applications using React, Angular, and diverse libraries. I offer ongoing support, optimize code for performance, and conduct rigorous code reviews for quality assurance. I manage NoSQL and SQL databases, design APIs for seamless integration, and facilitate efficient communication between components and external services.',
      stack: [
        'GO',
        'Node',
        'TypeScript',
        'Express',
        'NestJS',
        'Mongoose',
        'Sequelize',
        'JavaScript',
        'Angular',
        'React',
        'NextJS'
      ]
    },
    {
      id: uuidv4(),
      company: 'Blockdemy',
      rol: 'Frontend Developer',
      date: 'May - Nov 2022',
      brief:
        'In my role, I led the main website, providing ongoing support for optimal functionality and user experience. I implemented automated systems for prompt and accurate event date updates, eliminating manual intervention. I optimized guide distribution through efficient automated processes, ensuring swift delivery. Rigorous unit testing of website components guaranteed reliability and high performance throughout the web application.',
      stack: [
        'Node',
        'TypeScript',
        'Express',
        'Sequelize',
        'JavaScript',
        'React',
        'NextJS',
        'Webflow',
        'Zappier',
        'Airtable'
      ]
    },
    {
      id: uuidv4(),
      company: 'Amazonias RGA',
      rol: 'Full Stack Developer',
      date: 'Jan 2021 - Feb 2022',
      brief:
        'I specialize in building robust APIs and user-centric web apps, prioritizing seamless experiences and functionality. Rigorous testing ensures top quality and reliability. I excel in structuring projects, optimizing tech stacks, and creating comprehensive documentation for efficient development and future enhancements.',
      stack: [
        'Java',
        'SpringBoot',
        'Express',
        'NestJS',
        'GO',
        'TypeScript',
        'Angular',
        'React'
      ]
    }
  ],
  mainProjects: [],
  projects: [
    {
      id: uuidv4(),
      name: 'Uploader Service',
      img: 'uploader-service.webp',
      link: 'https://github.com/sneuder/uploader-service',
      description:
        'Created a backend service enabling secure file uploads while seamlessly storing associated data in the database. Implemented robust file handling and database integration for a streamlined user experience.',
      stack: ['GO', 'Echo', 'GORM', 'JWT'],
      main: true
    },
    {
      id: uuidv4(),
      name: 'CLI Workspace',
      img: 'cli-workspace.webp',
      link: 'https://github.com/sneuder/cli-workspace',
      description:
        'Swift Workspace Creator: Simplifies Docker workspaces for teams or individuals. Crafted with Go and Docker, it ensures portable coding environments for seamless collaborations or solo projects.',
      stack: ['GO', 'Docker'],
      main: true
    },
    {
      id: uuidv4(),
      name: 'Workspace Landing',
      img: 'workspace-page.webp',
      link: 'https://workspace-page.vercel.app/',
      description:
        'Swift Solution for effortless Docker workspaces. Streamline coding with hassle-free, efficient setups. Perfect for individual or team projects, offering instant, portable development environments.',
      stack: ['React', 'TypeScript', 'Chakra', 'CSS', 'Vite'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Encrypt',
      img: 'encrypt-front.webp',
      link: 'https://encrypt-word.vercel.app/',
      description:
        'Cutting-edge encryption for top-tier data protection. Intuitive interface ensures seamless data security. Explore encryption options effortlessly for shielding digital assets.',
      stack: ['TypeScript', 'Tailwind', 'CSS', 'Vite'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Encrypt Service',
      img: 'encrypt-service.webp',
      link: 'https://github.com/sneuder/encrypt-words-back',
      description:
        'Cutting-edge encryption for developers, ensuring top-tier data protection. Its intuitive interface enables effortless encryption, guaranteeing airtight security for applications.',
      stack: ['Node', 'TypeScript', 'Express'],
      main: true
    },
    {
      id: uuidv4(),
      name: 'CMS Webflow',
      img: 'cms-webflow.webp',
      link: 'https://github.com/sneuder/webflow-cms-backend/tree/main',
      description:
        "The CMS smoothly connects to Webflow's API for dynamic content management, optimizing workflows and website performance while empowering easy content creation and publishing.",
      stack: ['Node', 'TypeScript', 'Express'],
      main: true
    },
    {
      id: uuidv4(),
      name: 'Hotel Management',
      img: 'hotel-management.webp',
      link: 'https://github.com/sneuder/hotel-management',
      description:
        'The hotel management app revolutionizes operations by simplifying bookings, check-ins, and guest services, ensuring seamless functionality and exceptional customer experiences.',
      stack: ['Node', 'TypeScript', 'NestJS', 'Mongoose', 'GraphQL'],
      main: true
    },
    {
      id: '94',
      name: 'Weather',
      img: 'weather.webp',
      link: 'https://weather-sneuder.vercel.app/',
      description:
        'Weather app using APIs for detailed forecasts. Search cities, view forecasts, and toggle temperature units. Explore detailed weather information effortlessly.',
      stack: ['React', 'TypeScript', 'Vite', 'CSS', 'Style Components'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Marketing Landing Page',
      img: 'marketing.webp',
      link: 'https://sneuder-marketing-agency.webflow.io/',
      description:
        "Fictitious marketing agency's landing page. Developed with Webflow, it showcases services with payment integrations, CMS, and eCommerce for web development.",
      stack: ['Webflow', 'Figma'],
      main: false
    },
    {
      id: '177',
      name: 'Form Country',
      img: 'form-country-front.webp',
      link: 'https://form-name-country.vercel.app/',
      description:
        'This project uses a GraphQL API for user registration, featuring a country selection field within the standard form that collects name, email, and password details.',
      stack: ['React', 'CSS', 'Tailwind'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Form Country Service',
      img: 'form-country-back.webp',
      link: 'https://github.com/sneuder/form-name-country-back',
      description:
        'Service for saving records from Client form. It consumes a Country API and save its information for being used in Cliente side. Besides it uses validation of data before transactions in databases.',
      stack: ['TypeScript', 'Node', 'NestJS', 'GraphQL', 'Mongoose'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Chaira Login',
      img: 'login-chaira.webp',
      link: 'https://chaira-login.vercel.app/',
      description:
        'Proposal for Amazonia University with ReactJS, Styled Components, and clear architecture. Login interface tailored with student-requested changes (pending university review).',
      stack: ['React', 'JavaScript', 'CSS'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Rick and Morty',
      img: 'rick-morty.webp',
      link: 'https://rick-and-morty-random.vercel.app/',
      description:
        'ReactJS website displaying Rick and Morty characters using GraphQL. Users view character histories and access random character displays with a click.',
      stack: ['React', 'Style Components', 'CSS', 'GraphQL'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Puppies',
      img: 'dog-app.webp',
      link: 'https://github.com/sneuder/puppies-fronted',
      description:
        'App consuming dog API enabling creation, filtering, and ordering by temperament, weight, or alphabet. Search dogs, view database, and API canines.',
      stack: ['React', 'MUI', 'CSS'],
      main: false
    },
    {
      id: uuidv4(),
      name: 'Puppies Service',
      img: 'puppies-service.webp',
      link: 'https://github.com/sneuder/puppies-backend',
      description:
        'NodeJS service supporting Puppies app data. CRUD functions with clean architecture, scalability, and technologies like Sequelize and JWT for robust functionality.',
      stack: ['Node', 'Express', 'Sequelize', 'PostgreSQL'],
      main: true
    }
  ]
}

// process main projects

baseData.projects.forEach((project) => {
  if (!project.main) return
  baseData.mainProjects.push(project)
})

export default baseData
