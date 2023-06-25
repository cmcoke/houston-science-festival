interface buttonProps {
  text: string;
  ariaLabel: string;
}

const Button = ({ text, ariaLabel }: buttonProps) => {
  return (
    <div className="group">
      <button aria-label={ariaLabel} className="flex items-start gap-2.5 bg-white group-hover:bg-[#202B52] px-[40px] py-[13px] border-2 border-solid border-[#202B52] group-hover:border-white duration-300 ease-in-out">
        <span className="text-[#202B52] group-hover:text-white text-[1.25rem] tracking-[0.03rem] duration-300 ease-in-out">{text}</span>
      </button>
    </div>
  );
};
export default Button;
