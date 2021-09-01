import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/footer.css'


const Footer = () => {
    
    return (
        <footer>

            <Container>
                <Row>
                    {/* padding on the y-axis py */}
                    <Col className='text-center py-3' style={{ color: "white", marginTop: "70px", marginBottom: "20px" }}>
                        Copyright &copy; DAO
                    </Col>
                </Row>
            </Container>

        </footer>
    )

}

export default Footer
