import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center rounded-xl justify-center h-11 text-color-1 transition-colors  ${
    px || "px-7"
  } ${white ? "text-n-8 bg-white  hover:bg-[#cecece]" : "text-n-1 bg-transparent border-xl border-2 border-color-1 hover:text-black  hover:bg-color-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
