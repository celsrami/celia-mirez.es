import "../../styles/layout/Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logotipo.png";

const Header = () => {
  return (
    <>
      <header className='header'>
        {/* <h1 className='header__title'>{logo}</h1> */}
        <img src={logo} alt='Logo' className='header__logo'></img>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending header__link"
                    : isActive
                    ? "active header__link"
                    : "header__link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shop/"} className='header__link'>
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to={"/accessories/"} className='header__link'>
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink to={"/collections/"} className='header__link'>
                Collections
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={"/aboutme/"} className='header__link'>
                About me
              </NavLink>
            </li> */}
            <li>
              <NavLink to={"/contact/"} className='header__link'>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
