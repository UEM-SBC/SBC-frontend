import styled from 'styled-components'

export const Form = styled.form`
    height: 100vh;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 350px;margin: 60px 0px 30px 0px;
    }
`

export const WrapperItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const Select = styled.select`
    background: #2e2e2e;
    height: 50px;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 310px;
    color: #666;

    &:focus {
        outline: none !important;
        border-color: #eb0613;
        box-shadow: 0px 0px 5px #eb0613;
    }
`

export const Button = styled.button`
    background: transparent;
    height: 50px;
    border: 1px solid #666;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 300px;
    color: #666;
    font-weight: bold;
    transition: all 0.4s;

    &:hover{
        cursor: pointer;
        background: #b1060f;
        border: 1px solid #666;
        color: #b1060f;
        color: #fff;
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