import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-light">
            <Link to="/" className="navbar-brand">Home</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
        </nav>
    );
}