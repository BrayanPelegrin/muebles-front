import { Route, Routes } from 'react-router-dom'
import { AdminRoutes } from '../admin/router/AdminRoutes'
import { AuthRoutes } from '../auth/router/AuthRoutes'

export const AppRouter = () => {
  
    return(
        <>
            <Routes>
            
                {/* Login y registro */}
                <Route path='/auth/*' element={ <AuthRoutes /> } />
                
                {/* MueblesApp */}
                <Route path='/*' element={ <AdminRoutes/> }/>
            </Routes>   
        </>
    ) 
}
