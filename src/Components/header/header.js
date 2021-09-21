import s from "../header/header.module.scss";

export const Header = (props) => {
  return (
    <div className={s.header}>
      <ul>
        <li>
          <a href="#">Головна</a>
        </li>
        <li>
          <a href="#">Буковель </a>
        </li>
        <li>
          <a href="#">Яремче</a>
        </li>
        <li>
          <a href="#">Котеджі</a>
        </li>
        <li>
          <a href="#">Chalet</a>
        </li>
        <li>
          <a href="#">Контакти</a>
        </li>
      </ul>
    </div>
  );
};
