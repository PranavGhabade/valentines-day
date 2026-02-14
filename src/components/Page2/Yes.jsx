import { useState } from "react"
import "./Yes.css"

function Yes({ goToPage4 }) {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="yesPage">
      <div className="yesCard">
        <div className="emoji">🎉</div>

        <h2 className="yesTitle">Good Choice Sunflower 🌻</h2>

        <div className="imageRow">
          <img src={`${import.meta.env.BASE_URL}assets/image1.jpg`} alt="teddy" />
          <img src={`${import.meta.env.BASE_URL}assets/image2.jpg`} alt="teddy" />
        </div>

        <p className="yesText">
          now you are stuck with me forever 💖
        </p>
      </div>

      <div className="smallCard">
        <button className="exploreBtn" onClick={goToPage4}>
          Explore date ideas 💕
        </button>

        <p className="changeText">
          wait ... do you want to change the mind ??
        </p>

        <button
          className="evilBtn"
          onClick={() => setShowMessage(true)}
        >
          Actually I want to No 😈
        </button>

        {showMessage && (
          <p className="dealText">
            you already said yes, now the deal is expired 😌
          </p>
        )}
      </div>
    </div>
  )
}

export default Yes
