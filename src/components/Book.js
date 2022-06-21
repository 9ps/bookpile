import React from 'react';
import styled from 'styled-components';

const Book = (props) => {
    const {book, removeBook, index} = props;
    return (
        <Row>
            <LeftGroup>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
            </LeftGroup>
            <Pages>{book.pages + " Pages"}</Pages>
            <RemoveButton onClick={() => removeBook(index)}>x</RemoveButton>
        </Row>
    );
}

const Row = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${props => props.theme.w2};
    color: ${props => props.theme.w7};
`
const LeftGroup = styled.span`
    align-self: flex-start;
    flex-grow: 1;
`

const Title = styled.p`
    font-weight: bold;
`
const Author = styled.p`
`

const Pages = styled.span`
    background-color: ${props => props.theme.w2};
    padding: 5px 20px 5px 20px;
    border-radius: 999px;
    margin: 0px 10px;

`
const RemoveButton = styled.button`
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
    :focus {
        border: 2px solid ${props => props.theme.w5};
        outline: 3px solid ${props => props.theme.w5};
        outline-offset: -1px;
    }
`


export default Book;