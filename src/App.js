// import HeaderPage from "./Components/Page/headerPage";
import "./fonts/fonts.scss";
import "./App.scss";
import SideText from "./Components/SideText/SideText";

function App() {
  return (
    <div className="App">
      <SideText titleName={"Велика ведмедиця"} mode={"modeWhite"}>
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
    </div>
  );
}

export default App;
