import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import authservice from "./Appwrite/Auth"
import {login,logout} from './Store/authslice'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Outlet } from "react-router-dom"
function App() {
  
  const [loading,setloading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getCurrentuser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])

 return !loading ? (
 
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div className='w-full block'>
    <Header />
    <main>
    TODO:  <Outlet />
    </main>
    <Footer />
  </div>
</div>
) : null
}

export default App