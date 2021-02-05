import React from 'react'
import {useForm} from 'react-hook-form'

function Form({state, setState}) {
    const{register, handleSubmit, setValue} = useForm();

    const onSubmit = (data) => {
        if(data.name=== "" || data.surname === "" || data.phone === ""){
            return
        }else{
            setTimeout(()=>{
                setState([...state, data])
                setValue('name','')
                setValue('surname','')
                setValue('phone','')
            },1)
        }
        console.log(state)
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
                    <input type='text' name='phone' ref={register} className='task-2-input'/>
                </div>
            </div>
            <button type='submit' className='button task-2-button'>tıkla</button>
        </form>
    )
}

export default Form
