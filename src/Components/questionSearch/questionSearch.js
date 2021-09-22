import s from "../questionSearch/questionSearch.module.scss";

const QuestionSearch = () => {
  return (
    <div className={s.question_search}>
      <div className={s.question}>
        <div className={s.general_question}>
          <p className={s.title_first}>Бронювання номерів</p>
          <p className={s.title_second}>Гарантоване заселення</p>
        </div>
        <div className={s.question_interior}>
          <div className={(s.interior, s.left)}>
            <p className={s.interior_first}>Дата заїзду</p>
            <p className={s.interior_second}>Коли?</p>
          </div>
          <div className={(s.interior, s.center)}>
            <p className={s.interior_first}>Дата виїзду</p>
            <p className={s.interior_second}>Коли?</p>
          </div>
          <div className={(s.interior, s.right)}>
            <p className={s.interior_first}>Гостей</p>
            <p className={s.interior_second}>Кількість гостей? </p>
          </div>
        </div>
        <div className={s.search_wrapper}>
          <div className={s.search}>
            <img src="../../images/svg/search.svg" alt="123" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSearch;
