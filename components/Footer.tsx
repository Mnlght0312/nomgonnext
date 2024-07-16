import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { profile } from "console";

function Footer() {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-60"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Бид хэрэглэгчдэд тулгарсан санхүүгийн асуудлыг{" "}
          <span className="text-yellow-500">хурдан шуурхай шийднэ. </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Бидэнтэй яг одоо холбоо барин санхүүгийн хэрэгцээгээ шийдээрэй.
        </p>
        <a href="mailto:khutultnomgon@gmail.com">
          <MagicButton
            title="Бидэнтэй холбоо барих"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Copyright © Хөтөлтномгон ББСБ{" "}
        </p>
        <p className="md:text-base text-sm md:font-normal font-light">
          Хан-Уул дүүрэг, 3-р хороо, чингисийн өргөн чөлөө, 37Б-р байр ,
          Ulaanbaatar, Mongolia{" "}
        </p>
        <p className="md:text-base text-sm md:font-normal font-light">
          7200 6666{" "}
        </p>
        <p className="md:text-base text-sm md:font-normal font-light">
          khutultnomgon@gmail.com{" "}
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
