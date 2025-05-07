import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/caseStudies');
    };

    return (
        <div className="my-5">
            <h1 className="custom-heading">Software Developer</h1>

            <section className="text-section my-4">
                <p>
                    Welcome to my portfolio! I am a passionate software developer with experience in building
                    modern, responsive, and user-friendly web applications. My expertise lies in creating
                    efficient and scalable solutions tailored to meet client needs.
                </p>
                <p>
                    Feel free to explore my case studies to see examples of my work, or get in touch with me
                    through the contact page. I look forward to collaborating with you on your next project!
                </p>
            </section>



            <Button className="my-2" onClick={handleBtnClick}>Case Studies</Button>
        </div>
    );


};

export default Home;