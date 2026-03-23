import { useEffect} from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { setMobile } from './redux/styleSlice'
import { useRoutes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Login } from './components/userLogin/Login'

function App() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 786px)"});

  const AppRoutes = () => {
    const routes = useRoutes([
      {path : "/" , element : <HomePage />},
      {path : "/signIn" , element : <Login />}
    ])
    return routes;
  }


  useEffect(() => {
    dispatch(setMobile(isMobile));
  }, [isMobile, dispatch])

  return (
    <AppRoutes />
  )
}

export default App
