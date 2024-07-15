***Pré-requisitos: ***

IDE de Desenvolvimento (VSCode)
Node e NPM 
Java 8

Passo a passo da execução:

rodar o comando no terminal(utilizei o gitbash) mas pode ser executado em outro terminal da preferência.

Lembrando, deve ser na pasta raiz do projeto para executar os 2 passos abaixo:

1 - npm install

2 - npm run test:allure


*** Para visualizar os relatórios se não abrir automaticamente:

Pode acontecer devido  não estar rodando em modo Administrador, faltando algum plugin ou por incompatibilidade na máquina local.

Se caso aconteça, executar no terminal direto da pasta raiz do projeto.

- servir relatório com base na pasta atual "allure-results":allure serve
- gerar novo relatório com base na pasta atual "allure-results":allure generate
- abra o relatório gerado da pasta "allure-report":allure open

Sem mais, agradeço pela oportunidade.