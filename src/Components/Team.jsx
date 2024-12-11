import { useEffect, useState } from "react"
import { ACTRESS2IMG, ACTRESS3IMG, ACTRESSIMG, BILLLIEIMG, INSTABGBOTIMG, INSTABGTOPIMG, IRENEIMG, ITZYIMG, JOYIMG, LIAIMG, MINJIIMG, PIXXIE2IMG, PIXXIE3IMG, PIXXIECUT, PIXXIEIMG, SIYEONIMG, SJUKSEEIMG, SUNMIIMG, YUKIIMG } from "../utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Team = () => {
    const [picture, setPicture] = useState(SJUKSEEIMG)
    const [pictureSmall, setPictureSmall] = useState(ACTRESSIMG)
    const [text, setText] = useState('Billlie')
    const [picCase, setPicCase] = useState('first')
    const [classnameFunc, setClassnameFunc] = useState("blueClass")
    const [bgImage,setBgImage] = useState('bg_image_blue')

    useGSAP(() => {
        var tl = gsap.timeline({repeat: -1,});
        tl.to("#pic_small", {
            y: 10,
            x: 10,
            duration: 6,
            ease: "power4.inOut"
        })
        tl.to("#pic_small", {
            y: 0,
            x: 0,
            duration: 6,
            ease: "power4.inOut"
        })
        /*gsap.to(tl, {time:tl.duration(), duration:tl.duration(), 
        ease:"steps", repeat:-1});*/
        
        var tlGrow = gsap.timeline({repeat:-1});
        tlGrow.to("#textGrow", {
            scale:1.1,
            duration: 5,
            ease: "power4.inOut"
        })
        tlGrow.to("#textGrow", {
            scale:1,
            duration: 5,
            ease: "power4.inOut"
        })

    },[])

    
    useEffect(() => {
        switch(picCase){
            case 'first': 
                setPicture(BILLLIEIMG)
                setText('Billlie')
                setClassnameFunc("blueClass")
                setPictureSmall(ACTRESSIMG)
                setBgImage('bg_image_blue')
                break
            case 'second': 
                setPicture(IRENEIMG)
                setText('Irene')
                setClassnameFunc("redClass")
                setPictureSmall(ACTRESS2IMG)
                setBgImage('bg_image_red')
                break
            case 'third': 
                setPicture(PIXXIECUT)
                setText('Pixxie')
                setClassnameFunc("blueClass")
                setPictureSmall(ACTRESS3IMG)
                setBgImage('bg_image_blue')
                break
            case 'fourth': 
                setPicture(PIXXIE2IMG)
                setText('Pixxie 2')
                setClassnameFunc("yellowClass")
                setPictureSmall(JOYIMG)
                setBgImage('bg_image_yellow')
                break
            case 'fifth': 
                setPicture(PIXXIE3IMG)
                setText('Pixxie 3')
                setClassnameFunc("redClass")
                setPictureSmall(ITZYIMG)
                setBgImage('bg_image_red')
                break
            case 'sixth': 
                setPicture(SIYEONIMG)
                setText('Siyeon')
                setClassnameFunc("yellowClass")
                setPictureSmall(LIAIMG)
                setBgImage('bg_image_yellow')
                break
            case 'seventh': 
                setPicture(SJUKSEEIMG)
                setText('Sekyung')
                setClassnameFunc("blueClass")
                setPictureSmall(MINJIIMG)
                setBgImage('bg_image_blue')
                break
            case 'eight': 
                setPicture(YUKIIMG)
                setText('Yuki')
                setClassnameFunc("yellowClass")
                setPictureSmall(SUNMIIMG)
                setBgImage('bg_image_yellow')
                break
        }
    },[picCase])

  return (
    <section className={bgImage}>
        <div className="flex justify-center pt-8">
            <div className="flex justify-start bg-amber-500 w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[950px] xl:w-[1180px] 2xl:w-[1400px]">
                <h2 className="text-7xl font-bold">Meet the team!</h2>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="max-w-[90vw] md:max-w-[92vw] flex lg:flex-row flex-col justify-between md:gap-6 lg:gap-10 xl:gap-16 items-start py-[10vh] pt-[4vh]">
                <div className="relative screen-max-width flex flex-col justify-center items-center bg-pink-400 sm:bg-amber-400 md:bg-violet-900 lg:bg-orange-600 xl:bg-teal-500 2xl:bg-green-800 min-w-[90vw] sm:min-w-[576px] md:min-w-[700px] lg:min-w-[760px] xl:min-w-[800px] 2xl:min-w-[960px] md:h-[740px] overflow-hidden">
                    <div className="">
                        <div className="flex justify-center w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[760px] xl:w-[800px] 2xl:w-[960px] md:h-[740px] overflow-hidden">
                            <img src={picture} alt="MAIN IMG" id="" className="object-contain max-h-full max-w-full z-10 mb-12"/>
                        </div>
                        <div className="absolute top-0 left-0 flex justify-center w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[760px] xl:w-[800px] 2xl:w-[960px] md:h-[740px] overflow-hidden ">
                            <img src={INSTABGTOPIMG} alt="MAIN IMG" id="" className="object-contain z-0 shadow-lg shadow-zinc-800 m-12 min-h-fit rounded-2xl"/>
                        </div>
                        <div className="absolute top-0 left-0 flex justify-center w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[760px] xl:w-[800px] 2xl:w-[960px] md:h-[740px] overflow-hidden">
                            <img src={INSTABGBOTIMG} alt="MAIN IMG" id="" className="object-contain z-20 m-12 rounded-2xl"/>
                        </div>
                        <div className={classnameFunc}>
                            <p className="font-semibold text-9xl z-50">{text}</p>
                        </div>
                        <div id="pic_small" className="absolute md:scale-75 lg:scale-90 xl:scale-95 2xl:scale-100 md:flex hidden 2xl:top-16 2xl:right-12 md:top-8 md:right-6 w-[230px] h-[300px] rounded-2xl items-end shadow-lg shadow-zinc-800 z-30">
                            <div className="absolute top-0 left-0 h-[41px] w-full rounded-t-2xl bg-white"></div>
                            <div className="flex flex-row gap-[3px] absolute top-[19px] right-4">
                                <div className="h-[5px] w-[5px] rounded-full bg-gray-600"></div>
                                <div className="h-[5px] w-[5px] rounded-full bg-gray-600"></div>
                                <div className="h-[5px] w-[5px] rounded-full bg-gray-600"></div>
                            </div>
                            <div  className="absolute flex items-end w-full rounded-b-2xl overflow-hidden">
                                <img src={pictureSmall} alt="MAIN IMG" id="" className=" h-[260px] w-full object-cover object-top"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center top-48 left-28 absolute w-[150px] h-[50px] bg-white rounded-2xl shadow-lg shadow-zinc-800 p-2">
                            <p className="text-sm text-black">#Leader</p>
                        </div>
                        <div id="textGrow" className="flex flex-wrap items-center justify-center bottom-56 left-72 absolute w-[230px] h-[70px] bg-white rounded-2xl shadow-lg shadow-zinc-800 p-2 z-40">
                            <p className="text-xs text-black"><span className="text-sm">He's the leader of the bunch,</span> you know him well</p>
                        </div>
                        <div className="flex items-center justify-center bottom-48 right-32 absolute w-[150px] h-[50px] bg-white rounded-2xl shadow-lg shadow-zinc-800 p-2">
                            <p className="text-sm text-black">Never skip a meal</p>
                        </div>
                    </div>
                </div>
                <div className="person-selector md:inline-block hidden lg:overflow-y-scroll xl:overflow-hidden min-h-0 lg:h-[740px]">
                    <div className="flex flex-row flex-wrap justify-center lg:flex-nowrap lg:flex-col xl:flex-row xl:flex-wrap bg-red-700 gap-4 lg:gap-4 md:max-w-[700px] 2xl:max-w-[376px] xl:max-w-[316px]">
                        <div onClick={() => setPicCase('first')} className="personblock">
                            <img src={BILLLIEIMG} alt="BILLLIE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => setPicCase('second')} className="personblock lg:mt-12 xl:mt-0">
                            <img src={IRENEIMG} alt="IRENE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => setPicCase('third')} className="personblock lg:mt-12">
                            <img src={PIXXIEIMG} alt="PIXXIE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => setPicCase('fourth')} className="personblock lg:mt-12">
                            <img src={PIXXIE2IMG} alt="PIXXIE 2 IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => setPicCase('fifth')} className="personblock lg:mt-12">
                            <img src={PIXXIE3IMG} alt="PIXXIE 3 IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => setPicCase('sixth')} className="personblock lg:mt-12">
                            <img src={SIYEONIMG} alt="SIYEON IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => setPicCase('seventh')} className="personblock lg:mt-12">
                            <img src={SJUKSEEIMG} alt="SJUKSEE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => setPicCase('eight')} className="personblock lg:mt-12">
                            <img src={YUKIIMG} alt="YUKI IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team