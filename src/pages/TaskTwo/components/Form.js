import React from 'react'
import {useForm} from 'react-hook-form'

function Form({list, setList, id, setId}) {
    const{register, handleSubmit, setValue} = useForm();

    React.useEffect(()=> {
        if(id){
            setValue('name',list[id].name)
            setValue('surname',list[id].surname)
            setValue('phone',list[id].phone)
        }
    },[id])

    const onSubmit = (data) => {
        if(data.name=== "" || data.surname === "" || data.phone === ""){
            return
        }
        if(id){
            const newArr = list.slice(0,id);
            const lastArr = list.slice(id+1);
            const restArr = newArr.concat(data).concat(lastArr)
            setList(restArr)
            setId(null)
        }else{
            setList([...list, data])
        }
        setValue('name','')
        setValue('surname','')
        setValue('phone','')
    }
    return (
        <form className='form-section' onSubmit={handleSubmit(onSubmit)}>
            <div className='input-section'>
                <div className='input-element'>
                    <label>Ad:</label>
                    <input type='text' name='name' ref={register} className='task-2-input'/>
                </div>
                <div className='input-element'>
                    <label>Soyad:</label>
                    <input type='text' name='surname' ref={register} className='task-2-input'/>
                </div>
                <div className='input-element'>
                    <label>Telefon:</label>
                    <input type='number' name='phone' ref={register} className='task-2-input phone'/>
                </div>
            </div>
            <button type='submit' className='button task-2-button'>tıkla</button>
        </form>
    )
}

export default Form
