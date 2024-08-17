import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Portfolio.css";
import { Tab } from "react-bootstrap";
import PortfolioCard from "./PortfolioCard";
function Portfolio() {
  const ProjectItems = [
    {
      title: "Business Startup",
      desc: "Design & Development",
      imgUrl:
        "https://www.holycode.com/wp-content/uploads/2023/07/developer-looking-at-code-1.jpg",
    },
    {
      title: "Business Development",
      desc: "Develope our Website",
      imgUrl:
        "https://learn.microsoft.com/en-us/training/media/career-paths/developer/Azure%20Developer.png",
    },
    {
      title: "Business Designer",
      desc: "Designer Website",
      imgUrl:
        "https://www.usnews.com/dims4/USNEWS/af66e3c/2147483647/crop/2000x1313+0+0/resize/640x420/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Ff9%2Ff1%2Fa6174c87479b8222c09903d7651c%2F190219-softwaredevelopers-stock.jpg",
    },
    {
      title: "Business Logo",
      desc: " Our special Logo",
      imgUrl:
        "https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png",
    },
    {
      title: "Business Management",
      desc: "best Manager",
      imgUrl:
        "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
    },
    {
      title: "Business VOise",
      desc: "Slogan & Tagline",
      imgUrl:
        "https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2020/08/CDG_blog_post_image_01.jpg",
    },
  ];
  
  return (
    <>
      <Container fluid className="PortfolioState" id="Portfolio">
        <Row>
          <Col>
            <h2>Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
              optio consequatur dolorem voluptatibus ab quasi dignissimos
              expedita nisi.
            </p>
            <Tab.Container id="Portfolio-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "5px",
                  marginLeft: "10rem",
                }}
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="row-cols-sm-12 row-cols-md-6 row-cols-lg-3 d-flex flex-wrap mt-5 px-5">
                    {ProjectItems.map((ProjectItem, index) => {
                      return <PortfolioCard key={index} {...ProjectItem} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="row-cols-sm-12 row-cols-md-6 row-cols-lg-3 d-flex flex-wrap mt-5 px-5">
                  <img className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXjonlbFOBYLs2ik-H7DlSeDnt3ftyvnOJOLjs18Ggh-qW4pS73jLUxUKBXQS-CnTWA0&usqp=CAU" alt="" />
                  <img className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjI60OJ9UnnsHMldA1KRPel94UZ3-jMC4jBNaAqhMc_YMv7FuL_i5QNuv_3GxoBHjoZWY&usqp=CAU" alt="" />
                  <img className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-hvR2Aaiwf_N6FV_9MvaZXwqPtqR7mr56EcBTX4IeSDzovlVyWMz4nYiOw52JdmMCdQ&usqp=CAU" alt="" />
                  <img className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgekSKDjsgCMN762qDDgmDF7kYy7xFpUPKpZswLJIAjTnpxlk1rmnLEXvoyML32cxDCFA&usqp=CAU" alt="" />
                  <img className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFM65SfT5U01eAfKAH1UvIvr3dGPRKDWEC3kMDr0KGZfq8zhrzACOAcnug3DwdzwkUcpA&usqp=CAU" alt="" />
                  <img className="p-3" src="https://ce.sharif.edu/documents/1230724/1286271/csit-sa-hero-1200x400.jpeg/34d2117e-4928-b00d-2a45-98cf5b180baa?t=1660552507319&download=true" alt="" />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Portfolio;
