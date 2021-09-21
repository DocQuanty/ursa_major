import s from "../header/header.module.scss";
import { Route } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className={s.header}>
      {/* ======== */}
      <div className={s.nav}>
        <ul>
          <li>
            <a href="/mainPage">Головна</a>
          </li>
          <li>
            <a href="/bukovelPage">Буковель </a>
          </li>
          <li>
            <a href="/yaremche">Яремче</a>
          </li>
          <li>
            <a href="/Cottages">Котеджі</a>
          </li>
          <li>
            <a href="/contact-us">Контакти</a>
          </li>
        </ul>
      </div>
      <div className={s.tel_number}>
        <p>+38 (096) 740 4337</p>
      </div>
    </div>
  );
};
