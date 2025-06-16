const joinWithPipe = (array) => array.join(" | ");
const projects = [
    {
      id: 1,
      title: 'Plexar',
      tagLine: 'Advanced email and task management powered by AI',
      description: "Plexar is a React Native mobile application for advanced email and task management, available at plexar.xyz. The app integrates the Gmail API to enable users to seamlessly send and manage emails directly within the application.<br/><br/>Features include:<br/>• Gmail API integration for secure email management<br/>• AI-powered features for hands-free control over Gmail functionalities<br/>• Intuitive task management system to complement email workflows<br/>• Designed to boost productivity through seamless integration",
      techStack: ['React Native', 'Gmail API', 'AI Integration', 'Task Management', 'JavaScript'],
      company: 'Plexar',
      logo: 'https://ik.imagekit.io/affan/Projects/Plexar/plexar-logo.png',
      countries: 'Global',
      language: 'English',
      category: 'Productivity',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-1.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-2.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-3.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-4.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-5.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-6.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-7.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-8.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-9.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-10.png',
        'https://ik.imagekit.io/affan/Projects/Plexar/plexar-sc-11.png',
      ],
      link: 'https://plexar.xyz',
      banner: 'https://ik.imagekit.io/affan/Projects/plexar.png?updatedAt=1749951388523'
    },
    {
      id: 6,
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
      title: 'Voice-Controlled Email Assistant',
      tagLine: 'Hands-free email management powered by AI',
      description: "A voice-command assistant that fetches, summarizes, and sends Gmail emails using natural language. Designed specifically for Omi's AI integration workflows, it combines OpenAI's language model with Google services for seamless, hands-free email management.<br/><br/>Features include:<br/>• Voice commands for email actions (fetch, summarize, reply)<br/>• Gmail API integration for secure inbox access<br/>• OpenAI-powered NLP and response generation<br/>• Google OAuth2 for secure authentication<br/>• Sessionless backend using Supabase + Redis",
      techStack: ['Node.js', 'Express.js', 'OpenAI API', 'Supabase', 'Redis', 'PostgreSQL', 'WebSockets'],
      company: 'Omi',
      logo: 'https://ik.imagekit.io/affan/Projects/Email-logo.png',
      countries: 'Global',
      language: 'English',
      category: 'AI',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/Email.png?updatedAt=1749951388574'
      ],
      link: 'https://h.omi.me/apps/01JV4PTSFHEWT84BJQP6HJKV01',
      banner: 'https://ik.imagekit.io/affan/Projects/Email.png?updatedAt=1749951388574'
    },
    {
      id: 3,
      title: 'Deck',
      tagLine: 'Create professional presentations with AI using voice commands',
      description: "Deck is a voice-activated AI presentation generator that transforms your ideas into professional presentations using advanced AI technology. Simply say 'Hey Omi' followed by your presentation request to get started.<br/><br/>Features include:<br/>• Voice-activated presentation creation with 'Hey Omi' commands<br/>• AI-powered generation using advanced AI technology<br/>• Smart templates for different presentation types<br/>• Professional styling and formatting options<br/>• Support for various presentation topics and requirements<br/>• Instant generation and download capabilities",
      techStack: ['AI Integration', 'Voice Recognition', 'OpenAI API', 'Presentation Generation', 'JavaScript'],
      company: 'Omi',
      logo: 'https://ik.imagekit.io/affan/Projects/Deck-logo.png',
      countries: 'Global',
      language: 'English',
      category: 'AI',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/deck.png'
      ],
      link: 'https://h.omi.me/apps/01JVWEWYTF1A8E4K5CNYKF63PF',
      banner: 'https://ik.imagekit.io/affan/Projects/deck.png'
    },
    {
      id: 4,
      title: 'FinTrack',
      tagLine: 'Smart financial tracking for students',
      description: "FinTrack is a student-friendly finance tracker that makes expense tracking and budget projection easy, intuitive, and visually engaging with a cosmic twist. Track expenses, build habits, and reach for the stars with this completely free financial tool designed specifically for students.<br/><br/>Features include:<br/>• Visual financial journey with cosmic-themed charts and graphs<br/>• Automatic expense categorization with smart tagging<br/>• Financial goals setting with visual progress indicators<br/>• Transaction tracking and monthly spending visualization<br/>• 100% free with no hidden fees or premium tiers<br/>• Budget analysis and smart insights",
      techStack: ['JavaScript', 'React', 'Chart.js', 'CSS', 'Data Visualization'],
      company: 'Independent',
      logo: 'https://ik.imagekit.io/affan/Projects/fintrack-logo.png',
      countries: 'Global',
      language: 'English',
      category: 'Finance',
      platforms: ['Web'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/FinTrack/fin1.png',
        'https://ik.imagekit.io/affan/Projects/FinTrack/fin2.png',
        'https://ik.imagekit.io/affan/Projects/FinTrack/fin3.png',
        'https://ik.imagekit.io/affan/Projects/FinTrack/fin4.png',
      ],
      link: 'https://fin-track.live',
      banner: 'https://ik.imagekit.io/affan/Projects/FinTrack.png'
    },
    {
      id: 5,
      title: 'DuckPilot',
      tagLine: 'Browser-based CSV query tool powered by DuckDB',
      description: "DuckPilot is a browser-based tool that lets users upload CSV files and ask questions in plain English. It uses DuckDB-WASM to run SQL queries directly in the browser, and OpenAI to translate user questions into SQL queries. Everything happens client-side, making it fast, private, and lightweight.<br/><br/>Features include:<br/>• Client-side CSV processing with no backend required<br/>• Natural language to SQL query translation using OpenAI<br/>• DuckDB-WASM for powerful in-browser database operations<br/>• Complete privacy - all data stays in your browser<br/>• Instant query results and data analysis<br/>• No setup required - just upload and query",
      techStack: ['DuckDB-WASM', 'OpenAI API', 'JavaScript', 'WebAssembly', 'CSV Processing'],
      company: 'Independent',
      logo: 'https://ik.imagekit.io/affan/Projects/duckpilot-logo.png',
      countries: 'Global',
      language: 'English',
      category: 'Data Analysis',
      platforms: ['Web'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/DuckPilot.png',
        'https://ik.imagekit.io/affan/Projects/Screenshot%202025-06-14%20at%2010.17.58%E2%80%AFPM.png',
        'https://ik.imagekit.io/affan/Projects/Screenshot%202025-06-14%20at%2010.23.05%E2%80%AFPM.png',
        'https://ik.imagekit.io/affan/Projects/Screenshot%202025-06-14%20at%2010.23.40%E2%80%AFPM.png'
      ],
      link: 'https://duckpilot.netlify.app/',
      banner: 'https://ik.imagekit.io/affan/Projects/DuckPilot.png'
    },
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
    }
  ];
  
  const aboutMe = {
    name: 'Syed Affan',
    bio: 'Full Stack & IT Professional',
    phone: '+1 7188010785',
    skills: [
      // Development skills
      'ReactJs', 'React Native', 'JavaScript', 'TypeScript','Python', 'Java', 'Node.js', 'CSS', 'HTML', 'NextJs', 'RestAPI', 
      'Tailwind Css', 'Bootstrap', 'Git', 'Github', 'Firebase', 'MongoDB', 'LESS', 'ICONIC', 'Sass', 'SCSS', 
      'Redux', 'JQuery',
      // Core IT Skills
      'Hardware & Software Troubleshooting', 'Windows', 'Linux', 'macOS', 'Networking Basics', 
      'Cybersecurity Awareness', 'Ticketing Systems',
      // Technical Tools
      'Active Directory', 'Microsoft Office', 'Google Workspace', 'Virtualization', 'VirtualBox', 
      'VMware', 'SQL', 'PowerShell', 'Bash',
      // Soft Skills
      'Effective Communication', 'Team Collaboration', 'Customer Service', 'Problem Solving', 'Critical Thinking'
    ],
    education: {
        degree: "Master's in Information Technology Management",
        school: "St. Francis College, Brooklyn, NYC",
        graduationYear: 2023,
    },
    image: 'https://ik.imagekit.io/affan/Projects/IMG_20230128_065318_032.jpg?updatedAt=1747847581368',
    email: "sydaffn@gmail.com",
    web: 'https://affan.io',
    webName: 'affan.io',
  };
  
  const socialLinks = {
    email: "sydaffn@gmail.com",
    github: 'https://github.com/affan880',
    linkedin: 'https://www.linkedin.com/in/syed-affan',
    resume: 'https://ik.imagekit.io/affan/Affan_Resume.pdf',
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
  
