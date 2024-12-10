import React from 'react'
import { CiHeart } from "react-icons/ci";
import Counter from './Counter';
import { IoAddOutline } from "react-icons/io5";
import Carousel from "./Carousel"
import Image from 'next/image';


function page1() {
   


  return (
    <div>
       <div className='my-4 ml-4 text-gray-500'><span className='font-semibold text-black'>Home </span>{' >' } Art de la table </div>
       
       <div className='flex flex-col  w-[100%]  sm:h-[500px] md:h-[400px] gap-5 sm:gap-2 sm:items-start sm:flex-row md:flex-row  items-center   lg:h-[500px] lg:justify-around md:justify-between '>
         
         <div className=' w-[100%] mr-1 sm:h-[85%]   flex justify-center md:none lg:w-[50%] xl:w-[50%] md:w-[40%]  '>
          
          <img src='./page1image.png'    className=' w-[90%] sm:w-[100%] sm:h-[90%] md:w-[100%] md:h-[340px]  lg:w-[90%] lg:h-[95%]    object-cover ml-10 rounded-lg'/>
         </div>

         <div className='w-[100%] h-[400px] sm:h-[380px]   md:h-[85%] flex flex-col items-center md:w-[50%]'>
            
            <div className='w-[80%]  h-[83%] md:w-[90%] border-b-2 sm:text-[12px] '>
              <div className='flex items-center justify-stretch border-b-2 pb-2'> 
                <div>
                   <h1 className='text-[18px] sm:text-[18px] lg:text-[30px] font-serif md:text-[20px]'>Cheese appareil à raclette 1/2 roue</h1>
                   <n className=" text-[15px] sm:text-[15px] md:text-[20px] lg:text-[25px] font-semibold">39,50€ <ni className="font-normal lg:text-[20px] text-gray-600">/pièce</ni></n>
                </div>

                <CiHeart className='ml-auto text-[30px] sm:text-[25px] md:text-[25px] lg:text-[35px]'/>
              
              </div>
               
              <div className='flex py-4 items-center justify-stretch border-b-2 md:text-[15px] '> 
                <div className='flex gap-5 '>
                
                <div className='flex gap-2 items-center '>
                   <img src='./Capa_1.png'  />
                  <span >20 <sup  className='font-semibold'>cm</sup></span>
                </div>

                <div className='flex gap-2 items-center'>
                   <img src='./Frame.png'    />
                  <span >50 <sup  className='font-semibold'>cm</sup></span>
                </div>
                
                </div>

                <n className="ml-auto text-[#868484]" >REF: VABGN5</n>
              
              </div>
               
              <div className='pt-4 md:text-[12px] lg:text-[15px]'>
              
              <ul>
                <li>Location appareil à raclette - Raclette traditionnelle 1/2 roue </li>
                <li> Réglable en hauteur</li>
                <li>Appareil à raclette professionnel</li>
                <li>Boîtier de chauffe horizontal réglable en hauteur</li>
                <li className='pt-4'> 220V </li>
                <li>  900W </li>
              </ul>
      
              </div>

               
             </div>
            
            <div className='flex gap-2 mt-2 md:gap-2 '>
              <Counter/>

              <button className='w-[80%]  md:w-[60%] lg:w-[80%] rounded-md bg-[#5CD2DD] text-white'>AJOUTER AU PANIER</button>

              
             </div>

         </div>


       </div>

       <div className='w-[100%] h-[20%] flex md:flex-row flex-col md:mt-0 mt-2 mb-10 '> 
       
        <div className='w-[85%] md:w-[43.4%] ml-10 flex flex-col gap-3'>
           <p className='font-semibold text-[20px] font-sans'>Description produit</p>
           <n className="text-[#3b3b3b]">Festi vous propose à la location un/une "Jewel-grand couteau/10pc pour votre évenement et ce dès 0,35 € /pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</n>
        </div>
          
          <div className='w-[95%] ml-8  md:w-[50%] md:ml-20 md:mt-5 mt-10  flex flex-col '>
              
              <div className='w-[90%] h-[70px] bg-[#EEEBEB] flex items-center px-6 p-2'>
                <n>LIVRAISONS</n>
                <IoAddOutline className='ml-auto text-[25px]'/>
              </div>

              <div className='w-[90%] h-[70px] bg-[#EEEBEB] flex items-center px-6 p-2'>
                <n>QUESTIONS</n>
                <IoAddOutline className='ml-auto text-[25px]'/>
              </div>

          </div>

        <div>

        </div>
         

       </div>
     
   

    </div>
  )
}

export default page1