import "./button.style.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant: string;
};

function Button({ onClick, label, variant }: ButtonProps) {
  function setVariantColor() {
    if (variant === "dark") {
      return {
        backgroundColor: "#011e38",
        color: "#fff",
      };
    } else if (variant === "light") {
      return {
        backgroundColor: "#fff",
        color: "#011e38",
      };
    }
  }

  return (
    <button style={setVariantColor()} className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
