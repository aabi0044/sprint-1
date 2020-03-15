import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type JobLocationProps = {
    // tabs: new (props: any) => React.Component
}

const JobLocation: FunctionComponent<JobLocationProps> = ({children}) => {
    return (
        <Container>
            <Form className="mt-5">
                {children}
                <Row>
                    <Col md={{ size: '9', offset: '2' }} className="text-left"  >
                        <Row>
                            <Col md="6" sm="12">
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Location <b style={{ color: 'red' }}>*</b></Label>
                                    <Input className="form-input" type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="6" sm="12">
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">City/District <b style={{ color: 'red' }}>*</b></Label>
                                    <Input className="form-input" type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"  className="checkbox"/>{' '}
                                      Willing to sponsor work visa?
                                        </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col>
                            <span className="visa-note">  Please select only if you can sponsor work visa for this job posting.</span>
                            </Col>
                        </Row>

                    </Col>
                </Row>




            </Form>

        </Container>

    );
}

export default JobLocation;