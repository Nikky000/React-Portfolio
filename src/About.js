import React from "react";
import "./About.css";
import aboutImg from './img/about.jpg';
function About() {
    return (
        <div className="about  component_space">
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">About Me</h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                aksdjflhasdfhkjshdfkjashdkjfhajskdfhkjsahdfkjhasdkjfh
                                kjsdfhkjsdhfkjhsdfkhksjdfhkjsdhfkj
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
