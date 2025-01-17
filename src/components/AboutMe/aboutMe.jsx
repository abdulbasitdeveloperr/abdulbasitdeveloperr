

// MAIN



// import React from 'react';
// import './AboutMe.css';

// const AboutMe = () => {
//   return (
//     <section className='about-me' id="about">
//       <h2>About Me</h2>
//       <p>
//         I'm a passionate frontend developer with experience in creating
//         beautiful and responsive websites. I enjoy turning ideas into reality
//         using code.
//       </p>
//     </section>
//   );
// };

// export default AboutMe;


// import React from 'react';
// import './aboutMe.css';

// const AboutMe = () => {
//   return (
//     <section className="about-me" id="about">
//       <h3>Introduction</h3>
//       <h2>About Me</h2>
//       <div className="about-me-container">
//         {/* Profile Image */}
//         <div className="profile-image">
//           <img src="https://via.placeholder.com/200" alt="Profile" />
//         </div>

//         {/* Description and Cards */}
//         <div className="about-me-content">
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis rem enim blanditiis
//             deleniti ipsam molestiae quos ut ratione aliquam! Accusamus, totam dignissimos maxime
//             obcaecati ipsum non sit perspiciatis eligendi? Minima!
//           </p>

//           <div className="about-me-cards">
//             {/* Card 1 */}
//             <div className="card">
//               <h4>Languages</h4>
//               <p>HTML5, CSS3, JS, REACTJS</p>
//             </div>
//             {/* Card 2 */}
//             <div className="card">
//               <h4>Education</h4>
//               <p>BSCS from ABC UNI, Master,INTERMEDIATE</p>
//             </div>
//             {/* Card 3 */}
//             <div className="card">
//               <h4>Projects</h4>
//               <p>Build portfolio website.</p>
//             </div>
//           </div>

//           {/* Tools Section */}
//           <div className="tools">
//             <span>Tools I use</span>
//             <span>🎨 💻 ⚙️ 🔧</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import React from 'react'
import './AboutMe.css'
import aboutMeImage from '../../assets/1.png'
import Card from '../sharedComponents/Card'
import { BiCodeAlt } from 'react-icons/bi'
import { CgCodeSlash } from 'react-icons/cg'
import { VscVscode } from 'react-icons/vsc'
import { IoGitMerge, IoLogoFigma, IoLogoFirebase } from 'react-icons/io5'
import { DiMongodb } from 'react-icons/di'
import { FaGraduationCap } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

const AboutMe = () => {

    const cardData = [
        {
            cardheading: "Languages",
            carddesc: "HTML5, CSS3, JS, REACTJS",
            cardicon: <CgCodeSlash />
        },
        {
            cardheading: "Education",
            carddesc: "BSCS from ABC UNI, Master",
            cardicon: <FaGraduationCap /> 
        },
        {
            cardheading: "Projects",
            carddesc: "Build portfolio website.",
            cardicon: <GrProjects />
        }
    ]

    const toolsIcons = [
        <VscVscode />,
        <IoLogoFirebase />,
        <DiMongodb />,
        <IoLogoFigma />,
        <IoGitMerge />

    ]
    return (
        <div className='about-me'>
            <div className='about-me-top'>
                <span>Introduction</span>
                <h1>About Me</h1>
            </div>


            <div className='about-me-bottom'>
                <div className='about-me-bottom-image'>
                    <img src={aboutMeImage} className='about-me-image' />
                </div>


                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis rem enim blanditiis deleniti ipsam molestiae quos ut ratione aliquam! Accusamus, totam dignissimos maxime obcaecati ipsum non sit perspiciatis eligendi? Minima!
                    </p>

                    <div className='about-me-bottom-cards'>
                        {cardData.map((item, index) => {
                            return (

                                <Card cardHeading={item.cardheading} cardDescription={item.carddesc} cardIcon={item.cardicon} />

                            )
                        })}
                    </div>



                    <span>Toos I use</span>

                    <div>
                        {toolsIcons.map((item, index) => item)}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutMe