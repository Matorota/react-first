/*<button
              key={index}
              className={symbol === "C" ? "clear" : ""}
              onClick={() => handleClick(symbol)}
            >
              {symbol}
            </button>*/

type Props = {
  symbol: string;
  handleClick: (value: string) => void;
};

export default function Button({ symbol, handleClick }: Props) {
  return (
    <button
      className={symbol === "C" ? "clear" : ""}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </button>
  );
}
