'use client'
import Image from "next/image";
import Logo from "@/assets/LOGO.svg";
import mint0 from "@/assets/mint0.svg"
import mint1 from "@/assets/mint1.svg"
import mint2 from "@/assets/mint2.svg"
import mint3 from "@/assets/mint3.svg"
import mint4 from "@/assets/mint4.svg"
import { useState } from "react";

const Header = () => {
  const [mintHovered, setMintHovered] = useState(false)
  const [devHovered, setDevHovered] = useState(false)
  return (
    <nav className="w-full flex items-center py-5 justify-start px-[22px]">
      <ul className="text-white flex items-center gap-6">
        <li onMouseOver={() => {setDevHovered(false); setMintHovered(false)}}>
          <Image src={Logo} alt="Kibba" />
        </li>
        <li onMouseOver={() => {setDevHovered(false); setMintHovered(false)}} className="font-semibold font-poppins text-[14px] hover:text-[#E33319] hover:cursor-pointer">
          Stake
        </li>
        <li onMouseOver={() => {setDevHovered(false); setMintHovered(false)}} className="font-semibold font-poppins text-[14px] hover:text-[#E33319] hover:cursor-pointer">
          Liquidity
        </li>
        <li onMouseOver={() => {setDevHovered(false)}} className="font-semibold font-poppins text-[14px] hover:text-[#E33319] relative hover:cursor-pointer relative">
          <span onMouseOver={() => {setMintHovered(true)}}>Minting</span>
          {mintHovered && <div onMouseOver={() => {setMintHovered(true)}} onMouseLeave={() => {setMintHovered(false)}} className="bg-[#23242F] w-[301px] rounded-[16px] shadow absolute top-[40px] left-0 z-10">
            <div className="group px-6 pt-8 flex item-center justify-between gap-4 hover:bg-[#353546] p-4 cursor-pointer hover:rounded-tl-[16px] hover:rounded-tr-[16px]">
                <div className="flex item-center justify-center bg-[#3B3C4E] min-w-[28px] max-h-[28px] rounded-full">
                  <Image src={mint0} alt="liquidity mint" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-white text-[14px] font-bold mb-2 transition-colors duration-200 group-hover:text-[#E33319]">Liquidity Minting</h3>
                  <p className="text-[#8B8CA7] text-[14px] transition-colors duration-200 group-hover:text-white">Earn FTR rewards by staking assets for market making</p>
                </div>
            </div>
            <div className="group px-6 flex item-center justify-between gap-4 mt-6 hover:bg-[#353546] p-4 cursor-pointer">
                <div className="flex item-center justify-center bg-[#3B3C4E] min-w-[28px] max-h-[28px] rounded-full">
                  <Image src={mint1} alt="liquidity mint" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-white text-[14px] font-bold mb-2 transition-colors duration-200 group-hover:text-[#E33319]">Trading Minting</h3>
                  <p className="text-[#8B8CA7] text-[14px] transition-colors duration-200 group-hover:text-white">Successfully complete a trade to get a FTR airdrop</p>
                </div>
            </div>
            <div className="group px-6 pb-8 flex item-center justify-between gap-4 mt-6 hover:bg-[#353546] hover:rounded-bl-[16px] hover:rounded-br-[16px] p-4 cursor-pointer">
                <div className="flex item-center justify-center bg-[#3B3C4E] min-w-[28px] max-h-[28px] rounded-full">
                  <Image src={mint2} alt="liquidity mint" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-white text-[14px] font-bold mb-2 transition-colors duration-200 group-hover:text-[#E33319]">vFTR</h3>
                  <p className="text-[#8B8CA7] text-[14px] transition-colors duration-200 group-hover:text-white">Mint vFTR to earn more DoDo</p>
                </div>
            </div>
          </div>}
        </li>
        <li onMouseOver={() => {setMintHovered(false)}} className="font-semibold font-poppins text-[14px] hover:text-[#E33319] hover:cursor-pointer relative">
        <span onMouseOver={() => {setDevHovered(true)}}>Developer</span>
        {devHovered && <div onMouseOver={() => {setDevHovered(true)}} onMouseLeave={() => {setDevHovered(false)}} className="bg-[#23242F] w-[301px] rounded-[16px] shadow absolute top-[30px] left-0 z-10">
            <div className="group px-6 pt-8 flex item-center justify-between gap-4 hover:bg-[#353546] p-4 cursor-pointer hover:rounded-tl-[16px] hover:rounded-tr-[16px]">
                <div className="flex item-center justify-center bg-[#3B3C4E] min-w-[28px] max-h-[28px] rounded-full">
                  <Image src={mint3} alt="liquidity mint" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-white text-[14px] font-bold mb-2 transition-colors duration-200 group-hover:text-[#E33319]">Create a Token</h3>
                  <p className="text-[#8B8CA7] text-[14px] transition-colors duration-200 group-hover:text-white">Create your own tokens with one click. No coding required!</p>
                </div>
            </div>
            <div className="group px-6 flex item-center justify-between gap-4 mt-6 hover:bg-[#353546] p-4 cursor-pointer hover:rounded-bl-[16px] hover:rounded-br-[16px]">
                <div className="flex item-center justify-center bg-[#3B3C4E] min-w-[28px] max-h-[28px] rounded-full">
                  <Image src={mint4} alt="liquidity mint" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-white text-[14px] font-bold mb-2 transition-colors duration-200 group-hover:text-[#E33319]">Create a Pool</h3>
                  <p className="text-[#8B8CA7] text-[14px] transition-colors duration-200 group-hover:text-white">Create liquidity makets for free and customize your market making strategies</p>
                </div>
            </div>
          </div>}
        </li>
      </ul>
    </nav>
  );
};
export default Header;
