import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MatricularAluno() {
    const [alunos, setAlunos] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [selectedAluno, setSelectedAluno] = useState('');
    const [selectedCurso, setSelectedCurso] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/alunos')
            .then(response => {
                setAlunos(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar alunos:', error);
            });

        axios.get('http://localhost:8000/cursos')
            .then(response => {
                setCursos(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar cursos:', error);
            });
    }, []);

    const handleAlunoChange = (event) => {
        setSelectedAluno(event.target.value);
    };

    const handleCursoChange = (event) => {
        setSelectedCurso(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            aluno: selectedAluno,
            curso: selectedCurso
        };

        axios.post('http://localhost:8000/matriculas/', data)
            .then(response => {
                console.log('Aluno e curso cadastrados com sucesso:', response.data);
                alert('Aluno Matriculado!');
            })
            .catch(error => {
                console.error('Erro ao cadastrar aluno e curso:', error);
            });
    };

    return (
        <div>
            <h2>Matricula</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="aluno">Selecione o Aluno:</label>
                    <select id="aluno" value={selectedAluno} onChange={handleAlunoChange}>
                        <option value="">Selecione um aluno</option>
                        {alunos.map(aluno => (
                            <option key={aluno.id} value={aluno.id}>{aluno.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="curso">Selecione o Curso:</label>
                    <select id="curso" value={selectedCurso} onChange={handleCursoChange}>
                        <option value="">Selecione um curso</option>
                        {cursos.map(curso => (
                            <option key={curso.id} value={curso.id}>{curso.nome}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Finalizar Matricula</button>
            </form>
        </div>
    );
}

export default MatricularAluno;
