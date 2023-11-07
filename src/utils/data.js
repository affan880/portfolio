const joinWithPipe = (array) => array.join(" | ");
const projects = [
    {
      id: 1,
      title: 'Academic Ally',
      tagLine: 'Your go-to source for academic resources!',
      description: "Academic Ally is a comprehensive platform designed to empower students in their academic pursuits and support them throughout their educational journey. we understand the challenges faced by students during their academic journey. We recognize that engineering students require specialized support to excel in their courses, and that's why we have dedicated our platform exclusively to their needs. <br/><br/> Our platform offers a vast collection of academic resources, we provide Academic notes, Syllabus, Question Papers and Other Resources. In addition to the rich collection of educational materials, we also offer a range of valuable features to enhance your learning experience.",
      techStack: ['React-Native', 'Firebase', 'storj'],
      company: 'Defun',
      countries: 'Global',
      language: 'English',
      category: 'Education',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/home.png',
        'https://ik.imagekit.io/affan/Projects/search.png',
        'https://ik.imagekit.io/affan/Projects/seekhub%20-%20Request.png',
        // 'https://ik.imagekit.io/affan/Projects/allyBot.png',
        'https://ik.imagekit.io/affan/Projects/profile.png',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.academically',
      banner: 'https://ik.imagekit.io/affan/Projects/Academic%20Ally.png?updatedAt=1699218514808'
    },
    {
      id: 2,
      title: 'Academicklnlkl Ally',
      tagLine: 'Your go-to source for academic resources!',
      description: "Academic Ally is a comprehensive platform designed to empower students in their academic pursuits and support them throughout their educational journey. we understand the challenges faced by students during their academic journey. We recognize that engineering students require specialized support to excel in their courses, and that's why we have dedicated our platform exclusively to their needs. <br/><br/> Our platform offers a vast collection of academic resources, we provide Academic notes, Syllabus, Question Papers and Other Resources. In addition to the rich collection of educational materials, we also offer a range of valuable features to enhance your learning experience.",
      techStack: ['React-Native', 'Firebase'],
      company: 'Defun',
      countries: 'Global',
      language: 'English',
      category: 'Education',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/home.png',
        'https://ik.imagekit.io/affan/Projects/search.png',
        'https://ik.imagekit.io/affan/Projects/seekhub%20-%20Request.png',
        'https://ik.imagekit.io/affan/Projects/allyBot.png',
        'https://ik.imagekit.io/affan/Projects/profile.png',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.academically',
      banner: 'https://ik.imagekit.io/affan/Projects/Academic%20Ally.png?updatedAt=1699218514808'
    },
  ];
  
  const aboutMe = {
    name: 'Syed Affan',
    bio: 'React Developer',
    phone: '+919133297438',
    skills: ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML'],
    education: {
        degree: "Bachelor's in Information Technology",
        school: "Osmania University",
        graduationYear: 2023,
    },
    image: 'https://ik.imagekit.io/affan/Projects/IMG_20230128_065318_032.jpg',
    email: "syedaffan880@gmail.com",
  };
  
  const socialLinks = {
    email: "syedaffan880@gmail.com",
    github: 'https://github.com/affan880',
    linkedin: 'https://www.linkedin.com/in/syed-affan',
    resume: 'https://drive.google.com/file/d/1fbLV_JoX_TGFYSOnieavfl16GUT2U1Jf/view?usp=sharing',
    calendly: 'https://calendly.com/affann/30min'
  };

  projects.forEach((project) => {
    project.technologiesJoined = joinWithPipe(project.techStack);
  });
  
  export { projects, aboutMe, socialLinks };
  