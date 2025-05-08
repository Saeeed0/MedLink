import { Link } from "react-router-dom";
import Egypt from "../../assets/images/flages/Egypt.jpg";
import Jordan from "../../assets/images/flages/Jordan.jpg";
import Kenya from "../../assets/images/flages/Kenya.jpg";
import Lebanon from "../../assets/images/flages/Lebanon.jpg";
import Nigeria from "../../assets/images/flages/Nigeria.jpg";
import Saudi from "../../assets/images/flages/Saudi.jpg";
import { useContext, useState } from "react";
import { userContext } from "../../context/UserContect/UserContext";
function Navbar() {
  let [lang, setLang] = useState(true);
  const countries = [
    { name: "Egypt", img: Egypt },
    { name: "Jordan", img: Jordan },
    { name: "Kenya", img: Kenya },
    { name: "Lebanon", img: Lebanon },
    { name: "Nigeria", img: Nigeria },
    { name: "Saudi", img: Saudi },
  ];

  let [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const { logout, userToken } = useContext(userContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container ">
        <Link className="navbar-brand text-light" to="/">
          MedLink
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {userToken ? (
              <li className="nav-item dropdown">
                <span
                  className="nav-link text-light dropdown-toggle"
                  id="navbarDarkDropdownMenuLink"
                  data-bs-toggle="dropdown"
                >
                  Settings
                </span>
                <ul
                  className="dropdown-menu  "
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item text-primary">My Profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-primary">
                      My Appointments
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-primary">My Insurance</a>
                  </li>
                  <li>
                    <span
                      onClick={() => logout()}
                      className="dropdown-item text-primary"
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link  text-light" to="/SignUp">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Login">
                    Login
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                MedLink For Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  setLang(!lang);
                }}
                className="nav-link text-light"
              >
                {lang ? "عربي" : "Engilsh"}
              </button>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link text-light dropdown-toggle"
                id="dropdownId"
                data-bs-toggle="dropdown"
              >
                <img
                  src={selectedCountry.img}
                  alt={`${selectedCountry.name} flag`}
                />
                {` ${selectedCountry.name}`}
              </Link>

              <div className="dropdown-menu">
                {countries.map((country, index) => (
                  <button
                    key={index}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedCountry(country);
                    }}
                  >
                    <img src={country.img} alt={country.name + " flag"} />
                    {` ${country.name}`}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
