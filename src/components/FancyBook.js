import React from 'react';
import styled from 'styled-components';

class FancyBook extends React.Component  {
    constructor(props){
        super(props);

        this.state = {
            height: "",
            shift: "",
            font: "",
            cols: [],
            text: [],
        }
    }

    componentDidMount() {
        const index = this.props.index;
        const height = parseInt(30 + Math.min(this.props.book.pages / 10, 50));
        const shift = Math.floor(Math.random() * 50);    
        const font = fonts[index % 3];
        const lightDark = [index % 5, (backing[0].length - index) % 5];
        let cols = [];
        let text = [];
        
        for(let i = 0; i < 3; i++){
            let r = Math.round(Math.random());
            cols.push(backing[r][lightDark[r]], border[r][lightDark[r]]);
            if(i) {
                text.push(r);
            }
        }
        
        this.setState({
            height: height,
            shift: shift,
            font: font,
            cols: cols,
            text: text,
        });
    }


    nudgeBook = () => {
        const rand = Math.floor((Math.random() - 0.5 ) * 20);
        const shift = this.state.shift + rand;
        this.setState({
            shift: shift,
        });
    }
    render() {
        const {height, font, shift, cols, text} = this.state;
        const {title, author} = this.props.book;
        return (
            <Cover height={height + "px"} color={[cols[0], cols[1]]} font={font} shift={shift + "px"} onClick={this.nudgeBook}>
                <Author color={[cols[2], cols[3]]} text={text[0]}>{author.split(" ").pop()}</Author>
                <Title color={[cols[4], cols[5]]} text={text[1]}>{title}</Title>
            </Cover>
            );
        }
    }

const Cover = styled.div`
    display: flex;
    align-items: center;
    
    background-color: ${p => p.color[0]};
    border-top: 0.5em solid ${p => (p.color[1])};
    border-bottom: 0.5em solid ${p => (p.color[1])};
    font-family: ${p => p.font};
    margin: 0 auto;
    transform: translateX(${p => p.shift});

    max-width: 500px;
    height: ${props => props.height};
    border-radius: 0.5em;

    :hover {
        cursor: pointer;
    }
`
const Section = styled.span`
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    font-family: inherit;
    color: ${p => p.text ? p.theme.w1 : p.theme.w8 };
`

const Author = styled(Section)`
    background-color: ${p => p.color[0]};
    border-top: 0.5em solid ${p => p.color[1]};
    border-bottom: 0.5em solid ${p => p.color[1]};
    margin-left: 2em;
`
const Title = styled(Section)`
    flex-grow: 1;
    background-color: ${p => p.color[0]};
    border-top: 0.5em solid ${p => p.color[1]};
    border-bottom: 0.5em solid ${p => p.color[1]};
    margin-right: 2em;
`

const border = [["#ACD1A0", "#BBD1E8", "#CDB8FA", "#F48F90", "#F7CE9E"], ["#112E25", "#2B2470", "#4C1025", "#5A2EB3", "#AB3C12"]];
const backing = [["#C1DDB8", "#CCDDEE", "#DACAFB", "#F7ABAC", "#F9DAB6"], ["#173D32", "#393096", "#5A132C", "#783EEF", "#C34414"]];
const fonts = ["sans-serif", "serif", "monospace"];

export default FancyBook;