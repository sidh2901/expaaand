import Image from 'next/image'
import profilepic from "../public/profilepic.jpg" 
function Cover() {
    return (
        <div className="overflow-hidden">
      <Image
            src={profilepic}
            alt=""
            className="fixed object-contain no-repeat top center"
            height={2000}
            

            />
      </div>
    )
}

export default Cover
