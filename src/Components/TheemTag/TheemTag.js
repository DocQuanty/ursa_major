import s from "../TheemTag/theemTag.module.scss";

const TheemTag = (props) => {
  return props.theemTagArr.map((el) => (
    <div className={s.main_big_teg}>{el.nameTag}</div>
  ));
};

export default TheemTag;
