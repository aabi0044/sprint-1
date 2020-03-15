import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type RejectedProps = {
    // tabs: new (props: any) => React.Component
}
const Rejected: FunctionComponent<RejectedProps> = ({children}) => {
    return (
        <Container>
            {children}
            <h3>
              UnProcessed
            </h3>

        </Container>

    );
}

export default Rejected;