import styled from 'styled-components';

export const Backing = styled.div`
    position: fixed;
    display: block;

    margin: 0 auto;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    z-index: 1;

    background-color: #141619DD;
    cursor: pointer;
`

export const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0;
  border-radius: 10px;
`
export const FormGroup = styled.span`
    display: flex;
    align-items: baseline;
`

export const StyledForm = styled.form`
    max-width: 400px;
    margin: 0 auto;
    padding: 40px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 10px 20px 10px;
    background-color: ${p => p.theme.w2};
    border-radius: 10px 10px 0 0;
`

export const Heading = styled.h2`
    margin-top: 40px;
    font-size: 18px;
    color: ${p => p.theme.w8};
    font-weight: normal;
    margin-bottom: 10px;
`

export const StyledLabel = styled.label`
    color: ${p => p.theme.w6};
    flex-grow: 1;
`

export const StypedInput = styled.input`
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



export const AddButton = styled.button`
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
export const CloseButton = styled.button`
    background-color: ${props => props.theme.w2};
    color: ${props => props.theme.w6};
    padding: 5px;
    width: 40px;
    height: 40px;
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