"use client";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import MagicButton from "./ui/MagicButton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Carousel } from "antd";
import "./style.css";
function Grid() {
  const [show, setShow] = useState(false);

  const showConditions = () => {
    setShow(!show);
  };

  const imagePaths: string[] = Array.from(
    { length: 10 },
    (_, index) =>
      `/imgs/sample 2_2_pages-to-jpg-${String(index + 1).padStart(4, "0")}.jpg`
  );
  return (
    <section id="loan">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
      <div className="mb-8 text-center md: mt-8">
        <MagicButton
          title="Зээлийн нөхцөл харах"
          icon={
            show ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />
          }
          position="right"
          handleClick={showConditions}
        />
      </div>
      {show && (
        <div className="sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[600px] xl:w-[700px] xl:h-[600px] mx-auto">
          <Carousel infinite={false} arrows dotPosition="bottom">
            {imagePaths.map((imagePath, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  className="carouselImg object-cover mx-auto"
                  src={imagePath}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
}

export default Grid;
