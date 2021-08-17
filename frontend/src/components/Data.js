import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Rating from "./Rating";


//const {product} = props;

const Product = ({ name, category, followers }) => {

    return (

        <table>
            
            <tr>

                <td>{name}</td>

                <td>{category}</td>

                <td>{followers}</td>

            </tr>

        </table>

       
        // <Card className="my-3 p-3 rounded">

        //     <Link to={`/datas/${data._id}`}>
        //         <Card.Img src={data.Logo} variant="top" />
        //     </Link>

        //     <Card.Body>
        //         <Link to={`/datas/${data._id}`}>
        //             <Card.Title as="div">
        //                 <strong>{data.Logo}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.Name}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.Category}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.Followers}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.AUM}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.Founded}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.Website}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.Twitter}</strong>
        //             </Card.Title>
        //             <Card.Title as="div">
        //                 <strong>{data.Twitter_handle}</strong>
        //             </Card.Title>
        //         </Link>

        //         <Card.Text as="div">
                   


        //         </Card.Text>

        //     </Card.Body>
        // </Card>
    );
};

export default Product;
