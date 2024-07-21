import React from "react";

function MagicButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  href, // new prop for the anchor tag
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  href?: string; // href prop for the anchor tag
}) {
  const ButtonComponent = href ? "a" : "button"; // Determine if it's an anchor or button based on href prop

  return (
    <ButtonComponent
      href={href} // use href if provided
      className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ${
        href ? "" : "cursor-pointer"
      }`} // conditionally add cursor-pointer if not using anchor tag
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </ButtonComponent>
  );
}

export default MagicButton;
