import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            pages: "",
            titleInvalid: false,
            authorInvalid: false,
            pagesInvalid: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            [name+"Invalid"]: false,
        });
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        const { title, author, pages } = this.state;

        let pass = true;
        if(!title) {
            this.setState({
                titleInvalid: true,
            });
            pass = false;
        }
        if(!author) {
            this.setState({
                authorInvalid: true,
            });
            pass = false;
        }
        if(!pages || !parseInt(pages) || parseInt(pages) < 0) {
            this.setState({
                pagesInvalid: true,
            });
            pass = false;
        }
        if(!pass){
            return;
        }

        // set into invalid state

        this.props.addBook(title, author, pages);
        this.setState({
            title: "",
            author: "",
            pages: "",
        });
    }

    render() {
        const { title, author, pages } = this.state; 
        // check if invalid

        return (
            <>
                <StyledForm>
                    <Heading>Add a Book:</Heading>
                    <FormGroup>
                        <StyledLabel htmlFor="title">Title:</StyledLabel>
                        <StypedInput invalid={this.state.titleInvalid}  id="title" name="title" value={title} onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <StyledLabel htmlFor="author" >Author:</StyledLabel>
                        <StypedInput invalid={this.state.authorInvalid} id="author" name="author" value={author} onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <StyledLabel htmlFor="pages">Pages:</StyledLabel>
                        <StypedInput invalid={this.state.pagesInvalid} id="pages" name="pages" value={pages} onChange={this.handleChange} />
                    </FormGroup>

                    <AddButton onClick={this.handleSubmit}>Add Book</AddButton>
                </StyledForm>
            </>
        );
    }
}

const StyledForm = styled.form`
    max-width: 400px;
    margin: 0 auto;
`

const Heading = styled.h2`
    margin-top: 40px;
    font-size: 18px;
    color: ${p => p.theme.w8};
    font-weight: normal;
    margin-bottom: 10px;
`

const StyledLabel = styled.label`
    color: ${p => p.theme.w6};
    flex-grow: 1;
`

const StypedInput = styled.input`
    background-color: ${p => p.invalid ? p.theme.r1 : p.theme.w2};
    border: 2px solid;
    border-color: ${p => p.invalid ? p.theme.r2 : p.theme.w4};
    border-radius: 10px;
    height: 40px;
    margin-bottom: 20px;
    :focus {
        background-color: ${p => p.theme.w2};
        border: 2px solid ${p => p.theme.w5};
        outline: 3px solid ${p => p.theme.w5};
        outline-offset: -1px;    
    }
`

const FormGroup = styled.span`
    display: flex;
    align-items: baseline;
`

const AddButton = styled.button`
    background-color: ${p => p.theme.w2};
    color: ${p => p.theme.w7};
    border: 2px solid ${p => p.theme.w4};
    border-radius: 999px;
    display: block;
    margin: 20px auto;
    width: 300px;
    height: 40px;

    :hover {
        background-color: ${p => p.theme.w3};
        color: ${p => p.theme.w8};
        cursor: pointer;
    }
    :focus {
        outline: 3px solid ${p => p.theme.w5};
        outline-offset: -1px;   
    }
`


export default Form;