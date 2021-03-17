import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import { Table, FormControl, InputGroup } from "react-bootstrap";
import RefreshIcon from "@material-ui/icons/Refresh";
import Divider from "@material-ui/core/Divider";
import "../../css/dashboard.css";

import Nav from "./../../reusables/Nav";

class Home extends Component {
  state = {
    books: [
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
      {
        sn: 1,
        subject: "Sample Subject",
        title: "title",
        isbn: 3445,
        level: "level",
        type: "learners",
        publisher: "publisher",
        authors: "author",
      },
    ],
    filtered: [],
  };

  //   componentDidMount() {
  //     axios
  //       .get("http://localhost/wh-admin-api/api/bookings/read.php")
  //       .then((response) => {
  //         console.log(response);
  //         if (response.data.bookings) {
  //           this.setState({ bookings: response.data.bookings });
  //           console.log(response.data.bookings);
  //         }
  //       });
  //   }

  //   debounce = (func, wait, immediate) => {
  //     var timeout;
  //     return (...args) => {
  //       const later = () => {
  //         timeout = null;
  //         if (!immediate) func.apply(this, args);
  //       };
  //       const callNow = immediate && !timeout;
  //       clearTimeout(timeout);
  //       timeout = setTimeout(later, wait);
  //       if (callNow) func.apply(this, args);
  //     };
  //   };

  //   searchInputListener = debounce((e) => {
  //     const content = e.target.value.toLowerCase();
  //     const filtered = this.state.bookings.filter((booking) => {
  //       return JSON.stringify(booking).toLowerCase().includes(content)
  //         ? booking
  //         : null;
  //     });
  //     this.setState({ filtered });
  //   }, 100);

  LoadBooks = () => {
    return (
      <Paper
        elevation={3}
        id="surface whole-table"
        style={{ overflowY: "auto" }}
      >
        <div id="books-table-header">
          <h3>Books</h3>
          <div>
            <InputGroup>
              <FormControl
                type="search"
                placeholder="search"
                className="mr-sm-2"
                //   onChange={(e) => {
                //     this.searchInputListener(e);
                //   }}
              />
            </InputGroup>
          </div>
          <div>
            <RefreshIcon style={{ color: "grey" }} />
          </div>
        </div>
        <Divider />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Subject</th>
              <th>Title</th>
              <th>ISBN</th>
              <th>Level</th>
              <th>Type</th>
              <th>Publisher</th>
              <th>Authors</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filtered.length
              ? this.state.filtered.map((book, index) => {
                  return (
                    <tr key={index}>
                      <td>{book.sn}</td>
                      <td>{book.subject}</td>
                      <td>{book.title}</td>
                      <td>{book.isbn}</td>
                      <td>{book.level}</td>
                      <td>{book.type}</td>
                      <td>{book.publisher}</td>
                      <td>{book.authors}</td>
                    </tr>
                  );
                })
              : this.state.books && this.state.books.length
              ? this.state.books.map((book, index) => {
                  return (
                    <tr key={index}>
                      <td>{book.sn}</td>
                      <td>{book.subject}</td>
                      <td>{book.title}</td>
                      <td>{book.isbn}</td>
                      <td>{book.level}</td>
                      <td>{book.type}</td>
                      <td>{book.publisher}</td>
                      <td>{book.authors}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </Paper>
    );
  };

  render() {
    return (
      <div id="dashboard">
        <Nav />
        {this.LoadBooks()}
      </div>
    );
  }
}

export default Home;
