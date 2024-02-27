import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListarCursos({ onDeletar }) {
    const [objetos, setObjetos] = useState([]);
    const [editando, setEditando] = useState(false);
    const [objetoEditado, setObjetoEditado] = useState({
        id: null,
        nome: ''
    });

    useEffect(() => {
        // Função para buscar os objetos da API
        const fetchObjetos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/cursos/');
                setObjetos(response.data); // Atualiza o estado com os objetos da API
            } catch (error) {
                console.error('Erro ao buscar curso:', error);
            }
        };

        fetchObjetos(); // Chama a função de busca ao montar o componente
    }, []); // O segundo parâmetro vazio indica que useEffect só deve ser executado uma vez, ao montar o componente

    const handleEditar = (objeto) => {
        setEditando(true);
        setObjetoEditado({
            id: objeto.id,
            nome: objeto.nome,
            descricao: objeto.descricao,
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
            await axios.put(`http://localhost:8000/cursos/${objetoEditado.id}/`, objetoEditado);
            setEditando(false);
            // Atualize a lista de objetos após a edição
            const response = await axios.get('http://localhost:8000/cursos/');
            setObjetos(response.data);
        } catch (error) {
            console.error('Erro ao editar objeto:', error);
        }
    };


        const handleDeletar = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/cursos/${id}`);
            console.log('Objeto deletado com sucesso:', response.data);
            setObjetos(objetos.filter(objeto => objeto.id !== id));
        } catch (error) {
            console.error('Erro ao deletar objeto:', error);
        }
    };


    return (
        <div>
            <h2>Lista de Cursos</h2>
            <ul>
                {objetos.map(objeto => (
                    <li key={objeto.id}>
                        <span>{objeto.nome}</span>
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
                          <label htmlFor="descricao">Descricao :</label>
                    <input type="text" name="descricao" value={objetoEditado.descricao} onChange={handleChange} />
                    </div>


                    <button type="submit">Salvar</button>
                </form>
            )}
        </div>
    );
}

export default ListarCursos;
