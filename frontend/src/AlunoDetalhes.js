import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function DetalhesAluno() {
    const [aluno, setAluno] = useState(null);
    const [matriculas, setMatriculas] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Busca os detalhes do aluno
        axios.get(`http://localhost:8000/alunos/${id}`)
            .then(response => {
                setAluno(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar detalhes do aluno:', error);
            });

        // Busca as matrículas associadas a esse aluno
        axios.get(`http://localhost:8000/matriculas?aluno=${id}`)
            .then(response => {
                setMatriculas(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar matrículas do aluno:', error);
            });
    }, [id]);

    if (!aluno) {
        return <div>Carregando...</div>;
    }


    return (
        <div>
            <h2>Detalhes do Aluno</h2>
            <p><strong>Nome: </strong> {aluno.nome}</p>
            <p><strong>Data de nascimento: </strong> {aluno.data_de_nascimento}</p>
            <p><strong>Email: </strong> {aluno.email}</p>

            {/* Adicione mais detalhes conforme necessário */}

             <h3>Matrículas do Aluno</h3>
            <ul>
                {matriculas.map(matricula => (
                    <li key={matricula.id}>{matricula.curso}</li>
                ))}
            </ul>

        </div>
    );
}

export default DetalhesAluno;
