# UFCG Cursos Database - frontend

#### Sobre a Arquitetura

A implemetação desse frontend segue um híbrido de MVC com CBA. 

###### São 4 telas principais:

1. index.html
2. disciplinas.html
3. perfil.html
4. ranking.html

##### A estrutura de diretórios é compostas por 3 pastas principais.

- components: Nela estão implementaos alguns componentes auto-contidos.
- js: o coraão da aplicação, toda a parte comportamental das páginas, bem como interaão com API e (re)-renderizaão são cuidados pelos arquivos a raíz dessa pasta. as sub-pastas services e utils contam com alguns utilitários usados nesses ecripts principais;
- css: aqui estão todas as folhas de estilo usadas na aplicaão, tanto pelos componentes individualmente, quanto da estilizaão das páginas.

###### Como iniciar:

1. Edite o arquivo config.js mudando a constante api_endpoint para o endpoint do backend associado ao projeto. 
2. Sirva a pasta raiz com algum servidor web, ex: "python -m SimpleHTTPServer 8080"