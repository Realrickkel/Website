const Hero = () => {
  return (
    <section className="w-screen h-screen bg-black">
        <div className="flex justify-center">
            <div className="flex justify-center max-w-[90vw] md:max-w-[76vw]">
                <div className="screen-max-width">
                    <div className="flex flex-col justify-center h-screen items-center">
                        <h2 className="text-6xl text-white">
                            Welcome to:
                        </h2>
                        <h1 className="text-9xl text-[#7c0aff]">DanBam</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero