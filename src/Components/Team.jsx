const Team = () => {
  return (
    <section className="w-screen h-screen bg-slate-900">
        <div className="flex justify-center">
            <div className="max-w-[90vw] md:max-w-[92vw] flex lg:flex-row flex-col justify-between md:gap-6 lg:gap-10 xl:gap-16 items-start h-screen py-[10vh]">
                <div className="screen-max-width flex flex-col justify-center items-center bg-pink-400 sm:bg-amber-400 md:bg-violet-900 lg:bg-orange-600 xl:bg-teal-500 2xl:bg-green-800 min-w-[90vw] sm:min-w-[576px] md:min-w-[700px] lg:min-w-[760px] xl:min-w-[800px] 2xl:min-w-[960px] h-[80vh]">
                    <div className=" ">
                        <p className="text-white">
                            Team
                        </p>
                    </div>
                </div>
                <div className="person-selector md:inline-block hidden max-h-[80vh] lg:overflow-y-scroll xl:overflow-hidden">
                    <div className="flex flex-row flex-wrap justify-center lg:flex-nowrap lg:flex-col xl:flex-row xl:flex-wrap bg-red-700 gap-4 lg:gap-4 md:max-w-[700px] 2xl:max-w-[376px] xl:max-w-[316px]">
                        <div className="personblock">

                        </div>
                        <div className="personblock lg:mt-12 xl:mt-0">

                        </div>
                        <div className="personblock lg:mt-12">

                        </div>
                        <div className="personblock lg:mt-12">

                        </div>
                        <div className="personblock lg:mt-12">

                        </div>
                        <div className="personblock lg:mt-12">

                        </div>
                        <div className="personblock lg:mt-12">

                        </div>
                        <div className="personblock lg:mt-12">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team