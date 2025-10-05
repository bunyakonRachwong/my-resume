"use client"
import React, { useEffect } from "react"
import { animate, scroll } from "motion"

export default function Gallery() {
  useEffect(() => {
    const items = document.querySelectorAll(".img-container")

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      { target: document.querySelector(".img-group-container") }
    )

    // Progress bar representing gallery scroll
    scroll(animate(".progress", { scaleX: [0, 1] }), {
      target: document.querySelector(".img-group-container"),
    })
  }, [])

  return (
    <article id="gallery" className="w-[98vw]">
      {/* Header */}
      <header className="h-[70vh] flex justify-center items-center">
        <h2 className="text-[56px] font-bold tracking-[-3px] leading-[1.2] text-center m-0">
          Lines of London
        </h2>
      </header>

      {/* Scrollable gallery */}
      <section className="img-group-container h-[500vh] relative">
        <div className="sticky top-0 overflow-hidden h-screen">
          <ul className="img-group flex">
            {["1", "2", "3", "4", "5"].map((num) => (
              <li
                key={num}
                className="img-container flex w-screen h-screen flex-col items-center justify-center"
              >
                <img
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  alt={`cityscape ${num}`}
                  className="w-[300px] h-[400px] object-cover"
                />
                <h3 className="relative bottom-[30px] text-[50px] font-bold tracking-[-3px] leading-[1.2] m-0 inline-block">
                  #{num.padStart(3, "0")}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-[70vh] flex justify-center items-center">
        <p className="text-lg">
          Photos by{" "}
          <a
            href="https://twitter.com/mattgperry"
            target="_blank"
            className="text-purple-600 underline"
          >
            Matt Perry
          </a>
        </p>
      </footer>

      {/* Progress bar */}
      <div className="progress fixed left-0 right-0 h-[5px] bg-[#9911ff] bottom-[50px] origin-left scale-x-0" />
    </article>
  )
}
