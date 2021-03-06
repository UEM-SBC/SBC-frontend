import styled from 'styled-components'

export const ContainerTela = styled.div`
    height: 100vh;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 260px;
        margin: 60px 0px 30px 0px;
    }
`

export const Tabela = styled.table`
    color: #fff;
    th{
        padding: 15px;
        background-color:  #666;
    }

    td{
        text-align: center;
        border: 10px solid #171717;
    }
    
    tr:nth-child(2n){
        background-color: rgba(180, 180, 180, 0.2);
        td{
            border-color: rgba(180, 180, 180, 0);
        }
    }
`

export const ButtonTable = styled.button`
    background-color: Transparent;
    border: none;
    margin-left:18px;
`

