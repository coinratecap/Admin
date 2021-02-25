import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import { useFormik } from "formik";
import { useAlert } from 'react-alert';
import axiosClient from "services/axiosClient";
import { saveUserCredentials } from "utils";
import { useHistory } from "react-router-dom";

const Login = () => {
  const alert = useAlert();
  const history = useHistory();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, {setSubmitting}) => {
      axiosClient
        .post("/admin/login", {...values})
        .then((response) => {
          saveUserCredentials(response.data);
          history.push('/admin')
        })
        .catch((error) => {
          setSubmitting(false);
          const errMessage = error.response.data.msg || error.message;
          alert.error(errMessage);
        });
    },
  });

  return (
    <>
      <Col lg='5' md='7'>
        <Card className='bg-secondary shadow border-0'>
          <CardBody className='px-lg-5 py-lg-5'>
            <div className='text-center text-muted mb-4'>
              <small>Sign in with credentials</small>
            </div>
            <Form role='form' onSubmit={loginForm.handleSubmit}>
              <FormGroup className='mb-3'>
                <InputGroup className='input-group-alternative'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='ni ni-email-83' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Email'
                    type='email'
                    id='email'
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    autoComplete='new-email'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className='input-group-alternative'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='ni ni-lock-circle-open' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Password'
                    type='password'
                    id='password'
                    onChange={loginForm.handleChange}
                    autoComplete='new-password'
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className='custom-control custom-control-alternative custom-checkbox'>
                <input
                  className='custom-control-input'
                  id=' customCheckLogin'
                  type='checkbox'
                />
                <label className='custom-control-label' htmlFor=' customCheckLogin'>
                  <span className='text-muted'>Remember me</span>
                </label>
              </div> */}
              <div className='text-center'>
                <Button
                  disabled={loginForm.isSubmitting}
                  className='my-4'
                  color='primary'
                  type='submit'>
                  Sign in
                  {loginForm.isSubmitting && <Spinner size='sm' className='ml-1' />}
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className='mt-3'>
          <Col xs='6'>
            <a className='text-light' href='#pablo' onClick={(e) => e.preventDefault()}>
              <small>Forgot password?</small>
            </a>
          </Col>
          {/* <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col> */}
        </Row>
      </Col>
    </>
  );
};

export default Login;
