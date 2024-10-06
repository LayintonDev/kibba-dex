import User from "@/assets/user.svg"
import ButtonLogo from "@/assets/btn.svg"
import Image from "next/image"
import { Button } from "./ui/button"

const ExchangeSection = () => {
  return (
    <aside className='absolute right-0 top-0 h-screen w-[525px] bg-grey100 pt-[17px] '>
      <div className="flex items-center gap-6 pr-[77px] pl-[60px]">
        <Image src={User} alt="User" width={40} height={40}/>
        <div className="flex items-center relative">
        <Button className="w-[84px] h-10 rounded-tl-[100px] rounded-bl-[100px] flex items-center justify-center gap-[2px] bg-[#2C2D3A] ">
            <div className="h-[6px] w-[6px] rounded-full bg-redAccent "/>
            <span className="text-sm font-poppins font-normal text-white">BSC</span></Button>
            <Button className="text-white bg-redAccent w-[186px] h-[40px] rounded-[100px] flex items-center justify-center relative left-[-15px]">Connect to wallet</Button>
        </div>

        <Image src={ButtonLogo} alt="ButtonLogo" width={40} height={40}/>
        
     
        </div>
    </aside>
  )
}

export default ExchangeSection