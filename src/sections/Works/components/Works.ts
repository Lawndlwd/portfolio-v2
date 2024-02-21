import AirbnbHeading from '@/assets/levo-bnb/heading.png'
import AirbnbIphone from '@/assets/levo-bnb/iphone.png'
import AirbnbSection from '@/assets/levo-bnb/section-1.png'
import AirbnbLanding from '@/assets/levo-bnb/landing.png'

import taccuinuHeading from '@/assets/taccuinu/heading.png'
import taccuinuIphone from '@/assets/taccuinu/mobile.png'
import taccuinuSection from '@/assets/taccuinu/section.png'
import taccuinuLanding from '@/assets/taccuinu/landing.png'

import portfolioHeading from '@/assets/portfolio/heading.png'
import portfolioIphone from '@/assets/portfolio/mobile.png'
import portfolioSection from '@/assets/portfolio/section.png'
import portfolioLanding from '@/assets/portfolio/landing.png'
const works = [
  {
    link: 'https://levo-bnb.vercel.app',
    name: 'Levobnb',
    id: 'bnb',
    projectOverview: {
      name: 'Project Overview:',
      desc: [
        'web application built using Nuxt.js with Vue, incorporating TypeScript and plain CSS.',
        'It is deployed on Vercel and utilizes Algolia Search and Google Maps APIs, along with Stripe for payment processing.',
        'The app serves as a training exercise, modeled after Airbnb, allowing users to search for accommodations based on location and time.',
      ],
    },
    problemStatement: {
      name: 'Problem Statement:',
      desc: [
        'The project aims to simulate the functionality of a popular accommodation booking platform like Airbnb.',
        'While the primary goal is educational, the project also addresses the need for hands-on experience in building full-stack web applications with modern tools and technologies.',
      ],
    },
    technologies: [
      'NuxtJS',
      'Vue',
      'TypeScript',
      'CSS3',
      'Vercel',
      'Google Maps',
      'Stripe',
      'Algolia',
    ],
    images: [
      {
        name: 'heading',
        src: AirbnbHeading,
      },
      {
        name: 'landing',
        src: AirbnbLanding,
      },
      {
        name: 'mobile',
        src: AirbnbIphone,
      },
      {
        name: 'section',
        src: AirbnbSection,
      },
    ],
    learning: [
      {
        title: 'Integration of Multiple APIs:',
        desc: 'Integrating various APIs such as Algolia for search functionality, Strapi for payment processing, and Google Maps for location services presented a significant challenge. Each API has its own  documentation, authentication methods, and usage patterns, requiring careful coordination and implementation.',
      },
      {
        title: 'Complex UI Features:',
        desc: 'Implementing complex UI features to mimic the functionality of a platform like Airbnb was challenging. Designing intuitive user interfaces for property listings, map interactions, and booking flows while maintaining responsiveness across different devices required meticulous planning and implementation.',
      },
      {
        title: 'Technical Insights Gained:',
        desc: 'Building LevoBNB provided invaluable technical insights into web development using Vue.js and associated libraries and frameworks. Understanding how to leverage Vue.js for building dynamic and interactive user interfaces, along with integrating third-party APIs and services, enhanced my proficiency in full-stack development.',
      },
    ],
  },
  {
    link: 'https://app.taccuinu.com',
    name: 'Taccuinu',
    id: 'taccuinu',
    projectOverview: {
      name: 'Project Overview:',
      desc: [
        'web application built using Nuxt.js with Vue, incorporating TypeScript and plain CSS.',
        'It is deployed on Vercel and utilizes Algolia Search and Google Maps APIs, along with Stripe for payment processing.',
        'The app serves as a training exercise, modeled after Airbnb, allowing users to search for accommodations based on location and time.',
      ],
    },
    problemStatement: {
      name: 'Problem Statement:',
      desc: [
        'The project aims to simulate the functionality of a popular accommodation booking platform like Airbnb.',
        'While the primary goal is educational, the project also addresses the need for hands-on experience in building full-stack web applications with modern tools and technologies.',
      ],
    },
    technologies: [
      'React',
      'TypeScript',
      'Tailwindcss',
      'Scaleway instance',
      'TradingView charts',
      'Visx charts',
      'Shadcn/UI',
    ],
    images: [
      {
        name: 'heading',
        src: taccuinuHeading,
      },
      {
        name: 'landing',
        src: taccuinuLanding,
      },
      {
        name: 'mobile',
        src: taccuinuIphone,
      },
      {
        name: 'section',
        src: taccuinuSection,
      },
    ],
    learning: [
      {
        title: 'Integration of Multiple APIs:',
        desc: 'Integrating various APIs such as Algolia for search functionality, Strapi for payment processing, and Google Maps for location services presented a significant challenge. Each API has its own  documentation, authentication methods, and usage patterns, requiring careful coordination and implementation.',
      },
      {
        title: 'Complex UI Features:',
        desc: 'Implementing complex UI features to mimic the functionality of a platform like Airbnb was challenging. Designing intuitive user interfaces for property listings, map interactions, and booking flows while maintaining responsiveness across different devices required meticulous planning and implementation.',
      },
      {
        title: 'Technical Insights Gained:',
        desc: 'Building LevoBNB provided invaluable technical insights into web development using Vue.js and associated libraries and frameworks. Understanding how to leverage Vue.js for building dynamic and interactive user interfaces, along with integrating third-party APIs and services, enhanced my proficiency in full-stack development.',
      },
    ],
  },
  {
    link: 'https://levende.taccuinu.com',
    name: 'Portfolio',
    id: 'portfolio',
    projectOverview: {
      name: 'Project Overview:',
      desc: [
        'web application built using Nuxt.js with Vue, incorporating TypeScript and plain CSS.',
        'It is deployed on Vercel and utilizes Algolia Search and Google Maps APIs, along with Stripe for payment processing.',
        'The app serves as a training exercise, modeled after Airbnb, allowing users to search for accommodations based on location and time.',
      ],
    },
    problemStatement: {
      name: 'Problem Statement:',
      desc: [
        'The project aims to simulate the functionality of a popular accommodation booking platform like Airbnb.',
        'While the primary goal is educational, the project also addresses the need for hands-on experience in building full-stack web applications with modern tools and technologies.',
      ],
    },
    technologies: [
      'React',
      'TypeScript',
      'Tailwindcss',
      'Scaleway instance',
      'Framer motion',
      'Shadcn/UI',
    ],
    images: [
      {
        name: 'heading',
        src: portfolioHeading,
      },
      {
        name: 'landing',
        src: portfolioSection,
      },
      {
        name: 'mobile',
        src: portfolioIphone,
      },
      {
        name: 'section',
        src: portfolioLanding,
      },
    ],
    learning: [
      {
        title: 'Integration of Multiple APIs:',
        desc: 'Integrating various APIs such as Algolia for search functionality, Strapi for payment processing, and Google Maps for location services presented a significant challenge. Each API has its own  documentation, authentication methods, and usage patterns, requiring careful coordination and implementation.',
      },
      {
        title: 'Complex UI Features:',
        desc: 'Implementing complex UI features to mimic the functionality of a platform like Airbnb was challenging. Designing intuitive user interfaces for property listings, map interactions, and booking flows while maintaining responsiveness across different devices required meticulous planning and implementation.',
      },
      {
        title: 'Technical Insights Gained:',
        desc: 'Building LevoBNB provided invaluable technical insights into web development using Vue.js and associated libraries and frameworks. Understanding how to leverage Vue.js for building dynamic and interactive user interfaces, along with integrating third-party APIs and services, enhanced my proficiency in full-stack development.',
      },
    ],
  },
] as const

export default works
