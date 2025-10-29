import employeeDirectory from "../assets/employee-directory.png";
import lyricsToGo from "../assets/lyrics-to-go.png";
import means from "../assets/means.png";
import teamGenerator from "../assets/team-builder.png";
import yaMaker from "../assets/ya-maker.png";
import renegade from "../assets/renegade.png";

export const caseStudyData = [
    {
        id: 1,
        image: renegade,
        name: "Renegade Heating and Cooling",
        description: "Custom website for a local HVAC company. Built with Astro.",
        link: "https://renegadeairhvac.com/",
    },
    {
        id: 2,
        image: means,
        name: "Means Budgeting Tool",
        description: "A custom budgeting tool for tracking income and expenses. Built with Vite using Typescript, Auth0, and a Node API.",
        link: "https://meansbudget.netlify.app/",
        gitLink: "https://github.com/JerryForsberg/means"
    },
    {
        id: 3,
        image: employeeDirectory,
        name: "Employee Directory",
        description: "A search tool for finding employees. Written in React using class based components, using axios for external API calls.",
        link: "https://jf-employee-directory.netlify.app/",
        gitLink: "https://github.com/JerryForsberg/jf_employee_directory"
    },
    {
        id: 4,
        image: lyricsToGo,
        name: "Lyrics To Go",
        description: "A way to find the lyrics of your favorite songs using 3rd party APIs. Written in vanilla JS, HTML, and SCSS using ajax for API calls.",
        link: "https://lyrics-to-go.netlify.app/",
        gitLink: "https://github.com/yuliatikhonova/Lyrics-To-Go"
    },
    {
        id: 5,
        image: teamGenerator,
        name: "Team Generator",
        description: "A simple console app to build teams within your company. Written using vanilla JS, and HTML using inquirer for user input and FS for writing files.",
        link: "https://jfteamgenerator.netlify.app/",
        gitLink: "https://github.com/JerryForsberg/JFTeamGenerator"
    },
    {
        id: 6,
        image: yaMaker,
        name: "Handcrafted Heirloom",
        description: "A full stack e-commerce site for a bespoke furniture and woodworking store. Built with React, Sequelize, 3rd party resources for file storage, and Passport for authentication.",
        link: "https://github.com/yuliatikhonova/Y.A.MAKER/blob/master/README.md",
        gitLink: "https://github.com/yuliatikhonova/Y.A.MAKER/tree/master"
    },
];
