import React, { useEffect, useState } from "react"

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0)
  const scrollListener = () => {
    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [scrollListener])

  return (
    <div
      className={`sticky h-2 top-16 bg-gray-300 dark:bg-gray-700 z-40 mr-auto`}
      style={{ width: `${readingProgress}%` }}
    />
  )
}

export default ReadingProgress

// https://nehalist.io/creating-a-reading-progress-bar-in-react/
