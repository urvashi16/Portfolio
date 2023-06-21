/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Urvashi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Urvashi Indu Portfolio",
    type: "website",
    url: "https://github.com/urvashi16",
  },
};

//Home Page
const greeting = {
  title: "Urvashi Indu",
  logo_name: "Urvashi Indu",
  //nickname: "layman_brother",
  subTitle:
    "A passionate tech enthusiast trying to solve real world problems through technology.",
  resumeLink:
    "https://drive.google.com/file/d/1gvOAfOtCaaJiXuR6rxzAaA0dM4_49IQ0/view?usp=sharing",
  portfolio_repository: "https://github.com/urvashi16/urvashi16.github.io",
  githubProfile: "https://github.com/urvashi16",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/urvashi16",
  // linkedin: "https://www.linkedin.com/in/urvashi-indu-a364791b6/",
  // gmail: "urvashiindu09@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/UrvashiIndu",
  // instagram: "https://www.instagram.com/uurvashii_16/"

  {
    name: "Github",
    link: "https://github.com/urvashi16",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/urvashi-indu-a364791b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:urvashiindu09@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/UrvashiIndu",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/uurvashii_16/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        // "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ A good knowledge of Python, which is the most used language in Machine Learning",
        "⚡ Built projects in use of Neural Networks, Deep Learning, Computer Vision and NLP",
        "⚡ Worked as a Machine Learning Engineer in Omdena Algeria Chapter",
        // "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "skill-icons:python-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "scikit learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            // color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Kaggle",
          fontAwesomeClassname: "fa6-brands:kaggle",
          style: {
            backgroundColor: "transparent",
            
          },
        },
      ],
    },
    {
      title: "Web Development ",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS and Javascript",
        // "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        // "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Currently learning backend - NodeJS, Expressjs ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Data Analysis",
      fileName: "DesignImg",
      skills: [
        "⚡ On the verge of Completing Google Data Analyst Professional Certification ",
        "⚡ Familiar with languages like SQL , R and Python " ,
        "⚡ Hands on experience with tools like Tableau, Microsoft Excel and Spreadsheets" ,
        
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#00758f",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            color: "#165CAA",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "skill-icons:python-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Spreadsheet",
          fontAwesomeClassname: "mdi:google-spreadsheet",
          style: {
            backgroundColor: "transparent",
            color: "#0F9D58",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/vashi16/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/urvashiindu09",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/vashi16",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/urvashiindu",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology , Bhopal",
      subtitle: "Btech, Computer Science & Engineering with specialization in AI & ML",
      logo_path: "vit.svg",
      alt_name: "Vellore Institute of Technology , Bhopal",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I have a CGPA of 8.95 till date",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Data Analysis and Web Development.",
      ],
      website_link: "https://vitbhopal.ac.in/",
    },
    {
      title: "Sunbeam English School, Bhagwanpur,U.P",
      subtitle: "Intermediate",
      logo_path: "sunbeam.png",
      alt_name: "Sunbeam English School, Bhagwanpur",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I have completed my Intermediate from CBSE board with a percentage of 87.4% in 12th boards examination. ",
        "⚡ I had Science and Computer Science as my main subjects",
      ],
      website_link: "https://sunbeamschools.com/school/bhagwanpur",
    },
    {
      title: "St John's School, Marhauli,Varanasi,U.P",
      subtitle: "High School",
      logo_path: "stjohns.png",
      alt_name: "St John's School, Marhauli,Varanasi",
      duration: "2006 - 2018",
      descriptions: [
        "⚡ I have completed my High School from ICSE board with a percentage of 85.83% in 10th boards examination. ",
        "⚡ I had Science and Computer Science as my main subjects",
      ],
      website_link: "https://stjohnsmarhauli.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Applied Machine Learning in Python",
      subtitle: "- Coursera",
      logo_path: "appliedmlcert.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Wr-A30WIKFYseaejH6wvvTT7va-Xg0MJ/view?usp=share_link",
      alt_name: "University of Michigan",
      color_code: "#8C151599",
    },
    {
      title: "Fundamentals of Data Analytics",
      subtitle: "- Futureskills Prime",
      logo_path: "futureskillscert.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1JidgFyLc5a0Gu5lxyJF9cCb1FSWgg2Qk/view?usp=share_link",
      alt_name: "Futureskills Prime",
      color_code: "#00000099",
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      subtitle: "-Microsoft",
      logo_path: "microsoftazurecert.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1NzIIsHvFFshKn4X1-fBnqIIg97QJTAWP/view?usp=share_link",
      alt_name: "Microsoft",
      color_code: "#2596be",
    },
    {
      title: "30 Days of Google Cloud",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://certificate.givemycertificate.com/c/04d5be26-009a-4b06-8246-b5422ad4d50d",
      alt_name: "GDSC",
      color_code: "#0C9D5899",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      subtitle: "- Google",
      logo_path: "GoogleDA-1.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1eCP6x6X_tYdUvWqHq5FxwcnHGHXfXaxp/view?usp=share_link",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      subtitle: "- Google",
      logo_path: "GoogleDA-2.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/TQRWVXQCNL2J",
      alt_name: "Google",
      color_code: "#00000099",
    },
    {
      title: "Prepare Data for Exploration",
      subtitle: "- Google",
      logo_path: "GoogleDA-3.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/8NVKP5645BQ2",
      alt_name: "Google",
      color_code: "#2596be",
    },
    {
      title: "Process Data from Dirty to Clean",
      subtitle: "- Laurence Moroney",
      logo_path: "GoogleDA-4.jpg",
      certificate_link:
        "https://coursera.org/share/93b76d04705945c511c0c8b8533a7902",
      alt_name: "deeplearning.ai",
      color_code: "#8C151599",
    },
    {
      title: "AI for Lunar Exploration",
      subtitle: "- Spartificial",
      logo_path: "spartificial.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1qhlW_DTwAN5ov-dIaEYVJU2mB-Z0iBCR/view?usp=share_link",
      alt_name: "Spartificial",
      color_code: "#6C0BA9",
    },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Volunteerships ",
  description:
    "Being a third year student, I have achieved a lot of experience by working under an international company & also various other companies. I have worked on projects including Machine Learning & Web Development, and served as a  Design Coordinator of various clubs of my University.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Machine Learning Research Intern",
          company: "Spartificial Innovations Private Limited",
          company_url: "https://spartificial.com/",
          logo_path: "spartificiallogo.jpg",
          duration: "Dec 2022 - Feb 2023",
          location: "Remote",
          description:
            " Worked on the Project titled 'Image Caption Generator' with a team of 5 members. This was a project based research internship, in the field of CV and NLP applied to Flickr80k dataset for Image captioning which was deployed as a Web-app using Html, Css, Javascript and Flask.",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Engineer Intern",
          company: "Omdena Algeria Chapter",
          company_url: "https://omdena.com/local-chapters/algeria-local-chapter/",
          logo_path: "omdenalogo.jpg",
          duration: "Sep 2022 - Nov 2022",
          location: "Remote",
          description:
            "As a Machine Learning Engineer, participated in a community project titled 'Green Algeria Project: Building an Intelligent Control System for Greenhouses - Part 2'. Used and learned techniques like Web Scrapping, Data collection, Data cleaning and Algorithm Build-up. Contributed to the community project with a team of 30 members and learned a lot of things",
          color: "#000000",
        },
        {
          title: "Technical Assistant Intern",
          company: "Vityarthi",
          company_url:
            "https://vityarthi.com/",
          logo_path: "vityarthilogo.jpg",
          duration: "Sep 2022 - Nov 2022",
          location: "Remote",
          description:
            " Created content, presentations and scripts for the Computer Vision course on Vityarthi titled 'Vision without eyes'. Total duration of this course was around 6 hours.",
          color: "#0071C5",
        },
        {
          title: "Web Development Intern",
          company: "Lets Grow More",
          company_url:
            "https://letsgrowmore.in/",
          logo_path: "lgm.jpg",
          duration: "Jan 2022 - Feb 2022",
          location: "Remote",
          description:
            "Designed frontend of Interior Designing website named- The Glamour Room using Html, Css and JavaScript. Also developed a web application using create-react-app which uses API to fetch user data",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Position of Responsiblities held",
      experiences: [
        {
          title: "Core Member- Design Team",
          company: "AI Club- VIT Bhopal",
          company_url: "https://www.linkedin.com/company/aiclub-vitb/mycompany/",
          logo_path: "aiclub.jpg",
          duration: "March 2022 - March 2023",
          location: "VIT Bhopal University",
          description:
            "Contributed to the club by designing various posters, posts and designs for AI-related activities",
          color: "#0879bf",
        },
        {
          title: "Core Member- Design Team",
          company: "E-cell VIT Bhopal",
          company_url: "https://ecellvitb.in/",
          logo_path: "ecell.jpg",
          duration: "March 2022 - Nov 2022",
          location: "VIT Bhopal University",
          description:
            "Designed various posters, posts and designs for Ecell-related initiatives",
          color: "#9b1578",
        },
        
      ],
    },
    {
      title: "Organizations",
      experiences: [
        {
          title: "Women in AI (WAI)",
          company: "WAI",
          company_url: "https://www.womeninai.co/",
          logo_path: "WAIlogo.jpg",
          description:
            "Women in AI (WAI) is a nonprofit working towards gender-inclusive AI that benefits global society.",
          color: "#4285F4",
        },
        {
          title: "Just-5-Stars",
          company: "Just-5-Stars",
          company_url: "https://github.com/Just-5-Stars",
          logo_path: "just5stars.jpg",
          description:
            "A small community of a group of friends trying to build AI solutions for the world!",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I try to explore new tools and tech by experimenting with them. My best experience is to create Data Science and Web Development projects.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilelogo6.png",
    description:
      "Always ready to connect !!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I do write blogs sometimes!! ",
    link: "https://medium.com/@urvashiindu09",
    avatar_image_path: "blogs_image.svg",
  },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
