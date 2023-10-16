import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick, width }) {
  const base =
    "inline-block text-sm rounded-2xl bg-sky-400  font-bold uppercase tracking-wide text-slate-800 transition-all duration-300 hover:bg-sky-300 focus:bg-sky-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-sky-300 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-2xl bg-violet-300 border-2 border-violet-300 font-semibold uppercase tracking-wide text-violet-800 transition-all duration-300 hover:bg-violet-800 hover:text-violet-300 focus:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-offset-2 focus:text-violet-300 disabled:cursor-not-allowed disabled:bg-violet-600 disabled:text-sky-300 px-4 py-2.5 md:px-6 md:py3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        style={{ width: width }}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button
      style={{ width: width }}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
