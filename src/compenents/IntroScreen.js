import { Link } from "react-router-dom";
import Layout from "./Layout";
import TopLogo from "./TopLogo";

const IntroScreen = () => {
    return (

        <Layout>

            <div className="first-screen">

                <TopLogo />

                <h1>Smart Portable ECG Machine</h1>

                <div className="screen-content">
                    <div className="left">
                        <h2>Group Members:</h2>
                        <ul>
                            <li>Abdul Rehman</li>
                            <li>Abeer ul Haq</li>
                            <li>Usman Shakeel</li>
                            <li>Hasan Muzaffar</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h2>Project Supervisor:</h2>
                        <ul>
                            <li>Engr. Sajid Hussain</li>
                        </ul>
                        <br />

                        <h2>Co-Supervisor:</h2>
                        <ul>
                            <li>Engr. Qurat ul Ain</li>
                        </ul>
                    </div>
                </div>

                <div className="screen-footer">
                    <h2>Final Year Project Incharge:</h2>
                    <h3>Engr. Agha Shakir</h3>
                    <Link to={`/enter-id`}>
                        <button className="btn-next">NEXT</button>
                    </Link>
                </div>

            </div>
        </Layout>
    )
}

export default IntroScreen;