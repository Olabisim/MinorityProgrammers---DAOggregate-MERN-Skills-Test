import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Data from "../components/Data";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Table from "../components/Table";
import { listDatas } from "../actions/dataActions";
import '../css/two_divs.css';
import '../css/table.css';



const HomeScreen = () => {

    const [toggleValue, setToggleValue] = useState('')
    const [active, setActive] = useState(false)
    // const [toggleNumber, setToggleNumber] = useState(0)

    const dispatch = useDispatch();

    const dataList = useSelector((state) => state.dataList);
    const { loading, error, datas } = dataList;


    // totalNumber();


    useEffect(() => {

        dispatch(listDatas());

    }, [dispatch]);

    
    // const totalNumber = datas.map((data, index) => (

    //     setToggleNumber(index)

    // ))

    return (
        <>
            {/* <h1>Latest datas</h1> */}
            {loading ? 
            (
                <Loader />
            ) 
            : 
            error ? (
                <Message variant='danger'>{error}</Message>
            ) 
            : 
            (
                <Row>
                    <div className="flex-container">
                        <div className="flex-item bg-one tilt">
                            <a href="#nothing"> 
                            
                                <span>
                                    Number of DAOS
                                </span> 

                                

                                <div className="text2">
                                    {
                                        toggleValue == '' 
                                        ? 
                                        111 
                                        : 
                                        toggleValue == 'Protocol'
                                        ?
                                        36
                                        :
                                        toggleValue == 'Service'
                                        ?
                                        20
                                        :
                                        toggleValue == 'Grant'
                                        ?
                                        9
                                        :
                                        toggleValue == 'Media'
                                        ?
                                        5
                                        :
                                        toggleValue == 'Social'
                                        ?
                                        15
                                        :
                                        toggleValue == 'Investment'
                                        ?
                                        11
                                        :
                                        toggleValue == 'Platform'
                                        ?
                                        7
                                        :
                                        toggleValue == 'Collector'
                                        ?
                                        8
                                        :
                                        0
                                    }
                                
                                </div> 
                                <div className="text">
                                    from $3,152M
                                </div>
                            
                            </a>
                        </div>
                        <div className="flex-item bg-two tilt">
                            <a href="#nothing"> 
                                <span>
                                    Total AUM (USD)
                                </span> 

                                <div className="text2">
                                    122
                                </div> 
                                <div className="text">
                                    from $3,152M
                                </div></a>
                        </div>
                    </div>

                    {/* <div className="content">
                            <div className="grid">
                                <figure className="effect-romeo">
                                    <img src="../../svgs/money1.svg" alt="img17"/>
                                    <img src="" alt="img17"/>
                                    <figcaption>
                                        <h2>Number of <span>DAO'S</span></h2>
                                        <p>111</p>
                                        <a href="#">View more</a>
                                    </figcaption>			
                                </figure>
                            </div>
                        </div> */}

                        <div className="inner_navs">

                            
                            
                            <div className="filter-block">

                                <button type="button" className={toggleValue == '' && "active_button"} onClick={() => setToggleValue('')} >All</button>
                                <button type="button" className={toggleValue == 'Protocol' && "active_button"} onClick={() => setToggleValue('Protocol')} >Protocol</button>
                                <button type="button" className={toggleValue == 'Service' && "active_button"} onClick={() => setToggleValue('Service')} >Service</button>

                            </div>

                            <div className="filter-block">

                                <button type="button" className={toggleValue == 'Grant' && "active_button"} onClick={() => setToggleValue('Grant')} >Grant</button>
                                <button type="button" className={toggleValue == 'Media' && "active_button"} onClick={() => setToggleValue('Media')} >Media</button>
                                <button type="button" className={toggleValue == 'Social' && "active_button"} onClick={() => setToggleValue('Social')} >Social</button>

                            </div>

                            <div className="filter-block">

                                <button type="button" className={toggleValue == 'Investment' && "active_button"} onClick={() => setToggleValue('Investment')} >Investment</button>
                                <button type="button" className={toggleValue == 'Platform' && "active_button"} onClick={() => setToggleValue('Platform')} >Platform</button>
                                <button type="button" className={toggleValue == 'Collector' && "active_button"} onClick={() => setToggleValue('Collector')} >Collector</button>
                        
                            </div>
                        </div>


                    {
                        toggleValue == ''  
                        ?
                        (
                        <table>
         
                        <tr>
                            <th>NAME</th>
                            <th>CATEGORY</th>
                            <th>AUM (USD)</th>
                            <th>TWITTER FOLLOWERS</th>
                            <th>FOUNDED DATE</th>
                        </tr>


                        {datas.map((data, index) => (

                            <>

                                {/* {setToggleNumber(toggleNumber + 1)} */}

                                <Table 

                                    data={data}

                                />
                            
                            </>

                        ))}
                        

                        </table>
                        
                        )
                        :
                        toggleValue == 'Protocol'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Protocol'
                                    &&
                                    (
                                        
                                        <Table 

                                            data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        :
                        toggleValue == 'Service'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Service'
                                    &&
                                    (
                                        
                                        <Table 

                                            data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        
                        :
                        toggleValue == 'Grant'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Grant'
                                    &&
                                    (
                                        
                                        <Table 

                                            data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        
                        :
                        toggleValue == 'Media'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Media'
                                    &&
                                    (
                                        
                                        <Table 

                                            data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        :
                        toggleValue == 'Social'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Social'
                                    &&
                                    (
                                        <Table 

                                        data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        :
                        toggleValue == 'Investment'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Investment'
                                    &&
                                    (
                                     
                                        <Table 

                                            data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        :
                        toggleValue == 'Platform'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Platform'
                                    &&
                                    (
                                     
                                        <Table 

                                            data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        :
                        toggleValue == 'Collector'  
                        ?
                        (

                        <table>
             
                            <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>AUM (USD)</th>
                                <th>TWITTER FOLLOWERS</th>
                                <th>FOUNDED DATE</th>
                            </tr>
    
                            {
                                
                                datas.map((data) => (

                                
                                    data.Category == 'Collector'
                                    &&
                                    (
                                     
                                        <Table 

                                            data={data}

                                        />
                                    )
                                
    
                            ))
                            }
    
                            </table>
                            
                        )
                        :
                        ''
                    }
                    


                </Row>
            )}
        </>
    );
};

export default HomeScreen;
