
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <div>

      <div className="banner">

        <img
          src="https://images.pexels.com/photos/36730407/pexels-photo-36730407.jpeg"
          alt="Banner"
        />

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>

      </div>

      <div className="products">

        <div className="card">
          <img src="https://www.dermablogger.com/images/posts/10-must-have-cosmetics-for-every-woman-s-beauty-routine-md.jpg" alt="Makeup Pack" />
          <h3>Makeup Pack</h3>
          <p className="price">₹1700</p>
          <p>50% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/originals/99/dc/61/99dc61b035b5596ee7af93c6c8465616.jpg" alt="Dress" />
          <h3>Dress</h3>
          <p className="price">₹240</p>
          <p>40% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/originals/65/f5/26/65f52629be77028d1b4c5a98684cdceb.png" alt="Women Suit" />
          <h3>Women Suit</h3>
          <p className="price">₹203</p>
          <p>30% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://i5.walmartimages.com/seo/Pea-Coats-for-Women-Womens-Fashion-Winter-Long-Trench-Coat-Jackets-Notch-Collar-Open-Front-Cardigans-Outwear_f05efe24-9afc-4605-884c-c50d934202a7.08846bd58f794e9506bdfef63a55b763.jpeg" alt="Coat" />
          <h3>Coat</h3>
          <p className="price">₹800</p>
          <p>20% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/71IhuPi7iTL._AC_SL1500_.jpg" alt="Women Shoes" />
          <h3>Women Shoes</h3>
          <p className="price">₹300</p>
          <p>20% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://tse3.mm.bing.net/th/id/OIP.6WubmIz0gUgb8aURM3ArsAHaHa?r=0&pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3" alt="Women Heels" />
          <h3>Women Heels</h3>
          <p className="price">₹4000</p>
          <p>20% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://i.etsystatic.com/25605644/r/il/288464/4127036743/il_1588xN.4127036743_s68w.jpg" alt="Watch" />
          <h3>Watch</h3>
          <p className="price">₹2000</p>
          <p>20% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://www.besttohave.com/images/adjustable-women-s-bracelet-925-sterling-silver-with-created-diamond-p550-4145_zoom.jpg" alt="Bracelet" />
          <h3>Bracelet</h3>
          <p className="price">₹1440</p>
          <p>20% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/originals/7c/05/25/7c052579112694f094b19529a2c92b28.jpg" alt="Flora Dress" />
          <h3>Flora Dress</h3>
          <p className="price">₹2399</p>
          <p>20% OFF</p>
          <button className="buy-button">Buy</button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
