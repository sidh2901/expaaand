import Image from 'next/image'
import logo from "../public/header.png"

function Header() {

    return (
        <div className="justify-center h-screen p-40 font-sans text-lg text-center text-white bg-expaaand-pink ">
            <Image
            src={logo}
            alt=""
            width={700}
            objectFit="contain"
            className="animate-pulse"
            height={150}
            />
            <p className="mb-4 text-3xl">_________</p>
         <div className="text-2xl"><p>Join us on a mission to hack global anxiety as we deploy novel interactions, liminal media & transformational experiences for<strong> social technology, sustainable product development, 
            circular systems & regenerative ecology.</strong></p></div>
            <div>
            <svg onClick={() => {window.location.href = 'mailto:jordan@expaaand.com'}} xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-6 cursor-pointer h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            
            </div>
            <div>
            <svg onClick={() => {
              window.scrollTo({
                top: document.body.offsetHeight,
                behavior: "smooth"

            })
          }}  xmlns="http://www.w3.org/2000/svg" className="mx-auto cursor-pointer mt-60 h-9 w-9 animate-bounce " fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
         </svg>
            </div>
            
        </div>
    )
}

export default Header
