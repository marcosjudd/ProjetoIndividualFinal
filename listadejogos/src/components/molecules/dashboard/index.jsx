import { useState, useEffect } from "react";
import axios from 'axios'
import "./style.css"

function Dashboard(){
    const [dados, setdados] = useState(
        {
          nome: '',
          sinopse: '',
          cartaz: null
        }
    );

    console.log(dados.nome)
    console.log(dados.sinopse)

    function handleChange(event){
        const{name, value} = event.target;
    
        setdados({...dados, [name]: value});
    }
    return(
        <>  
            <div className="botoes">
                <h2>Insira um novo Filme</h2>
            </div>

            <form action="" className="post" onSubmit={(e) => {
                e.preventDefault();
                alert('Dados enviados com sucesso!')
                axios
                .post('http://localhost:3000/filme', {
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
                <input type="text" name="nome" placeholder="nome" onChange={handleChange}/>
                <input type="text" name="sinopse" placeholder="sinopse" onChange={handleChange}/>
                <input type="text" name="cartaz" placeholder="cartaz" onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </>
        
    )
}

export default Dashboard