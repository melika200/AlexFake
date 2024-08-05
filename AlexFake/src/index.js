import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynavbar from './Components/Mynavbar/Mynavbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skill from './Components/Skills/Skills';
import Portfolio from './Pages/Portfolio/Portfolio';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import EducationPortfolio from './Pages/EducatePortfolio/EducatePortfolio';
import Learning from './Pages/Learning/Learning';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <Mynavbar/> */}
<Learning/>
<Home/>
<EducationPortfolio/>
<About/>
<Skill/>
<Portfolio/>
<Services/>
<Contact/>
</>
);


