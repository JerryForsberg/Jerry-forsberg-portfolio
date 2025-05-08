import { useParams, useNavigate } from "react-router-dom";
import { caseStudyData } from "../../data/caseStudyData";
import { ReactComponent as BackArrow } from "../../assets/back-arrow.svg";
import { SiGithub } from 'react-icons/si'


const CaseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const caseItem = caseStudyData.find((item) => item.id === Number(id));
    const { name, description, image, link, gitLink } = caseItem;
    return (
        <main className="case-details-container animate-fade-in">
            <button
                className="btn btn-custom back-btn"
                onClick={() => navigate(-1)}
            >
                <BackArrow className="back-arrow" />
                Back to Case Studies
            </button>

            <div className="case-details mb-5">
                <h1 className="display-4 fw-bold mb-4">{name}</h1>
                <p className="lead text-center mb-4">{description}</p>
                <a className="mb-4" href={gitLink}><SiGithub className="git-link" /></a>

                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img className='case-img' link={link} src={image} alt={name} />
                </a>
            </div>
        </main>
    );
}

export default CaseDetails;