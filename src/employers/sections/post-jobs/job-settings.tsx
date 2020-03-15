import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'
type JobSettingProps = {
    // tabs: new (props: any) => React.Component
}
const JobSettings:FunctionComponent<JobSettingProps> = ({children}) => {
    return (
        <Container>
            <Row className="bg-primary">
                Check 42342343
            </Row>
            {children}
            <Form className="mt-5">
                <Row>
                    <Col md={{ size: '9', offset: '2' }} className="text-left"  >
                        <Row>
                            <Col md="6" sm="12">

                                <Label for="exampleEmail" className="text-left">Send applications to : </Label>
                            </Col>

                        </Row>
                        <Row>
                            <Col md="6" sm="12">
                            <FormGroup >
                                        <Input type="text" className="form-input" />
                                </FormGroup>
                            </Col>
                            <Col md="6" sm="12">
                            <FormGroup >
                                        <Input type="text" className="form-input" />
                                </FormGroup>
                            </Col>
                        </Row>
                       

                        <Row>
                            <Col md="6" sm="12">
                          <Row>
                              <Col md="12">
                              <Label for="exampleEmail" className="text-left">Job should be active for : </Label>
                              </Col>
                              <Col md="12" className="mt-3">
                              <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"  className="checkbox"/>{' '}
                                      Maximum 30 days
                                        </Label>
                                </FormGroup>
                              </Col>
                              <Col md="12" className="mt-3">
                              <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"  className="checkbox"/>{' '}
                                      Until
                                        </Label>
                                </FormGroup>
                              </Col>
                          </Row>
                            </Col>
                            <Col md="6" sm="12">
                            <Row>
                            <Col md="12">
                            <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Send Auto-Email to Applicatns</Label>
                                    <Input className="form-input" type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                              </Col>
                              <Col md="12" >
                              <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"  className="checkbox"/>{' '}
                                    Send email on applications
                                        </Label>
                                </FormGroup>
                              </Col>
                            </Row>
                            </Col>
                        </Row>
                       

                    </Col>
                </Row>




            </Form>

        </Container>

    );
}

export default JobSettings;