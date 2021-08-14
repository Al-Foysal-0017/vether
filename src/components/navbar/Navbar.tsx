import React from 'react'
import Switch from "react-switch";
import {HiDotsHorizontal} from 'react-icons/hi';
import {BsQuestionCircleFill} from 'react-icons/bs';
import {IoIosPaper} from 'react-icons/io';
import {GiUnicorn} from 'react-icons/gi';
import {FaDiscord, FaTelegramPlane, FaGithub} from 'react-icons/fa';
import Logo from "../../assets/logo2.png"
import "./Navbar.css"

const Navbar = () => {
    const [dropDown, setDropdown] = React.useState(false)
    const [switchBtn, setSwitchBtn] = React.useState({ checked: false })
    const handleChange =(checked:boolean) =>{setSwitchBtn({ checked })}
    return (
        <div className="navbarContainer">
            {/* Logo */}
            <div className="navbarLeft">
                <img src={Logo} className="logo" alt=""/>
                <div className="logoName">B<span className="middleLetter">OO</span>T</div>
            </div>
            <div className="navbarRight">
                <div className="navbarRightTop">
                    <div className="navbarRightBtn3">
                        <Switch 
                            offHandleColor={"#DB7093"} 
                            onHandleColor={"#DB7093"} 
                            onChange={handleChange} 
                            checked={switchBtn.checked} 
                            uncheckedIcon={false} 
                            checkedIcon={false} 
                            height={12} width={40} 
                            onColor={"#E76B7B"} 
                            offColor={"#F7A82F"} 
                            handleDiameter={20}
                            className="swichBtn"
                        />
                    </div>
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
