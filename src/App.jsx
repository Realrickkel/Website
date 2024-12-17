import { useContext, useEffect } from "react"
import Hero from "./Components/hero"
import Team from "./Components/Team"
import { Context } from "./context/Context"

const App = () => {
  const {loaded, setLoaded} = useContext(Context)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
  })
  },[])

  return (
    <main>
      <div className="z-10 w-screen h-screen bg-black fixed top-0 left-0" style={{display: loaded ? 'none' : 'block'}}>
                  <div className='loader'>
                    <i className="fa-solid fa-gear"></i>
                    <p className="text-xs text-gray font-semibold">Loading...</p>
                  </div>
        </div>
      <Hero/>
      <Team/>
      <Hero/>
    </main>
  )
}

export default App
