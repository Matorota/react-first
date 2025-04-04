type Props = {
  symbol: string;
  handleClick: (value: string) => void;
  className: string;
};

export default function Button({ className, symbol, handleClick }: Props) {
  // Ternary operatoriaus geriau nenaudot jei daugiau nei 1 conditionas
  // const className = symbol === "C" ? "clear" : symbol === "=" ? "equals" : "";

  // const getClassName = () => {
  //   if (symbol === "C") return "clear";
  //   if (symbol === "=") return "equals";
  //
  //   return "";
  // };

  // const className = getClassName()

  // const className = useMemo(() => {
  //   if (symbol === "C") return "clear";
  //   if (symbol === "=") return "equals";
  //
  //   return "";
  // }, [symbol]);

  return (
    <button className={className} onClick={() => handleClick(symbol)}>
      {symbol}
    </button>
  );
}
