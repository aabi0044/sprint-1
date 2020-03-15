import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type ShortListedProps = {
    // tabs: new (props: any) => React.Component
}
const ShortListed: FunctionComponent<ShortListedProps> = ({children}) => {
    return (
        <Container>
            {children}
            <h3>
            ShortListed
            </h3>

        </Container>

    );
}

export default ShortListed;