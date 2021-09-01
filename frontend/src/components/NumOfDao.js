import React, {useState} from 'react'

const NumOfDao = () => {

    const [toggleNumber, setToggleNumber] = useState(0);
    
    const dataList = useSelector((state) => state.dataList);
    const { loading, error, datas } = dataList;


    return (
        <div>

            {datas.map((data, index) => (

                setToggleNumber(index)

            ))}

            {}
            
        </div>
    )
}

export default NumOfDao
