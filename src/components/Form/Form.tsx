import { useState } from "react"
import axios from "axios"
import React from "react";

function Form() {
    const [name, setName] = useState();
    const [repo, setRepo] = useState();
    const [group, setGroup] = useState();
    const API_URL = 'https://server-for-forms-zqx1.onrender.com/submit';

    function HandleSubmit(e: React.FormEvent) {
        e.preventDefault()
        axios.post(API_URL, {
            nome: name,
            link: repo,
            turma: group 
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    

    return (
        <form action="POST" onSubmit={HandleSubmit}>
            <fieldset>
                <input required type="text" onChange={(e)=> setName(e.target.value)}/>
                <label htmlFor="nome">Nome do Aluno</label>
            </fieldset>
            <fieldset>
                <input required type="text" onChange={(e)=> setRepo(e.target.value)}/>
                <label htmlFor="repositório">Link do Repositório</label>
            </fieldset>
            <fieldset>
                <input required type="text" onChange={(e)=> setGroup(e.target.value)}/>
                <label htmlFor="turma">Turma</label>
            </fieldset>
            <button type="submit">
                Enviar
            </button>
        </form>
    )
}

export default Form