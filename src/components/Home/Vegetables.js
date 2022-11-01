import "./Home.css";
import Footer from "./Footer";
import Categories from "./categories_image";
import market from "../image/market.jpg";
import Navbar from "../Home/Navbar";
import capsicum from "../image/capsicum.jpg";
import carrots from "../image/carrots-1.jpg";
import cucumber from "../image/cucumber.jpg";
import cabbages from "../image/cabbages.webp";
import eggplant from "../image/Eggplant.webp";
import garlic from "../image/garlic.webp";
import irish from "../image/irish potatoes.webp";
import Kunde from "../image/Kunde.jpeg";
import onions from "../image/onions.jpg";
import spinach from "../image/spinach.jpg";
import SweetPotatoes from "../image/SweetPotatoes.jpeg";
import tomatoes from "../image/tomatoes.jpeg";
import brocoli from "../image/brocoli.jpeg";
import turnips from "../image/turnips.jpg";
import collardgreens from "../image/collardgreens.jpg";
import pumpkins from "../image/pumpkins.jpg";

function Vegetables() {
  return (
    <div className="body">
      <div className="Opacity-category"></div>
      <Navbar />
      <Categories />
      <div className="categories">
        <h4>Recommended Products</h4>
        <div className="all-vegetables">
          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Capsicum</h1>
            </div>
          </div>

          <img
            className="vegetable-category"
            src={capsicum}
            alt="Market"
            width=" %"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Cabbages</h1>
            </div>
          </div>

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Cabbages</h1>
            </div>
          </div>

          <img
            className="vegetable-category"
            src={cabbages}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Carrots</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={carrots}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Cucumber</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={cucumber}
            alt="Market"
            width="%"
            height=""
          />
        </div>
        <h4>More Products</h4>
        <div className="all-vegetables">
          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Eggplant</h1>
            </div>
          </div>

          <img
            className="vegetable-category"
            src={eggplant}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Garlic</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={garlic}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Irish Potatoes</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={irish}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Cow pea leaves</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={Kunde}
            alt="Market"
            width="%"
            height=""
          />
        </div>
        <div className="all-vegetables">
          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Onion</h1>
            </div>
          </div>

          <img
            className="vegetable-category"
            src={onions}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Spinach</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={spinach}
            alt="Market"
            width="%"
            height=""
          />
          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Tomatoes</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={tomatoes}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>SweetPotatoes</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={SweetPotatoes}
            alt="Market"
            width="%"
            height=""
          />
        </div>
        <div className="all-vegetables">
          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Brocoli</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={brocoli}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Turnips</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={turnips}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Pumpkin</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={pumpkins}
            alt="Market"
            width="%"
            height=""
          />

          <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Collard Greens</h1>
            </div>
          </div>
          <img
            className="vegetable-category"
            src={collardgreens}
            alt="Market"
            width="%"
            height=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Vegetables;
