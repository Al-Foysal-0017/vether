import React from 'react'

const Body4items = () => {
    let dark = localStorage.getItem('theme') === 'theme-dark'
    return (
        <>
            {/* Remaining Time */}
            <div className={dark ? 'boxContainerDark' : 'boxContainer'}>
                <div className={dark ? 'boxContainerItem1Dark' : 'boxContainerItem1'}>REMAINING TIME</div>
                <div className={dark ? 'boxContainerItem2Dark' : 'boxContainerItem2'}>04:07:58</div>
            </div>
            {/* Total value burnt today */}
            <div className={dark ? 'boxContainerDark' : 'boxContainer'}>
                <div className={dark ? 'boxContainerItem1Dark' : 'boxContainerItem1'}>TOTAL VALUE BURNT TODAY</div>
                <div className={dark ? 'boxContainerItem2Dark' : 'boxContainerItem2'}>04:07:58</div>
            </div>
            {/* Implied value today */}
            <div className={dark ? 'boxContainerDark' : 'boxContainer'}>
                <div className={dark ? 'boxContainerItem1Dark' : 'boxContainerItem1'}>IMPLIED VALUE TODAY</div>
                <div className={dark ? 'boxContainerItem2Dark' : 'boxContainerItem2'}>04:07:58</div>
            </div>
            {/* Current daily emission */}
            <div className={dark ? 'boxContainerDark' : 'boxContainer'}>
                <div className={dark ? 'boxContainerItem1Dark' : 'boxContainerItem1'}>CURRENT DAILY EMISSION</div>
                <div className={dark ? 'boxContainerItem2Dark' : 'boxContainerItem2'}>04:07:58</div>
            </div>
        </>
    )
}

export default Body4items
