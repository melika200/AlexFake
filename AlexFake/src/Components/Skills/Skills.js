import { Col, Container, Row } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css'

function Skill(){
    const SkillItem=[
        {
            id:1,
            name:'HTML',
            darsad:'100%',
            now:100
        },
        {
            id:2,
            name:'CSS',
            darsad:'90%',
            now:90
        },
        {
            id:3,
            name:'JAVASCRIPT',
            darsad:'75%',
            now:75
        }
    ]
    const SkillItemm=[
        {
            id:1,
            name:'PHP',
            darsad:'80%',
            now:80
        },   {
            id:2,
            name:'WORDPRESS/CMS',
            darsad:'90%',
            now:90
        },
        {
            id:3,
            name:'PHOTOSHOP',
            darsad:'55%',
            now:55
        }
    ]
    return(
        <>
        <Container className="SkillState" fluid style={{backgroundColor:'#f4fafd',marginBottom:'50px'}}>
            <h6 className="SkillHeader" style={{fontSize:'38px'}}>Skills</h6>
            <p className="SkillText" style={{color:'#8d8d8e'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <Row style={{display:'flex',flexDirection:'row',width:'65%'}} className="SkillProgress">
                <Col className="col-sm-12 col-md-6"  style={{display:'flex',flexDirection:'column', width:'50%'}}>
                 
                 {
                    SkillItem.map((item)=>(
                    <div style={{display:'flex',flexDirection:'column',padding:'8px 0px'}} > 
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <span>{item.name}</span>
                            <span>{item.darsad}</span>
                        </div>
                        <ProgressBar style={{ width:'100%',height:'10px',backgroundColor:'#149ddd',borderRadius:'20px',marginTop:'8px'}} now={item.now} />
                    </div>
                        
                       )   )
                }

                </Col>

                <Col className="col-sm-12 col-md-6" style={{display:'flex',flexDirection:'column',width:'50%',paddingLeft:'39px'}}>
                     
                {
                    SkillItemm.map((item)=>(
                    <div style={{display:'flex',flexDirection:'column',padding:'8px 0px'}} > 
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <span>{item.name}</span>
                            <span>{item.darsad}</span>
                        </div>
                        < ProgressBar style={{height:'10px',backgroundColor:'#149ddd',borderRadius:'10px',marginTop:'8px'}} aria-valuenow={item.now}   />
                    </div>
                        
                       )   )
                }

                </Col>

            </Row>
        </Container>
        </>
    )
}
export default Skill