import { Col, Container, Row } from "react-bootstrap"
import './About.css'
import { FaRegSmile } from "react-icons/fa";
import CountUp from "react-countup";
import { BsEmojiSmile } from "react-icons/bs";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { PiHeadsetFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";

function About(){
    const CountState=[
        {
            id:1,
            icon:<BsEmojiSmile />,
            header:'Happy Clients',
            text:'consequuntur quae',
            number:232
        },
        {
            id:2,
            icon:<BsFileEarmarkRichtext />,
            header:'Projects',
            text:'Lovely do in it',
            number:521

        },
        {
            id:3,
            icon:<PiHeadsetFill />,
            header:'Supporting',
            text:'We enjoy help you ',
            number:1453

        },
        {
            id:4,
            icon:<IoPeople />,
            header:'HardWorkers',
            text:'We have Workaholic client  ',
            number:32

        }


    ]
    return(
        <>
        <Container fluid id="About" className="AboutState">
        <div className="AboutComponent">
        <h3 style={{fontSize:'38px'}} className="AboutHeader">About</h3>
                <p style={{fontSize:'16px',color:'#8d8d8e',marginTop:'30px'}}>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                 Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                 Et nemo qui impedit suscipit alias ea.
                 Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
        </div>
            <Row className="AboutItems" style={{marginTop:'2.5rem'}}> 
             <div className="col-md-6" >
             <img style={{width:'330px',height:'360px',borderRadius:'20%'}} src="https://static.vecteezy.com/system/resources/thumbnails/027/468/580/small_2x/a-software-developer-immersed-in-work-late-at-night-multiple-screens-casting-a-glow-on-his-focused-face-photo.jpeg" />
             </div>
             <div className="col-md-6" style={{display:'flex',flexDirection:'column',paddingLeft:'18px'}}>
             <h3>UI/UX Designer & Web Developer.</h3>
             <span style={{fontSize:'13px',color:'#8d8d8e',marginBottom:'15px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              
              <div style={{display:'flex',flexDirection:'row'}}>
              <div style={{display:'flex',flexDirection:'column'}}>
             <span className="AboutItem"><b>Birthday:</b>1 May 1995</span>
             <span className="AboutItem"><b>Website:</b>www.example.com</span>
             <span className="AboutItem"><b>Phone:</b> +123 456 7890</span>
             <span className="AboutItem"><b>City:</b>New York, USA</span>
             </div>
             <div style={{display:'flex',flexDirection:'column',marginLeft:'26px'}}>
             <span className="AboutItem"><b>Age:</b>30</span>
             <span className="AboutItem"><b>Degree:</b>Master</span>
             <span className="AboutItem"><b>Email:</b>email@example.com</span>
             <span className="AboutItem"><b>Freelancer:</b>Available</span>
             </div>
              </div>
              <span  style={{fontSize:'13px',color:'#8d8d8e',marginTop:'26px'}}>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. 
                Quisquam sunt adipisci omnis et ut.
                 Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                 Cupiditate ut dicta maxime officiis quidem quia.
                  Sed et consectetur qui quia repellendus itaque neque.</span>
             </div>
            </Row>
            
        </Container>
        <Container fluid className="AboutCountState">
            <div style={{justifyContent:'center',margin:'3rem 0px',width:'100%',display:'flex',flexDirection:'row'}}>
               {
                CountState.map((item)=>(
                    <div className="px-3">
                    <div style={{display:'flex',flexDirection:'row'}}>
                       <span style={{color:'#149ddd',fontSize:'49px',marginTop:'5px'}}>{item.icon}</span>
                        <span style={{fontSize:'50px',fontWeight:'bold'}}>
                        <CountUp start={0} end={item.number} delay={0}>
                      {({ countUpRef }) => (
                     <div>
                       <span ref={countUpRef} />
                      </div>
                          )}
                      </CountUp>
                        </span>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'56px'}}>
                    <span style={{fontWeight:'bold'}}>{item.header}</span>
                    <span style={{color:'#8d8d8e'}}>{item.text}</span>
                    </div>
                   
                    </div>
                ))
               }
            </div>
        </Container>
        </>
    )
}
export default About