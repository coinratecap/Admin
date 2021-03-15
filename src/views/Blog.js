import React, { useEffect, useState } from "react";

import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// import { useAlert } from "react-alert";
import Header from "components/Headers/Header.js";
import axiosClient from "services/axiosClient";

const Blog = () => {
  // const alert = useAlert();

  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/v1/blog/all-post")
      .then((response) => {
        setBlogPost(response.data.data);
      })
      .catch((error) => {
        console.log("ERROR =========>", error.response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Blog Posts</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Views</th>
                    <th scope='col'>Likes</th>
                    <th scope='col'>Comments</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Published Date</th>
                    <th scope='col'>Last Edited</th>
                    <th scope='col' />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>
                      <Media className='align-items-center'>
                        <Media>
                          <span className='mb-0 text-sm'>Bitcoin sky rockets</span>
                        </Media>
                      </Media>
                    </th>
                    <td>323</td>
                    <td>3</td>
                    <td>56</td>
                    <td>
                      <Badge color='' className='badge-dot mr-4'>
                        <i className='bg-warning' />
                        Draft
                      </Badge>
                    </td>
                    <td>Cryptocurrency</td>
                    <td>12/12/2020</td>
                    <td>12/23/2020</td>

                    <td className='text-right'>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className='btn-icon-only text-light'
                          href='#pablo'
                          role='button'
                          size='sm'
                          color=''
                          onClick={(e) => e.preventDefault()}>
                          <i className='fas fa-ellipsis-v' />
                        </DropdownToggle>
                        <DropdownMenu className='dropdown-menu-arrow' right>
                          <DropdownItem href='#pablo' onClick={(e) => e.preventDefault()}>
                            Publish
                          </DropdownItem>
                          <DropdownItem href='#pablo' onClick={(e) => e.preventDefault()}>
                            Edit
                          </DropdownItem>
                          <DropdownItem href='#pablo' onClick={(e) => e.preventDefault()}>
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  {blogPost.length === 0 && (
                    <tr>
                      <td colSpan={8} className='text-center'>
                        No data
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

              <CardFooter className='py-4'>
                <nav aria-label='...'>
                  <Pagination
                    className='pagination justify-content-end mb-0'
                    listClassName='justify-content-end mb-0'>
                    <PaginationItem className='disabled'>
                      <PaginationLink
                        href='#pablo'
                        onClick={(e) => e.preventDefault()}
                        tabIndex='-1'>
                        <i className='fas fa-angle-left' />
                        <span className='sr-only'>Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='active'>
                      <PaginationLink href='#pablo' onClick={(e) => e.preventDefault()}>
                        1
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href='#pablo' onClick={(e) => e.preventDefault()}>
                        <i className='fas fa-angle-right' />
                        <span className='sr-only'>Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
