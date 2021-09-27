import s from "../TheemTag/theemTag.module.scss";

const TheemTag = (props) => {
  return <div className={s.main_big_teg}>{props.nameTag}</div>;
};

export default TheemTag;
