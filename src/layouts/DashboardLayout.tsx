import "./Layout.scss"
import NavBar from "../components/NavBar/NavBar";
import HeaderDashboard from "../components/HeaderDashboard/HeaderDashboard";

interface PropsChild {
    children: any
}

function DashboardLayout(props: PropsChild) {
    return (
        <div className="wrapper-dashboard">
            <NavBar />
            <div className="wrapper-dashboard-child">
                <div className="wrapper-dashboard-child-left">
                    <HeaderDashboard />
                    <div className="dashboard-content">{props.children}</div>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;