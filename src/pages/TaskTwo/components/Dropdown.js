import React from 'react'

function Dropdown({state, setState}) {
    const [selected, setSelected] = React.useState('A > Z')

    const handleChange = (e) => {
        setSelected(e.target.value)
            if(selected === 1){
                const sortedList = state.sort((a,b)=> {
                    if(a.name < b.name){
                        return -1
                    }
                })
                console.log(sortedList)
            }
            if(selected === 0){
                const sortedList = state.sort((a,b)=> {
                    if(a.name > b.name){
                        return 1
                    }
                })
                console.log(sortedList)
                }
            }
    


    return (
        <form>
            <select className='sort' value={selected} onChange={handleChange}>
                <option value='0'>A'dan Z'ye</option>  
                <option value='1'>Z'dan A'ye</option>  
            </select>       
        </form>
    )    
}
export default Dropdown
