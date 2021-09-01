import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import DAOScreen from "./screens/DAOScreen";

const App = () => {
    return (
        <Router>
            <Header />
            <div id="particles">

                <div className="overlay"></div>
                <div id="intro"></div>

            </div>
            <main className="py-3">
                <Container>
                    <Route path='/' component={HomeScreen} exact/>


                    <Route path='/dao/:id' component={DAOScreen} />
                </Container>
            </main>

            <Footer />
        </Router>
    );
};

export default App;
