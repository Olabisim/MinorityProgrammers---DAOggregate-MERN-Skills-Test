import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { listDataDetails } from "../actions/dataActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import '../css/card_design.css';
import '../css/go_back.css';

// const {match } = props className=

const DAOScreen = ({ match }) => {


    const dispatch = useDispatch();
    const dataDetails = useSelector((state) => state.dataDetails);
    const { loading, error, data } = dataDetails;

    console.log(match.params.id);
    useEffect(() => {
        
        console.log(dispatch(listDataDetails(match.params.id)));

    }, [dispatch, match]);

    return (
        <>
            {/* <div className="back-button">
                <div className="arrow-wrap">
                    <span className="arrow-part-1"></span>
                    <span className="arrow-part-2"></span>
                    <span className="arrow-part-3"></span>
                </div>
            </div> */}
            
            {/* <Link className="btn my-3" to="/">
                
                Go Back
            </Link> */}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <section className="content yobject-marked" style={{width: '100%'}}>
				
                        <div className="box bg-2">
                            <button className="button button--naira button--border-thick button--text-thick button--text-upper button--size-s">
                            <Link className="btn my-3" to="/">
                                <i className="button__icon icon icon-download"></i>
                                <span>
                                    Go Back
                                </span>
                            
                            </Link>
                            </button>
                        </div>
			        </section>
                      
                            {/* <a href={`/api/datas/${data._id}`} alt="" > */}
                                <div className="flex-screen">
                                    <div className="screen">
                                        <div className="content">
                                            
                                            <h2><a href={`/api/datas/${data._id}`} alt="" >{data.Name}</a></h2>
                                            <h2><a href={`/api/datas/${data._id}`} alt="" >{data.Category}</a></h2>
                                            
                                        </div>
                                    </div>

                                    <div className="screen">
                                        <div className="content">
                                            
                                            <a href={`/api/datas/${data._id}`} alt="" >${data.AUM}</a>

                                            <a href={`/api/datas/${data._id}`} alt="" >{data.Followers}</a>
                                            
                                        </div>
                                    </div>

                                    <div className="screen">
                                        <div className="content">
                                            
                                            <a href={`/api/datas/${data._id}`} alt="" >${data.AUM}</a>

                                            <a href={`/api/datas/${data._id}`} alt="" >{data.Followers}</a>

                                            <a href={`/api/datas/${data._id}`} alt="" >{data.Founded}</a>
                                            
                                        </div>
                                    </div>
                                </div>

                                                            
                                <a href={data.Website} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px', color: "white"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 hover:text-yellow-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                    </svg>
                                </a>

                            

                            

                                <a href={data.Twitter} target="_blank" rel="noreferrer" alt="twitter" style={{width: '30px', height: '100px'}}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-6 w-6 hover:text-yellow-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#fff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                </a>
                                
                            
{/*                                         
                    
                        <div className="screen">
                            <div className="content">
                                <h2>New York</h2>
                            </div>
                        </div>
                        <div className="screen">
                            <div className="content">
                                <h2>New York</h2>
                            </div>
                        </div> */}
                </>
            )}
        </>
    );
};

export default DAOScreen;
