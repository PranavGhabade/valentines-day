import { useState } from "react"
import "./Page1.css"

function Page1({ goToYes }) {
  const [noStyle, setNoStyle] = useState({})

  const moveNo = () => {
    const x = Math.floor(Math.random() * 200) - 100
    const y = Math.floor(Math.random() * 200) - 100
    setNoStyle({
      transform: `translate(${x}px, ${y}px)`,
    })
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Will you be my Valentine 💖</h1>

        <p className="subtitle">
          Official invite from your long distance admirer 💌
        </p>

        <div className="buttons">
          <button className="yesBtn" onClick={goToYes}>
            Yes 💘
          </button>

          <button
            className="noBtn"
            style={noStyle}
            onMouseEnter={moveNo}
            onClick={moveNo}
          >
            No 😅
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page1
