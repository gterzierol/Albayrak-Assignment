import React from 'react'
import {FiEdit3} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'

function tableItem(props) {
    console.log(props.index)
    
    const handleEditClick= () => {
        props.setValue(`name`,props.name)
        props.setValue('surname', props.surname)
        props.setValue('phone',props.phone)
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
                    <div id={props.index} onClick={handleEditClick}>
                        <AiFillDelete id={props.index} className='icon'/>
                    </div>
                </div>
            </div>
        
    )
}

export default tableItem
