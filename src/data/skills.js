import {
    SiDotnet,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiNextdotjs,
    SiFastapi,
    SiPostgresql,
    SiPython,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiMui,
    SiFigma,
    SiContentful,
    SiGit,
    SiBitbucket,
    SiGithub,
    SiSwagger,
    SiElectron,
    SiJest,
    SiPostman,
    SiRedux,
    SiGraphql,
    SiAuth0,
    SiJira,
} from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { FaCodeBranch, FaMobileAlt, FaChartBar, FaCloud, FaTools } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';

export const groupedSkills = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
            { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
            { name: 'CSS', icon: <SiCss3 />, color: '#264DE4' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
            { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
            { name: 'MUI (Material UI)', icon: <SiMui />, color: '#007FFF' },
            { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
            { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#83CD29' },
            { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
            { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
            { name: 'REST APIs', icon: <MdApi />, color: '#6E6E6E' },
        ],
    },
    {
        category: 'Languages',
        skills: [
            { name: 'Python', icon: <SiPython />, color: '#3776AB' },
            { name: 'Java', icon: <DiJava />, color: '#007396' },
            { name: 'C#', icon: <SiDotnet />, color: '#239120' },
            { name: 'SQL', icon: <SiPostgresql />, color: '#336791' },
        ],
    },
    {
        category: 'Testing & Dev Tools',
        skills: [
            { name: 'Jest', icon: <SiJest />, color: '#99425B' },
            { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
            { name: 'SwaggerHub', icon: <SiSwagger />, color: '#85EA2D' },
        ],
    },
    {
        category: 'DevOps & CI/CD',
        skills: [
            { name: 'Azure DevOps', icon: <FaTools />, color: '#0078D7' },
            { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
            { name: 'Bitbucket', icon: <SiBitbucket />, color: '#0052CC' },
            { name: 'Git', icon: <SiGit />, color: '#F05032' },
        ],
    },
    {
        category: 'Cloud & Platforms',
        skills: [
            { name: 'Microsoft Azure', icon: <FaCloud />, color: '#0089D6' },
            { name: 'Power Platform', icon: <FaChartBar />, color: '#F2C811' },
            { name: 'Electron', icon: <SiElectron />, color: '#47848F' },
        ],
    },
    {
        category: 'CMS & Auth',
        skills: [
            { name: 'Contentful', icon: <SiContentful />, color: '#2478CC' },
            { name: 'Auth0', icon: <SiAuth0 />, color: '#EB5424' },
        ],
    },
    {
        category: 'Project Management',
        skills: [
            { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
            { name: 'Agile Methodology', icon: <FaCodeBranch />, color: '#6C757D' },
        ],
    },
    {
        category: 'Mobile Development',
        skills: [
            { name: 'React Native', icon: <FaMobileAlt />, color: '#61DAFB' },
        ],
    },
];