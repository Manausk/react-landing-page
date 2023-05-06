import "./App.css";
import logo from "./logo.png";
import icon from "./icon.png";

function App() {
  return (
    <div className="container">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="">Travel Guide</a>
          </li>
          <li>
            <a href="">Places To Visit</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <button className="btn">
          <img src={icon} alt="icon" />
          Bookings
        </button>
      </nav>

      {/* header */}

      <div className="content">
        <h1>
          Beautiful
          <br />
          Places to explore
        </h1>
        <p>
          On a planet home to flamingo-pink lakes in Mexico, plus vast,
          multi-coloured hills in the USA, green ripples of rice paddies in
          India and epic icescapes in Antarctica, it's hard to choose a
          favourite - but why pick one?
        </p>
        <form>
          <input type="text" placeholder="Country Name" />
          <button class="btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
