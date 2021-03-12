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
import { useFormik } from "formik";
import "./styles/post.css";

import Header from "components/Headers/Header.js";

const CreatePost = () => {
  const form = useFormik({
    initialValues: {
      title: "",
      category: "",
      status: "",
      shortDescription: "",
      description: "",
    },
    onSubmit: (formData) => {
      console.log("==========FORMDATA======>", formData);
    },
  });

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
                <Form role='form' onSubmit={form.handleSubmit}>
                  <FormGroup>
                    <InputGroup className='input-group-alternative'>
                      <Input
                        placeholder='Post Title'
                        type='text'
                        id='title'
                        value={form.values.title}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <div className='row'>
                      <div className='col-md-6'>
                        <InputGroup className='input-group-alternative mb-3'>
                          <Input
                            type='select'
                            bsSize='md'
                            id='category'
                            value={form.values.category}
                            onChange={form.handleChange}>
                            <option value=''>Category</option>
                            <option>Cryptocurrency</option>
                            <option>Social</option>
                            <option>Economy</option>
                            <option>Technology</option>
                          </Input>
                        </InputGroup>
                      </div>

                      <div className='col-md-6'>
                        <InputGroup className='input-group-alternative mb-3'>
                          <Input
                            type='select'
                            bsSize='md'
                            id='status'
                            value={form.values.status}
                            onChange={form.handleChange}>
                            <option disabled>Status</option>
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
                        id='shortDescription'
                        value={form.values.shortDescription}
                        onChange={form.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <CKEditor
                      editor={ClassicEditor}
                      data='<p>Hello from CKEditor 5!</p>'
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                      }}
                    />
                  </FormGroup>

                  <div className='text-center'>
                    <Button className='mt-4' color='primary' type='submit'>
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
