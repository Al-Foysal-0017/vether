import React from 'react'

const Top3items = () => {
    let dark = localStorage.getItem('theme') === 'theme-dark'
    return (
        <div className="headerContainer">
            <div className="headerItems">
                <div className="headerItemsContainer">
                    <div className="headerItem">PRICE</div>
                </div>
                <div className={dark ? 'headerItem2Dark' : 'headerItem2'}>$19.87</div>
            </div>
            <div className="headerItems">
                <div className="headerItemsContainer">
                    <div className="headerItem">MCAP</div>
                </div>
                <div className={dark ? 'headerItem2Dark' : 'headerItem2'}>$12.99M</div>
            </div>
            <div className="headerItems">
                <div className="headerItemsContainer">
                    <div className="headerItem">CIRCULATING</div>
                </div>
                <div className={dark ? 'headerItem2Dark' : 'headerItem2'}>$671.99K</div>
            </div>
        </div>
    )
}

export default Top3items
