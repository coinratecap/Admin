import React from "react";

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
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
} from "reactstrap";
import { useFormik } from "formik";
import { useAlert } from "react-alert";
import axiosClient from "services/axiosClient";
import { saveUserCredentials, saveToken } from "utils";
import { useHistory } from "react-router-dom";
import Header from "components/Headers/Header.js";

const Exchanges = () => {
    const alert = useAlert();
    const history = useHistory();

    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Users</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Volume</th>
                                        <th scope="col">Trust Rank</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">Number of coins</th>
                                        <th scope="col">Centralized</th>
                                        <th scope="col">Date Created</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Binance
                        </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <th scope="row">
                                            <Media className="align-items-center">

                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        0.23%
                        </span>
                                                </Media>
                                            </Media>
                                        </th>

                                        <td> 1</td>
                                        <td> <a href="#">http://binanceexchange.com</a> </td>

                                        <td>30</td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-success" />
                      True
                    </Badge></td>
                                        <td>
                                           
                      12/12/2020 12:30pm
                  
                                        </td>




                                        <td className="text-right">
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        View Details
                                                </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        Disable
                        </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>




                                </tbody>
                            </Table>











                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination
                                        className="pagination justify-content-end mb-0"
                                        listClassName="justify-content-end mb-0"
                                    >
                                        <PaginationItem className="disabled">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                tabIndex="-1"
                                            >
                                                <i className="fas fa-angle-left" />
                                                <span className="sr-only">Previous</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="active">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                1
                    </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="fas fa-angle-right" />
                                                <span className="sr-only">Next</span>
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

export default Exchanges;
