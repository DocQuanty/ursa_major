import { Header } from "../header/header";
import { MainTitle } from "../mainTitle/mainTitle";
import QuestionSearch from "../questionSearch/questionSearch";

const headerPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "grey" }}>
        <Header />
        <MainTitle />
        <QuestionSearch />
      </div>
    </>
  );
};

export default headerPage;
