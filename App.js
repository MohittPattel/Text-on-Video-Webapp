import myVideo from "./myVideo.mp4";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Text of Video</h1><br/>
      <h3>By</h3>
      <div className="container">
        <video autoPlay loop muted src={myVideo} />
        <div className="text">
          <p>MohitPatel</p>
        </div>
      </div>
    </div>
  );
}
