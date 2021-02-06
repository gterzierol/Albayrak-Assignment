import React from 'react'

function Dropdown({sort, handleSort}) {

    const handleChange = (e) => {
        handleSort(e.target.value)
    }
    


    return (
        <form>
            <select className='sort' value={sort} onChange={handleChange}>
                <option value='0'>A'dan Z'ye</option>  
                <option value='1'>Z'dan A'ye</option>  
            </select>       
        </form>
    )    
}
export default Dropdown
