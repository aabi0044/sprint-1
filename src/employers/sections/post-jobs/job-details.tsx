import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type JobDetailsProps = {
    // tabs: new (props: any) => React.Component
}
const JobDetails: FunctionComponent<JobDetailsProps> = ({children}) => {
    return (
        <Container>
            {children}
            <Form className="mt-5">
                <Row>
                    <Col md={{ size: '9', offset: '2' }} className="text-left"  >
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Job Title <b style={{ color: 'red' }}>*</b></Label>
                                    <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="Enter Job Title" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Job Description <b style={{ color: 'red' }}>*</b></Label>
                                    <Input className="form-input" type="textarea" rows="4" name="jobTitle" id="job-title" placeholder="Enter Job Description" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Job Details </Label>
                                    <Input className="form-input" type="textarea" rows="4" name="jobTitle" id="job-title" placeholder="Enter Job Details" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6" sm="12" >
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Employment type <b style={{ color: 'red' }}>*</b></Label>
                                    <Input className="form-input" type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="6" sm="12" >
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Year of experience <b style={{ color: 'red' }}>*</b></Label>
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
                            <Col md="6" sm="12" >
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Job Industry <b style={{ color: 'red' }}>*</b></Label>
                                    <Input className="form-input" type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="6" sm="12" >
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Department /Function <b style={{ color: 'red' }}>*</b></Label>
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
                    </Col>

                </Row>

        
         
            </Form>

        </Container>

    );
}

export default JobDetails;