/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Pranav Khurana",
  title: "Hi all, I'm Pranav",
  subTitle: emoji(
    "A passionate Front End Developer 🚀 and and IOT Lover ❤️ having an experience of building Web apps of different-different Automations with Reactjs & some other cool Projects and UI."
  ),
  resumeLink:
  "https://docs.google.com/document/d/1dzSFM2qMHSHnZNOVq51CZd3S6SJVXQYeZzMkl0-YOQc/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/pranavkhu",
  linkedin: "https://www.linkedin.com/in/pranavkhu/",
  gmail: "pranavkhu@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/pranavkhu/",
  twitter: "https://twitter.com/_pranav_khurana",
  instagram: "https://www.instagram.com/_pranavkhurana/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Front End & IOT DEVELOPER  WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile web apps"
    ),
    emoji("⚡ Develop highly interactive IOT Automations and its Interfaces for daily life needs"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean with web apps and IOT devices"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "raspberry-pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pranveer Singh Institute Of Technology, Kanpur",
      logo: require("./assets/images/psit_logo.png"),
      subHeader: "Bachelor of Technology in Electronics And Communication",
      duration: "August 2018 - July 2022",
      
    },
    {
      schoolName: "Rani Laxmi Bai Memorial School,Lucknow",
      logo: require("./assets/images/rlb_logo.png"),
      subHeader: "Intermediate(10+2)",
      duration: "April 2016 - March 2018",
    },
    {
      schoolName: "Rani Laxmi Bai Memorial School,Lucknow",
      logo: require("./assets/images/rlb_logo.png"),
      subHeader: "High School",
      duration: "March 2016",
    }
  ]
};
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "IOT Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Head",
      company: "Handout Foundation",
      companylogo: require("./assets/images/handout.jpg"),
      date: "April 2021- Present",
      desc: " Handout Foundation is a non government organization which is working and try to serve the mankind and other living creature to grow, heal and survive in a better way.",
    },
    {
      role: "Volunteer",
      company: "Utthan|Psit",
      companylogo: require("./assets/images/utthan.png"),
      date: "August 2019 – Present",
      desc: "Utthan | Psit is an college based NGO which is working in the field of education & gernal awareness."
    },
    {role: "Campus Ambassador",
    company: " CASIO COMPUTER CO.",
    companylogo: require("./assets/images/casio.jpg"),
    date: "September 2020 – December 2020",
    desc: "is a Japanese multinational electronics manufacturing company headquartered in Shibuya, Tokyo, Japan. Its products include calculators,electronic musical instruments, and analogue and digital watches,etc. ",
    descBullets: [
      "Worked With Casio Calculators India",
      
    ]
      }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/weredoo.png"),
      projectName: "Weredoo.com",
      projectDesc: "Co-Founder of weredoo.com",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://weredoo.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/handout.png"),
      projectName: "Handout Foundation ",
      projectDesc: "Development of Website and other tech automations",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://foundationhandout.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Architecting with Google Compute Engine",
      subtitle:
        "Selected by Google for its Google Cloud Education Program in the Year 2019-20..",
      image: require("./assets/images/gcp.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/TXM3DZSUBCLA"
        }
      ]
    },
    {
      title: "HackerRank-React (Basic) Skills Certification Test",
      subtitle:
        "React (Basic) Skills Certification Test",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/a72841a30e06"
        }
      ]
    },

    {
      title: "UDEMY- Python 3 Crash Course",
      subtitle: "Completed Certifcation from UDEMY for Python 3 Crash Course",
      image: require("./assets/images/py.png"),
      footerLink: [
        {name: "Certification",
          url: "https://drive.google.com/file/d/1cIGNcJ0kGv1EwXxieqZbc-b2a6XPKJeE/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://thelazyengineers.com/2021/04/28/led/",
      title: "5 Things You Should Know About Light Emitting Diodes",
      description:
        "Light-emitting diodes (LEDs) are widely used as a standard source of light in electrical equipment. It has a wide array of applications ranging from your mobile phone to large advertising billboards. They find applications in devices for showing what the time is and for displaying different types of data. In this post, the main focus would be on learning a lot about LEDs, such as its operations and functions."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7275546612",
  email_address: "pranavkhu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "_pranav_khurana", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
