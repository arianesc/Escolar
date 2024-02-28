import React, { useEffect, useState } from 'react';
import axios from 'axios';


function CadastrarCurso() {
    const [dados, setDados] = useState(
    {
        nome: '',
        descricao: '',

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
        axios.post('http://localhost:8000/cursos/', {
        nome: dados.nome,
        descricao: dados.descricao,
        })
            .then(response => {
                console.log('Dados enviados com sucesso:', response.data);
                alert('Curso Cadastrado!');
                    window.location.href = 'http://localhost:3000/curso/listar';
            })
            .catch(error => {
                console.error('Erro ao enviar dados:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1> Cadastrar curso </h1>
            <div>
                <label htmlFor="nome">Nome :</label>
                <input type="text" id="nome" name="nome" value={dados.nome} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="descricao">Descricao :</label>
                <input type="text" id="descricao" name="descricao" value={dados.descricao} onChange={handleChange} />
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );
}


export default CadastrarCurso;