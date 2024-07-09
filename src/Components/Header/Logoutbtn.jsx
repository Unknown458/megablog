import { useDispatch } from 'react-redux'
import authservice from '../../Appwrite/Auth'
import logout  from '../../Store/authslice'

function Logoutbtn() {
    const dispatch = useDispatch()
    const logouthandler = ()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logouthandler}
    >Logout</button>
  )
}

export default Logoutbtn