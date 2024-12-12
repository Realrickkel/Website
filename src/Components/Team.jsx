import { useEffect, useState } from "react"
import { ACTRESS2IMG, ACTRESS3IMG, ACTRESSIMG, BILLLIEIMG, DADIMG, DADSMALLIMG, GEUNSOOIMG, GEUNSOOSMALLIMG, HYEONIIMG, HYEONISMALLIMG, INSTABGBOTIMG, INSTABGTOPIMG, IRENEIMG, ITZYIMG, JOYIMG, LIAIMG, MINJIIMG, PIXXIE2IMG, PIXXIE3IMG, PIXXIECUT, PIXXIEIMG, SAEROYISIMG, SAEROYISMALLIMG, SEUNGGWONIMG, SEUNGGWONSMALLIMG, SIYEONIMG, SJUKSEEIMG, SOOAHIMG, SOOAHSMALLIMG, SUNMIIMG, TONIIMG, TONISMALLIMG, YISEOIMG, YISEOSMALLIMG, YUKIIMG } from "../utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Team = () => {
    const [picture, setPicture] = useState(SAEROYISIMG)
    const [pictureSmall, setPictureSmall] = useState(ACTRESSIMG)
    const [text, setText] = useState('Saeroyi')
    const [picCase, setPicCase] = useState('first')
    const [classnameFunc, setClassnameFunc] = useState("blueClass")
    const [bgImage,setBgImage] = useState('bg_image_blue')
    const [classnameMessage1Func,setClassnameMessage1Func] = useState('blue_first_message')
    const [classnameMessage2Func,setClassnameMessage2Func] = useState('blue_second_message')
    const [classnameMessage3Func,setClassnameMessage3Func] = useState('blue_third_message')
    const [classSmallPic,setClassSmallPic] = useState('blue_small_image')
    const [txtMes1,setTxtMes1] = useState('#leader')
    const [txtMes2,setTxtMes2] = useState("He's the leader of the bunch,")
    const [txtMes3,setTxtMes3] = useState('you know him well')
    const [txtMes4,setTxtMes4] = useState('Never skip a meal')
    const [animateOut, setAnimateOut] = useState(false)
    const [animateIn, setAnimateIn] = useState(true)
    const [animateIn2, setAnimateIn2] = useState(false)

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

    useGSAP(() => {
        if(animateOut == true){
            gsap.to("#big_group" , {
                opacity: 0,
                duration: 0.5,
                ease: "power4.inOut"
            })

            gsap.to("#asjemenou", {
                backgroundColor: 'rgba(0,0,0,100)',
                duration: 0.5,
                ease: "power4.inOut"
            })

            console.log(animateOut)
            setTimeout(function () {
                setAnimateIn(true)
            }, 500);
            setAnimateOut(false)
        }
    },[animateOut])

    useGSAP(() => {
        if(animateIn2 == true){
            gsap.to("#big_group" , {
                opacity: 1,
                duration: 0.5,
                ease: "power4.inOut"
            })

            gsap.to("#asjemenou", {
                backgroundColor: 'rgba(0,0,0,0)',
                duration: 0.5,
                ease: "power4.inOut"
            })

            setAnimateIn2(false)
        }
    },[animateIn2])

    
    useEffect(() => {
        if(animateIn == true){
        switch(picCase){
            case 'first': 
                setPicture(SAEROYISIMG)
                setText('Saeroyi')
                setClassnameFunc("blueClass")
                setPictureSmall(SAEROYISMALLIMG)
                setBgImage('bg_image_blue')
                setClassnameMessage1Func('blue_first_message')
                setClassnameMessage2Func('blue_second_message')
                setClassnameMessage3Func('blue_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Revenge is Sweet')
                setClassSmallPic('blue_small_image')
                break
            case 'second': 
                setPicture(YISEOIMG)
                setText('Yiseo')
                setClassnameFunc("redClass")
                setPictureSmall(YISEOSMALLIMG)
                setBgImage('bg_image_red')
                setClassnameMessage1Func('red_first_message')
                setClassnameMessage2Func('red_second_message')
                setClassnameMessage3Func('red_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never skip a meal')
                setClassSmallPic('red_small_image')
                break
            case 'third': 
                setPicture(SOOAHIMG)
                setText('SooAh')
                setClassnameFunc("yellowClass")
                setPictureSmall(SOOAHSMALLIMG)
                setBgImage('bg_image_yellow')
                setClassnameMessage1Func('yellow_first_message')
                setClassnameMessage2Func('yellow_second_message')
                setClassnameMessage3Func('yellow_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never skip a meal')
                setClassSmallPic('yellow_small_image')
                break
            case 'fourth': 
                setPicture(HYEONIIMG)
                setText('Hyeoni')
                setClassnameFunc("blueClass")
                setPictureSmall(HYEONISMALLIMG)
                setBgImage('bg_image_blue')
                setClassnameMessage1Func('blue_first_message')
                setClassnameMessage2Func('blue_second_message')
                setClassnameMessage3Func('blue_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never skip a meal')
                setClassSmallPic('blue_small_image')
                break
            case 'fifth': 
                setPicture(SEUNGGWONIMG)
                setText('Seunggwon')
                setClassnameFunc("redClass")
                setPictureSmall(SEUNGGWONSMALLIMG)
                setBgImage('bg_image_red')
                setClassnameMessage1Func('red_first_message')
                setClassnameMessage2Func('red_second_message')
                setClassnameMessage3Func('red_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never skip a meal')
                setClassSmallPic('red_small_image')
                break
            case 'sixth': 
                setPicture(GEUNSOOIMG)
                setText('Geunsoo')
                setClassnameFunc("yellowClass")
                setPictureSmall(GEUNSOOSMALLIMG)
                setBgImage('bg_image_yellow')
                setClassnameMessage1Func('yellow_first_message')
                setClassnameMessage2Func('yellow_second_message')
                setClassnameMessage3Func('yellow_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never skip a meal')
                setClassSmallPic('yellow_small_image')
                break
            case 'seventh': 
                setPicture(TONIIMG)
                setText('Toni')
                setClassnameFunc("blueClass")
                setPictureSmall(TONISMALLIMG)
                setBgImage('bg_image_blue')
                setClassnameMessage1Func('blue_first_message')
                setClassnameMessage2Func('blue_second_message')
                setClassnameMessage3Func('blue_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never skip a meal')
                setClassSmallPic('blue_small_image')
                break
            case 'eight': 
                setPicture(DADIMG)
                setText('Mr. Park')
                setClassnameFunc("redClass")
                setPictureSmall(DADSMALLIMG)
                setBgImage('bg_image_red')
                setClassnameMessage1Func('red_first_message')
                setClassnameMessage2Func('red_second_message')
                setClassnameMessage3Func('red_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never skip a meal')
                setClassSmallPic('red_small_image')
                break
        }
        setAnimateIn(false)
        setAnimateIn2(true)
    }
    },[animateIn])

  return (
    <section id="asjemenou" className={bgImage}>
        <div className="flex justify-center pt-8">
            
            <div className="flex justify-start bg-amber-500 w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[950px] xl:w-[1180px] 2xl:w-[1400px]">
                <h2 className="text-7xl font-bold">Meet the team!</h2>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="max-w-[90vw] md:max-w-[92vw] flex lg:flex-row flex-col justify-between md:gap-6 lg:gap-10 xl:gap-16 items-start py-[10vh] pt-[4vh]">
                <div id="big_group" className="relative opacity-0 screen-max-width flex flex-col justify-center items-center min-w-[90vw] sm:min-w-[576px] md:min-w-[700px] lg:min-w-[760px] xl:min-w-[800px] 2xl:min-w-[960px] md:h-[740px] overflow-hidden">
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
                        <div id="pic_small" className={classSmallPic}>
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
                        <div className={classnameMessage1Func}>
                            <p className="text-sm text-black font-light">{txtMes1}</p>
                        </div>
                        <div id="textGrow" className={classnameMessage2Func}>
                            <p className="text-xs text-black font-light"><span className="text-sm font-light">{txtMes2}</span><br/>{txtMes3}</p>
                        </div>
                        <div className={classnameMessage3Func}>
                            <p className="text-sm text-black font-light">{txtMes4}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="person-selector md:inline-block hidden lg:overflow-y-scroll xl:overflow-hidden min-h-0 lg:h-[740px]">
                    <div className="flex flex-row flex-wrap justify-center lg:flex-nowrap lg:flex-col xl:flex-row xl:flex-wrap bg-red-700 gap-4 lg:gap-4 md:max-w-[700px] 2xl:max-w-[376px] xl:max-w-[316px]">
                        <div onClick={() => { setPicCase('first'); setAnimateOut(true)}} className="personblock">
                            <img src={BILLLIEIMG} alt="BILLLIE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => { setPicCase('second'); setAnimateOut(true)}} className="personblock lg:mt-12 xl:mt-0">
                            <img src={IRENEIMG} alt="IRENE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => { setPicCase('third'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={PIXXIEIMG} alt="PIXXIE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => { setPicCase('fourth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={PIXXIE2IMG} alt="PIXXIE 2 IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => { setPicCase('fifth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={PIXXIE3IMG} alt="PIXXIE 3 IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => { setPicCase('sixth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={SIYEONIMG} alt="SIYEON IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => { setPicCase('seventh'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={SJUKSEEIMG} alt="SJUKSEE IMG"  id="" className="object-contain max-h-full max-w-full"/>
                        </div>
                        <div onClick={() => { setPicCase('eight'); setAnimateOut(true)}} className="personblock lg:mt-12">
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