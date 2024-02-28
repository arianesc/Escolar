# Escolar
Escolar é uma api que gerencia alunos e seus cursos.
Com ela você pode cadastrar, listar, atualizar e deletar alunos e cursos.

### Pré requisitos:
- Python3.7

### Como rodar:

1. Crie um ambiente virtual

```commandline
python3.7 -m venv env
```

2. Ative o ambiente virtual
````commandline
source env/bin/activate
````

3. Entre no diretório da aplicação backend
```commandline
cd escolar/
```

4. Instale os pacotes do backend
```commandline
pip install -r requirements.txt

```
5. Rode a aplicação backend
```commandline
python3.7 manage.py runserver
```

6. Vá para o diretório frontend
```commandline
cd ../frontend/
```

7. Instale os pacotes frontend
```commandline
npm install
```

8. Rode a aplicação frontend
```commandline
npm start
```

Para ver a API Rest acesse o link: 
```
http://localhost:8000/
```