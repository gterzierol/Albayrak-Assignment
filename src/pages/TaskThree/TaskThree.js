import React from 'react'
import { Link } from 'react-router-dom';
import Week from './components/Week'
import './TaskThree.css'
function TaskThree() {
    const [currentWeek, setCurrentWeek] = React.useState();
    const widget = React.useRef(null);

    React.useEffect(()=> {
        const date = new Date();
        const month = 1+date.getMonth();
        const day = date.getDay();
        const current = 4 - Math.floor(day/7)
        setCurrentWeek(Math.floor((month*4)-current));
        setScrollPosition();
    },[])

    const setScrollPosition = () => {
        console.log(currentWeek)
        widget.current.scrollTop = ((currentWeek)-4)*61
    }

    return (
        <div className="widget-app">
                <Link className='button widget-button' to='/'>
                    Geri Dön
                </Link>
            <div className='container widget-container'>
                    <div className='widget-title'>
                        Haftalar
                    </div>
                <div className='widget' ref={widget}>
                    {new Array(52).fill(".").map((item,index) => {
                        return(<Week index={index} currentWeek={currentWeek}/>)
                    })}
                    <div className='week font'>
                        {currentWeek}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskThree
