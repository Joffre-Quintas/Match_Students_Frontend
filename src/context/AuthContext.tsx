import { createContext, useState } from 'react';
interface IUser {
    user: string | null
}

interface IAuthContext {
    user: IUser;
    setUser: (user: IUser) => string | null | void;
}
const AuthContext = createContext<IAuthContext>(null!)

export default function AuthProvider ({children}:{children: React.ReactNode}) {
    const [user, setUser] = useState<IUser>(null!); 

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}