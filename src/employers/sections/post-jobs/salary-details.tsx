import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup,CustomInput, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'
type SalaryDetailProps = {
    // tabs: new (props: any) => React.Component
}
const SalaryDetails: FunctionComponent<SalaryDetailProps> = ({children}) => {
    return (
        <Container>
            <Row>
                Check 222222222222222
            </Row>
            {children}
            <Form className="mt-5">
                <Row>
                    <Col md={{ size: '9', offset: '2' }} className="text-left"  >
                        <Row>
                            <Col >
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Salary Type </Label>
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
                            <Label for="exampleEmail" className="text-left">Salary Range </Label>
                            </Col>
                       
                        </Row>
                        <Row>
                            <Col md="2" sm="12">

                            <FormGroup>
                                   
                                    <Input className="form-input" type="select" name="select" id="exampleSelect">
                                        <option>USD</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>

                            </Col>
                            <Col md="3" sm="6" className="text-center">

                            <FormGroup>
                                    
                                    <Input className="form-input" type="text"  name="Minimun" id="Minimun" placeholder="Minimun" />
                                    <Label for="exampleEmail" className="text-left">Minimun </Label>
                                </FormGroup>
                            </Col>
                            <Col md="3" sm="6" className="text-center">
                            <FormGroup >
                                    
                                    <Input className="form-input" type="text"  name="Maximun" id="Maximun" placeholder="Maximun" />
                                    <Label for="exampleEmail" className="text-left">Maximun </Label>
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row>
                     
                            <Col>
                            <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Display Salary" />
                            </Col>
                        </Row>

                 

                    </Col>
                </Row>




            </Form>

        </Container>

    );
}

export default SalaryDetails;