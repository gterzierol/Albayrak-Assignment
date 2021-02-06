import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';

import Dropdown from './components/Dropdown'
import Form from './components/Form'
import TableItem from './components/tableItem'
import './TaskTwo.css'

function TaskTwo() {
    const [state, setState] = React.useState([])
    const [id, setId] = React.useState(null)
    const [searchValue, setSearchValue] = React.useState("");
    const{setValue} = useForm();
    
    return (
        <div className='App'>
            <div className='container'>
                <Link className='button back' to='/'>Geri Dön</Link>

                <Form state={state} setState={setState} id={id} setId={setId}/>
                
                <div className='table'>
                    <div className='table-header'>
                        <div className='search'>
                            <input type='text' placeholder='Ara...' onChange={(e)=> setSearchValue(e.target.value)}/>
                        </div>
                        <div>
                            <Dropdown state={state} setState={setState}/>
                        </div>
                    </div>
                    <div className='table-body'>
                        <div className='title'>
                            <div className='name-title'>
                                Isim
                            </div>
                            <div className='name-title'>
                                Soyisim
                            </div>
                            <div className='name-title'>
                                Telefon
                            </div>
                            <div className='name-title'>
                                işlemler
                            </div>
                        </div>
                        {state && state.filter((val)=>{
                            if(searchValue === ""){
                                return val
                            }
                            if(val.name.toLowerCase().includes(searchValue.toLowerCase())){
                                console.log(val.name)
                                return val
                            }
                        }).map((item,index)=> {
                                return (
                                    <TableItem setState={setState} state={state} setId={setId} setValue={setValue} key={index} name={item.name} surname={item.surname} phone={item.phone} index={index}/>
                                )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskTwo
