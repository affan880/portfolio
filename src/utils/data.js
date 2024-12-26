const joinWithPipe = (array) => array.join(" | ");
const projects = [
    {
      id: 1,
      title: 'Academic Ally',
      tagLine: 'Your go-to source for academic resources!',
      description: "Academic Ally is a comprehensive platform designed to empower students in their academic pursuits and support them throughout their educational journey. we understand the challenges faced by students during their academic journey. We recognize that engineering students require specialized support to excel in their courses, and that's why we have dedicated our platform exclusively to their needs. <br/><br/> Our platform offers a vast collection of academic resources, we provide Academic notes, Syllabus, Question Papers and Other Resources. In addition to the rich collection of educational materials, we also offer a range of valuable features to enhance your learning experience.",
      techStack: ['Javascript','React-Native', 'Firebase', 'react-redux'],
      company: 'Defun',
      logo:'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/ic_launcher-web.png',
      countries: 'Global',
      language: 'English',
      category: 'Education',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/home.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/search.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/seekhub.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/seekhub%20-%20Request.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/pdfViewer.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/allyBot.png', 
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/pdfViewer.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/profile.png'
      ],
      link: 'https://play.google.com/store/apps/details?id=com.academically',
      banner: 'https://ik.imagekit.io/affan/Projects/Academic%20Ally.png?updatedAt=1699218514808'
    },
    {
      id: 2,
      title: 'Academic Ally Web App',
      tagLine: 'Your go-to source for academic resources!',
      description: "Academic Ally Web App is an expansion of the acclaimed Android application, designed to cater to the diverse needs of desktop users. It has not only broadened the reach of Academic Ally but has also cultivated a community of over 600 users, with an impressive 400+ engaging with the app regularly.",
      techStack: ['Javascript', 'React', 'Material UI', 'Firebase', 'react-redux'],
      company: 'Defun',
      logo:'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/ic_launcher-web.png',
      countries: 'Global',
      language: 'English',
      category: 'Education',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/devices_mockup_6.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/devices_mockup_3.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/ddd.png',
      ],
      link: 'https://app.getacademically.co',
      banner: 'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/2.png'
    },
    {
      id: 3,
      title: 'ULikeMe',
      tagLine: 'Connecting Hearts, One Like at a Time.',
      description: "A Dating App built using react native and firebase.",
      techStack: ['React-Native', 'Firebase', 'Javascript'],
      company: 'Defun',
      logo:'https://ik.imagekit.io/affan/Projects/ULikeMe/ulikeme%20(1).png',
      countries: 'Global',
      language: 'English',
      category: ' dating apps',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/ULikeMe/1.png',
        'https://ik.imagekit.io/affan/Projects/ULikeMe/2.png',
        'https://ik.imagekit.io/affan/Projects/ULikeMe/4.png',
        'https://ik.imagekit.io/affan/Projects/ULikeMe/5.png',
        'https://ik.imagekit.io/affan/Projects/ULikeMe/6.png',
        'https://ik.imagekit.io/affan/Projects/ULikeMe/7.png',
        'https://ik.imagekit.io/affan/Projects/ULikeMe/8.png',
        'https://ik.imagekit.io/affan/Projects/ULikeMe/9.png',
      ],
      link: 'https://github.com/affan880/ULikeMe',
      banner: 'https://ik.imagekit.io/affan/Projects/ULikeMe/3.png'
    },
    {
      id: 4,
      title: 'Worketzy',
      tagLine: 'Hiring Just Got Better!',
      description: "This app was conceived as part of a mini-project with a singular goal: to revolutionize and simplify the hiring process. As the mastermind behind this endeavor, I crafted a platform that streamlines every aspect of hiring, making it not just easy but better.",
      techStack: ['React-Native', 'Firebase', 'Expo', 'Javascript'],
      logo:'https://ik.imagekit.io/affan/Projects/worketzy/Worketzy.png',
      company: 'Defun',
      countries: 'Global',
      language: 'English',
      category: 'Career Services',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/worketzy/1.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/3.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/5.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/6.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/7.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/8.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/9.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/10.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/1.png',
      ],
      link: 'https://github.com/affan880/Worketzy',
      banner: 'https://ik.imagekit.io/affan/Projects/worketzy/4.png'
    },
    {
      id: 5,
      title: 'IEEE Nsakcet',
      tagLine: 'Student club',
      description: "IEEE Nsakcet is a website designed and developed to elevate the digital presence of the IEEE Student Branch. From October to November 2022, I took the reins in creating a website that not only showcases the dynamic essence of the IEEE community but also prioritizes optimal performance and user engagement.<br/><br/> Harnessing the power of Javascript, React, React Bootstrap, and Firebase, I orchestrated a space that goes beyond aesthetics. By implementing strategic optimizations, I successfully reduced page load times by an impressive 20%, ensuring a seamless and swift browsing experience for visitors.",
      techStack: ['ReactJs', 'Firebase'],
      company: 'NSAKCET',
      countries: 'Global',
      language: 'English',
      category: 'Student Organizations',
      platforms: ['Android', 'iOS'],
      logo:'https://ik.imagekit.io/affan/Projects/IEEE/Trans_icon.png',
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/IEEE/devices_mockup_6.png',
        'https://ik.imagekit.io/affan/Projects/IEEE/01_S7_Tablet_Mockup.png',
        'https://ik.imagekit.io/affan/Projects/IEEE/home.png?'
      ],
      link: 'https://ieeensakcet.com',
      banner: 'https://ik.imagekit.io/affan/Projects/IEEE/5.png'
    },
    {
      id: 6,
      title: 'JawesomeScript',
      tagLine: 'Unleashing JavaScript Awesomeness, One Project at a Time.',
      description: "JawesomeScript is your go-to platform for exploring a curated collection of basic JavaScript projects. Dive into the world of coding creativity and discover the awesomeness of JavaScript through simple yet impactful projects. Whether you're a beginner or an experienced developer, JawesomeScript has something for everyone. Elevate your JavaScript skills and embark on a journey of continuous learning with our diverse range of projects. Join the community of JavaScript enthusiasts, and let's make coding more awesome together!",
      techStack: ['HTML', 'CSS', 'Javascript'],
      logo:'https://ik.imagekit.io/affan/Projects/JawesomeScript/JavaScript-logo.png',
      company: 'Defun',
      countries: 'Global',
      language: 'English',
      category: 'Programming',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/JawesomeScript/devices_mockup_6.png',
        'https://ik.imagekit.io/affan/Projects/JawesomeScript/projects.png',
        'https://ik.imagekit.io/affan/Projects/JawesomeScript/todo.png'
      ],
      link: '',
      banner: 'https://ik.imagekit.io/affan/Projects/JawesomeScript/6.png'
    },
  ];
  
  const aboutMe = {
    name: 'Syed Affan',
    bio: 'React Developer',
    phone: '+1 7188010785',
    skills: ['ReactJs', 'React Native', 'JavaScript', 'TypeScript','Node.js', 'CSS', 'HTML', 'NextJs', 'RestAPI', 'Tailwind Css', 'Bootstrap', 'Git', 'Github', 'Firebase', 'MongoDB', 'LESS', 'ICONIC', 'Sass', 'SCSS', 'Redux', 'JQuery'],
    education: {
        degree: "Master's in Information Technology Management",
        school: "St. Francis College, Brooklyn, NYC",
        graduationYear: 2023,
    },
    image: 'https://ik.imagekit.io/affan/Projects/IMG_20230128_065318_032.jpg',
    email: "syedaffan880@gmail.com",
    web: 'https://affan.io',
    webName: 'affan.io',
  };
  
  const socialLinks = {
    email: "syedaffan880@gmail.com",
    github: 'https://github.com/affan880',
    linkedin: 'https://www.linkedin.com/in/syed-affan',
    resume: 'https://ik.imagekit.io/affan/Syed_Affan_CV.pdf?updatedAt=1710692663671',
    calendly: 'https://calendly.com/affann'
  };

  const eduBg = [
    {
      title: "Master's in Information Technology Management",
      desc: "St. Francis College, Brooklyn, NYC",
    }
  ];

  projects.forEach((project) => {
    project.technologiesJoined = joinWithPipe(project.techStack);
  });
  
  export { projects, aboutMe, socialLinks, eduBg };
  
