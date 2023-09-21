import '../../styles/globals.css'
import Header from '../../components/Header/index'
import { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';


function MyApp({ Component, pageProps }) {
  const [cor, setCor] = useState('white')
  const mudacor = () => {
    if (cor === 'white') {
      setCor('black')
    } else {
      setCor('white')
    }
  }

  
  return (
    <>
      <title>AmandaDev</title>
      <div className={cor === 'white' ? 'whiteTheme' : 'blackTheme'}>
        <Header link rel="icon" type="image/x-icon" href="/assets/Amanda.jpg" />
        <button onClick={() => (mudacor())}>Change Color Theme <DarkModeIcon /></button>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
