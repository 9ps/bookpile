import React from 'react';
import {Backing, Dialog, FormGroup, StyledForm, Header, Heading, StyledLabel, StypedInput, AddButton, CloseButton} from './Form.styles.js';

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

    stopPropagation(e) {
        e.stopPropagation();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            [name + "Invalid"]: false,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, author, pages } = this.state;

        let pass = true;
        if (!title) {
            this.setState({
                titleInvalid: true,
            });
            pass = false;
        }
        if (!author) {
            this.setState({
                authorInvalid: true,
            });
            pass = false;
        }
        if (!pages || !parseInt(pages) || parseInt(pages) < 0) {
            this.setState({
                pagesInvalid: true,
            });
            pass = false;
        }
        if (!pass) {
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
            <Backing onClick={() => this.props.flipModal()}>
                <Dialog open onClick={this.stopPropagation}>
                        <Header>
                            <Heading>Add/Edit Book</Heading>
                            <CloseButton onClick={this.props.flipModal}>x</CloseButton>
                        </Header>
                    <StyledForm>
                        <FormGroup>
                            <StyledLabel htmlFor="title">Title:</StyledLabel>
                            <StypedInput invalid={this.state.titleInvalid} id="title" name="title" value={title} onChange={this.handleChange} />
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
                </Dialog>
            </Backing>
        );
    }
}



export default Form;