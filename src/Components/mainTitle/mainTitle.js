import s from "../mainTitle/MainTitle.module.scss";

export const MainTitle = () => {
  return (
    <div className={s.main_title}>
      <div className={s.main_big_title}>Велика Ведмедиця</div>

      <div className={s.main_big_teg}>
        Мережа готелів та котеджів в Буковелі та Яремче
      </div>
    </div>
  );
};
