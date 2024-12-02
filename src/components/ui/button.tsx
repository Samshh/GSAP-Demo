interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className="px-[1rem] py-[0.5rem] bg-accent text-[#161616] font-black rounded-lg transition-all ease-linear hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <p>
        <em>{children}</em>
      </p>
    </button>
  );
}
