import { Col, Container, Row } from "react-bootstrap"
import './Home.css'

function Home(){
    return(
        <>
        <Container fluid className="headerStyle" id="Home">
            <Row>
                <Col>
                <img className="imgHeader" style={{width:'100%',height:'100vh'}} src="https://static.vecteezy.com/system/resources/thumbnails/027/468/580/small_2x/a-software-developer-immersed-in-work-late-at-night-multiple-screens-casting-a-glow-on-his-focused-face-photo.jpeg" />
                <h1 className="textHeader" style={{fontSize:'50px',textAlign:'center'}}>Alex Smith</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Home