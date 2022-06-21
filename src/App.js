import './App.css';
import React from 'react';
import Table from './components/Table';
import Form  from './components/Form';
import Outline from './components/Outline';
import styled, { ThemeProvider } from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      pages: 0
    }

    this.removeBook = this.removeBook.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  removeBook(index = -1) {
    const bookArr = this.state.books;
    if (index > bookArr.length || index < 0) {
      console.log(index, "invalid remove index");
      return 0;
    }
    bookArr.splice(index, 1);

    this.setState({
      books: bookArr,
    });
  }

  addBook(title, author, pages) {
    const pagesInt = parseInt(pages) || 0;
    let bookArr = this.state.books;
    let newBook = {
      title: title,
      author: author,
      pages: pagesInt,
    };

    bookArr.push(newBook);

    this.setState({
      books: bookArr,
    })
  }


  render() {
    return (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Title>Book App</Title>
            <Outline books={this.state.books} />
            <Table books={this.state.books} removeBook={this.removeBook} />
            <Form addBook={this.addBook} />
          </Wrapper>
      </ThemeProvider>
    );

  }
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
text-align: center;
font-size: 24px;
font-weight: 500;
margin: 10px;
color: ${props => props.theme.w8};
`
const theme = {
  w1: "#F1F3F5",
  w2: "#DEE2E6",
  w3: "#CED4DA",
  w4: "#ADB5BD",
  w5: "#868E96",
  w6: "#495057",
  w7: "#343A40",
  w8: "#292E32",
  r1: "#D7CAD0",
  r2: "#AF3E4D",
}


export default App;
