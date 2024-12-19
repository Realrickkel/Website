import { useContext, useEffect, useState } from "react"
import { DADIMG, DADSMALLIMG, GEUNSOOIMG, GEUNSOOSMALLIMG, HYEONIIMG, HYEONISMALLIMG, INSTABGBOTIMG, INSTABGTOP2IMG, INSTABGTOP3IMG, INSTABGTOP4IMG, INSTABGTOP5IMG, INSTABGTOP6IMG, INSTABGTOP7IMG, INSTABGTOP8IMG, INSTABGTOPIMG, SAEROYISIMG, SAEROYISMALLIMG, SEUNGGWONIMG, SEUNGGWONSMALLIMG, SOOAHIMG, SOOAHSMALLIMG, TONIIMG, TONISMALLIMG, YISEOIMG, YISEOSMALLIMG } from "../utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/all";
import { Context } from "../context/Context";
gsap.registerPlugin(ScrollTrigger)

const Team = () => {
    const {loaded, setLoaded} = useContext(Context)
    const[scrollt, setScrollt] = useState(false)
    const [picture, setPicture] = useState(SAEROYISIMG)
    const [pictureSmall, setPictureSmall] = useState(SAEROYISMALLIMG)
    const [oldPicture, setOldPicture] = useState()
    const [oldSmallPicture, setOldSmallPicture] = useState()
    const [oldBgPIC, setOldBgPIC] = useState()
    const [bgPIC, setBgPIC] = useState(INSTABGTOPIMG)
    const [text, setText] = useState('Saeroyi')
    const [picCase, setPicCase] = useState('first')
    const [oldPicCase, setOldPicCase] = useState('first')
    const [classnameFunc, setClassnameFunc] = useState("blueClass")
    const [bgImage,setBgImage] = useState('bg_image_blue')
    const [classnameMessage1Func,setClassnameMessage1Func] = useState('blue_first_message')
    const [classnameMessage2Func,setClassnameMessage2Func] = useState('blue_second_message')
    const [classnameMessage2ContFunc,setClassnameMessage2ContFunc] = useState('blue_second_message_cont')
    const [classnameMessage3Func,setClassnameMessage3Func] = useState('blue_third_message')
    const [classnameIcon,setClassnameIcon] = useState('icon_blue')
    const [Icon,setIcon] = useState('fa-regular fa-heart')
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

    useEffect(() => {
        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
          setTimeout(function () {
                console.log('images finished loading');
                setLoaded(true)
            }, 1000);
      });
        //disable scroll until page is loaded
        window.onscroll = function () {
        window.scrollTo(0, 0);
    };  
      }, [])
    
    
      useEffect(() => {
        if(loaded === true){
            //laat alles inladen
            setTimeout(function () {
                setScrollt(true)
                }, 100); 
                window.onscroll = function () { };
        }
      },[loaded])

      useEffect(() => {
        ScrollTrigger.refresh()
    },[scrollt])

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

        gsap.to("#textGrow4", {
            y: -90,
            scrollTrigger: {
                trigger: '#textGrow4',
                start: 'top 100%',
                scrub: 5,
            }
        })

        gsap.to("#textGrow6", {
            y: -40,
            scrollTrigger: {
                trigger: '#textGrow6',
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

        var tl_main = gsap.timeline({repeat: -1,});
        tl_main.to("#Complete_div", {
            scale:1.03,
            y: 15,
            duration: 15,
            ease: "sine.inOut"
        })
        tl_main.to("#Complete_div", {
            scale:1,
            y: 0,
            duration: 15,
            ease: "sine.inOut"
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
                setOldPicture(picture)
                setOldSmallPicture(pictureSmall)
                setOldBgPIC(bgPIC)
                
                var elements = document.getElementsByClassName("personblock")
                var i
                for(i = 0; i < elements.length; i++){
                    elements[i].classList.remove("active2")
                }

                switch(picCase){
            
                    case 'first': 
                        document.getElementById("First_selector").classList.add("active2")
                        break
                    case 'second': 
                        document.getElementById("Second_selector").classList.add("active2")
                        break
                    case 'third': 
                        document.getElementById("Third_selector").classList.add("active2")
                        break
                    case 'fourth': 
                        document.getElementById("Fourth_selector").classList.add("active2")
                        break
                    case 'fifth': 
                        document.getElementById("Fifth_selector").classList.add("active2")
                        break
                    case 'sixth': 
                        document.getElementById("Sixth_selector").classList.add("active2")
                        break
                    case 'seventh': 
                        document.getElementById("Seventh_selector").classList.add("active2")
                        break
                    case 'eight': 
                        document.getElementById("Eight_selector").classList.add("active2")
                        break
                }

            setOldPicCase(picCase)
            document.getElementById('selector_people').style.pointerEvents = 'none';

            gsap.to("#pic_small", {
                scale: 0,
                ease: "back.in(1.7)",
                delay: 0.1,
                })

            gsap.to("#textGrow1", {
                scale: 0,
                ease: "back.in(1.7)",
                })
            
                gsap.to("#textGrow4", {
                    scale: 0,
                    ease: "back.in(1.7)",
                    })

            gsap.to("#textGrow2", {
                scale: 0,
                ease: "back.in(1.7)",
                delay: 0.15,
                })

            gsap.to("#textGrow3", {
                scale: 0,
                ease: "back.in(1.7)",
                delay: 0.2,
                })

                gsap.to("#textGrow6", {
                    scale: 0,
                    ease: "back.in(1.7)",
                    delay: 0.2,
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
            setAnimateOut(false)
            setTimeout(function () {
                setAnimateIn(true)
              }, 700);

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
                delay: 0.5,
            })

            gsap.to("#textGrow1", {
                scale: 1,
                ease: "back.out(1.3)",
                })

                gsap.to("#textGrow4", {
                    scale: 1,
                    ease: "back.out(1.3)",
                    })
            
            gsap.to("#textGrow2", {
                scale: 1,
                ease: "back.out(1.3)",
                delay: 0.15,
                })

            gsap.to("#textGrow3", {
                scale: 1,
                ease: "back.out(1.3)",
                delay: 0.2,
                })

                gsap.to("#textGrow6", {
                    scale: 1,
                    ease: "back.out(1.3)",
                    delay: 0.2,
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
                delay: 0.5,
                })
                
                setTimeout(function () {
                document.getElementById('selector_people').style.pointerEvents = 'auto';
                }, 500);
            
            setAnimateIn2(false)
        }
    
    },[animateIn2])

    
    useEffect(() => {
        if(animateIn == true){
            console.log(oldPicture)
            console.log(oldSmallPicture)  
            console.log(oldBgPIC)

        switch(picCase){
            case 'first': 
                setPicture(SAEROYISIMG)
                setText('Saeroyi')
                setClassnameFunc("blueClass")
                setPictureSmall(SAEROYISMALLIMG)
                setBgPIC(INSTABGTOPIMG)
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
                setClassnameIcon('icon_blue')
                setIcon('fa-regular fa-star')
                document.getElementById("First_selector").classList.add("active2")
                break
            case 'second': 
                setPicture(YISEOIMG)
                setText('Yiseo')
                setClassnameFunc("redClass")
                setPictureSmall(YISEOSMALLIMG)
                setBgPIC(INSTABGTOP2IMG)
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
                setClassnameIcon('icon_red')
                setIcon('fa-regular fa-heart')
                document.getElementById("Second_selector").classList.add("active2")
                break
            case 'third': 
                setPicture(SOOAHIMG)
                setText('SooAh')
                setClassnameFunc("yellowClass")
                setPictureSmall(SOOAHSMALLIMG)
                setBgPIC(INSTABGTOP3IMG)
                setBgImage('bg_image_yellow')
                setClassnameMessage1Func('yellow_first_message')
                setClassnameMessage2Func('yellow_second_message')
                setClassnameMessage2ContFunc('yellow_second_message_cont')
                setClassnameMessage3Func('yellow_third_message')
                setTxtMes1('#Visitor')
                setTxtMes2("Knowledge is power")
                setTxtMes3('')
                setTxtMes4('Great taste')
                setClassSmallPic('yellow_small_image')
                setClassnameIcon('icon_yellow')
                setIcon('fa-regular fa-comment')
                document.getElementById("Third_selector").classList.add("active2")
                break
            case 'fourth': 
                setPicture(HYEONIIMG)
                setText('Hyeoni')
                setClassnameFunc("blueClass")
                setPictureSmall(HYEONISMALLIMG)
                setBgPIC(INSTABGTOP4IMG)
                setBgImage('bg_image_blue')
                setClassnameMessage1Func('blue_first_message')
                setClassnameMessage2Func('blue_second_message')
                setClassnameMessage2ContFunc('blue_second_message_cont')
                setClassnameMessage3Func('blue_third_message')
                setTxtMes1('#Chef')
                setTxtMes2("The Kitchen is her second home")
                setTxtMes3('')
                setTxtMes4('Let her cook!')
                setClassSmallPic('blue_small_image')
                setClassnameIcon('icon_blue')
                setIcon('fa-regular fa-chess-rook')
                document.getElementById("Fourth_selector").classList.add("active2")
                break
            case 'fifth': 
                setPicture(SEUNGGWONIMG)
                setText('Seunggwon')
                setClassnameFunc("redClass")
                setPictureSmall(SEUNGGWONSMALLIMG)
                setBgPIC(INSTABGTOP5IMG)
                setBgImage('bg_image_red')
                setClassnameMessage1Func('red_first_message')
                setClassnameMessage2Func('red_second_message')
                setClassnameMessage2ContFunc('red_second_message_cont')
                setClassnameMessage3Func('red_third_message')
                setTxtMes1('#Waiter')
                setTxtMes2("Actually a nice dude")
                setTxtMes3("if you don't betray him")
                setTxtMes4('Off duty bouncer')
                setClassSmallPic('red_small_image')
                setClassnameIcon('icon_red')
                setIcon('fa-regular fa-hand-back-fist')
                document.getElementById("Fifth_selector").classList.add("active2")
                break
            case 'sixth': 
                setPicture(GEUNSOOIMG)
                setText('Geunsoo')
                setClassnameFunc("yellowClass")
                setPictureSmall(GEUNSOOSMALLIMG)
                setBgPIC(INSTABGTOP6IMG)
                setBgImage('bg_image_yellow')
                setClassnameMessage1Func('yellow_first_message')
                setClassnameMessage2Func('yellow_second_message')
                setClassnameMessage2ContFunc('yellow_second_message_cont')
                setClassnameMessage3Func('yellow_third_message')
                setTxtMes1('#Waiter')
                setTxtMes2("Will reach his goals")
                setTxtMes3('no matter what')
                setTxtMes4('Ruthless')
                setClassSmallPic('yellow_small_image')
                setClassnameIcon('icon_yellow')
                setIcon('fa-regular fa-moon')
                document.getElementById("Sixth_selector").classList.add("active2")
                break
            case 'seventh': 
                setPicture(TONIIMG)
                setText('Toni')
                setClassnameFunc("blueClass")
                setPictureSmall(TONISMALLIMG)
                setBgPIC(INSTABGTOP7IMG)
                setBgImage('bg_image_blue')
                setClassnameMessage1Func('blue_first_message')
                setClassnameMessage2Func('blue_second_message')
                setClassnameMessage2ContFunc('blue_second_message_cont')
                setClassnameMessage3Func('blue_third_message')
                setTxtMes1('#Waiter')
                setTxtMes2("Can't stop smiling")
                setTxtMes3('')
                setTxtMes4('What is English?')
                setClassSmallPic('blue_small_image')
                setClassnameIcon('icon_blue')
                setIcon('fa-solid fa-magnifying-glass')
                document.getElementById("Seventh_selector").classList.add("active2")
                break
            case 'eight': 
                setPicture(DADIMG)
                setText('Mr. Park')
                setClassnameFunc("redClass")
                setPictureSmall(DADSMALLIMG)
                setBgPIC(INSTABGTOP8IMG)
                setBgImage('bg_image_red')
                setClassnameMessage1Func('red_first_message')
                setClassnameMessage2Func('red_second_message')
                setClassnameMessage2ContFunc('red_second_message_cont')
                setClassnameMessage3Func('red_third_message')
                setTxtMes1('#Original')
                setTxtMes2("His dream became reality")
                setTxtMes3('')
                setTxtMes4("Boss' boss")
                setClassSmallPic('red_small_image')
                setClassnameIcon('icon_red')
                setIcon('fa-solid fa-compress')
                document.getElementById("Eight_selector").classList.add("active2")
                break
        }

        //have the pictures load in here by chance, have to load them in here yes
        setAnimateIn(false)
        setAnimateIn2(true)
    }

    },[animateIn])

    useGSAP(() => {
        
        var elements = document.getElementsByClassName("personblock")
        var i
        for(i = 0; i < elements.length; i++){
            elements[i].classList.remove("active")
        }
        if(hoverButton == true){
            switch(hoverButtonValue){
                case 'first':
                    document.getElementById("First_selector").classList.add("active")
                break
                case 'second':
                    document.getElementById("Second_selector").classList.add("active")
                break
                case 'third':
                    document.getElementById("Third_selector").classList.add("active")
                break
                case 'fourth':
                    document.getElementById("Fourth_selector").classList.add("active")
                break
                case 'fifth':
                    document.getElementById("Fifth_selector").classList.add("active")
                break
                case 'sixth':
                    document.getElementById("Sixth_selector").classList.add("active")
                break
                case 'seventh':
                    document.getElementById("Seventh_selector").classList.add("active")
                break
                case 'eight':
                    document.getElementById("Eight_selector").classList.add("active")
                break
            }
        }   

    },[hoverButtonValue, hoverButton])

  return (
    <section id="TeamPage" className={bgImage}>
        <div className="flex justify-center">
            
            <div className="flex md:justify-start justify-center w-[90vw] sm:w-[576px] md:w-[700px] lg:w-[950px] xl:w-[1180px] 2xl:w-[1400px]">
                <h2 className="text-4xl md:text-7xl font-bold">Meet the team!</h2>
            </div>
        </div>
        <div className="flex justify-center py-4">
            <div  className="relative max-w-[90vw] md:max-w-[92vw] flex lg:flex-row flex-col justify-between gap-16 sm:gap-6 lg:gap-24 xl:gap-16 items-center pt-[2vh]">
                <div id="Complete_div">
                    <div>
                        <div className={classnameFunc}>
                                <p id="Name_tag" className="w-min h-min font-semibold text-xl sm:text-4xl z-50 absolute top-0">{text}</p>
                        </div>
                    <div className="flex justify-center items-center h-fit sm:h-[740px]">
                        {/*Desktop*/}
                        <div id="big_group" className="relative opacity-1 screen-max-width hidden sm:flex flex-col items-center h-[80vh] sm:h-[740px]">
                            <div className="">
                                <div className="Main_img relative w-[80vw] sm:w-auto flex justify-center items-center h-[80vh] sm:h-[740px] overflow-hidden">
                                    <div className="absolute bottom-0 sm:relative flex justify-center w-[80vw] sm:w-[576px] md:w-[700px] lg:w-[600px] xl:w-[760px] 2xl:w-[940px] h-[80vh] sm:h-[740px] overflow-hidden">
                                        <img src={picture} alt="MAIN IMG" id="big_picture" className="object-contain max-h-full max-w-full z-10 mb-12 pb-12"/>
                                    </div>
                                    <div className="absolute bottom-0 flex justify-center w-[80vw] sm:w-[576px] md:w-[700px] lg:w-[600px] xl:w-[760px] 2xl:w-[940px] h-[80vh] sm:h-[740px] overflow-hidden ">
                                        <img src={bgPIC} alt="MAIN IMG" id="instagram_image" className="object-contain z-0 shadow-lg m-12 min-h-fit rounded-2xl"/>
                                    </div>
                                    <div className="absolute flex justify-center w-[80vw] sm:w-[576px] md:w-[700px] lg:w-[600px] xl:w-[760px] 2xl:w-[940px] h-[80vh] sm:h-[740px] overflow-hidden">
                                        <img src={INSTABGBOTIMG} alt="MAIN IMG" id="" className="object-contain z-20 m-12 rounded-2xl"/>
                                    </div>
                                </div>

                                
                                    <div id="pic_small" className={classSmallPic}>
                                        <div className="absolute flex items-end w-full h-full pic_small_container">
                                        <div className="absolute top-0 left-0 md:h-[30px] 2xl:h-[41px] w-full rounded-t-2xl bg-white"></div>
                                        <div className="flex flex-row gap-[3px] absolute md:top-[12px] lg:top-[15px] 2xl:top-[19px] right-4">
                                            <div className="h-[5px] w-[5px] rounded-full bg-gray-600"></div>
                                            <div className="h-[5px] w-[5px] rounded-full bg-gray-600"></div>
                                            <div className="h-[5px] w-[5px] rounded-full bg-gray-600"></div>
                                        </div>
                                        <div  className="absolute flex items-end w-full rounded-b-2xl overflow-hidden">
                                            <img src={pictureSmall} alt="MAIN IMG" id="" className=" md:h-[173px] lg:h-[200px] 2xl:h-[260px] w-full object-cover object-top"/>
                                        </div>
                                    </div>
                                    </div>

                                <div id="textGrow1" className={classnameMessage1Func}>
                                    <p className="text-sm font-light">{txtMes1}</p>
                                </div>
                                <div id="textGrow2_cont" className={classnameMessage2ContFunc}>
                                    <div id="textGrow2" className={classnameMessage2Func}>
                                    <div className={classnameIcon}><i className={Icon}></i></div>
                                        <p className="text-xs text-zinc-800 font-light"><span className="text-sm font-light">{txtMes2}</span><br/>{txtMes3}</p>
                                    </div>
                                    </div>
                                <div id="textGrow3" className={classnameMessage3Func}>
                                    <p className="text-sm text-zinc-800 font-light">{txtMes4}</p>
                                </div>
                                
                            </div>
                        </div>

                        {/*Mobile*/}
                        <div id="big_group" className="relative opacity-1 screen-max-width flex sm:hidden flex-col items-center h-fit w-fit">
                            <div className="relative h-fit w-fit">
                                <div className="Main_img flex justify-center relative w-fit overflow-hidden">
                                    <div className="flex justify-center items-end w-[80vw] pt-[10vh]">
                                        <img src={bgPIC} alt="MAIN IMG" id="instagram_image" className="object-contain z-0 shadow-lg rounded-2xl"/>
                                    </div>
                                    <div className="flex max-h-[100%] absolute bottom-0">
                                        <img src={picture} alt="MAIN IMG" id="big_picture" className="object-contain z-10"/>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-[80vw] z-20">
                                        <img src={INSTABGBOTIMG} alt="MAIN IMG" id="instagram_image" className="object-contain  shadow-lg rounded-2xl"/>
                                    </div>                            
                                </div>

                                <div id="textGrow4" className={classnameMessage1Func}>
                                    <p className="text-sm font-light">{txtMes1}</p>
                                </div>
                                
                                <div id="textGrow6" className={classnameMessage3Func}>
                                    <p className="text-sm text-zinc-800 font-light">{txtMes4}</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    </div>
                    </div>
                <div id="selector_people" className="person-selector items-center inline-block xl:flex lg:overflow-y-scroll xl:overflow-visible min-h-0 md:max-w-[700px] lg:max-h-[600px] 2xl:max-w-[408px] xl:max-w-[353px] p-4">
                    <div className="flex flex-row flex-nowrap md:flex-wrap justify-center lg:flex-nowrap lg:flex-col xl:flex-row xl:flex-wrap gap-4 lg:gap-4 md:max-w-[700px] 2xl:max-w-[376px] xl:max-w-[353px]">
                        <div id="First_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('first')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('first'); setAnimateOut(true)}} className="personblock">
                            {/*<img src={BILLLIEIMG} alt="BILLLIE IMG"  id="First_image" className={opacity1}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-2xl font-light"> Saeroyi</p>
                                <p className="hidden md:inline-block font-extralight text-xs"> Boss</p>
                            </div>
                        </div>
                        <div id="Second_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('second')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('second'); setAnimateOut(true)}} className="personblock lg:mt-12 xl:mt-0">
                            {/*<img src={IRENEIMG} alt="IRENE IMG"  id="Second_image" className={opacity2}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-xl 2xl:text-2xl font-light"> Yiseo</p>
                                <p className="hidden md:inline-block font-extralight text-xs"> Manager</p>
                            </div>
                        </div>
                        <div id="Third_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('third')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('third'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            {/*<img src={PIXXIEIMG} alt="PIXXIE IMG"  id="Third_image" className={opacity3}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-xl 2xl:text-2xl font-light">SooAh</p>
                                <p className="hidden md:inline-block font-extralight text-xs">Visitor</p>
                            </div>
                        </div>
                        <div id="Fourth_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('fourth')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('fourth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            {/*<img src={PIXXIE2IMG} alt="PIXXIE 2 IMG"  id="Fourth_image" className={opacity4}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-xl 2xl:text-2xl font-light">Hyeoni</p>
                                <p className="hidden md:inline-block font-extralight text-xs">Chef</p>
                            </div>
                        </div>
                        <div id="Fifth_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('fifth')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('fifth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            {/*<img src={PIXXIE3IMG} alt="PIXXIE 3 IMG"  id="Fifth_image" className={opacity5}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-xl 2xl:text-2xl font-light">Seunggwon</p>
                                <p className="hidden md:inline-block font-extralight text-xs">Waiter</p>
                            </div>
                        </div>
                        <div id="Sixth_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('sixth')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('sixth'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            {/*<img src={SIYEONIMG} alt="SIYEON IMG"  id="Sixth_image" className={opacity6}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-xl 2xl:text-2xl font-light">Geunsoo</p>
                                <p className="hidden md:inline-block font-extralight text-xs">Waiter</p>
                            </div>
                        </div>
                        <div id="Seventh_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('seventh')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('seventh'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            {/*<img src={SJUKSEEIMG} alt="SJUKSEE IMG"  id="Seventh_image" className={opacity7}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-xl 2xl:text-2xl font-light">Toni</p>
                                <p className="hidden md:inline-block font-extralight text-xs">Waiter</p>
                            </div>
                        </div>
                        <div id="Eight_selector" onMouseOver={() => {setHoverButton(true); setHoverButtonValue('eight')}} onMouseLeave={() => setHoverButton(false)} onClick={() => { setPicCase('eight'); setAnimateOut(true)}} className="personblock lg:mt-12">
                            {/*<img src={YUKIIMG} alt="YUKI IMG"  id="Eight_image" className={opacity8}/>*/}
                            <div className="absolute flex flex-col justify-center h-full">
                                <p className="hidden md:inline-block text-xl 2xl:text-2xl font-light">Mr. Park</p>
                                <p className="hidden md:inline-block font-extralight text-xs">Boss&#39; boss</p>
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