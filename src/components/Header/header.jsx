// import React from 'react'
// import './Header.css'
// import { FaLocationArrow, FaRegMoon } from 'react-icons/fa'
// const Header = () => {
//     const headerListItems = [
//         {
//             name: "Home",
//             route: "/"
//         },
//         {
//             name: "About me",
//             route: "/aboutme"
//         },
//         {
//             name: "Services",
//             route: "/services"
//         },
//         {
//             name: "My Work",
//             route: "/mywork"
//         },
//         {
//             name: "Contact Me",
//             route: "/contactme"
//         },
//     ]
//     return (
//         <header className='header'>
//             <div className='header-logo'>
//                 <h1>abdul basit</h1>
//                 <span className='name-dot'></span>
//             </div>
//             <ul className='header-list-items'>
//                 {headerListItems.map((item, index) => {
//                     return (
//                         <li key={index}>{item.name}</li>
//                     )
//                 })}
//             </ul>
//             <div className='header-buttons'>
//                 <FaRegMoon size={28 } />
//                 <button className='contact-button'>
//                     Contact
//                     <FaLocationArrow />
//                 </button>
//             </div>
//         </header>
//     )
// }
// export default Header
import React from 'react'
import './Header.css'
import { FaLocationArrow, FaRegMoon } from 'react-icons/fa'
const Header = () => {
    const headerListItems = [
        {
            name: "Home",
            route: "/"
        },
        {
            name: "About me",
            route: "/aboutme"
        },
        {
            name: "Services",
            route: "/services"
        },
        {
            name: "My Work",
            route: "/mywork"
        },
        {
            name: "Contact Me",
            route: "/contactme"
        },
    ]
    return (
        <header className='header'>
            <div className='header-logo'>
                <h1>Abdul Basit</h1>
                <span className='name-dot'></span>
            </div>
            <ul className='header-list-items'>
                {headerListItems.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
            <div className='header-buttons'>
                <FaRegMoon size={28 } />
                <button className='contact-button'>
                    Contact
                    <FaLocationArrow />
                </button>
            </div>
        </header>
    )
}
export default Header