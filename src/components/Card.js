import React from "react";

function Card({ children, type, width }) {
  const base = "flex flex-col gap-2 p-5 rounded-3xl hover:shadow-lg  md:p-5";
  const styles = {
    violet:
      base +
      "bg-violet-800/10 backdrop-blur-sm shadow-violet-300 hover:shadow-violet-600 ",
    blue:
      base +
      "backdrop-blur-sm bg-gradient-to-r from-slate-900/100 from-100% to-slate-900/30  text-sky-300 flex flex-col w-xlg gap-5 shadow-sm shadow-sky-400 ease-in duration-200 hover:shadow-md hover:shadow-sky-400",
    slate:
      base +
      "backdrop-blur-sm bg-slate-900/20 border-sky-400 border-solid  text-sky-300 flex flex-col w-xlg gap-5 border-2",
  };
  return (
    <div className={styles[type]} style={{ width: width }}>
      {children}
    </div>
  );
}

export default Card;
