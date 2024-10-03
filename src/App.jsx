import React, { useState } from 'react'
import Slidebar from './Components/Sildebar/Slidebar'
import Main from './Components/Main/Main'
import Mic from './Components/Mic/Mic'

const App = () => {
  const [recentPrompt, setRecentPrompt] = useState([]);
  
  return (
    <>
      <Slidebar recentPrompt={recentPrompt} />
      <Main  setRecentPrompt={setRecentPrompt} recentPrompt={recentPrompt} />
      {/* <Mic /> */}

    </>
  )
}

export default App