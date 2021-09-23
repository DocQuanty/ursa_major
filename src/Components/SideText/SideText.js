import s from "../SideText/sideText.module.scss";
import TheemTag from "../TheemTag/TheemTag";

export const SideText = (props) => {
  const title = () => {
    if (props.mode === "modeWhite") {
      return <h2 className={s.sideText_titleWhite}>{props.titleName}</h2>;
    } else if (props.mode === "modeBlack") {
      return <h2 className={s.sideText_titleBlack}>{props.titleName}</h2>;
    } else {
      return null;
    }
  };
  const content = () => {
    if (props.mode === "modeWhite") {
      return (
        <div style={{ color: "#fff" }} className={s.sideText_content}>
          {props.children}
        </div>
      );
    } else if (props.mode === "modeBlack") {
      return (
        <div style={{ color: "#000" }} className={s.sideText_content}>
          {props.children}
        </div>
      );
    }
  };

  return (
    <>
      <div className={s.sideText}>
        <div className={s.sideText_tag}>
          <TheemTag />
        </div>
        {title()}
        {content()}
      </div>
    </>
  );
};

export default SideText;
