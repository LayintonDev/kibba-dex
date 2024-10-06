import Image from 'next/image'
import Logo from "@/assets/LOGO.svg"

const Header = () => {
  return (
    <nav className='w-full flex items-center py-5 justify-start px-[22px]'>
         
              
                <ul className='text-white flex items-center gap-6'>
              <li><Image src={Logo}  alt='Kibba'/></li>  
                    <li className='font-semibold font-poppins text-[14px] hover:cursor-pointer'>Stake</li>
                    <li className='font-semibold font-poppins text-[14px] hover:cursor-pointer'>Liquidity</li>
                    <li className='font-semibold font-poppins text-[14px] hover:cursor-pointer'>Minting</li>
                    <li className='font-semibold font-poppins text-[14px] hover:cursor-pointer'>Developer</li>
                </ul>
                
           
        
     
    </nav>
  )
}
export default Header