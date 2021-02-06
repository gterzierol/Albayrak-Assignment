import React from 'react'

function Week({index, currentWeek}) {
    return (
        <div className={index > currentWeek ? 'week disabled' : 'week'}>
            <div className={currentWeek===index ? 'circle current': 'circle'}>
                <span className='number-of-week'>{index+1}</span>
            </div>
            <span className='week-text'>{`${index+1}. Hafta 2021`}</span>
        </div>
)
}

export default Week
