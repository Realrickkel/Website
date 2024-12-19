import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Context } from "../context/Context"
import { useContext } from "react"

const Ending = () => {

  return (
    <section className="w-screen h-screen bg-black overflow-hidden">
        <div className="flex justify-center">
            <div className="flex justify-center max-w-[90vw] md:max-w-[76vw]">
                <div className="screen-max-width">
                    <div className="flex flex-col justify-between h-screen items-center p-20">
                        <div className="flex justify-center items-center flex-col">
                            <p>Demo</p>
                            <p className="">^</p>
                        </div>
                        <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
                            <h2 className="text-2xl md:text-6xl text-white">
                                Scroll back up
                            </h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Ending