# requisicoes-http
Para treinar o fetch

Podemos usar a fetch API para fazer requests HTTP, é uma forma mais moderna e rápida para receber respostas de API.

A fetch usa promisse por baixo dos panos.

A tradução de fetch significa buscar, ou seja, quando uso o fetch eu quero buscar dados de um outro lugar!

Para utilizar eu insiro a palavra fetch, e dentro do argumento coloco o endpoint para o qual quero fazer o request e pegar os resultados

no console, no network consigo ver um request USERS, usando o metodo GET,
que tem um status 200 indicando que foi ok o request, e que foi feito usando a fetch

Se eu clicar nesse arquivo vou ver a resposta na aba preview

Esta invocação do fetch retorna uma promise, que tem dois resultados possíveis: resolved (promise resolvida) e rejected (que a promise foi rejeitada)

entao eu uso o metodo .then que recebe uma funcao como argumento, e para cuidar do rejected eu uso o catch, que tambem recebe uma funcao como argumento, que vai ser executada quando um erro acontecer

Como sei que o valor da promise resolvida vai cair no then, coloco o nome do parametro da funcao para response,
e como sei que vou receber o erro no catch, eu dou o nome do parametro para error

se no final do endpoint eu mude o endereço, o esperado é que a promise seja rejeitada e a funcao do catch seja executado. Mas qd salvo, o catch é executado e o response também!

A forma como a fetch trabalha é cair no catch só quando acontece um erro de conexao na rede, qd a internet cai por ex. Se eu errar o endereço do endpoint a promise nao é rejeitada e eu obtenho o response. Mas la dentro do objeto response vemos no status que está como 404

Entao na funcao do then eu posso checar se o status é 200 para só entao fazer algo com a resposta, ou fazer algo com o erro se o status for 404.

Ao executar a fetch vemos um objeto, que contem algumas propriedades. mas ao olhar ele vemos que não ele não mostra os dados que obtive. Ao investigar o método proto, vemos que dentro dele tem um método json. Vamos usar esse método que irá retornar as informações que preciso.

Entao dentro do then eu insiro o response.json()
Este método irá retornar pra mim a resposta parseada. Mas ao inves de armazenar ela, vamos retornar ela.

Essa expressão toda resulta numa resposta, então encadeio um novo then para obter essa resposta.

Agora neste then eu insiro o argumento chamado users pq sabemos que o valor da promise resolvida vai ser recebido neste parametro users.

Só preciso lembrar de 3 passos!!!
1 Eu busco os dados através do método fetch
2 eu obtenho a resposta e retorno uma promise com um response.json
3 eu encadeio um segundo then nesta promise que o primeiro then está retornando para então fazer algo com os dados que essa promise retorna.