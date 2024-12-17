import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Context } from "../context/Context"
import { useContext } from "react"

const Hero = () => {
    const {loaded, setLoaded} = useContext(Context)

useGSAP(() => {
        if (loaded) {
            var tl = gsap.timeline({repeat: 0, delay: 0.5});
            tl.to(".fadeIn", {
                opacity: 1,
                duration: 0.1,
            })
            tl.to(".fadeIn", {
                opacity: 0,
                duration: 0.1,
            })
            tl.to(".fadeIn", {
                opacity: 1,
                duration: 0.1,
            })
            tl.to(".fadeIn", {
                opacity: 0,
                duration: 0.1,
            },'+=0.3')
            tl.to(".fadeIn", {
                opacity: 1,
                duration: 0.1,
            })
        
            var tl2 = gsap.timeline({repeat: 0, delay: 0.5});
            tl2.to(".fadeInWhite", {
                opacity: 0.5,
                duration: 0.1,
            })
            tl2.to(".fadeInWhite", {
                opacity: 0,
                duration: 0.1,
            })
            tl2.to(".fadeInWhite", {
                opacity: 0.5,
                duration: 0.1,
            })
            tl2.to(".fadeInWhite", {
                opacity: 0,
                duration: 0.1,
            },'+=0.3')
            tl2.to(".fadeInWhite", {
                opacity: 0.5,
                duration: 0.1,
            })
        
            var tl3 = gsap.timeline({repeat: 0, delay: 0.5,});
            tl3.to(".Main_title",{
                opacity: 1,
                duration: 0.1,
            })
        
            var tl4 = gsap.timeline({repeat: 0, delay: 0.5,});
            tl4.to(".Main_title_black",{
                opacity: 0,
                duration: 0.1,
            })
        } 
},[loaded])

  return (
    <section className="w-screen h-screen bg-black">
        <div className="flex justify-center">
            <div className="flex justify-center max-w-[90vw] md:max-w-[76vw]">
                <div className="screen-max-width">
                    <div className="flex flex-col justify-between h-screen items-center p-20">
                        <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
                            <h2 className="text-6xl text-white">
                                Welcome to:
                            </h2>
                            <div className="relative">
                                <h1 className="Main_title_black text-9xl text-[#363636]">DanBam</h1>
                                <h1 className="Main_title opacity-0 text-9xl absolute top-0 left-0 text-[#7c0aff]">DanBam</h1>
                                <h1 className="Main_title_shadow1 fadeInWhite absolute top-0 left-0 opacity-0 text-9xl text-[#7c0aff]">DanBam</h1>
                                <h1 className="Main_title_shadow2 fadeIn absolute top-0 left-0 opacity-0 text-9xl text-[#7c0aff]">DanBam</h1>
                                <h1 className="Main_title_shadow3 fadeIn absolute top-0 left-0 opacity-0 text-9xl text-[#7c0aff]">DanBam</h1>
                                <h1 className="Main_title_shadow4 fadeIn absolute top-0 left-0 opacity-0 text-9xl text-[#7c0aff]">DanBam</h1>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <p>Demo</p>
                            <p className="rotate-180">^</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero