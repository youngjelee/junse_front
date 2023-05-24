import Form from 'react-bootstrap/Form';
import React, { useEffect } from 'react';

function FormText(props) {
  
  useEffect(() => {
    console.log(props.children);
  }, []);

  
  return (
    <>
      {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}
      <Form.Control
        type="input"
        // id="inputPassword5"
        // aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        {/* Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji. */}
      </Form.Text>
    </>
  );
}

export default FormText;