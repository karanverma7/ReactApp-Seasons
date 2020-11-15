import React from 'react'
import './seasonDisplay.css'

const getSeason = (lat) => {
    const month = new Date().getMonth()
    if( month > 2 && month <8){
        return ( lat > 0 ) ? 'summer' : 'winter';
    }
    else {
        return ( lat > 0 ) ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, It\'s chilly!',
        iconName: 'snowflake'
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat)
    let {text, iconName} = seasonConfig[season]

    return (
        <div className={season}>
            <i className={ `${iconName} massive icon top-left` }></i>
            <h1>{ text }</h1>
            <i className={ `${iconName} massive icon bottom-right` }></i>
        </div>
    )
}

export default SeasonDisplay;