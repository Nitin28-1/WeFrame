import React from 'react';
import Image from 'next/image';

function Page3() {
  return (
    <div className="bg-[#FEF8FB] relative">
      <div className="w-full flex items-center mt-10 gap-7 md:gap-0 justify-around md:flex-row flex-col">
        <div className="w-[90%] md:w-[45%] items-center">
          <Image
            width={300}
            height={100}
            alt="Buffet setup"
            src="/BUFFET.png"
            className="w-[300rem] h-[300px] md:w-[2500px] md:h-[23rem] lg:h-[17rem] ml-3 rounded-lg"
          />
        </div>

        <div className="w-[90%] md:w-[45%] flex flex-col bg-[#f8d9e98d] p-5 rounded-lg gap-4">
          <p className="text-[25px] md:text-[36px]">
            S&#39;inscrire & économiser <span className="text-[#2ee2fe]">10%</span>
          </p>
          <p className="text-[15px] text-[#6c6b6b]">
            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most
            opportunity didn&#39;t. Yet busy any meeting shark light marginalised 4-blocker message.
            Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
          </p>

          <div className="flex mt-5 justify-around">
            <input
              type="text"
              className="w-[60%] h-[50px] rounded-md placeholder:pl-4"
              placeholder="john@doe.com"
            />
            <button className="bg-[#42ccd9] text-white font-semibold p-3 rounded-lg">
              S&#39;INSCRIRE {`->`}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t-2 pt-4 h-[400px] flex flex-col w-[100%] items-center gap-10 justify-between">
        <div className="flex w-[100%] flex-col items-center gap-4">
          <Image
            width={300}
            height={100}
            alt="Website logo"
            src="/logowebsie.png"
            className="w-[100px] object-contain h-[100px]"
          />

          <div className="flex w-[80%] justify-evenly gap-3 text-[10px]">
            <div className="text-sm text-[9px]">
              <p className="text-[11px] font-semibold">INFOS PRATIQUES</p>
              <p>A propos</p>
              <p>Livraisons & Reprises</p>
              <p>Mode d&#39;emploi</p>
              <p>F.A.Q</p>
            </div>

            <div className="text-sm text-[9px]">
              <p className="text-[11px] font-semibold">LEGAL</p>
              <p>Mentions Légales</p>
              <p>CGU</p>
              <p>CGV</p>
              <p>Politique de confidentialité</p>
            </div>
            <div className="text-sm text-[9px]">
              <p className="text-[11px] font-semibold">MON COMPTE</p>
              <p>Accéder à mon compte</p>
              <p>Ma liste d&#39;envie</p>
              <p>Créer un compte</p>
              <p>Mot de passe oublié</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-10 items-center w-[40%] mr-10 gap-2">
          <p className="font-semibold">NOUS SUIVRE</p>
          <Image
            width={100}
            height={100}
            alt="Footer icons for social media"
            src="/footericons.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Page3;
