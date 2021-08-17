import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { listDataDetails } from "../actions/dataActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

// const {match } = props

const ProductScreen = ({ match }) => {


    const dispatch = useDispatch();
    const dataDetails = useSelector((state) => state.dataDetails);
    const { loading, error, data } = dataDetails;

    console.log(match.params.id);
    useEffect(() => {
        
        console.log(dispatch(listDataDetails(match.params.id)));

    }, [dispatch, match]);

    return (
        <>
            <Link className="btn my-3" to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <Row>
                        <Col md={6}>
                            {/* the meaning of fluid is to keep the pic front passing it's container */}

                            <Image
                                src={data.image}
                                alt={data.name}
                                fluid
                            />
                        </Col>

                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{data.name}</h3>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Rating
                                        value={data.rating}
                                        text={`${data.numReviews} reviews`}
                                    />
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Price: ${data.price}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Description: ${data.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price: </Col>
                                            <Col>
                                                <strong>
                                                    ${data.price}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status: </Col>
                                            <Col>
                                                {data.countInStock > 0
                                                    ? "In Stock"
                                                    : "Out of Stock"}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button
                                            className="btn-block"
                                            type="button"
                                            disabled={data.countInStock <= 0}
                                        >
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
};

export default ProductScreen;
