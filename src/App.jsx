import { useState } from "react"
import Page1 from "./components/Page1/Page1"
import Yes from "./components/Page2/Yes"
import Page4 from "./components/Page4/Page4"

function App() {
  const [page, setPage] = useState(1)

  return (
    <>
      {page === 1 && <Page1 goToYes={() => setPage(2)} />}
      {page === 2 && <Yes goToPage4={() => setPage(4)} />}
      {page === 4 && <Page4 />}
    </>
  )
}

export default App
