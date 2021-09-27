import s from "./PageMain.module.scss";
import SlideText from "../../SideText/SideText";
import TwoLink from "../../SideText/TwoLink/TwoLinks";

const PageMain = (props) => {
  return (
    <div className={s.PageMain}>
      <SlideText
        sideBlockContent={props.state.sideBlockContent}
        marginBottom={20}
        arr={props.state}
        mode={"modeWhite"}
      >
        <p>
          Отримайте комплексний відпочинок, а не ключі від номеру. <br />
          <span style={{ color: "orange" }}>
            У нас європейський сервіс та домашня атмосфера затишку і
            гостинності.
          </span>
        </p>
        <ul>
          <li>Готельно-ресторанний комплекс "Ведмежий Двір" у Буковелі</li>
          <li>Family готель в Яремче</li>
          <li>Елітні котеджі від Яремча до Буковеля</li>
        </ul>
      </SlideText>
      <TwoLink links={props.state.links}></TwoLink>
    </div>
  );
};
export default PageMain;
