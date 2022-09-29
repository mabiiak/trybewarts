# Boas vindas ao repositório do projeto Trybewarts!

Este é um projeto que foi desenvolvido durante o curso de Desenvolvimento Web na Trybe.

Neste projeto, foi desenvolvido em conjunto com a Gabriele Castro, onde foi criado uma página de formulário da Escola de Magia de Trybewarts. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling.

## Habilidades Desenvolvidas

Neste projeto, verificamos se você é capaz de:

- Criar formulários em HTML;

- Utilizar CSS Flexbox para criar layouts flexíveis;

- Criar regras CSS específicas para serem aplicadas a dispositivos móveis;

- Construir páginas que alteram o seu layout de acordo com a orientação da tela;

# Desenvolvimento

<details>
  <summary>
    Antes de começar a desenvolver
  </summary>

1. Clone o repositório
  * `git clone git@github.com:mabiiak/trybewarts.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybewarts`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `main`
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`
    * Exemplo: `git checkout -b nome-trybewarts`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)

  * Adicione o novo arquivo ao _stage_ do Git
    * Exemplo:
      * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      * `git status` (devem aparecer listados os arquivos em verde)

  * Faça o `commit` inicial
    * Exemplo:
      * `git commit -m 'iniciando o projeto.'` (fazendo o primeiro commit)
      * `git status` (deve aparecer uma mensagem como _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin nome-trybewarts`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/trybewarts/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ no seguinte formato: `[Joao Silva e Maria Souza] Trybewarts`, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/trybewarts/pulls) e confira que o seu _Pull Request_ está criado

</details>

## Requisitos 

    ✅ 1 Crie uma barra verde na parte superior da página

    ✅ 2 Adicione o logotipo da Trybewarts com a classe `trybewarts-header-logo` na barra superior

    ✅ 3 Acrescente um formulário de login no canto direito da barra superior contendo os inputs de email, senha e um botão de login

    ✅ 4 Crie um título com o texto `Trybewarts` centralizado dentro do `Header`

    ✅ 5 Adicione um formulário no corpo da página

    ✅ 6 Faça com que o eixo principal do formulário seja vertical

    ✅ 7 Adicione a logo da Trybewarts no lado direito da página

    ✅ 8 Acrescente ao formulário com id 

    ✅ 9 Acrescente ao formulário um select com o id ` 

    ✅ 10. Posicione os campos de `Nome` e `Sobrenome` para que fiquem em linha

    ✅ 11. Posicione os campos de `Email` e `Casa` para que fiquem em linha

    ✅ 12. Acrescente ao formulário um campo de entrada para qual família a pessoa estudante se identifica

    ✅ 13. Crie campos de entrada do tipo `checkbox` contendo seis opções

    ✅ 14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts

    ✅ 15. Crie uma textarea com o id `textarea` e uma label com a classe `textarea` contendo o número máximo de caracteres igual à 500

    ✅ 16. Crie um campo de entrada do tipo `checkbox` com o id `agreement` para validar as informações

    ✅ 17. Crie um botão de Enviar para submeter o formulário

    ✅ 18. Faça com que o botão `Enviar` seja habilitado somente após a checkbox do requisito 16 ser selecionada

    ✅ 19. Crie um rodapé no final da página

<details>
  <summary>
    Requisitos bônus
  </summary>

    ❌ 20. Crie um contador com o ID `counter` contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado na textarea

    ❌ 21. Faça com que ao clicar no botão `Enviar`, o conteúdo do formulário seja substituído pelas informações preenchidas

    ❌ 22. Preencha o arquivo feedback.md . Aproveite o espaço para deixar seus feedbacks sobre o projeto.

    ❌ 23. Realize o desenvolvimento da versão mobile do formulário Trybewarts.
</details>
