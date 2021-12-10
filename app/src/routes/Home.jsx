import React from 'react';
import { Button, Container, Row, Form, FormLabel, InputGroup } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome..." />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>E-mail:</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail..." />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FormLabel> CPF:</FormLabel>
                            <Form.Control type="text" placeholder="Digite seu CPF..." />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox />
                                <span class="d-flex align-items-center px-2">Declaro que li os termos e condições.</span>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button variant="primary">Enviar</Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    );
}

export default Home;