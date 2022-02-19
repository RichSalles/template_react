# C2SIG - Sistema de Gestão Integrado
## Uso

1. Clone esse repositório
   ```
   git clone git@ssh.dev.azure.com:v3/c2rio/SIG/SIG_REACT
   ```
2. Installe as dependencias (yarn or npm)
   ```
   npm install
   ```
3. Inicie a aplicação
   ```
   npm start
   ```
   Os arquivos estão no diretório [src](https://c2rio@dev.azure.com/c2rio/SIG/_git/SIG_REACT/src/).


## Estrutura de arquivos

Após a criação, seu projeto deve ficar assim:

```
c2tours-website-bondinho/
  README.md
  node_modules/
  package.json
  public/
    c2tours-favicon.png
    robots.txt
    manifest.json
    index.html
    favicon.ico
  src/
    assets/
    components/
    config/
    i18n/
    pages/
    services/
    App.css
    App.js
    index.js
```

### assets

- Como o nome sugere, todos os assets estáticos devem residir aqui.
- Cada ativo deve ser registrado e exportado do /index.js 
- Assim, todos os assets estarão acessíveis e importados de '/assets' 
- Isso pode incluir, mas não se limitando a imagens, logotipos, ícones vetoriais, fontes, etc.



### components

- Apenas componentes compartilhados usados em recursos são colocados aqui.
- Todos os componentes devem ser registrados e exportados de /index.js para um único ponto de acesso.
- Todos os componentes devem ter exportação nomeada. Isso evitará conflitos.
- Os componentes que consistem em lógica complexa ou integração redux podem ser ainda mais desestruturados em "ComponentContainer.js" e "ComponentView.js" de acordo com o "Container-View parttner" 
- DICA: tente criar exportações nomeadas em vez de exportações padrão para todos os componentes. Isso evitará conflitos de nomenclatura.



### config

- Todas as configurações do aplicativo devem ser mantidas neste caminho.
- Isso pode consistir em formato de data, idioma padrão, algum conjunto de dados mestre ou algo parecido.


### i18n

- A internacionalização ou suporte multilíngue é alcançado pelo uso da biblioteca “i18next”. 
- Consiste principalmente em um arquivo de configuração e todas as traduções de idiomas em arquivos independentes language.json. 



### pages

- Este é o coração do nosso aplicativo.
- Todos os vários recursos / páginas / páginas são definidos aqui. Neste caso, “Home”, “Page1” e “Page2” são 3 páginas diferentes de nosso aplicativo.
- Cada tela consiste em um arquivo “.js” que exporta o contêiner da tela como módulo padrão que disponibiliza a tela como um componente funcional.
- Cada arquivo contém o nome da sua página, com sua respectiva tradução
- Como regra geral, se um módulo (um utilitário, componente, etc.) for usado apenas dentro de outro módulo, eu o quero aninhado na estrutura de diretório conforme mostrado acima.



### services

- Os serviços são para gerenciar todas as solicitações de API. Você pode vê-los como uma ponte ou um adaptador entre as APIs do servidor de banco de dados e a camada de visualização (páginas e componentes) de nosso aplicativo.
- Ele cuidará de todas as chamadas de rede de nosso aplicativo.
- Todas as solicitações de dados são definidas aqui e os dados de resposta são transformados e atendidos. Em alguns casos, ele também pode ser salvo na loja redux.
- As páginas e componentes podem despachar ações, ler a loja e se atualizar com base nas mudanças de dados.
- Eles podem acessar os serviços diretamente, se não for necessário adicioná-los à loja redux.
- As ações usarão serviços para conectividade de back-end. Thunk é um middleware redux usado para lidar com ações assíncronas e efeitos colaterais.
- Em nosso aplicativo, todas as configurações e constantes do firebase residem em “firebase.js”. A lógica de autenticação reside em “firebaseAuthentication.js” e todos os métodos para consultar os dados do Firestore residem em “index.js”.
- Se o número / contagem de serviços aumentar, você pode considerar dividi-los em arquivos individuais baseados em recursos.
