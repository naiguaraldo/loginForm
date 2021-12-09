import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <button>botão</button>
            <div>Teste</div>
            <Container>
                <Row>
                    <Col>
                        <Button>Button com bootstrap</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;