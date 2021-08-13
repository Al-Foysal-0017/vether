import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProgressBar from '../components/progressbar/ProgressBar'
import Body4items from '../layout/home/Body4items'
import BottomBtn from '../layout/home/BottomBtn'
import Top3items from '../layout/home/Top3items'
import "../layout/home/Home.css"

const Home = () => {
    return (
        <div className="app">
            <Navbar/>
            <div className="body">
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
