import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    
    return (
        <footer>

            <Container>
                <Row>
                    {/* padding on the y-axis py */}
                    <Col className='text-center py-3'>
                        Copyright &copy; DAO
                    </Col>
                </Row>
            </Container>

        </footer>
    )

}

export default Footer
