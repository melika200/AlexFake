import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { PiFacebookLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import './Mynavbar.css'
import { FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { Link } from 'react-scroll';
import { FaImages } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { BsStack } from "react-icons/bs";
import { RxDropdownMenu } from "react-icons/rx";
function Mynavbar(){
  const navItems=[
    {
      id:1,
      name:'About',
      to:'About',
      icon:<RiContactsLine />
    },
    {
      id:2 ,
      name:'Contact',
      to:'Contact',
      icon:<IoMdContacts />
    },
    {
      id:3 ,
      name:'Home',
      to:'Home',
      icon:<FaHome />
    },
    {
      id:4 ,
      name:'Portfolio',
      to:'Portfolio',
      icon:<FaImages />

    },
    {
      id:5 ,
      name:'Resume',
      to:'Resume',
      icon:<TiDocumentText />

    },
    {
      id:6 ,
      name:'Services',
      to:'Services',
      icon:<BsStack />

    }
  ]
    const expand='md'
    return(
        <>
            <Navbar>
          <Container fluid className='SidbarNavbar'>
             <div style={{display:"flex",flexDirection:'column',textAlign:'center'}}>
             <img style={{width:'160px',height:'170px',borderRadius:'100%',marginTop:'35px',marginLeft:'60px',border:'8px solid #343a4075'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zdBO7WUXswH25t_iRcUO6b_8oxbXHwUf9mzAz8aawioWOIo4_imALtQFj_w4beYJx-I&usqp=CAU" />
             {/* <h3 style={{color:'#fff',fontWeight:'bold',fontSize:'20px',margin:'0px',padding:'10px'}}>Alex Smith</h3> */}
             <p style={{color:'#fff',display:'flex',flexDirection:'row',justifyContent:'space-evenly',margin:'0px',padding:'0px'}}>
                <span className='iconSidbar'><PiFacebookLogo /></span>
                <span className='iconSidbar'><FaInstagram /></span>
                <span className='iconSidbar'><BsTwitterX /></span>
                <span className='iconSidbar'><TiSocialSkypeOutline /></span>
                <span className='iconSidbar'><BsLinkedin /></span>
             </p>
             </div>
             <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      {
                          navItems.map((navItem,id) => (
                                  <li key={navItem.id} class="nav-item">
                                                 
                                                 <Link    
                                                  to={navItem.to}
                                                  spy={true} 
                                                  smooth={true} 
                                                  offset={50} 
                                                  duration={500} 
                                                  >
                                                    <p
                                                    style={{
                                                      color:'#bdc3c7'
                                                    }}
                                                    > 
                                                    <span className='iconNavbar' style={{paddingRight:'10px'}}>
                                                    {navItem.icon}
                                                  </span> <span className='textSidbar'
                                                  >{navItem.name}</span></p>
                                                  
                                                  </Link>

                                      </li>
                          ))
                          }
               </ul>
         </div> 
                <div style={{  display:'flex',
                    flexDirection:'row',
                    marginLeft:'13%'
                  }}>
               < RxDropdownMenu style={{color:'#fff',fontSize:'25px'}} />
                <NavDropdown
                  style={{
                    color:'#fff',
                    marginLeft:'15px'
                  }}
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  </NavDropdown>
                </div>

                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
    )
}
export default Mynavbar