import s from "./threePictures.module.scss";
import img01 from "../../images/jpg/item01.jpg";
import img02 from "../../images/jpg/item02.jpg";

const threePictures = () => {
  return (
    <div className={s.three_Pictures}>
      <div className={s.three_Pictures__firstSection}>
        <div className={s.firstSection__item01}>
          <img src={img01} alt="" />
        </div>
        <div className={s.firstSection__item02}>
          <img src={img02} alt="" />
        </div>
      </div>
      <div className={s.three_Pictures__secondSection}>
        <div className={s.firstSection__item03}>
          <img src={img02} alt="" />
        </div>
        <div className={s.firstSection__item04}>
          <img src={img01} alt="" />
        </div>
      </div>
    </div>
  );
};

export default threePictures;
