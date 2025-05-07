import { useParams, useNavigate } from "react-router-dom";
import { caseStudyData } from "../../data/caseStudyData";
import { ReactComponent as BackArrow } from "../../assets/back-arrow.svg";

const CaseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const caseItem = caseStudyData.find((item) => item.id === Number(id));
    const { name, description, image, link } = caseItem;
    return (
        <main className="case-details-container">
            <button
                className="btn btn-custom back-btn"
                onClick={() => navigate(-1)}
            >
                <BackArrow className="back-arrow" />
                Back to Case Studies
            </button>

            <div className="case-details gap-2">
                <h1>{name}</h1>
                <p>{description}</p>

                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img link={link} src={image} alt={name} style={{ maxWidth: "100%", height: "auto" }} />
                </a>
            </div>
        </main>
    );
}

export default CaseDetails;