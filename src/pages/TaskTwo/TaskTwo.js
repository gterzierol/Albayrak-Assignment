import React from 'react'
import {useForm} from 'react-hook-form'
import Dropdown from './components/Dropdown'
import Form from './components/Form'
import TableItem from './components/tableItem'
import './TaskTwo.css'

function TaskTwo() {
    const [state, setState] = React.useState([])
    const [searchValue, setSearchValue] = React.useState("");
    const{setValue} = useForm();
    
    return (
        <div className='App'>
            <div className='container'>

                <Form state={state} setState={setState}/>
                
                <div className='table'>
                    <div className='table-header'>
                        <div className='search'>
                            <input type='text' placeholder='Ara...' onChange={(e)=> setSearchValue(e.target.value)}/>
                        </div>
                        <div>
                            <Dropdown/>
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
                                Yaş
                            </div>
                            <div className='name-title'>
                                işlemler
                            </div>
                        </div>
                        {state && state.filter((val)=>{
                            if(searchValue === ""){
                                return val
                            }else if(val.name.toLowerCase().includes(searchValue.toLowerCase())){
                                return val
                            }
                        }).map((item,index)=> {
                                return (
                                    <TableItem setValue={setValue} key={index} name={state[index].name} surname={state[index].surname} phone={state[index].phone} index={index}/>
                                )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskTwo
