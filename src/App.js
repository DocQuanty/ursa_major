// import HeaderPage from "./Components/Page/headerPage";
import "./fonts/fonts.scss";
import "./App.scss";
import SideText from "./Components/SideText/SideText";
import TwoLink from "./Components/SideText/TwoLink/TwoLink";
import ThreePictures from "./Components/threePictures/threePictures";

function App() {
  const arr = {
    link: [
      { text: "МЕНЮ", href: "/menu" },
      { text: "НАПОЇ", href: "/napoi" },
    ],
    theemTag: [{ nameTag: "АТМОСФЕРНИЙ ВІДПОЧИНОК В ГОРАХ" }],
    sideText: [{}],
  };
  return (
    <div className="App">
      <ThreePictures />
      {/* <SideText
        marginBottom={20}
        arr={arr}
        titleName={"Велика ведмедиця"}
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
      </SideText>
      <TwoLink link={arr.link}></TwoLink> */}
    </div>
  );
}

export default App;
