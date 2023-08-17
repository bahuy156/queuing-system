import "./Layout.scss"

interface PropsChild {
    children: any
}

function LoginLayout(props: PropsChild) {
    return (
        <div className="wrapper-login-layout">
            <div>{props.children}</div>
        </div>
    );
}

export default LoginLayout;