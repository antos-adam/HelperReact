import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
	return (
		<header>
			<Link className="name" to="/">Učitelův pomocníček</Link>
			<Link className="link" to="/random-number">Číslo</Link>
			<Link className="link" to="/random-student">Student</Link>
			<Link className="link" to="/order">Seznam</Link>
			<Link className="link" to="/setup">Nastavení studentů</Link>
		</header>
	)
}

export default Header;