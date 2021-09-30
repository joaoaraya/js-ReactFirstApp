type ButtonProps = {
    text?: string; // Propriets, propriedades, props = 'text (é opcional (?)) e do tipo string
}

// Exporte a função Button com as 'propriedades' de 'ButtonProps'
export function Button(props: ButtonProps) {
    return (
        // Retorne um botão (propriedades.texto(string))
        <button>{props.text || 'Default'}</button>
    )
}