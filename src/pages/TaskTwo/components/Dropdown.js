import React from 'react'

function Dropdown() {
    const [selected, setSelected] = React.useState('A > Z')

    const handleChange = (e) => {
        setSelected(e.target.value)
        console.log(selected)
    }

    return (
        <form>
            <select className='sort' value={selected} onChange={handleChange}>
                <option value='A > Z'>A'dan Z'ye</option>  
                <option value='Z > A'>Z'dan A'ye</option>  
            </select>       
        </form>
    )    
}
export default Dropdown
