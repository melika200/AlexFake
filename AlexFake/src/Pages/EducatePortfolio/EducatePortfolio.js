import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './EducatePortfolio.css'
function EducationPortfolio(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
         <Container id="Resume" className="EducateState">
            <Row style={{width:'60%',margin:'8% 30%'}}>
                <Col>
                <div className="Educate-bx">
                    <h2>
                        Educate Portfolio
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Excepturi iure deserunt suscipit ad illo,
                          doloribus cumque tempore quisquam magni </p>
                          <Carousel responsive={responsive} infinite={true} className="EducateSlider" >
                          <div className="item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYt5c2qDWF3mxhw7u6AkYPMPOW3riIaMl-C0OLpjB_tUSJxafDBc1C4UaWO0D7l2T4GDc&usqp=CAU" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.logodesignteam.com/blog/wp-content/uploads/2022/05/image-002.jpg"/>
                                <h5>Logo Designer</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.crossgraphicideas.com/wp-content/uploads/2022/06/logo-designer-online-in-the-usa.jpg" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.vervebranding.com/blog/wp-content/uploads/2021/12/Logo-design-companies-in-UK-624x312.png"/>
                                <h5>Web Designer</h5>
                            </div>
                          </Carousel>
                </div>
                </Col>
            </Row>
         </Container>
        </>
    )
}
export default EducationPortfolio