import { Col, Container, Row } from "react-bootstrap"
import './Services.css';
import { BsSuitcaseLg } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";
import { IoStatsChartSharp } from "react-icons/io5";
import { BsBinoculars } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
function Services(){
    const ServicesItem=[
        {
            id:1,
            icon:<BsSuitcaseLg />,
            header:'Lorem ipsum',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id:1,
            icon:<VscChecklist />,
            header:'dolor sit',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id:1,
            icon:<IoStatsChartSharp />,
            header:'sit amet',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        }
    ]
    const ServicesItemm=[
        {
            id:1,
            icon:<BsBinoculars />,
            header:'Magno Dolor',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id:1,
            icon:<GoSun />,
            header:'Nemo Enim',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id:1,
            icon:<SlCalender />,
            header:'Eiusmod Tempor',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        }
    ]
    return(
        <>
        <Container id="Services" className="ServiceState">
            <Row style={{display:'flex',flexDirection:'column',position:'absolute',left:'20%',margin:'0px 5%'}}>
            <div >
           <h3 className="ServiceHeader" style={{fontSize:'30px',fontWeight:'bold'}}>Services</h3>
            <span style={{color:'#ccc'}}>Magnam dolores commodi suscipit. 
                Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                <br/> 
                 Et nemo qui impedit suscipit alias ea. 
                 Quia fugiat sit in iste officiis commodi quidem hic quas.</span>
           </div>
            <Col  style={{display:'flex',flexDirection:'row',marginTop:'3%'}}>
            
                  {
                    ServicesItem.map((Service)=>(
                        <div className="ServicesItems" style={{display:'flex',flexDirection:'row'}}>

                            <span  style={{fontSize:'30px',backgroundColor:'#149ddd',color:'#fff',borderRadius:'50px',width:'59px',height:'33px',padding:'10px'}}>{Service.icon}</span>

                          <div style={{display:'flex',flexDirection:'column',paddingLeft:'18px'}}>
                          <span style={{fontWeight:'bold',fontSize:'18px'}}>{Service.header}</span>
                          <span style={{color:'#ccc'}}>{Service.text}</span>
                          </div>
                        </div>
                    ))
                  }
            
            </Col>
            <Col style={{display:'flex',flexDirection:'row',marginTop:'4%',paddingBottom:'3%'}}>
            
            {
                    ServicesItemm.map((Service)=>(
                        <div className="ServicesItems" style={{display:'flex',flexDirection:'row'}}>

                            <span style={{fontSize:'30px',backgroundColor:'#149ddd',color:'#fff',borderRadius:'50px',width:'59px',height:'33px',padding:'10px'}}>{Service.icon}</span>

                          <div style={{display:'flex',flexDirection:'column',paddingLeft:'18px'}}>
                          <span style={{fontWeight:'bold',fontSize:'18px'}}>{Service.header}</span>
                          <span style={{color:'#a4a4a4'}}>{Service.text}</span>
                          </div>
                        </div>
                    ))
                  }
            
            </Col>
            </Row>
        </Container>
        </>
    )
}
export default Services