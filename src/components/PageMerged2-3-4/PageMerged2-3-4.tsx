import PageFour from "../PageFour/PageFour";
import PageThree from "../PageThree/PageThree";
import PageTwo from "../PageTwo/PageTwo";
import "./PageMerged2-3-4.css";

function PageMerged2_3_4() {
  return (
    <div className="track-scroll d-flex justify-content-center align-items-center">
      <div className="scroll-content">
        <PageTwo />
      </div>
      <div className="scroll-content">
        <PageThree />
      </div>
      <div className="scroll-content">
        <PageFour />
      </div>
    </div>
  );
}

export default PageMerged2_3_4;
