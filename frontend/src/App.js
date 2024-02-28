import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import CadastrarAluno from './CadastrarAluno';
import ListarAlunos from './ListarAluno';
import CadastrarCurso from './CadastrarCurso';
import ListarCursos from './ListarCurso';
import MatricularAluno from './MatricularAluno';
import DetalhesAluno from './AlunoDetalhes';

import './App.css'; // Importa o arquivo de estilos CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/aluno/cadastrar" activeClassName="active">Cadastrar Aluno</NavLink>
            </li>
            <li>
              <NavLink to="/aluno/listar" activeClassName="active">Listar Alunos</NavLink>
            </li>
            <li>
              <NavLink to="/curso/cadastrar" activeClassName="active">Cadastrar Curso</NavLink>
            </li>
            <li>
              <NavLink to="/curso/listar" activeClassName="active">Listar Cursos</NavLink>
            </li>
             <li>
              <NavLink to="/matricular" activeClassName="active">Matricular</NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/aluno/cadastrar" element={<CadastrarAluno />} />
            <Route path="/aluno/listar" element={<ListarAlunos />} />
            <Route path="/curso/cadastrar" element={<CadastrarCurso />} />
            <Route path="/curso/listar" element={<ListarCursos />} />
            <Route path="/matricular" element={<MatricularAluno />} />
          <Route path="/detalhes/:id" element={<DetalhesAluno />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
