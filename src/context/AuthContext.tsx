/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useState } from 'react';
interface IUser {
    completName: string | null
}

interface IAuthContext {
    user: IUser;
    setUser: (user: IUser) => string | null | void;
}
export const AuthContext = createContext<IAuthContext>(null!)

export default function AuthProvider ({children}:{children: JSX.Element}) {
    const [user, setUser] = useState<IUser>(null!); 

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}