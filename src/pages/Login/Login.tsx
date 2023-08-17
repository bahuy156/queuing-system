import MainLogin from "./MainLogin/MainLogin";
import ResetPassword from "./ResetPassword/ResetPassword";
import { useState } from "react"

function Login() {
    const [forgetPass, setForgetPass] = useState<boolean>(false)

    const handleForgetPass = () => {
        setForgetPass(!forgetPass)
    }

    return (
        <div className="wrapper-dashboard-login">
            {!forgetPass
                ? <MainLogin handleForgetPass={handleForgetPass} />
                : <ResetPassword handleForgetPass={handleForgetPass} />}
        </div>
    );
}

export default Login;