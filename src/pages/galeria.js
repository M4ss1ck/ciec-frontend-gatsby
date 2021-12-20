import React from "react"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SlideShow from "../components/SlideShow/SlideShow"
import "../components/SlideShow/style.css"

function Galeria2() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { sourceInstanceName: { eq: "galería" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 800
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      <article className="divide-y divide-blue w-100">
        <Seo title="Galería" />
        <div className="w-full h-2/3 flex items-center justify-center">
          <div
            className="flex justify-center align-middle items-center my-auto z-0 w-max overflow-hidden rounded-xl "
            // style={{
            //   height: "80vh",
            // }}
          >
            {/*slideshow properties:
              - autoPlay => can be true, false (default: false)
              - activeSlideDuration => can be in milliseconds (default: 3000)
              - interactionMode => can be:
              (swipe => change slides by swiping to right or left) or
              (hover => pause a slide on hover)
              (default is swipe)
              - alignCaption => can be center, left, right (default: center)
              - alignIndicators => can be center, left, right (default: center)
              - indicatorsColor => allows you to change the indicators color (default: #fff)
              - useRightLeftTriangles => can be true or false (defalut: false)
              - rightTriangleColor or leftTriangleColor => set the background color of the right and the left triangles (default: #fff)
              - rightIcon or leftIcon => set the right or left icon (it can be "svg" or "fontawesome icon") if you want to change the color use inline styles on the icon as follow:
              (for svg) =>  style={{fill: "#000"}} defalut is black
              (for fontawesome) => style={{color: "#000"}} default is black (don't forget to add fontawesome to your project) */}
            <SlideShow
              autoPlay={true}
              activeSlideDuration={3000}
              interactionMode="swipe"
              alignCaption="center"
              alignIndicators="center"
              indicatorsColor="#0276df"
              useRightLeftTriangles={true}
              rightTriangleColor="#0276df"
              leftTriangleColor="#0276df"
              rightIcon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
                </svg>
              }
              leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
                </svg>
              }
            >
              {allFile.edges.map((image, index) => (
                <div
                  key={image.node.name}
                  style={{ alignSelf: "center", maxHeight: "100%" }}
                >
                  {/* <img
                    alt={image.name}
                    src={image.node.publicURL}
                    style={{ objectFit: "cover", height: "80vh" }}
                  /> */}
                  <GatsbyImage
                    image={getImage(image.node)}
                    alt={image.node.name}
                    style={{ objectFit: "cover", height: "80vh" }}
                  />
                  {/* <div className="carousel-caption">
                    <h3 className="carousel-caption-title">{image.node.name}</h3>
                    <p className="carousel-caption-subtitle">{image.node.name}</p>
                  </div> */}
                </div>
              ))}
            </SlideShow>
          </div>
        </div>
      </article>
    </>
  )
}

export default Galeria2
