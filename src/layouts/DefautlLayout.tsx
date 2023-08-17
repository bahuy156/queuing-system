import "./Layout.scss"
import NavBar from "../components/NavBar/NavBar";

interface PropsChild {
    children: any
}

function DefaultLayout(props: PropsChild) {
    return (
        <div className="wrapper-default">
            <NavBar />
            <div className="wrapper-default-child">
                <div>{props.children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;