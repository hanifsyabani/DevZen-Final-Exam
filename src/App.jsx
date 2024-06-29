import Navbar from "./components/Navbar/Navbar"
import heroimg from './assets/heroimg.png'
import { skillHighlight } from "./components/Hero/skillHighlight"



function App() {

  return (
    <>
      <Navbar/>
      
      <section className="px-[3%] py-20 flex font-sans">
        <div className="w-1/2 pt-16">
          <h1 className="text-6xl  font-bold text-primary max-w-xl">Transformasi Diri untuk Masa Depan Gemilang</h1>
          <p className="pt-6 text-lg text-tertiary max-w-md">Dapatkan skill yang anda butuhkan untuk mencapai masa depan</p>

          <div className="flex items-center flex-wrap gap-4 mt-14">
            {skillHighlight.map((item) => (
              <div key={item.id} className="bg-[#F2F4F8] hover:bg-secondary ease-linear duration-300 py-2 px-4 rounded-lg w-46 group text-center cursor-pointer">
                <h1 className="group-hover:text-white text-[#B9B5B2] font-semibold">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <img src={heroimg}/>
        </div>


      </section>


      <section className="mt-20">
        <h1></h1>
      </section>
    </>
  )
}

export default App
