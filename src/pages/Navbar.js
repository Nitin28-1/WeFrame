import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdLightbulbOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Image from 'next/image';

const ExtraData=[
    "ART DE LA TABLE",
    "MOBILIER",
    "NAPPAGE",
    "MATERIEL DE SALLE",
    "CUISINE",
    "BARBECUE",
    "TENTE",
    "CHAUFFAGE",
    "PODIUM PISTE DE DANSE",
    "SON ET LUMIERE",
    "PACKS",
    "CONSOMMABLES",
]
  




function Navbar() {
  return (
    <div className='bg-[#FFFFF] md:h-[110px] border-b-2  '> 
        <div className='flex pt-2 pb-2 items-center justify-evenly gap-10'>
          <div className='w-[100px] md:w-[90px] '>
            <Image  src='/logowebsie.png'   width={100}
                    height={100} alt='image' />
          </div>

          <div className=' w-[50%] sm:w-[50%] md:w-[30%] lg:w-[40%] flex rounded-md xl:w-[50%]  bg-[#F9FAFB] items-center h-[50px]'> 
            < input type='text' className='bg-[#F9FAFB] rounded-md placeholder:pl-4 w-[90%] h-[100%] '  placeholder='Rechercher un produit' />
            <CiSearch className='text-[25px] w-[10%] sm:w-[20%]' />    
            </div>

           <div className=' w-[80%] xl:w-[40%] xl:text-[1rem] hidden sm:flex sm:gap-2 sm:text-[0.5rem] md:text-[0.6rem] gap-2 md:gap-2 md:w-[50%] md:text-sm xl:gap-7 lg:gap-4  items-center justify-between'>

               <div className='flex items-center gap-1 lg:gap-2 sm:ml-1 ml-5'>
               < MdLightbulbOutline className='text-[1rem]'/>
                 <h1>Inspirations</h1>
                </div>

               <div  className='flex items-center gap-1 lg:gap-2  '>
               < CiHeart className='text-[1rem]'/>
               <h1>Mes favoris</h1>
                </div>

               <div  className='flex items-center gap-1 lg:gap-2  md:w-[70px]  xl:w-[100px] bg-[#0093D0] text-white justify-center p-2 rounded-md'>
               < IoCartOutline className='text-[1rem]'/>
               <h1>Painer</h1>
                </div>
                
                <div  className='flex items-center gap-1 lg:gap-2 '>
                <CgProfile className='text-[25px]'/>

                  FR
                  <MdKeyboardArrowDown/>
                </div>
                
                <div>
                    
               </div>


        </div>     

        <div className='text-[40px] sm:hidden'>
        <MdMenu/>
          </div> 
      
      </div>
      
      <div className=' hidden md:flex  w-full md:h-[37px] lg:h-[40px] xl:h-[39px] justify-evenly overflow-x-hidden'>
      {
        ExtraData.map((data,index)=>
        (
            <div key={index} className='text-[#4c4d4fe8] md:text-[0.5rem] lg:text-[12px] xl:text-[14px] hover:text-blue-700   hover:border-b-2 hover:border-blue-600 font-semibold'>{data}</div>
        ))
      }
     </div>


    </div>
  )
}

export default Navbar