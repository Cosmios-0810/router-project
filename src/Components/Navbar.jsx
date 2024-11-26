import { NavLink } from 'react-router';
import logo from '../Assets/turuncusiyah.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width={'200px'} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={'nav-link'}  to={'/people'}>People</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={'nav-link'}  to={'/login'}>Login</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
