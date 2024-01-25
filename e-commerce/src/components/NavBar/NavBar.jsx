import CartWidget from "../CartWidget/CartWidget"
import classNav from "./NavBar.module.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <>
            <header className={classNav.navBar}>
                <nav className={"navbar navbar-expand-lg"}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">E-commerce</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className={classNav.li}>
                                    <Link to="/category/Phones">Cells</Link>
                                </li>
                                <li className={classNav.li}>
                                    <Link to="/category/Book">Book</Link>
                                </li>
                                <li className={classNav.li}>
                                    <Link to="/category/Notebook">Notebook</Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <CartWidget></CartWidget>
                </nav>
            </header>
        </>
    )
}

export default NavBar