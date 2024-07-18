import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

function Grid() {
  const showPdf = () => {
    return <iframe>

    </iframe>
  }
  return (
    <section id="about">
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
      <a onClick={showPdf}>
            <MagicButton
              title="Дэлгэрэнгүй"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
    </section>
  );
}

export default Grid;
