import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Data from "../components/Data";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listDatas } from "../actions/dataActions";
import '../css/two_divs.css'


const HomeScreen = () => {

    const [toggleValue, setToggleValue] = useState('')

    const dispatch = useDispatch();

    const dataList = useSelector((state) => state.dataList);
    const { loading, error, datas } = dataList;


    useEffect(() => {

        dispatch(listDatas());

    }, [dispatch]);

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
                                    177
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

                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('')} >All</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Protocol')} >Protocol</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Service')} >Service</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Grant')} >Grant</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Media')} >Media</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Social')} >Social</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Investment')} >Investment</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Platform')} >Platform</button>
                        <button type="button" className="btn btn-primary" onClick={() => setToggleValue('Collector')} >Collector</button>
                        

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


                        {datas.map((data) => (

                            <tr>

                                <td>{data.Name}</td>

                                <td>
                                    {data.Category}
                                </td>

                                <td>${data.AUM}</td>

                                <td>{data.Followers}</td>

                                <td>{data.Founded}</td>

                                <td >
                                    
                                    <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px', color: "white"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                        </svg>
                                    </a>

                                </td>

                                <td>

                                    <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="#fff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                    
                                </td>
                                                   
                            </tr>

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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
                                    <tr>
    
                                    <td>{data.Name}</td>
    
                                    <td>
                                        {data.Category}
                                    </td>
    
                                    <td>${data.AUM}</td>
    
                                    <td>{data.Followers}</td>
    
                                    <td>{data.Founded}</td>
    
                                    <td >
                                        
                                        <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
    
                                    </td>
    
                                    <td>
    
                                        <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        
                                    </td>
                                                       
                                    </tr>
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
