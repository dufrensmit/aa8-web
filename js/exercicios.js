(() => {
    // Exercício 1: funções podem ser passadas como argumentos.
    function calculadora(a, b, f) {
        return f(a, b);
    }

    function soma(a, b) {
        return a + b;
    }

    function subtrai(a, b) {
        return a - b;
    }

    console.log("[Exercício 1]", calculadora(31, 12, soma));
    console.log("[Exercício 1]", calculadora(11, 25, subtrai));

    // Exercício 2: setTimeout agenda o callback sem bloquear o restante.
    const callback = () => console.log("[Exercício 2] Estou na função de callback");
    console.log("[Exercício 2] Iniciei");
    setTimeout(callback, 5000);
    console.log("[Exercício 2] Estou após o setTimeout");

    // Exercício 3: reproduz o erro de passar o retorno de console.log.
    function consoleAtrasadoIncorreto(mensagem, atraso) {
        setTimeout(console.log(`[Exercício 3] ${mensagem}`), atraso);
    }

    console.log("[Exercício 3] Olá");
    try {
        consoleAtrasadoIncorreto("Teste", 10000);
        console.log("[Exercício 3] Bye");
    } catch (erro) {
        console.error("[Exercício 3] setTimeout recebeu um callback inválido:", erro);
    }

    // Exercício 4: passe uma função para setTimeout, sem executá-la antes.
    function consoleAtrasado(mensagem, atraso) {
        setTimeout(() => console.log(`[Exercício 4] ${mensagem}`), atraso);
    }

    console.log("[Exercício 4] Olá");
    consoleAtrasado("Teste", 10000);
    console.log("[Exercício 4] Bye");

    // Exercício 5: as duas ordens produzem o mesmo resultado observável.
    const olaTchau = () => {
        console.log("[Exercício 5, versão 1] Olá");
        setTimeout(() => console.log("[Exercício 5, versão 1] Tchau"), 2000);
    };

    const olaETchau = () => {
        setTimeout(() => console.log("[Exercício 5, versão 2] Tchau"), 2000);
        console.log("[Exercício 5, versão 2] Olá");
    };

    olaTchau();
    olaETchau();

    // Exercício 6: dez handlers aguardam a mesma Promise.
    const resolverEm1s = new Promise(resolve => setTimeout(resolve, 1000));
    for (let i = 0; i < 10; i++) {
        resolverEm1s.then(() => console.log("[Exercício 6] oi"));
    }

    // Exercício 7: cada iteração do for com let tem seu próprio i.
    const resolverEm1sNumeros = new Promise(resolve => setTimeout(resolve, 1000));
    for (let i = 0; i < 10; i++) {
        resolverEm1sNumeros.then(() => console.log(`[Exercício 7] ${i}`));
    }

    // Exercícios 8 e 9: executar em sequência deixa as duas séries legíveis.
    function contarComPromises(i = 0, max = 10) {
        return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            console.log(`[Exercício 8] ${i}`);
            if (i + 1 < max) {
                return contarComPromises(i + 1, max);
            }
        });
    }

    const esperar = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function contarComAsyncAwait(max = 10) {
        for (let i = 0; i < max; i++) {
            await esperar(1000);
            console.log(`[Exercício 9] ${i}`);
        }
    }

    contarComPromises().then(() => contarComAsyncAwait());
})();
