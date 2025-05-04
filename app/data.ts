type Project = {
  name: string
  description: string
  link: string
  image: string // changed from video
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'GRU Based Load Forecasting',
    description: 'A deep dive into the GRU model for load forecasting (Tensorflow + Streamlit)',
    link: 'https://pro.motion-primitives.com/',
    image: 'https://www.bigventus.com/images/services/8654315024-330-services_5.png',
    id: 'project1', // Unique ID
  },
  {
    name: 'Drug Toxicity Prediction',
    description: 'Drug toxicity prediction using machine learning (NextJS +FastAPI)',
    link: 'https://motion-primitives.com/',
    image: 'https://static01.nyt.com/images/2019/02/08/upshot/08up-drugs/merlin_150027816_ada96df5-9315-43d3-a8ad-b41f9f5416d0-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    id: 'project2', // Unique ID
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'NIT Warangal',
    title: 'Summer Intern',
    start: 'May 2024',
    end: 'July 2024',
    link: 'https://www.kaggle.com/code/sohamshee/gru-model-load-forecasting',
    id: 'work1',
  },
  // {
  //   company: 'Freelance',
  //   title: 'Design Engineer',
  //   start: '2022',
  //   end: '2024',
  //   link: 'https://ibelick.com',
  //   id: 'work2',
  // },
  // {
  //   company: 'Freelance',
  //   title: 'Front-end Developer',
  //   start: '2017',
  //   end: 'Present',
  //   link: 'https://ibelick.com',
  //   id: 'work3',
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Load Forecasting using GRU',
    description: 'A deep dive into the GRU model for load forecasting',
    link: '/blog/load-forecasting-using-gru',
    uid: 'blog-1',
  },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/soham-shee',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/soham-shee/',
  },
  {
    label: 'Kaggle',
    link: 'https://www.kaggle.com/sohamshee',
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/soham-shee',
  },
]

export const EMAIL = 'ss22eeb0a59@student.nitw.ac.in'
