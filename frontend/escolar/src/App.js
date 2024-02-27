import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import CadastrarAluno from './CadastrarAluno';
import ListarAlunos from './ListarAluno';
import CadastrarCurso from './CadastrarCurso';
import ListarCursos from './ListarCurso';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/aluno/cadastrar">Cadastrar Aluno</Link>
            </li>
            <li>
              <Link to="/aluno/listar">Listar Alunos</Link>
            </li>
             <li>
              <Link to="/curso/cadastrar">Cadastrar Curso</Link>
            </li>
            <li>
              <Link to="/curso/listar">Listar Cursos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/aluno/cadastrar" element={<CadastrarAluno />} />
          <Route path="/aluno/listar" element={<ListarAlunos />} />
          <Route path="/curso/cadastrar" element={<CadastrarCurso />} />
          <Route path="/curso/listar" element={<ListarCursos />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
