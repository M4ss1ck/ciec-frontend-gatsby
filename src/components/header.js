import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql, Link } from "gatsby";
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import logo from "../images/logo.png"

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
        </ThemeToggler>
      </nav>
    </>
  )
}

export default Header
