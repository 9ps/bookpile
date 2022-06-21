import React from 'react';
import styled from 'styled-components';

const Outline = (props) => {

    let totalPages = 0;

    props.books.forEach(book => {
        totalPages += parseInt(book.pages);
        });

    return (
        <Wrapper>
        <span>Total Pages: </span>
        <span>{totalPages}</span>
        </Wrapper>
    );
}

export default Outline;

const Wrapper = styled.div`
    background-color: ${props => props.theme.w2};
    padding: 20px 10px;
    border-radius: 10px;
    margin-bottom: 20px;
`

