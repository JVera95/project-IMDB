import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Upcomings
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="https://www.imdb.com/"
                target="_blank"
                rel="noreferrer"
                className="nav-link active"
              >
                Imdb
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.themoviedb.org/?language=es-ES"
                target="_blank"
                rel="noreferrer"
                className="nav-link active"
              >
                The Movie Database
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
