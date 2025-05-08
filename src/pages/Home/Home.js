import { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../assets/profile-picture.jpg';
import { groupedSkills } from '../../data/skills';

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
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        };

        const touchMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
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

                        <div className="skills-scroll-container flex-grow-1" id="skills-scroll">
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