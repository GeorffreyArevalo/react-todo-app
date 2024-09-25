import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import todoApi from "../apis/todoApi";
import { onChecking, onLogin, onLogout } from "../store";



export const useAuth = () => {

    const { state, user } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const dispatchAuthLogin = async( { username, password } ) => {

        dispatch( onChecking() );

        try {
            const { data } = await todoApi.post('/auth/login', { username, password });
            localStorage.setItem('token', data.token);
            dispatch( onLogin( { user: data.user } ) );

        } catch (error) {
            console.log(error);
            const dataError = error.response.data;
            dispatch( onLogout() );
            toast.error( dataError.msg, {
                position: 'top-right',
                duration: 3000
            });
        }


    }

    const dispatchAuthCreateAccount = async( { name, username, password } ) => {
        dispatch( onChecking() );

        try {
            const { data } = await todoApi.post('/auth/create', { name, username, password });
            localStorage.setItem('token', data.token);
            dispatch( onLogin( {user: data.user} ) );
        } catch (error) {
            console.log(error);
            const dataError = error.response.data;
            dispatch( onLogout() );
            toast.error( dataError.errors[0]?.msg || dataError.msg, {
                position: 'top-right',
                duration: 3000
            });
        }

    }

    const dispatchCheckAuth = async(  ) => {

        const authToken = localStorage.getItem('token');
        if(!authToken) return dispatch( onLogout() );

        try {
            
            const { data } = await todoApi.get('/auth/newsession');
            localStorage.setItem('token', data.token);
            dispatch( onLogin( {user: data.user} ) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }

    }
    

    const dispatchLogOut = () => {
        localStorage.clear();
        dispatch(onLogout());
    }
  
    return {
        state,
        user,

        dispatchAuthCreateAccount,
        dispatchAuthLogin,
        dispatchCheckAuth,
        dispatchLogOut,

    }
}


