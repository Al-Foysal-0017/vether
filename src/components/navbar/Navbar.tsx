import React from 'react'
import DarkMode from "../darkMode/DarkMode"
import {HiDotsHorizontal} from 'react-icons/hi';
import {BsQuestionCircleFill} from 'react-icons/bs';
import {IoIosPaper} from 'react-icons/io';
import {GiUnicorn} from 'react-icons/gi';
import {FaDiscord, FaTelegramPlane, FaGithub} from 'react-icons/fa';
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/LogoBlack.png"
import "./Navbar.css"

const Navbar = () => {
    let dark = localStorage.getItem('theme') === 'theme-dark'
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div className={dark ? 'navbarContainerDark' : 'navbarContainer'}>
            {/* Logo */}
            <div className="navbarLeft">
                {dark ? <img src={Logo} className="logo" alt=""/> : <img src={Logo2} className="logo" alt=""/>}
            </div>
            <div className="navbarRight">
                <div className="navbarRightTop">
                    <div className="darkModeSet">
                        <DarkMode/>
                    </div>
                    <div className={dark ? 'navbarRightBtn1Dark' : 'navbarRightBtn1'}>Connect Wallet</div>
                    <div
                        onClick={() => {
                            setDropdown(!dropDown)
                        }}
                        className={dark ? 'navbarRightBtn2Dark' : 'navbarRightBtn2'}
                    >
                        <HiDotsHorizontal className="icon"/>
                    </div>
                </div>
                {/* Dropdown */}
                {dropDown && (
                    <div className={dark ? 'dropdownDark' : 'dropdown'}>
                        <div className={dark ? 'dropdownItemDark' : 'dropdownItem'}>
                            <GiUnicorn className="dropdownIcon"/>
                            Uniswap
                        </div>
                        <div className={dark ? 'dropdownItemDark' : 'dropdownItem'}>
                            <IoIosPaper className="dropdownIcon"/>
                            Whitepaper
                        </div>
                        <div style={{paddingBottom: '10px'}} className={dark ? 'dropdownItemDark' : 'dropdownItem'}>
                            <BsQuestionCircleFill className="dropdownIcon"/>
                            Docs
                        </div>
                        <div className="lineBorder"/>
                        <div style={{paddingTop: '10px'}} className={dark ? 'dropdownItemDark' : 'dropdownItem'}>
                            <FaDiscord className="dropdownIcon"/>
                            Discord
                        </div>
                        <div className={dark ? 'dropdownItemDark' : 'dropdownItem'}>
                            <FaTelegramPlane className="dropdownIcon"/>
                            Telegram
                        </div>
                        <div className={dark ? 'dropdownItemDark' : 'dropdownItem'}>
                            <FaGithub className="dropdownIcon"/>
                            Github
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
