import s from "../SideText/sideText.module.scss";
import TheemTag from "../TheemTag/TheemTag";

export const SideText = (props) => {
  debugger;
  // createComponentTitle

  const title = () => {
    if (props.mode === "modeWhite") {
      return <h2 className={s.sideText_titleWhite}>{props.titleName}</h2>;
    } else if (props.mode === "modeBlack") {
      return <h2 className={s.sideText_titleBlack}>{props.titleName}</h2>;
    } else {
      return null;
    }
  };

  // createComponentContent

  const content = () => {
    if (props.mode === "modeWhite") {
      return (
        <div
          style={{ color: "#fff", marginBottom: props.marginBottom + "px" }}
          className={s.sideText_content}
        >
          {props.children}
        </div>
      );
    } else if (props.mode === "modeBlack") {
      return (
        <div
          style={{ color: "#000", marginBottom: props.marginBottom + "px" }}
          className={s.sideText_content}
        >
          {props.children}
        </div>
      );
    }
  };
  return (
    <>
      <div className={s.sideText}>
        <div className={s.sideText_tag}>
          {/* <TheemTag theemTagArr={props.arr.theemTag} /> */}
        </div>
        {title()}
        {content()}
      </div>
    </>
  );
};

export default SideText;
