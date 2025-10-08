import { useState } from "react"

function Form() {
    const [name, setName] = useState()
    const [repo, setRepo] = useState()
    const [group, setGroup] = useState()

    function HandleSubmit(e) {
        e.preventDefault()
        console.log(name)
        console.log(repo)
        console.log(group)
    }
    

    return (
        <form action="POST" onSubmit={HandleSubmit}>
            <fieldset>
                <input type="text" onChange={(e)=> setName(e.target.value)}/>
                <label htmlFor="nome">Nome do Aluno</label>
            </fieldset>
            <fieldset>
                <input type="text" onChange={(e)=> setRepo(e.target.value)}/>
                <label htmlFor="repositório">Link do Repositório</label>
            </fieldset>
            <fieldset>
                <input type="text" onChange={(e)=> setGroup(e.target.value)}/>
                <label htmlFor="turma">Turma</label>
            </fieldset>
            <button type="submit">
                Enviar
            </button>
        </form>
    )
}

export default Form