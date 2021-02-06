import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';

import Dropdown from './components/Dropdown'
import Form from './components/Form'
import TableItem from './components/tableItem'
import './TaskTwo.css'

function TaskTwo() {
    const [list, setList] = React.useState([])
    const [sort, setSort] = React.useState('0');
    const [id, setId] = React.useState(null)
    const [searchValue, setSearchValue] = React.useState("");
    const{setValue} = useForm();
    
    const handleSort = (status) => {
        setSort(status)
    }
    const sortItems = () => {
        let items = [...list];
        console.log(typeof sort)
        sort === '0'
        ? items.sort((a,b)=>  a.name.localeCompare(b.name)) 
        : items.sort((a,b)=>  b.name.localeCompare(a.name))

        return searchValue
        ? items.filter((val) => val.name.toLowerCase().includes(searchValue.toLowerCase()))
        : items
    }

    return (
        <div className='App'>
            <div className='container'>
                <Link className='button back' to='/'>Geri Dön</Link>

                <Form list={list} setList={setList} id={id} setId={setId}/>
                
                <div className='table'>
                    <div className='table-header'>
                        <div className='search'>
                            <input type='text' placeholder='Ara...' onChange={(e)=> setSearchValue(e.target.value)}/>
                        </div>
                        <div>
                            <Dropdown sort={sort} handleSort={handleSort}/>
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
                        {list.length > 0 && sortItems().map((item,index)=> {
                                return (
                                    <TableItem setList={setList} list={list} setId={setId} setValue={setValue} key={index} name={item.name} surname={item.surname} phone={item.phone} index={index}/>
                                )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskTwo
