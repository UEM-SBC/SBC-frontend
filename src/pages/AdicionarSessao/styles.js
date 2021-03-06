import styled from 'styled-components'

export const Form = styled.form`
    height: 100%;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 260px;
        margin: 10px 0;
    }
`

export const WrapperItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WrapperButons = styled.div`
    display: flex;
    flex-direction: row;
    width: 306px;
    justify-content: space-between;
`

export const Input = styled.input`
    background: #2e2e2e;
    height: 50px;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 300px;
    color: #666;

    &:focus {
        outline: none !important;
        border-color: #eb0613;
        box-shadow: 0px 0px 5px #eb0613;
    }
`

export const TextArea = styled.textarea`
    background: #2e2e2e;
    height: 250px;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 300px;
    color: #666;
    resize: none;

    &:focus {
        outline: none !important;
        border-color: #eb0613;
        box-shadow: 0px 0px 5px #eb0613;
    }
`
export const Button = styled.button`
    display: flex;
    background: transparent;
    height: 50px;
    border: 1px solid #666;
    border-radius: 4px;
    font-size: 18px;
    margin: 10px 0;
    width: ${ props => props.help ? '50px' : '240px'};;
    color: ${ props => props.help ? '#fff' : '#666'};
    font-weight: bold;
    transition: all 0.4s;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
        background: ${ props => props.help ? '#fff' : '#b1060f'};
        border: 1px solid #666;
        color: ${ props => props.help ? '#666' : '#fff'};;
    }
`

export const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;

    label{
        color: #ccc;
        font-size: 13px;
    }
`