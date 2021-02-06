import React from 'react'
import {FiEdit3} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'

function tableItem(props) {
    
    const handleEditClick= (e) => {
        console.log(typeof e.target.id)
        props.setId(e.target.id)
    }
    const handleDeleteClick = (e) => {
        const newArr = props.state.slice(0,e.target.id);
        const lastArr = props.state.slice(e.target.id+1);
        const restArr = newArr.concat(lastArr)
        console.log(restArr)
        props.setState(restArr);
    }
    return (
            <div className='items'>
                <div className='item'>
                    {props.name}
                </div>
                <div className='item'>
                    {props.surname}
                </div>
                <div className='item'>
                    {props.phone}
                </div>
                <div className='item'>
                    <div id={props.index} onClick={handleEditClick}>
                        <FiEdit3 id={props.index} className='icon'/>
                    </div>
                    <div id={props.index} onClick={handleDeleteClick}>
                        <AiFillDelete id={props.index} className='icon'/>
                    </div>
                </div>
            </div>
        
    )
}

export default tableItem
