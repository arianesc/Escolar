import React, { useEffect, useState } from 'react';
import axios from 'axios';


function CadastrarAluno() {
    const [dados, setDados] = useState(
    {
        nome: '',
        email: '',
        data_de_nascimento: '',

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDados({ ...dados, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        enviarDados();
    };

    const enviarDados = async () => {
        axios.post('http://localhost:8000/alunos/', {
        nome: dados.nome,
        email: dados.email,
        data_de_nascimento: dados.data_de_nascimento,
        })
            .then(response => {
                console.log('Dados enviados com sucesso:', response.data);
                alert('Aluno Cadastrado!');
                    window.location.href = 'http://localhost:3000/aluno/listar'; // Substitua 'URL_DA_NOVA_PAGINA' pela URL desejada
            })
            .catch(error => {
                console.error('Erro ao enviar dados:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1> Cadastrar aluno </h1>
            <div>
                <label htmlFor="nome">Nome :</label>
                <input type="text" id="nome" name="nome" value={dados.nome} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input type="text" id="email" name="email" value={dados.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="data_de_nascimento">Data de nascimento :</label>
                <input type="date" id="data_de_nascimento" name="data_de_nascimento" value={dados.data_de_nascimento} onChange={handleChange} />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
}


export default CadastrarAluno;