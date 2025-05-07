import { Button, Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/profile-picture.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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



const Home = () => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/caseStudies');
    };

    const groupedSkills = [
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


    return (
        <main>
            <Container className="my-5">
                <Row className="mb-5 align-items-center">
                    {/* LEFT SIDE: Image and Title */}
                    <Col md={4} className="text-left mb-4 mb-md-0">
                        <img
                            src={profileImage}
                            alt="Jerry Forsberg"
                            className="img-fluid rounded-img rounded-circle"

                        />
                    </Col>

                    {/* RIGHT SIDE: Text Content */}
                    <Col md={8}>
                        <aside className="text-section">
                            <h1 className="mb-4" >Software Developer</h1>

                            <p>
                                Welcome to my portfolio! I am a full-stack software developer, focused on building responsive,
                                scalable web applications. I have several years of experience using technologies like React, TypeScript, and Node.js. I design intuitive user interfaces and connect them to efficient, secure backend services.
                            </p>
                            <p>
                                I've worked as a consultant on enterprise projects in a range of industries, from state departments to hospitality and gaming. I have a strong background in both front-end and back-end development, and I enjoy tackling complex problems. My work history includes creating new applications, as well as migrating legacy systems to modern frameworks. I also have created and contributed to AI projects, using tools such as semantic kernel, ctransformers, and ollama. While my case studies presented here are fairly simple examples, I have worked on many large-scale projects which I can not share publicly due to NDA restrictions.
                            </p>
                            <p>
                                Feel free to explore my case studies or get in touch through the contact page. I look forward to hearing about your project!
                            </p>
                            <Button className='mt-2' onClick={handleBtnClick}>See case studies</Button>
                        </aside>
                    </Col>
                </Row>

                <section aria-label="Skills" className="mb-5">
                    <h2 className="h4 mb-3">Core Technologies</h2>
                    <ul className="list-inline">
                        <section className="skills-grid text-center">
                            <div className="row">
                                {groupedSkills.flatMap(({ category, skills }) =>
                                    skills.map(({ name, icon, color }) => (
                                        <div key={name} className="col-3 col-sm-2 col-md-1 mb-2">
                                            <div className="d-flex flex-column align-items-center">
                                                <div style={{ fontSize: '1.5rem', color }}>{icon}</div>
                                                <small>{name}</small>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </section>

                    </ul>
                </section>

                <section className="mb-3">
                    <h2 className="h4 mb-3">More</h2>
                    <Button
                        variant="outline-secondary"
                        href="/Jerry Forsberg.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                    >
                        View Resume
                    </Button>
                    <Button
                        variant="outline-dark"
                        href="https://github.com/JerryForsberg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                    >
                        <FaGithub className="me-2" />
                        GitHub
                    </Button>
                    <Button
                        variant="outline-dark"
                        href="https://www.linkedin.com/in/jerry-forsberg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                    >
                        <FaLinkedin className="me-2" />
                        LinkedIn
                    </Button>
                </section>
            </Container>
        </main>
    );


};

export default Home;