import React from 'react';
import Carousel from './Carousel';
import Page3 from './Page3';
import Image from 'next/image';

function Page2() {
  const products = [
    {
      image: '/Card2.png',
      title: 'Round Table',
      price: '0€',
      description: '0.35€/Pièce · REF: V2385',
      width: '100',
      height: '100',
    },
    {
      image: '/Card2.png',
      title: 'Square Table',
      price: '35€',
      description: '0.40€/Pièce · REF: V2386',
    },
    {
      image: '/Card2.png',
      title: 'Wooden Table',
      price: '50€',
      description: '0.50€/Pièce · REF: V2387',
    },
    {
      image: '/Card2.png',
      title: 'Glass Table',
      price: '60€',
      description: '0.60€/Pièce · REF: V2388',
    },
    {
      image: '/Card2.png',
      title: 'Steel Table',
      price: '75€',
      description: '0.75€/Pièce · REF: V2389',
    },
    {
      image: '/Card2.png',
      title: 'Plastic Table',
      price: '20€',
      description: '0.25€/Pièce · REF: V2390',
    },
  ];

  const products1 = [
    {
      image: '/Card1.png',
      title: 'Round Table',
      price: '0€',
      description: '0.35€/Pièce · REF: V2385',
    },
    {
      image: '/Card1.png',
      title: 'Square Table',
      price: '35€',
      description: '0.40€/Pièce · REF: V2386',
    },
    {
      image: '/Card1.png',
      title: 'Wooden Table',
      price: '50€',
      description: '0.50€/Pièce · REF: V2387',
    },
  ];

  const progressIcons = [
    {
      image: '/Groupe_25.png',
      title: 'Livraison & Reprise',
      desc: 'Selon vos besoins',
    },
    {
      image: '/dish.png',
      title: 'Nettoyage',
      desc: 'Selon vos besoins',
    },
    {
      image: '/Groupe_56.png',
      title: 'Commande illimitée',
      desc: 'Tout est possible',
    },
    {
      image: '/Groupe_123.png',
      title: 'Transport & Enlèvement',
      desc: 'On s&#39;occupe de tout.',
    },
  ];

  return (
    <div className="w-full h-[600px]">
      <div className="w-full pt-8 pb-2 bg-[#FDFBFB]">
        <div className="flex w-full items-center justify-between px-10 mb-10">
          <n className="text-[18px] md:text-[25px] font-serif">Articles similaires</n>
          <p className="text-[14px] md:text-[18px] underline">VOIR TOUTE LA COLLECTION</p>
        </div>

        <div className="flex mb-6">
          <Carousel products={products} />
        </div>
      </div>

      <div className="flex w-full mt-20 items-center justify-between mb:px-10 px-5 mb-10">
        <n className="text-[0.9rem] sm:text-[22px] md:text-[28px] font-serif">
          Ces produits pourraient vous intéresser
        </n>
        <p className="text-[0.6rem] sm:text-[16px] md:text-[18px] underline">VOIR TOUTE LA COLLECTION</p>
      </div>

      <div className="flex justify-evenly flex-col items-center gap-10 sm:flex-row flex-wrap">
        {products1?.map((data, index) => (
          <div key={index} className="w-[300px] mx-10">
            <Image width={300} height={100} alt={`Image of ${data.title}`} src={data.image} />
            <div className="w-full px-2 mb-2 flex items-center justify-between">
              <h3 className="font-bold">{data.title}</h3>
              <p className="text-[20px] font-semibold">0<sup>€</sup></p>
            </div>
            <div className="px-2 flex justify-between items-center">
              <p className="text-sm text-gray-400">{data.description}</p>
              <p className="text-sm pb-1 bg-[#80808020] p-1 px-2 rounded-2xl">20 pièces</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-20 pb-10 bg-[#FEF8FB]">
        <div className="pt-10 flex flex-col items-center">
          <p className="text-[24px] sm:text-[30px]">
            On s&#39;occupe de <span className="font-bold text-[#5CD2DD]">tout</span>
          </p>
          <p className="text-[12px] sm:text-[20px] text-[#575656]">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-16 items-center justify-center">
          {progressIcons?.map((data, index) => (
            <div key={index}>
              <div className="flex flex-col items-center">
                <Image width={80} height={100} alt={data.title} src={data.image} />
                <p>{data.title}</p>
                <p>{data.desc}</p>
              </div>
              {progressIcons?.length !== index + 1 && (
                <>
                  <hr className="hidden md:block md:w-[3rem]" />
                  <hr className="h-[50px] md:hidden bg-[#2e2d2d] w-[1px]" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <Page3 />
    </div>
  );
}

export default Page2;
