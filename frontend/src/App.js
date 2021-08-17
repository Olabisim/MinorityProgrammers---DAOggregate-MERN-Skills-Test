import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
    return (
        <Router>
            <Header />
            <div id="particles">
            <div class="overlay"></div>
            <div id="intro">


                {/* <h1>3D Animated<br />background</h1>
                <p>Background particle systems</p> */}


            </div>
            </div>
            <main className="py-3">
                <Container>
                    {/* <HomeScreen /> */}
                    <Route path='/' component={HomeScreen} exact/>

                    {/* the :id is gotten from the product.js component */}

                    <Route path='/product/:id' component={ProductScreen} />
                </Container>
            </main>

            <Footer />
        </Router>
    );
};

export default App;
