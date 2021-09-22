import { MainTitle } from "../mainTitle/mainTitle";
import QuestionSearch from "../questionSearch/questionSearch";

const headerPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "grey" }}>
        <MainTitle />
        <QuestionSearch />
      </div>
    </>
  );
};

export default headerPage;
