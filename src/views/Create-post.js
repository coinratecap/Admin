import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";
import "./styles/post.css";

import Header from "components/Headers/Header.js";

const CreatePost = () => {
  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <Col md='12'>
            <Card className='bg-secondary shadow border-0'>
              <CardBody className='px-lg-5 py-lg-5'>
                <div className='text-center text-muted mb-4'>
                  <small>Create Blog Post</small>
                </div>
                <Form role='form'>
                  <FormGroup>
                    <InputGroup className='input-group-alternative'>
                      <Input
                        placeholder='Post Title'
                        type='text'
                        autoComplete='new-password'
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <div class='row'>
                      <div class='col-md-6'>
                        <InputGroup className='input-group-alternative mb-3'>
                          <Input type='select' bsSize='md'>
                            <option selected disabled>
                              Category
                            </option>
                            <option>Cryptocurrency</option>
                            <option>Social</option>
                            <option>Economy</option>
                            <option>Technology</option>
                          </Input>
                        </InputGroup>
                      </div>

                      <div class='col-md-6'>
                        <InputGroup className='input-group-alternative mb-3'>
                          <Input type='select' bsSize='md'>
                            <option selected disabled>
                              Status
                            </option>
                            <option>Draft</option>
                            <option>Publish</option>
                          </Input>
                        </InputGroup>
                      </div>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className='input-group-alternative mb-3'>
                      <Input
                        type='textarea'
                        placeholder='Short Post Content'
                        name='text'
                        id='exampleText'
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <CKEditor
                      editor={ClassicEditor}
                      data=''
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                    />
                  </FormGroup>

                  <div className='text-center'>
                    <Button className='mt-4' color='primary' type='button'>
                      Create Post
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreatePost;
