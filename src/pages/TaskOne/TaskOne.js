import React from 'react'
import { Link } from 'react-router-dom';
import './TaskOne.css'

function TaskOne() {
    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState()

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const findDuplicatedValue = () => {
        const arr = value.split("")
        const tempResult = arr.find((item, index)=> arr.indexOf(item) !== index)
        setResult(tempResult ? tempResult : -1)
    }
    return (
        <div className='App'>
            <div className='container'>
                <div className='form-section'>
                    <input className='input' type='number' value={value} onChange={onChangeHandler}/>
                    <button className='button calculate' onClick={findDuplicatedValue}>Hesapla</button>
                </div>
                {result && <div className='result'>Sonuç= {result}</div>}
                <Link className='button turn-back' to="/"> Geri Dön</Link>
            </div>
        </div>
    )
}

export default TaskOne