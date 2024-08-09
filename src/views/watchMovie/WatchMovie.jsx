import { GiCheckMark } from "react-icons/gi";
import { ImArrowLeft2 } from "react-icons/im";
import useSubscribeData from "../../hooks/useSubscribeData";
import { Container, Content, BgImage, Subscribe } from "./WatchStyles";
import { LuX } from "react-icons/lu";

const WatchMovie = () => {
  const { detailData, selectedPlan, handlePlanChange } = useSubscribeData();

  return (
    <Container>
      <Content>
        <Subscribe>
          <ImArrowLeft2 className="arrow" />
          <img className="logo" src="/images/logo.svg" alt="Disney" />
          <p className="text">
            Select Plan <span className="grey">&gt; Log in &gt; Pay</span>{" "}
          </p>
          <img className="card" src={detailData.cardImg} alt="" />
          <button className="login-btn">Log In</button>
          <span className="subscribe">Subscribe to watch</span>
          <div className="subs">
            <div className="first">
              <div className="all">
                <p className="movies">
                  All content
                  <span>Movies, live sports, TV, Specials</span>
                </p>
                <p>Watch on TV or Laptop</p>
                <p>Ads free movies and shows (except sports)</p>
                <p>Number of devices that can be logged in</p>
                <p>Max video quality</p>
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
                <p>
                  <GiCheckMark />
                </p>
                <p>
                  <LuX className="cross" />
                </p>
                <p>2</p>
                <p>Full HD (1080p)</p>
                <p>Dolby 5.1</p>
              </div>
              <div
                className={`premium ${
                  selectedPlan === "Premium" || selectedPlan === "Premium2"
                    ? "current-plan"
                    : ""
                }`}
              >
                <h4> Premium </h4>
                <p>
                  <GiCheckMark />
                </p>
                <p>
                  <GiCheckMark />
                </p>
                <p>
                  <GiCheckMark />
                </p>
                <p>4</p>
                <p>4K (2160p)</p>
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
                  <span className="rupee">₹</span>299/Month
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
