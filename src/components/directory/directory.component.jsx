import DirectoryItem from "../directory-item/directory-item.component";
import ReactSimplyCarouselExample from "../slider/slider";
import Footer from "../footer/footer";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <>
      <div>
        <h1 className="app-title">Jam Pack Records</h1>
        <div className="directory-container">
          {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div>
        <ReactSimplyCarouselExample />
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Directory;
