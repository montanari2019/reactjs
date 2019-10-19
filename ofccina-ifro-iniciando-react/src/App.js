import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, 
        Row,
        Col, 
        Navbar, 
        NavbarBrand,
        FormGroup,
        Input, Button, Table } from 'reactstrap'






const App = props =>{
  const [nome, setNome] = React.useState("")
  const [idade, setIdade] = React.useState("")
  const [email, setEmail] = React.useState("")

  const [alunos, setAlunos] = React.useState("")

  const submit = async e =>{
    e.preventDefaulf()

    const headers = new Headers()
    headers.append("Content-Type","application/json")

    const response = await fetch("http://localhost:3001/alunos", {
      method: "POST",
      body: JSON.stringify({nome, idade, email}),
      headers
    })

    if(response.ok){
      alert("Enviado COm Sucesso")
      return
    }

    alert("Erro ao Enviar: " + response.status)
  }

 const buscarAlunos = async ()  => {
    const response = await fetch("http://localhost:3001/alunos",


      if(! response.ok){

      
    })
 }

  return(
    <React.Fragment>
    {/*NavBar*/}
      <Navbar color = "success">
      <Container>
        <NavbarBrand>
          Oficiona IFRO Ads
        </NavbarBrand>
        </Container>
      </Navbar>
  

    <Container>
      <Row>
        <form onSubmit={submit}>
        <Col>
          <FormGroup>
            <label>Nome: </label>
            <Input name = "nome" value = {nome} onChange = {e => setNome(e.target.value)}></Input>

            <label>Idade: </label>
            <Input idade = "idade" type = "number" value = {idade} onChange = {e => setIdade(e.target.value)}></Input>


            <label>Email: </label>
            <Input name = "email " value = {email} onChange = {e => setEmail(e.target.value)}></Input>

          </FormGroup>
          
          <Col>
            <Button type = "submit">Enviar</Button>
          </Col>

        </Col>
        </form>
      </Row>

      <Row>
        <Col>
        <Table>
          <thead>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
          </thead>
          <tbody>

          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
      </React.Fragment>
  )

}
export default App;
