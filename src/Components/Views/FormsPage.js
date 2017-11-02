import React from 'react';

import {
  TextField
} from 'material-ui';

import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';


const Forms = () => {
  return (
    <div>
      <TextField 
        hintText='Hint Text for material-ui'
      />
      <Form>
        <FormGroup>
          <TextField
          hintText='material-ui inside reactstrap'
          />
        </FormGroup>
        <FormGroup>
          <Label>Form with reactstrap</Label>
          <Input placeholder='placeholder'/>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Forms;