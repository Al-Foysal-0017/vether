import React from 'react'
import {HiDotsHorizontal} from 'react-icons/hi';
import {BsQuestionCircleFill} from 'react-icons/bs';
import {IoIosPaper} from 'react-icons/io';
import {GiUnicorn} from 'react-icons/gi';
import {FaDiscord, FaTelegramPlane, FaGithub} from 'react-icons/fa';
import Logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div className="navbarContainer">
            {/* Logo */}
            <div className="navbarLeft">
                <img src={Logo} className="logo" alt=""/>
            </div>
            <div className="navbarRight">
                <div className="navbarRightTop">
                    <div className="navbarRightBtn1 trans">Connect Wallet</div>
                    <div onClick={() => {
                        setDropdown(!dropDown)
                    }} className="navbarRightBtn2"><HiDotsHorizontal className="icon"/></div>
                </div>
                {/* Dropdown */}
                {dropDown &&
                <div className="dropdown">
                    <div className="dropdownItem">
                        <GiUnicorn className="dropdownIcon"/>
                        Uniswap
                    </div>
                    <div className="dropdownItem">
                        <IoIosPaper className="dropdownIcon"/>
                        Whitepaper
                    </div>
                    <div style={{paddingBottom: "10px"}} className="dropdownItem">
                        <BsQuestionCircleFill className="dropdownIcon"/>
                        Docs
                    </div>
                    <div className="lineBorder"/>
                    <div style={{paddingTop: "10px"}} className="dropdownItem">
                        <FaDiscord className="dropdownIcon"/>
                        Discord
                    </div>
                    <div className="dropdownItem">
                        <FaTelegramPlane className="dropdownIcon"/>
                        Telegram
                    </div>
                    <div className="dropdownItem">
                        <FaGithub className="dropdownIcon"/>
                        Github
                    </div>
                </div>}
            </div>
        </div>

    )
}

export default Navbar
