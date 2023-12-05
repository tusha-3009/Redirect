
import './App.css';
import Pic from "./Images/walking-man.png"
import Logo from "./Images/MetalCloud - Horizontal Logo.png"
function App() {
  return (
    <div className="App">
      <div className="Parent-Card">
        <div className="Background">
          <div></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="985"
            height="732"
            viewBox="0 0 985 732"
            fill="none"
          >
            <path
              d="M108.139 698.211L0 1017.5L930.584 939.529L1463 116.353L835.677 -258L618.226 -223.014L554.371 -114.412C520.545 -56.8815 533.461 16.693 584.86 59.2619L625.836 93.1983C672.212 131.607 699.054 188.69 699.054 248.906C699.054 353.623 624.835 443.651 522.041 463.624L335.062 499.956C229.311 520.504 142.697 596.176 108.139 698.211Z"
              fill="#EBF4FA"
              fill-opacity="0.93"
            />
          </svg>
        </div>
        <div className="container">
          <div className="leftPanel">
            <img src={Logo} alt="metalCloudLogo" className="metalCloudLogo" />
            <div className="heading">Hold On!</div>
            <div className="subHeading">
              You’re are being redirected to
              <span className="blue"> nowpurchase.com</span>
            </div>
            <div className="clickHere">
              if you are not being redirected in 3 seconds
              <span className="red"> click here</span>
            </div>
          </div>
          <div>
            <img src={Pic} alt="walkingMan" className="walkingMan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
