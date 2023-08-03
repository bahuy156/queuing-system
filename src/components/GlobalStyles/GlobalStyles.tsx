import "./GlobalStyles.scss"

interface PropsChild {
    children: any
}

function GlobalStyles(props: PropsChild) {
    return props.children
}

export default GlobalStyles;