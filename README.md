# Timer em JavaScript

Este é um simples timer (cronômetro) desenvolvido utilizando JavaScript. Ele interage com elementos HTML (com as classes `relogio`, `iniciar`, `pausar` e `zerar`) para exibir e controlar a contagem do tempo.

## Funcionalidades

* **Iniciar:** Começa a contagem do tempo (a cada segundo).
* **Pausar:** Interrompe a contagem do tempo.
* **Zerar:** Reinicia a contagem do tempo para `00:00:00`.
* **Display:** Atualiza um elemento HTML com a classe `relogio` para exibir o tempo decorrido no formato `HH:MM:SS`.

## Como Usar

1.  **Estrutura HTML:** Certifique-se de ter os seguintes elementos HTML em sua página, com as classes correspondentes:

    ```html
    <div class="relogio">00:00:00</div>
    <div>
        <button class="iniciar">Iniciar</button>
        <button class="pausar">Pausar</button>
        <button class="zerar">Zerar</button>
    </div>
    ```

2.  **Arquivo JavaScript (`script.js`):** Inclua o seguinte código JavaScript em um arquivo chamado `script.js` (ou o nome que você preferir) e certifique-se de que ele esteja linkado ao seu arquivo HTML (`<script src="script.js"></script>`).

    ```javascript
    function criaSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'UTC'});
    }
    criaSegundos();

    const relogio  = document.querySelector('.relogio');
    const iniciar  = document.querySelector('.iniciar');
    const pausar   = document.querySelector('.pausar');
    const zerar    = document.querySelector('.zerar');

    let intervalId;
    let elapsedTime = 0;

    function iniciaRelogio(){
        intervalId = setInterval(function(){
            elapsedTime++;
            relogio.innerHTML = criaSegundos(elapsedTime);
        }, 1000);
    }

    iniciar?.addEventListener('click', function(e){
        iniciaRelogio();
    });

    pausar?.addEventListener('click', function(e){
        clearInterval(intervalId);
    });

    zerar?.addEventListener('click', function(e){
        clearInterval(intervalId);
        elapsedTime = 0;
        relogio.innerHTML = criaSegundos(elapsedTime);
    });
    ```

## Explicação do Código

* **`criaSegundos(segundos)`:** Função que recebe um número de segundos e retorna uma string formatada como `HH:MM:SS`. Utiliza o objeto `Date` e `toLocaleTimeString` para realizar a conversão, garantindo o formato de 24 horas e ignorando o fuso horário local.
* **Seleção de Elementos:** As variáveis `relogio`, `iniciar`, `pausar` e `zerar` armazenam referências aos elementos HTML com as classes correspondentes.
* **`intervalId`:** Variável para guardar o ID do intervalo criado por `setInterval`, essencial para pausar o timer.
* **`elapsedTime`:** Variável que mantém a contagem dos segundos decorridos.
* **`iniciaRelogio()`:** Função chamada ao clicar no botão "Iniciar". Ela utiliza `setInterval` para executar uma função a cada segundo, incrementando `elapsedTime` e atualizando o conteúdo do elemento `relogio` com o tempo formatado.
* **Event Listeners:**
    * Ao clicar no botão com a classe `iniciar`, a função `iniciaRelogio()` é executada.
    * Ao clicar no botão com a classe `pausar`, a função `clearInterval(intervalId)` é chamada para interromper o timer.
    * Ao clicar no botão com a classe `zerar`, o intervalo é limpo, `elapsedTime` é resetado para 0, e o display do relógio é atualizado para `00:00:00`.
