import React from 'react';
import Book from './Book.js';
import FancyBook from './FancyBook.js';
import styled, { ThemeProvider } from 'styled-components';

class Table extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            view: false,
        };

        // this.toggleView = this.toggleView.bind(this);
    };

    toggleView = () => {
        this.setState({
            view: !this.state.view,
        });
    }

    render () {


        const { books, removeBook } = this.props;
        const rows = []
        
        if(this.state.view){
            books.forEach((book, index) => {
                rows.push(
                    <Book key={index} book={book} removeBook={removeBook} index={index}></Book>
                );
            });
        } else {
            books.forEach((book, index) => {
            rows.push(
                <FancyBook key={index} book={book}></FancyBook>
            );
            });
        }
        return (
            <div>
                <Heading>Currently Reading:</Heading>
                <Toggle onClick={this.toggleView}>o</Toggle>
                {rows}
            </div>
        )
    }
}

const Heading = styled.h2`
    font-size: 18px;
    color: ${props => props.w8};
    font-weight: normal;
    margin-bottom: 10px;
`
const Toggle = styled.button`
    background-color: ${props => props.theme.w2};
    color: ${props => props.theme.w6};
    padding: 5px;
    width: 40px;
    border: 0;
    font-weight: bold;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.w4};

    :hover {
        cursor: pointer;
        background-color: ${props => props.theme.w3};
        color: ${props => props.theme.w7};
    }
    :active {
        border: 2px solid ${props => props.theme.w5};
        outline: 3px solid ${props => props.theme.w5};
        outline-offset: -1px;
    }
`


export default Table;