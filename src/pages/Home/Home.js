// Full homepage redesign with hero, skills, and case study CTA
import { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../assets/profile-picture.jpg';
import { groupedSkills } from '../../data/skills'; // Assumes groupedSkills is structured appropriately

const Home = () => {
    const navigate = useNavigate();
    const handleBtnClick = () => navigate('/caseStudies');

    useEffect(() => {
        const container = document.getElementById('skills-scroll');
        let isDown = false;
        let startX
        let scrollLeft

        if (!container) return;

        const mouseDown = (e) => {
            isDown = true;
            container.classList.add('dragging');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        const touchStart = (e) => {
            isDown = true;
            container.classList.add('dragging');
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        }

        const mouseLeave = () => {
            isDown = false;
            container.classList.remove('dragging');
        };


        const mouseUp = () => {
            isDown = false;
            container.classList.remove('dragging');
        };

        const touchEnd = () => {
            isDown = false;
            container.classList.remove('dragging');
        }

        const mouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            container.scrollLeft = scrollLeft - walk;
        };

        const touchMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            container.scrollLeft = scrollLeft - walk;
        }

        container.addEventListener('mousedown', mouseDown);
        container.addEventListener('mouseleave', mouseLeave);
        container.addEventListener('mouseup', mouseUp);
        container.addEventListener('mousemove', mouseMove);
        container.addEventListener('touchstart', touchStart, { passive: false });
        container.addEventListener('touchmove', touchMove, { passive: false });
        container.addEventListener('touchend', touchEnd);

        return () => {
            container.removeEventListener('mousedown', mouseDown);
            container.removeEventListener('mouseleave', mouseLeave);
            container.removeEventListener('mouseup', mouseUp);
            container.removeEventListener('mousemove', mouseMove);
            container.removeEventListener('touchstart', touchStart, { passive: false });
            container.removeEventListener('touchmove', touchMove, { passive: false });
            container.removeEventListener('touchend', touchEnd);
        };
    }, []);

    const scrollByAmount = (amount) => {
        const container = document.getElementById('skills-scroll');
        if (container) {
            container.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    return (
        <main className="homepage-section py-5 animate-fade-in">
            <Container>
                <header className="d-flex flex-column flex-md-row align-items-center gap-4 mb-5">
                    <img
                        src={profileImage}
                        alt="Jerry Forsberg"
                        className="hero-img"
                    />
                    <div className="hero-text">
                        <h1 className="display-4 fw-bold">Jerry Forsberg</h1>
                        <p className="lead">
                            Full-stack software developer focused on responsive, scalable web apps. Experienced in React,
                            TypeScript, and Node.js, with a passion for elegant UI and efficient backend architecture.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mt-3">
                            <Button onClick={handleBtnClick} variant="primary">View Case Studies</Button>
                            <Button variant="outline-secondary" href="/Jerry Forsberg.docx" target="_blank">View Resume</Button>
                            <Button variant="dark" href="https://github.com/JerryForsberg" target="_blank">
                                <FaGithub className="me-2" /> GitHub
                            </Button>
                            <Button variant="dark" href="https://www.linkedin.com/in/jerry-forsberg/" target="_blank">
                                <FaLinkedin className="me-2" /> LinkedIn
                            </Button>
                        </div>
                    </div>
                </header>

                <section className="skills-section mb-5 position-relative">
                    <h2 className="h4 mb-4">Core Skills</h2>
                    <div className="skills-scroll-wrapper d-flex align-items-center">
                        <button className="scroll-arrow left" onClick={() => scrollByAmount(-400)}>‹</button>

                        <div className="skills-scroll-container" id="skills-scroll">
                            {groupedSkills.flatMap(group => group.skills).map(({ name, icon, color }) => (
                                <div key={name} className="skill-card text-center">
                                    <div className="icon" style={{ color }}>{icon}</div>
                                    <small>{name}</small>
                                </div>
                            ))}
                        </div>

                        <button className="scroll-arrow right" onClick={() => scrollByAmount(400)}>›</button>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="h4 mb-3">Explore My Work</h2>
                    <p className="mb-4">
                        From internal enterprise tools to custom AI and UI/UX-heavy builds, I've contributed to a wide range of
                        projects. Check out the case studies to see highlights of personal projects.
                    </p>
                    <Button variant="primary" onClick={handleBtnClick} size="lg">
                        View Case Studies
                    </Button>
                </section>
            </Container>
        </main>
    );
};

export default Home;






































// import { Button, Container, Col, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import profileImage from '../../assets/profile-picture.jpg';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';




// const Home = () => {
//     const navigate = useNavigate();

//     const handleBtnClick = () => {
//         navigate('/caseStudies');
//     };



//     return (
//         <main>
//             <Container className="my-5">
//                 <Row className="mb-5">
//                     <Col>
//                         <div>
//                             <img
//                                 src={profileImage}
//                                 alt="Jerry Forsberg"
//                                 className="animate-fade-in float-start rounded-img me-3 mb-3 rounded-circle"
//                             />
//                             <div className='animate-fade-in' style={{ flex: '1 1 0', minWidth: 0, maxWidth: '100%' }}>
//                                 <h1 className="mb-4" >Software Developer</h1>

//                                 <p>
//                                     I am a full-stack software developer, focused on building responsive,
//                                     scalable web and mobile applications. I have several years of experience using technologies like React, TypeScript, and Node.js. I take design frameworks and create intuitive user interfaces and connect them to efficient, secure backend services.
//                                 </p>
//                                 <p>
//                                     I've worked on enterprise projects in a range of industries, from government to hospitality/gaming. I have a strong background in both front-end and back-end development, and I enjoy tackling complex problems. My work history includes creating new applications, as well as migrating legacy systems to modern frameworks. I also have created and contributed to AI projects, using tools such as semantic kernel, ctransformers, and ollama. While my case studies presented here are fairly simple examples, I have worked on many large-scale projects which I can not share publicly due to NDA restrictions.
//                                 </p>
//                                 <p>
//                                     Feel free to explore my case studies or get in touch through the contact page. I look forward to hearing about your project!
//                                 </p>
//                                 <Button className='mt-2' onClick={handleBtnClick}>See case studies</Button>
//                             </div>
//                         </div>

//                     </Col>
//                 </Row>

//                 <section aria-label="Skills" className="mb-5 animate-fade-in">
//                     <h2 className="h4 mb-3">Core Skills</h2>
//                     <ul className="list-inline">
//                         <section className="skills-grid text-center">
//                             <div className="row">
//                                 {groupedSkills.flatMap(({ category, skills }) =>
//                                     skills.map(({ name, icon, color }) => (
//                                         <div key={name} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
//                                             <div className="d-flex flex-column align-items-center">
//                                                 <div style={{ fontSize: '1.5rem', color }}>{icon}</div>
//                                                 <small>{name}</small>
//                                             </div>
//                                         </div>
//                                     ))
//                                 )}
//                             </div>
//                         </section>

//                     </ul>
//                 </section>

//                 <section className="mb-3 animate-fade-in">
//                     <h2 className="h4 mb-3">More</h2>
//                     <Button
//                         variant="outline-secondary"
//                         href="/Jerry Forsberg.docx"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="me-2"
//                     >
//                         View Resume
//                     </Button>
//                     <Button
//                         variant="outline-dark"
//                         href="https://github.com/JerryForsberg"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="me-2"
//                     >
//                         <FaGithub className="me-2" />
//                         GitHub
//                     </Button>
//                     <Button
//                         variant="outline-dark"
//                         href="https://www.linkedin.com/in/jerry-forsberg/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="me-2"
//                     >
//                         <FaLinkedin className="me-2" />
//                         LinkedIn
//                     </Button>
//                 </section>
//             </Container>
//         </main>
//     );


// };

// export default Home;