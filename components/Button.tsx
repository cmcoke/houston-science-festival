interface buttonProps {
  text: string;
  ariaLabel: string;
}

const Button = ({ text, ariaLabel }: buttonProps) => {
  return (
    <button aria-label={ariaLabel} className="flex items-start gap-2.5 bg-white px-[40px] py-[13px] border-2 border-solid border-[#202B52]">
      <span className="text-[#202B52] text-[1.25rem] tracking-[0.03rem]">{text}</span>
    </button>
  );
};
export default Button;
