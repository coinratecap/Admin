import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { getUserCredentials, clearCredentials } from "utils";

const AdminNavbar = (props) => {
  const userCredentials = getUserCredentials();
  // const user = userCredentials ? userCredentials.data : {};
  const user = {
    first_name: "Wisdom",
    last_name: "Ekpot"
  }

  return (
    <>
      <Navbar className='navbar-top navbar-dark' expand='md' id='navbar-main'>
        <Container fluid>
          <Link
            className='h4 mb-0 text-white text-uppercase d-none d-lg-inline-block'
            to='/'>
            {props.brandText}
          </Link>
          <Form className='navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto'>
            <FormGroup className='mb-0'>
              <InputGroup className='input-group-alternative'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='fas fa-search' />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder='Search' type='text' />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className='align-items-center d-none d-md-flex' navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className='pr-0' nav>
                <Media className='align-items-center'>
                  <span className='avatar avatar-sm rounded-circle'>
                    <img
                      alt='...'
                      src={require("../../assets/img/theme/team-4-800x800.jpg").default}
                    />
                  </span>
                  <Media className='ml-2 d-none d-lg-block'>
                    <span className='mb-0 text-sm font-weight-bold'>
                      Ok o
                      {/* {user.first_name} {user.last_name} */}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-arrow' right>
                <DropdownItem className='noti-title' header tag='div'>
                  <h6 className='text-overflow m-0'>Welcome!</h6>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem href='#pablo' onClick={clearCredentials}>
                  <i className='ni ni-user-run' />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
