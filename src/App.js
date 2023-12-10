import React, { useState, useEffect } from "react";
import "./App.css";
import AvatarCustomization from "./components/AvatarCustomization";
import axios from "axios";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [prompt, setPrompt] = useState("");
  const [gender, setGender] = useState("male");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState(false);

  const handleGenderChange = (input) => {
    setImg("");
    setGender(input);
  };
  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  useEffect(() => {
    axios.get("https://emoji-generator.onrender.com/").then((res) => {
      if (res.data.status === 200) setServerStatus(true);
    });
  }, []);

  const handleGenerate = () => {
    setLoading(true);
    const prp = `An ${gender} lego face with a ${prompt} expression`;
    axios
      .post("https://emoji-generator.onrender.com/replicate", { prompt: prp })
      .then((res) => {
        setLoading(false);
        if (res.data.status === 201) {
          alert("Please try again. Something went wrong!");
          setImg("");
        } else setImg(res.data.img);
      });
    setPrompt("");
  };

  if (!serverStatus) {
    return (
      <>
        <nav className="navbar">
          <span className="website-name">Emojify Me!</span>
        </nav>
        <LoadingScreen />
      </>
    );
  } else {
    return (
      <div className="app">
        <nav className="navbar">
          <span className="website-name">Emojify Me!</span>
        </nav>
        <div className="container">
          <div className="left-section">
            <h1 className="title">
              No Words?
              <br />
              No Problem!
              <br />
              <span className="gradient-text">Emojify It!</span>
            </h1>
            <div className="generator-col">
              <input
                type="text"
                placeholder="Enter emotion to generate..."
                value={prompt}
                onChange={handleChange}
                className="prompt-input"
              />
              {loading ? (
                <button className="loading-btn" disabled>
                  Generating...
                </button>
              ) : (
                <button className="generate-btn" onClick={handleGenerate}>
                  Generate
                </button>
              )}
            </div>
          </div>
          <div className="right-section">
            <AvatarCustomization
              changeGender={handleGenderChange}
              image={img}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
