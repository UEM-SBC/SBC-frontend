import React, { useEffect, useState } from 'react'

import {store} from '../../store'
import history from '../../services/history'
import AdicionarIcon from '../../assets/adcFunc.svg'
import ListarIcon from '../../assets/listUsers.svg'
import EditarIcon from '../../assets/editUser.svg'
import { Container, Card, Row } from './styles'

const Menu = () => {
    const [id, setId] = useState('')
    const [admin, setAdmin] = useState('')

    useEffect(() => {
        setId(store.getState().auth.user.id)
        setAdmin(store.getState().auth.user.profile)
    }, [])

    const listUser = () => history.push('/listarUsuarios') 
    const adicionarUser = () => history.push('/adicionarFuncionario') 
    const editarUser = () => history.push(`/editarUsuario/${id}`) 

    return(
        <Container>
           <Row>
                {admin && (
                        <Card onClick={listUser}>
                            <strong>Listar Usuários</strong>
                            <img src={ListarIcon} alt="Listar usuário"/>
                        </Card>
                )}

                {admin && (
                    <Card onClick={adicionarUser}>
                        <strong>Adicionar Funcionario</strong>
                        <img src={AdicionarIcon} alt="Adicionar funcionario"/>
                    </Card>
                )}

                {admin && (
                    <Card onClick={editarUser}>
                        <strong>Editar Funcionario</strong>
                        <img src={EditarIcon} alt="Editar funcionario"/>
                    </Card>
                )}
           </Row>
        </Container>
    )
}

export default Menu