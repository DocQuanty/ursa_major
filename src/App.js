// import HeaderPage from "./Components/Page/headerPage";
import "./fonts/fonts.scss";
import "./App.scss";
import PageMain from "./Components/Pages/PageMain/PageMain";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "state",
      links: [
        { text: "МЕНЮ", href: "/menu" },
        { text: "НАПОЇ", href: "/napoi" },
      ],

      theemTag: [{ nameTag: "АТМОСФЕРНИЙ ВІДПОЧИНОК В ГОРАХ" }],

      sideBlockContent: {
        allTagColor: [
          { color: "АТМОСФЕРНИЙ ВІДПОЧИНОК В ГОРАХ" },
          { color: "АТМОСФЕРНИЙ ВІДПОЧИНОК В ГОРАХ" },
        ],
        allTitle: [
          { title: "Готель в Буковель" },
          { title: "Готель в Буковель" },
        ],

        allContent: [
          {
            ContentParagraphs: [
              {
                p: "Ми відкрили новий ресторан, де вас будуть дивувати поєднанням української та європейської кухонь.",
              },

              {
                p: "Бренд-шеф Дмитро Кузнєцов ітерпретує традиційні рецептури на сучасний лад й окрім професійного досвіду додає до кожної страви особливий інгредієнт, – Любов!",
              },
            ],
          },
          {
            list: [
              {
                title: "До ваших послуг:",
                li01: "7 видів гуцульських сніданків",
                li02: "дитяча кімната",
                li03: "басейн з підігрівом",
                li04: "гуцульське спа (баня, гарячі діжки)",
                li05: "сауна",
                li06: "BBQ-place",
                li07: "автостоянка",
              },
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="App">
        <PageMain state={this.state} />
      </div>
    );
  }
}

export default App;
