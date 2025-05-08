import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { caseStudyData } from "../../data/caseStudyData"; // Adjust the import path as necessary

const CaseStudies = () => {
  const navigate = useNavigate();

  const handleCardClick = (caseItem) => {
    navigate(`/case/${caseItem.id}`);
  };

  return (
    <div className="custom-container w-100 my-5 animate-fade-in">
      <Row className="g-4">
        {caseStudyData.map((caseItem) => (
          <Col xs={12} sm={6} md={4} lg={4} key={caseItem.id}>
            <Card
              className="mb-4 h-100 clickable-card"
              onClick={() => handleCardClick(caseItem)} // Add click handler
              style={{ cursor: "pointer" }} // Add pointer cursor for better UX
            >
              {caseItem.image && (
                <Card.Img variant="top" src={caseItem.image} alt={caseItem.name} />
              )}
              <Card.Body>
                <Card.Title>{caseItem.name}</Card.Title>
                <Card.Text>{caseItem.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CaseStudies;