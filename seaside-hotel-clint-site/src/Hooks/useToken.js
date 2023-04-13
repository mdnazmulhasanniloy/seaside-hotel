import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
const useToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://seaside-hotel-sarver.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)
                    }
                })
                .catch(err => toast.error(err.message))
        }
    }, [email])
    return (token);
}

export default useToken;