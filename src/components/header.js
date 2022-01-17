import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql, Link } from "gatsby";
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import logo from "../images/logo.png"
//import Toggle from "react-toggle"
import "./toggle.css"

const Header = props => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="flex items-center flex-wrap bg-gradient-to-r from-primario via-terciario to-primario p-3 w-full sticky top-0 z-20 hover:z-50 dark:from-black dark:via-gray-900 dark:to-black">
        <Link
          to="/"
          className="inline-flex items-center p-1 mr-4 rounded-full bg-white md:ml-8 lg:ml-16 dark:bg-black"
        >
          <img
            src={logo}
            className="object-fill"
            height={36}
            width={36}
            alt="Logo"
          />{" "}
          <span className="text-lg text-primario font-bold uppercase tracking-wide dark:text-white">
            &nbsp;Inicio
          </span>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-white ml-auto outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            {props.enlaces.map(enlace => {
              return (
                <div key={enlace.name} className="group hover:h-24 lg:px-6">
                  <button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold group-hover:hidden mr-auto text-left">
                    <span className="text-sm font-bold uppercase tracking-wide">
                      {enlace.name}
                    </span>
                  </button>
                  <ul className="hidden group-hover:flex flex-col h-full group-hover:justify-center">
                    {enlace.menu.map(item => {
                      return (
                        <li key={item.name} className="text-inherit">
                          <Link
                            to={item.link}
                            className="text-sm rounded-md px-2 text-white uppercase tracking-wide hover:bg-secundario"
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <button
              className="flex items-center justify-items-center"
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={theme === "dark" ? "h-5 w-5 hidden" : "h-5 w-5 flex"}
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  theme === "dark"
                    ? "h-5 w-5 flex align-middle"
                    : "h-5 w-5 hidden"
                }
                viewBox="0 0 20 20"
                fill="yellow"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
              {/* <label className="px-2" htmlFor="toggle">
                <Toggle
                  id="toggle"
                  className="flex items-center justify-items-center"
                  defaultChecked={theme === "dark"}
                  icons={{
                    checked: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          theme === "dark" ? "h-3 w-3 flex" : "h-3 w-3 hidden"
                        }
                        viewBox="0 0 20 20"
                        fill="#fff"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    ),
                    unchecked: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          theme === "dark"
                            ? "h-3 w-3 hidden"
                            : "h-3 w-3 flex align-middle"
                        }
                        viewBox="0 0 20 20"
                        fill="yellow"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  }}
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                />
              </label> */}
            </button>
          )}
        </ThemeToggler>
        {/* <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className="dark-button mx-4">
              <input
                type="checkbox"
                id="toggle"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <label for="toggle" htmlFor="toggle"></label>
            </div>
          )}
        </ThemeToggler> */}
      </nav>
    </>
  )
}

export default Header
