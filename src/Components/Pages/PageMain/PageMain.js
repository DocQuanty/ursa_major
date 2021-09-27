import s from "./PageMain.module.scss";
import SlideText from "../../SideText/SideText";
// import TheemTag from "../TheemTag/TheemTag";
import TwoLink from "../../SideText/TwoLink/TwoLinks";
import { Header } from "../../header/header";

const PageMain = (props) => {
  return (
    <div className={s.PageMain}>
      <div className={s.PageMain_wrapper}>
        <div className={s.PageMain__header}>
          <Header />
        </div>
        <div className={s.PageMain__SlideText}>
          {/* <TheemTag /> */}
          <SlideText
            titleMain={"Велика ведмедиця"}
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
          <TwoLink links={props.state.twoLinks}></TwoLink>
        </div>
      </div>
    </div>
  );
};
export default PageMain;
