

import React from 'react'
import './aboutMe.css'
import aboutMeImage from '../../assets/1.png'
import Card from '../sharedComponents/Card'
import { BiCodeAlt } from 'react-icons/bi'
import { CgCodeSlash } from 'react-icons/cg'
import { VscVscode } from 'react-icons/vsc'
import { IoGitMerge, IoLogoFigma, IoLogoFirebase } from 'react-icons/io5'
import { DiMongodb } from 'react-icons/di'
import { GrProjects } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa6";

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