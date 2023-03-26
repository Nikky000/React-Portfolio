import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
import Resume from "./resume_dilesh_latest.pdf";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I am a 3rd-year student pursuing Computer Science and Engineering at the
             prestigious Indian Institute of Information Technology Vadodara.
             <p className="about__text p__color">
             My passion for programming and developing innovative solutions is evident 
             in my academic performance and extracurricular activities.
             </p>
            <p className="about__text p__color">
            While I enjoy software development, I am equally passionate about frontend development, and
              I have a natural flair for creating visually appealing and user-friendly websites.
            </p >
              </p>
              <p className="about__text p__color">
              I am a self-motivated and goal-oriented individual, with a strong work ethic and the ability to consistently deliver projects on time.
              </p>
              <p className="about__text p__color">
              In summary, I am a skilled and passionate computer science student who is eager to contribute my knowledge and expertise to the field of software development. 
              I am dedicated to creating innovative solutions that make a positive impact on people's lives.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href={Resume}>
                  <button className="about btn pointer">Download Cv</button>
                </a>
                                 <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="up__to__top__btn">
               <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;