// importe o componete 'useState' de react
import { useState } from "react"


/// Botão A (props)
type ButtonProps = {
    text?: string; // Propriets, propriedades, props = 'text (é opcional (?)) e do tipo string
}

// Exporte a função Button com as 'propriedades' de 'ButtonProps'
export function ButtonA(props: ButtonProps) {
    return (
        // Retorne um botão (propriedades.texto(string))
        <button>{props.text || 'Default'}</button>
    )
}


/// Botão B (states)
export function ButtonB() {
    // 1. variavel dentro de um estado, cria novos dados ao inves de modificar a variavel atual
    // 2. variavel 'counter' dentro do estado 'setCounter' usará o componete 'useState' com valor inical a '0'
    const [counter, setCounter] = useState(0);

    // 4. a função 'increment' irá add valores ao estado 'SetCounter'
    function increment() {
        setCounter(counter + 1);
        console.log(counter); /// mostrar no log (será 1 valor a menos)
    }

    // 3. Toda vez que clicar nesse componete Botão, executara a função 'increment'
    // 3.1 dentro do botão será exibido o valor counter
    return (
        <button onClick={increment}>
            {'Clicou: ' + counter + 'x'}
        </button>
    )
}