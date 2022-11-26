import React from 'react';
import logo from "./img/logo.png";
import './Home.css';
function Home() {
  //fixed Header
  window.addEventListener("scroll",function(){
    const header = this.document.querySelector(".header");
    header.classList.toggle("active",window.scrollY > 0)
  });
  return (
    <div className='home'>
       <div className='home__bg'>
         <div className='header d__flex align_items_center pxy_30'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div> 
          <div className='navigation pxy__30'>
            <ul className='navbar d__flex'>
              <a href='#home'><li className='nav__items mx__15'>Home</li></a>
              <a href='#About'><li className='nav__items mx__15'>About</li></a>
              <a href='#Services'><li className='nav__items mx__15'>Services</li></a>
              <a href='#Portfolio'><li className='nav__items mx__15'>Portfolio</li></a>
              <a href='#Contect'><li className='nav__items mx__15'>Contect</li></a>
            </ul>
          </div>
         </div>
         {/*Home content*/}
         <div className='container'>
          <div className='home__content'>
           <div className='home__meta'>
            <h1 className='home__text pz__10'>
              WELCOME TO MY WORLD
            </h1>
            <h2 className='home__text pz__10'>
              Hi, I'm Dilesh Chouhan
            </h2>
            <h3 className='home__text sweet pz__10'>
             A Frontend Developer
            </h3>
            </div>  
          </div>
         </div>

       </div>

    </div>
  )
}

export default Home