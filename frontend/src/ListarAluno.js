import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ListarAlunos({ onDeletar }) {
    const [objetos, setObjetos] = useState([]);
    const [editando, setEditando] = useState(false);
    const [objetoEditado, setObjetoEditado] = useState({
        id: null,
        nome: ''
    });

    useEffect(() => {
        const fetchObjetos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/alunos/');
                setObjetos(response.data);
            } catch (error) {
                console.error('Erro ao buscar objetos:', error);
            }
        };

        fetchObjetos();
    }, []);

    const handleEditar = (objeto) => {
        setEditando(true);
        setObjetoEditado({
            id: objeto.id,
            nome: objeto.nome,
            email: objeto.email,
            data_de_nascimento: objeto.data_de_nascimento
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setObjetoEditado({
            ...objetoEditado,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8000/alunos/${objetoEditado.id}/`, objetoEditado);
            setEditando(false);
            const response = await axios.get('http://localhost:8000/alunos/');
            setObjetos(response.data);
        } catch (error) {
            console.error('Erro ao editar objeto:', error);
        }
    };


        const handleDeletar = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/alunos/${id}`);
            console.log('Objeto deletado com sucesso:', response.data);
            setObjetos(objetos.filter(objeto => objeto.id !== id));
        } catch (error) {
            console.error('Erro ao deletar objeto:', error);
        }
    };


    return (
        <div>
            <h2>Lista de Alunos</h2>
            <ul>
                {objetos.map(objeto => (
                    <li key={objeto.id}>
                        <span>{objeto.nome}</span>
                         <Link to={`/detalhes/${objeto.id}`}>Detalhes</Link>
                        <button onClick={() => handleEditar(objeto)}>Editar</button>
                        <button onClick={() => handleDeletar(objeto.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
            {editando && (
                <form onSubmit={handleSubmit}>
                    <div>
                          <label htmlFor="nome">Nome :</label>
                        <input type="text" name="nome" value={objetoEditado.nome} onChange={handleChange} />

                    </div>
                    <div>
                          <label htmlFor="email">Email :</label>
                    <input type="text" name="email" value={objetoEditado.email} onChange={handleChange} />
                    </div>
                    <div>
                          <label htmlFor="data_de_nascimento">Data de nascimento :</label>
                    <input type="date" name="data_de_nascimento" value={objetoEditado.data_de_nascimento} onChange={handleChange} />
                                        </div>

                    <button type="submit">Salvar</button>
                </form>
            )}
        </div>
    );
}

export default ListarAlunos;
