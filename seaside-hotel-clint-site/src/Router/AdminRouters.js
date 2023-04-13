import { useLocation, Navigate } from 'react-router-dom';
import useAdmin from './../../Hooks/useAdmin';
import { useContext } from "react";
import { AuthContext } from './../Context/AuthProvider';


const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();


    if (loading || isAdminLoading) {
        return <Spanner2 />
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;