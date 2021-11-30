import React from "react"

const subir = () => {
  return (
    <div className="fixed bottom-2 right-1 md:right-5 ml-12 my-auto mr-0 z-50">
      <a href="#header" className="group flex-row flex">
        <span className="hidden group-hover:inline-flex px-4 bg-white text-primario rounded-full border border-primario dark:bg-black dark:text-white">
          Subir
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 group-hover:hidden"
          viewBox="0 0 20 20"
          fill="#fff"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  )
}

export default subir
