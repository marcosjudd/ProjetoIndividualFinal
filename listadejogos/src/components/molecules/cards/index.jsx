import Card from "../../atoms/card"
import { useEffect, useState } from "react"
import axios from 'axios'
import "./style.css"

function Cards(){
    const [filme, setFilme] = useState();
    const [filme2, setFilme2] = useState(
        
    );
    const [dados, setdados] = useState(
        {
            id: '',
            nome: '', 
            sinopse: '',
            cartaz: null
        }
    );

    console.log(filme2)

    useEffect(() => {
        axios
        .get('http://localhost:3000/filme')
        .then((resposta) => {
            setFilme(resposta.data)
        })
        .catch((erro) => console.log(erro));
    })

    useEffect(() => {
        axios
        .get(`http://localhost:3000/filme/${dados.id}`)
        .then((resposta) => {
            setFilme2(resposta.data)
        })
        .catch((erro) => console.log(erro));
    })

    const deleteCard = (id, e) =>{
        axios.delete(`http://localhost:3000/filme/${id}`)
        .then(res => console.log('Postado', res)).catch(err => console.log(err))
    }

    function handleChange(event){
        const{name, value} = event.target;
    
        setdados({...dados, [name]: value});
    }

    return(
        <>
            <div className="cards">
                <div className="interno">
                    {filme?.map((e) => {
                        return(
                            <Card titulo={e.nome} texto={e.sinopse} cartaz={e.cartaz} onclickCard={() => setdados({id: e.id, nome: e.nome, sinopse: e.sinopse, cartaz: e.cartaz})} onclick={() => deleteCard(e.id)}/>
                        )
                    })}
                </div>
            </div>

            <div className="botoes">
                <h2>Insira um novo Filme</h2>
            </div>

            <form action=""  onSubmit={(e) => {
                e.preventDefault();
                alert('Dados enviados com sucesso!')
                axios
                .put(`http://localhost:3000/filme/${dados.id}`, {
                    nome: dados.nome,
                    sinopse: dados.sinopse,
                    cartaz: dados.cartaz
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                }

            }>
                <h2>{`Alterar filme ${dados.nome}`}</h2>
                <input type="text" name="nome" placeholder="nome" onChange={handleChange} value={dados.nome}/>
                <input type="text" name="sinopse" placeholder="sinopse" onChange={handleChange} value={dados.sinopse}/>
                <input type="text" name="cartaz" placeholder="cartaz" onChange={handleChange} value={dados.cartaz}/>
                <input type="submit" value="Submit" />
            </form>
        </>
        

        
    )
}

export default Cards