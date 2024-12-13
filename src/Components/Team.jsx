import { useEffect, useState } from "react"
import { BILLLIEIMG, DADIMG, DADSMALLIMG, GEUNSOOIMG, GEUNSOOSMALLIMG, HYEONIIMG, HYEONISMALLIMG, INSTABGBOTIMG, INSTABGTOPIMG, IRENEIMG, PIXXIE2IMG, PIXXIE3IMG, PIXXIEIMG, SAEROYISIMG, SAEROYISMALLIMG, SEUNGGWONIMG, SEUNGGWONSMALLIMG, SIYEONIMG, SJUKSEEIMG, SOOAHIMG, SOOAHSMALLIMG, TONIIMG, TONISMALLIMG, YISEOIMG, YISEOSMALLIMG, YUKIIMG } from "../utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const Team = () => {
    const [picture, setPicture] = useState(SAEROYISIMG)
    const [pictureSmall, setPictureSmall] = useState(SAEROYISMALLIMG)
    const [text, setText] = useState('Saeroyi')
    const [picCase, setPicCase] = useState('first')
    const [oldPicCase, setOldPicCase] = useState('first')
    const [classnameFunc, setClassnameFunc] = useState("blueClass")
    const [bgImage,setBgImage] = useState('bg_image_blue')
    const [classnameMessage1Func,setClassnameMessage1Func] = useState('blue_first_message')
    const [classnameMessage2Func,setClassnameMessage2Func] = useState('blue_second_message')
    const [classnameMessage2ContFunc,setClassnameMessage2ContFunc] = useState('blue_second_message_cont')
    const [classnameMessage3Func,setClassnameMessage3Func] = useState('blue_third_message')
    const [classSmallPic,setClassSmallPic] = useState('blue_small_image')
    const [txtMes1,setTxtMes1] = useState('#Boss')
    const [txtMes2,setTxtMes2] = useState("He's the leader of the bunch,")
    const [txtMes3,setTxtMes3] = useState('you know him well')
    const [txtMes4,setTxtMes4] = useState('Revenge is sweet')
    const [animateOut, setAnimateOut] = useState(false)
    const [animateIn, setAnimateIn] = useState(true)
    const [animateIn2, setAnimateIn2] = useState(false)
    const [hoverButton, setHoverButton] = useState(false)
    const [hoverButtonValue, setHoverButtonValue] = useState('none')
    const [opacity1, setOpacity1] = useState('opacity_low')
    const [opacity2, setOpacity2] = useState('opacity_low')
    const [opacity3, setOpacity3] = useState('opacity_low')
    const [opacity4, setOpacity4] = useState('opacity_low')
    const [opacity5, setOpacity5] = useState('opacity_low')
    const [opacity6, setOpacity6] = useState('opacity_low')
    const [opacity7, setOpacity7] = useState('opacity_low')
    const [opacity8, setOpacity8] = useState('opacity_low')

    useGSAP(() => {
        var tl = gsap.timeline({repeat: -1,});
        tl.to(".pic_small_container", {
            scale:1.07,
            duration: 15,
            ease: "power1.inOut"
        })
        tl.to(".pic_small_container", {
            scale:1,
            duration: 15,
            ease: "power1.inOut"
        })

        gsap.to("#pic_small", {
            y: -60,
            scrollTrigger: {
                trigger: '#pic_small',
                start: 'top 100%',
                scrub: 5,
            }
        })

        
        /*gsap.to(tl, {time:tl.duration(), duration:tl.duration(), 
        ease:"steps", repeat:-1});*/
        
        var tlGrow = gsap.timeline({repeat:-1});
        tlGrow.to("#textGrow2_cont", {
            scale:1.05,
            duration: 5,
            ease: "power1.inOut"
        })
        tlGrow.to("#textGrow2_cont", {
            scale:1,
            duration: 5,
            ease: "power1.inOut"
        })

        gsap.to("#textGrow2", {
            y: -40,
            scrollTrigger: {
                trigger: '#textGrow2',
                start: 'top 100%',
                scrub: 5,
            }
        })

        gsap.to("#textGrow1", {
            y: -120,
            scrollTrigger: {
                trigger: '#textGrow1',
                start: 'top 100%',
                scrub: 5,
            }
        })

        gsap.to("#textGrow3", {
            y: -80,
            scrollTrigger: {
                trigger: '#textGrow3',
                start: 'top 100%',
                scrub: 5,
            }
        })

        gsap.fromTo("#big_group", {
            y: 40,
        },{
            y: 0,
            scrollTrigger: {
                trigger: '#big_group',
                start: 'top 100%',
                scrub: 5,
            }
        })

        gsap.fromTo("#Name_tag", {
            y: 40,
        },{
            y: 0,
            scrollTrigger: {
                trigger: '#Name_tag',
                start: 'top 100%',
                scrub: 5,
            }
        })

        gsap.fromTo("#big_picture", {
            y: 35,
        },{
            y: 0,
            scrollTrigger: {
                trigger: '#big_picture',
                start: 'top 100%',
                scrub: 5,
            }
        })

    },[])

    useGSAP(() => {
        if(animateOut == true && oldPicCase != picCase){
            /*gsap.to("#big_group" , {
                opacity: 0,
                duration: 0.5,
                ease: "power4.inOut"
            })

            
            gsap.to("#asjemenou", {
                backgroundColor: 'rgba(0,0,0,100)',
                duration: 0.5,
                ease: "back.in(1.7)"
            })*/

            setOldPicCase(picCase)
            document.getElementById('selector_people').style.pointerEvents = 'none';

            gsap.to("#pic_small", {
                scale: 0,
                ease: "back.in(1.7)",
                })

            gsap.to("#textGrow1", {
                scale: 0,
                ease: "back.in(1.7)",
                })
            
            gsap.to("#textGrow2", {
                scale: 0,
                ease: "back.in(1.7)",
                })

            gsap.to("#textGrow3", {
                scale: 0,
                ease: "back.in(1.7)",
                })

            gsap.to("#Name_tag", {
                x: -500,
                opacity: 0,
                ease: "back.in(1.7)",
                })

            gsap.to(".Main_img", {
                x: -500,
                opacity: 0,
                ease: "back.in(1.7)",
                })

            setTimeout(function () {
                setAnimateIn(true)
            }, 500);
            setAnimateOut(false)
        } else { 
            setAnimateOut(false)
        }

    },[animateOut])

    useGSAP(() => {
        if(animateIn2 == true){
            /*gsap.to("#big_group" , {
                opacity: 1,
                duration: 0.5,
                ease: "power4.inOut"
            })

            gsap.to("#asjemenou", {
                backgroundColor: 'rgba(0,0,0,0)',
                duration: 0.5,
                ease: "back.out(1.3)"
            })*/

            gsap.to("#pic_small", {
                scale: 1,
                ease: "back.out(1.3)",
            })

            gsap.to("#textGrow1", {
                scale: 1,
                ease: "back.out(1.3)",
                })
            
            gsap.to("#textGrow2", {
                scale: 1,
                ease: "back.out(1.3)",
                })

            gsap.to("#textGrow3", {
                scale: 1,
                ease: "back.out(1.3)",
                })

            gsap.fromTo("#Name_tag", {
                x: 500,
                opacity: 0,
                },
                    {
                    x: 0,
                    opacity: 1,
                    ease: "back.out(1.3)",
                    })

            gsap.fromTo(".Main_img", {
                x: 500,
                opacity: 0,
            },
                {
                x: 0,
                opacity: 1,
                ease: "back.out(1.3)",
                })
                
                setTimeout(function () {
                document.getElementById('selector_people').style.pointerEvents = 'auto';
                }, 500);
            
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
                setClassnameMessage2ContFunc('blue_second_message_cont')
                setClassnameMessage3Func('blue_third_message')
                setTxtMes1('#Boss')
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
                setClassnameMessage2ContFunc('red_second_message_cont')
                setClassnameMessage3Func('red_third_message')
                setTxtMes1('#Manager')
                setTxtMes2("You need something done?")
                setTxtMes3('She gets it done!')
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
                setClassnameMessage2ContFunc('yellow_second_message_cont')
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
                setClassnameMessage2ContFunc('blue_second_message_cont')
                setClassnameMessage3Func('blue_third_message')
                setTxtMes1('#Chef')
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
                setClassnameMessage2ContFunc('red_second_message_cont')
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
                setClassnameMessage2ContFunc('yellow_second_message_cont')
                setClassnameMessage3Func('yellow_third_message')
                setTxtMes1('#leader')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4('Never stop smiling')
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
                setClassnameMessage2ContFunc('blue_second_message_cont')
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
                setClassnameMessage2ContFunc('red_second_message_cont')
                setClassnameMessage3Func('red_third_message')
                setTxtMes1('#Original')
                setTxtMes2("He's the leader of the bunch,")
                setTxtMes3('you know him well')
                setTxtMes4("Boss' boss")
                setClassSmallPic('red_small_image')
                break
        }
        setAnimateIn(false)
        setAnimateIn2(true)
    }
    },[animateIn])

    useGSAP(() => {
        setOpacity1('opacity_low')
            setOpacity2('opacity_low')
            setOpacity3('opacity_low')
            setOpacity4('opacity_low')
            setOpacity5('opacity_low')
            setOpacity6('opacity_low')
            setOpacity7('opacity_low')
            setOpacity8('opacity_low')
        if(hoverButton == true){
            switch(hoverButtonValue){
                case 'first':
                    setOpacity1('opacity_high')
                break
                case 'second':
                    setOpacity2('opacity_high')
                break
                case 'third':
                    setOpacity3('opacity_high')
                break
                case 'fourth':
                    setOpacity4('opacity_high')
                break
                case 'fifth':
                    setOpacity5('opacity_high')
                break
                case 'sixth':
                    setOpacity6('opacity_high')
                break
                case 'seventh':
                    setOpacity7('opacity_high')
                break
                case 'eight':
                    setOpacity8('opacity_high')
                break
            }
        }   

    },[hoverButtonValue, hoverButton])

  return (
    <section id="asjemenou" className={bgImage}>
        <div className="flex justify-center">
            
            <div className="flex justify-start w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[950px] xl:w-[1180px] 2xl:w-[1400px]">
                <h2 className="text-7xl font-bold">Meet the team!</h2>
            </div>
        </div>
        <div className="flex justify-center py-4">
            <div className="relative max-w-[90vw] md:max-w-[92vw] flex lg:flex-row flex-col justify-between md:gap-6 lg:gap-10 xl:gap-16 items-center pt-[2vh]">
                    <div>
                        <div className={classnameFunc}>
                                <p id="Name_tag" className="font-semibold text-4xl z-50">{text}</p>
                        </div>
                    <div className="flex justify-center items-center md:h-[780px]">
                        <div id="big_group" className="relative opacity-1 screen-max-width flex flex-col justify-center items-center min-w-[90vw] sm:min-w-[576px] md:min-w-[700px] lg:min-w-[760px] xl:min-w-[800px] 2xl:min-w-[960px] md:h-[740px]">
                            <div className="">
                                <div className="Main_img">
                                    <div className="flex justify-center w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[760px] xl:w-[800px] 2xl:w-[960px] md:h-[740px] overflow-hidden">
                                        <img src={picture} alt="MAIN IMG" id="big_picture" className="object-contain max-h-full max-w-full z-10 mb-12 pb-12"/>
                                    </div>
                                    <div className="absolute top-0 left-0 flex justify-center w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[760px] xl:w-[800px] 2xl:w-[960px] md:h-[740px] overflow-hidden ">
                                        <img src={INSTABGTOPIMG} alt="MAIN IMG" id="instagram_image" className="object-contain z-0 shadow-lg shadow-zinc-800 m-12 min-h-fit rounded-2xl"/>
                                    </div>
                                    <div className="absolute top-0 left-0 flex justify-center w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[760px] xl:w-[800px] 2xl:w-[960px] md:h-[740px] overflow-hidden">
                                        <img src={INSTABGBOTIMG} alt="MAIN IMG" id="" className="object-contain z-20 m-12 rounded-2xl"/>
                                    </div>
                                </div>

                                
                                    <div id="pic_small" className={classSmallPic}>
                                        <div className="absolute flex items-end w-full h-full pic_small_container">
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
                                    </div>

                                <div id="textGrow1" className={classnameMessage1Func}>
                                    <p className="text-sm text-black font-light">{txtMes1}</p>
                                </div>
                                <div id="textGrow2_cont" className={classnameMessage2ContFunc}>
                                    <div id="textGrow2" className={classnameMessage2Func}>
                                        <p className="text-xs text-black font-light"><span className="text-sm font-light">{txtMes2}</span><br/>{txtMes3}</p>
                                    </div>
                                </div>
                                <div id="textGrow3" className={classnameMessage3Func}>
                                    <p className="text-sm text-black font-light">{txtMes4}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                <div id="selector_people" className="person-selector items-center md:inline-block xl:flex hidden lg:overflow-y-scroll xl:overflow-hidden min-h-0 lg:h-[600px]">
                    <div className="flex flex-row flex-wrap justify-center lg:flex-nowrap lg:flex-col xl:flex-row xl:flex-wrap gap-4 lg:gap-4 md:max-w-[700px] 2xl:max-w-[376px] xl:max-w-[316px]">
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('first')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('first'); setAnimateOut(true)}} className="personblock">
                            <img src={BILLLIEIMG} alt="BILLLIE IMG"  id="First_image" className={opacity1}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="text-2xl"> Saeroyi</p>
                                <p className=" font-light"> Boss</p>
                            </div>
                        </div>
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('second')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('second'); setAnimateOut(true)}} className="personblock lg:mt-12 xl:mt-0">
                            <img src={IRENEIMG} alt="IRENE IMG"  id="Second_image" className={opacity2}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className=" text-2xl"> Yiseo</p>
                                <p className=" font-light"> Manager</p>
                            </div>
                        </div>
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('third')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('third'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={PIXXIEIMG} alt="PIXXIE IMG"  id="Third_image" className={opacity3}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className=" text-2xl">SooAh</p>
                                <p className=" font-light">Visitor</p>
                            </div>
                        </div>
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('fourth')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('fourth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={PIXXIE2IMG} alt="PIXXIE 2 IMG"  id="Fourth_image" className={opacity4}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="text-2xl">Hyeoni</p>
                                <p className=" font-light">Chef</p>
                            </div>
                        </div>
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('fifth')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('fifth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={PIXXIE3IMG} alt="PIXXIE 3 IMG"  id="Fifth_image" className={opacity5}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className=" text-2xl">Seunggwon</p>
                                <p className=" font-light">Waiter</p>
                            </div>
                        </div>
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('sixth')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('sixth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={SIYEONIMG} alt="SIYEON IMG"  id="Sixth_image" className={opacity6}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className=" text-2xl">Geunsoo</p>
                                <p className=" font-light">Waiter</p>
                            </div>
                        </div>
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('seventh')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('seventh'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={SJUKSEEIMG} alt="SJUKSEE IMG"  id="Seventh_image" className={opacity7}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className=" text-2xl">Toni</p>
                                <p className=" font-light">Waiter</p>
                            </div>
                        </div>
                        <div onMouseOver={() => {setHoverButton(true); setHoverButtonValue('eight')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('eight'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            <img src={YUKIIMG} alt="YUKI IMG"  id="Eight_image" className={opacity8}/>
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className=" text-2xl">Mr. Park</p>
                                <p className=" font-light">Boss&#39; boss</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Team