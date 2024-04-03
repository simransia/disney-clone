import { GiCheckMark } from "react-icons/gi";
import { ImCross, ImArrowLeft2 } from "react-icons/im";
import useSubscribeData from "../../hooks/useSubscribeData";
import { Container, Content, BgImage, Subscribe } from "./WatchStyles";

const WatchMovie = () => {
  const { detailData, selectedPlan, handlePlanChange } = useSubscribeData();

  return (
    <Container>
      <Content>
        <Subscribe>
          <ImArrowLeft2 className="arrow" style={{ fontSize: "1.8rem" }} />
          <img className="logo" src="/images/logo.svg" alt="Disney" />
          <p className="text">
            Select Plan <span className="grey">&gt; Log in &gt; Pay</span>{" "}
          </p>
          <img className="card" src={detailData.cardImg} alt="" />
          <button className="btn">Log In</button>
          <span className="subscribe">Subscribe to watch</span>
          <div className="subs">
            <div className="first">
              <div className="all">
                <h4> All content </h4>
                <p className="movies">Movies, live sports, TV, Specials</p>
                <hr />
                <p>Watch on TV or Laptop</p>
                <hr />
                <p>Ads free movies and shows (except sports)</p>
                <hr />
                <p>Number of devices that can be logged in</p>
                <hr />
                <p>Max video quality</p>
                <hr />
                <p>Max audio quality</p>
              </div>
              <div
                className={`super ${
                  selectedPlan === "Super" ? "current-plan" : ""
                }`}
              >
                <h4> Super </h4>
                <p>
                  <GiCheckMark />
                </p>
                <hr />
                <p>
                  <GiCheckMark />
                </p>
                <hr />
                <p>
                  <ImCross />
                </p>
                <hr />
                <p>2</p>
                <hr />
                <p>Full HD (1080p)</p>
                <hr />
                <p>Dolby 5.1</p>
              </div>
              <div
                className={`premium ${
                  selectedPlan === "Premium" ? "current-plan" : ""
                }`}
              >
                <h4> Premium </h4>
                <p>
                  <GiCheckMark />
                </p>
                <hr />
                <p>
                  <GiCheckMark />
                </p>
                <hr />
                <p>
                  <GiCheckMark />
                </p>
                <hr />
                <p>4</p>
                <hr />
                <p>4K (2160p)</p>
                <hr />
                <p>Dolby 5.1</p>
              </div>
            </div>

            <div className="second">
              <div
                className={`super-box ${
                  selectedPlan === "Super" ? "selected" : ""
                }`}
                onClick={() => handlePlanChange("Super")}
              >
                <h3>Super</h3>
                <h2>
                  <span className="rupee">₹</span>899/Year
                </h2>
              </div>
              <div
                className={`premium-box ${
                  selectedPlan === "Premium" ? "selected" : ""
                }`}
                onClick={() => handlePlanChange("Premium")}
              >
                <h3>Premium</h3>
                <h2>
                  <span className="rupee">₹</span>1499/Year
                </h2>
              </div>
              <div
                className={`premium-box-two ${
                  selectedPlan === "Premium2" ? "selected" : ""
                }`}
                onClick={() => handlePlanChange("Premium2")}
              >
                <h3>Premium</h3>
                <h2>
                  <span className="rupee">₹</span>299/Year
                </h2>
              </div>
            </div>
            <button className="plan">
              Continue with{selectedPlan === "Super" ? " Super " : "Premium"}
              &gt;
            </button>
          </div>
        </Subscribe>
        <BgImage />
      </Content>
    </Container>
  );
};
export default WatchMovie;
