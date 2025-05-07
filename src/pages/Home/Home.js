import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/profile-picture.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Home = () => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/caseStudies');
    };

    return (
        <main>
            <Container className="my-5">
                <header className="text-center mb-4 d-flex flex-row">
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs={12} md="auto" className="text-center mb-3 mb-md-0">
                                    <img
                                        src={profileImage}
                                        alt="Jerry Forsberg"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: '150px' }}
                                    />
                                </Col>
                                <Col>
                                    <Card.Title as="h1" className="custom-heading mb-2">
                                        Jerry Forsberg – Software Developer
                                    </Card.Title>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </header>

                <section className="text-section mb-5">
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
                    <Button onClick={handleBtnClick}>
                        See case studies
                    </Button>
                </section>

                <section aria-label="Skills" className="mb-5">
                    <h2 className="h4 mb-3">Core Technologies</h2>
                    <ul className="list-inline">
                        {[
                            'React',
                            'TypeScript',
                            'Node.js',
                            'SQL',
                            'CSS',
                            'Figma',
                            'CSS frameworks',
                            'CMS',
                            'Azure',
                            'Git',
                            'Agile',
                            'REST APIs',
                            'GraphQL',
                            'Microservices',
                            'CI/CD',
                            'Unit Testing',
                        ].map((tech) => (
                            <li key={tech} className="list-inline-item badge bg-secondary m-1">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-3">
                    <h2 className="h4 mb-3">More</h2>
                    <Button
                        variant="outline-secondary"
                        href="/Jerry-Forsberg.docx"
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