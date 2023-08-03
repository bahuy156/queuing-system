import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts/DefautlLayout";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((routes, index) => {
                    const Page = routes.component;

                    let Layout: any = DefaultLayout;

                    if (routes.overview) {
                        Layout = routes.overview
                    } else if (routes.overview === null) {
                        Layout = Fragment
                    }

                    return (
                        <Route
                            key={index}
                            path={routes.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </Router>
    );
}

export default App;
