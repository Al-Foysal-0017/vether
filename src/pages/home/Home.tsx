import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProgressBar from '../../components/progressbar/ProgressBar'
import Body4items from '../../layout/home/Body4items'
import BottomBtn from '../../layout/home/BottomBtn'
import Top3items from '../../layout/home/Top3items'
import "./Home.css"

const Home = () => {
    let dark = localStorage.getItem('theme') === 'theme-dark'
    return (
        <div className="app">
            <Navbar/>
            <div className={dark ? 'MainContainerDark' : 'MainContainer'}>
                <div className="bodyContainer">
                    <div className="title">OVERVIEW</div>
                    <Top3items/>
                    <ProgressBar/>
                    <div>
                        <Body4items/>
                        <BottomBtn/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
