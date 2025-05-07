import style from "./Divider.module.css";
function Divider({ text = "or" }) {
  return (
    <>
      <div className={`${style.divider}  text-center`}>
        <div className={`${style.brdr} text-center m-auto`}>{text}</div>
      </div>
    </>
  );
}

export default Divider;
