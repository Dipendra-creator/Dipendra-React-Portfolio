import React from 'react';
import AboutCard from "./Components/AboutCard"
import SkillCard from "./Components/SkillCard"
import {CreateExperience, name, introduction, image} from "./Components/ExSection"
import ProjectsCard from "./Components/ProjectsCard"

function App() {
    return (
        <div>
            <div className="nav">
                <span className="home-emoji" role="img" aria-label="emoji">🌎</span>
            </div>
            <hr className="nav_hr"/>
            <div className="Lower_body">
                <div className="Introduction">
                    <div id="quoto">
                        <span className="quot">console.log("Hello, World");</span>
                    </div>
                    <div id="intro">
                        <h1 className="intr">I'm Dipendra Bhardwaj</h1>
                        <h4 className="work">I'm a Student of <span className="high">GLA University</span> in Mathura,
                            Uttar Pradesh</h4>
                        <h6 className="lang high">React | Node.js | JavaScript | Python | Three.js | Java</h6>
                        <div className="links">
                            <a href="#"><i className='icon fa fa-github fa-2x'/></a>
                            <a href="#"><i className='icon fa fa-linkedin fa-2x'/></a>
                            <a href="#"><i className='icon fa fa-instagram fa-2x'/></a>
                        </div>
                    </div>
                </div>
                <hr className="sec_hr"/>
                <AboutCard/>
                <div className="skills">
                    <h2>Skills</h2>
                    <div className="container">
                        <SkillCard name="Python" href="./assets/python.png"/>
                        <SkillCard name="JavaScript" href="./assets/JavaScript.png"/>
                        <SkillCard name="Git" href="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                        <SkillCard name="Flutter" href="./assets/Flutter.png"/>
                        <SkillCard name="Node Js" href="./assets/NodeJs.png"/>
                        <SkillCard name="React Js" href="./assets/React.png"/>
                        <SkillCard name="Java" href="./assets/Java.png"/>
                        <SkillCard name="Three.Js" href="./assets/threejs.png"/>
                    </div>
                </div>

                <div className="skills">
                    <h2>Learning</h2>
                    <div className="container">
                        <SkillCard name="Express" href="./assets/JavaScript.png"/>
                        <SkillCard name="Go Lang" href="https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png"/>
                        <SkillCard name="Docker" href="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"/>
                        <SkillCard name="Kubernetes" href="https://provato-cdn.azureedge.net/www-provato/2020/11/kubernetes.png"/>
                    </div>
                </div>

                <div className="Experience">
                    <h2>Experience</h2>
                    <div className="lg-m">
                        {CreateExperience(name[0], image[0], introduction[0])}
                        {CreateExperience(name[1], image[1], introduction[1])}
                    </div>
                </div>

                <div className="Projects">
                    <h2>Projects</h2>
                    <p>Note: These projects were for learning only and I did not continue development</p>
                    <a href="https://github.com/Dipendra-creator/tic_tac_toe"><ProjectsCard name="Tic Tac Toe" info="A Flutter Game with nice UI"/></a>
                    <a href="https://github.com/Dipendra-creator"><ProjectsCard name="Real Time Object Detection" info="A Mask Detection with Tensorflow"/></a>
                    <a href="https://github.com/Dipendra-creator"><ProjectsCard name="Virtual Mouse OpenCV" info="AI Virtual Mouse using OpenCV"/></a>
                    <a href="https://github.com/Dipendra-creator/Hunted_House"><ProjectsCard name="Hunted House" info="Three.js Model of House with some effects"/></a>
                </div>
            </div>
            <footer>
                <h3>2021@Dipendra_Bhardwaj</h3>
            </footer>
        </div>
    );
}

export default App;
