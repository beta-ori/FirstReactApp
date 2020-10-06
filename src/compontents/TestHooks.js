import React, {useState} from 'react'
import {Button, Form, Input, FormGroup, Label} from 'reactstrap'


function TestHooks() {

    const [name, setName] = useState(
        {
            firstName: '',
            lastName: ''
        }
    );

    function handleForm(e) {
        console.log(e);
    }

    return (
        <div>
            <h1>Name: {name.firstName} {name.lastName}</h1>
            <Form onSubmit={ e => handleForm(e)}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input type='text'
                    value={name.firstName}
                    onChange={ e => setName({ ...name, firstName: e.target.value })} />
                </FormGroup>

                <FormGroup>
                    <Label>Last Name</Label>
                    <Input type='text'
                    value={name.lastName}
                    onChange={ e => setName({ ...name, lastName: e.target.value })} />
                </FormGroup>

                <input type="submit" value="submit"/>
            </Form>
           
        </div>
    )
}

export default TestHooks
