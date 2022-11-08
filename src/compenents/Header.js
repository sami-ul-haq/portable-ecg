import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="header">
            <h1>
                <Link to={`/`}>
                    Smart ECG Machine
                </Link>
            </h1>
        </section>
    )
}

export default Header;