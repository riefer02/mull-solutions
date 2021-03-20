import React from "react";
import styles from "../styles/NavBar.module.scss";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <nav className="fixed z-10 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-500">
        <div className="container mx-auto">
          <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between items-center lg:static">
              <a
                className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                href="#pablo"
              >
                Mull Solutions
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                type="button"
                onClick={() => toggleNav()}
              >
                <div
                  className={
                    styles.hamburger + " " + (navbarOpen ? styles.isActive : "")
                  }
                  id={styles.hamburgerStyle}
                >
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                </div>
              </button>
            </div>
            {/* Main Drawer */}

            <div
              className={
                "lg:flex flex-grow items-center flex " +
                styles.drawerMain +
                " " +
                (navbarOpen ? styles.isActive : "")
              }
            >
              <ul className="flex flex-col list-none justify-start items-start w-full h-full p-12">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">Clients</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={
                styles.drawerFooter + " " + (navbarOpen ? styles.isActive : "")
              }
            ></div>
            <div
              className={
                styles.drawerLeft + " " + (navbarOpen ? styles.isActive : "")
              }
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
}
