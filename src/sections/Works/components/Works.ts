import AirbnbHeading from '@/assets/levo-bnb/heading.webp'
import AirbnbIphone from '@/assets/levo-bnb/iphone.webp'
import AirbnbSection from '@/assets/levo-bnb/section-1.webp'
import AirbnbLanding from '@/assets/levo-bnb/landing.webp'

import taccuinuHeading from '@/assets/taccuinu/heading.png'
import taccuinuIphone from '@/assets/taccuinu/mobile.png'
import taccuinuSection from '@/assets/taccuinu/section.png'
import taccuinuLanding from '@/assets/taccuinu/landing.png'

import portfolioHeading from '@/assets/portfolio/heading.webp'
import portfolioIphone from '@/assets/portfolio/mobile.webp'
import portfolioSection from '@/assets/portfolio/section.webp'
import portfolioLanding from '@/assets/portfolio/landing.webp'
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
      features: [],
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
        desc: 'Combining Algolia, Strapi, and Google Maps APIs proved complex due to their diverse requirements and implementation specifics.',
      },
      {
        title: 'Complex UI Features:',
        desc: "Replicating Airbnb's UI features—property listings, maps, and booking flows—across devices demanded meticulous design and implementation.",
      },
      {
        title: 'Technical Insights Gained:',
        desc: "LevoBNB's Vue.js development honed my full-stack skills, combining UI creation, API integration, and Vue.js expertise.",
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
        'This web application empowers traders to track their activity and analyze performance effectively. Built with Next.js, Tailwind CSS, TypeScript, and TradingView integration, it offers a comprehensive suite of features:',
        'This project showcases my expertise in building modern web applications using cutting-edge technologies and APIs. It demonstrates my understanding of the needs of traders and my ability to deliver solutions that empower them to make informed decisions and achieve their financial goals.',
      ],
      features: [
        {
          name: 'Trade Recording',
          desc: 'Log trades with ease, including details like entry/exit prices, symbols, and strategies.',
        },
        {
          name: 'Note Taking',
          desc: 'Annotate trades with insights, observations, screenshot and lessons learned.',
        },

        {
          name: 'Performance Charts',
          desc: 'Gain visual insights into your trading performance through interactive charts.',
        },
        {
          name: 'Trade Statistics',
          desc: 'Analyze key metrics like win/loss rate, average return, and drawdown to identify strengths and areas for improvement.',
        },
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
        title: 'Next.js & Fastify API:',
        desc: 'Combined SSR with serverless API routes for flexibility and scalability.',
      },
      {
        title: 'TradingView & Visx Charts',
        desc: 'Integrated advanced charting and custom visualizations for data exploration.',
      },
      {
        title: 'GitLab CI/CD:',
        desc: 'Automated deployment to Scaleway servers for streamlined workflow.',
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
        'Personal portfolio website showcases my projects and experiences in a visually engaging and interactive manner. Built with React, Framer Motion, and Tailwind CSS,',
        'Inspired by award-winning portfolios out there.',
      ],
      features: [],
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
        title: 'Animation with Farmer motion',
        desc: 'Learning animation with Framer Motion is best done through hands-on projects, such as your own portfolio. This approach has not only taught me the basics but also some advanced techniques.',
      },
    ],
  },
] as const

export default works
