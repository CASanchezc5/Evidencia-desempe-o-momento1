import "../index.css"
import Header from "./Header"
import Main from "./Main"
import SectionMain from "./SectionMain"

const Body = () => {
  return (
    <div className="body">
      <Header />
      <Main />
      <SectionMain className="sectionMain1"/>
      <SectionMain className="sectionMain2"/>
    </div>
  )
}

export default Body