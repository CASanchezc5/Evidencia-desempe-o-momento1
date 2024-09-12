import "../index.css";
import Header from "./Header";
import Main from "./Main";
import SectionMain from "./SectionMain";

const Body = () => {
  return (
    <div className="body">
      <Header />
      <Main />
      <div className="sectionMain1">
        <SectionMain  />
      </div>
      <div className="sectionMain2">
        <SectionMain  />
      </div>
    </div>
  );
};

export default Body;
