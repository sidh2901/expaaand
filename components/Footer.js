import footer from "../public/footer.png"
import Image from 'next/image'
function Footer() {
    return (
        <div className="justify-center text-center bg-expaaand-pink object-fit z-3">
      <Image
            src={footer}
            alt=""
            className="cursor-pointer"
            height={200}
            width={300}
            onClick={() => {
              window.scrollTo({
                top:0,
                behavior: "smooth"

            })
          }}
            />
            
    
      </div>
    )
}

export default Footer
