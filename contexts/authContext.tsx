import { createContext, useContext, useState } from "react";
import AuthService from "../services/authService";

interface UserData {
	logged?: Boolean;
	user?: any;
}
interface AuthContextInterface {
	user?: UserData;
	login?: (email: string, password: string) => Promise<any>;
	logout?: () => Promise<any>;
	checkStatus?: () => Promise<any>;
}

export const AuthContext = createContext<AuthContextInterface>({});

export function AuthContextProvider(props: any) {
	const [user, setUser] = useState<UserData>({});

	const login = async (email: string, password: string) => {
		return AuthService.login(email, password).then((res) => {
			if (res.success) {
				setUser({ logged: true, user: AuthService.getStatus() });
			} else {
				setUser({ logged: false, user: {} });
			}
			return res;
		});
	};

	const logout = async () => {
		setUser({ logged: false, user: {} });
		return AuthService.logout();
	};

	const checkStatus = async () => {
		let payload = AuthService.getStatus();
		if (payload && payload != false) {
			setUser({ logged: true, user: payload });
		} else {
			setUser({ logged: false, user: {} });
		}
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, checkStatus }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context)
		throw new Error("useAuth must be used inside a `AuthContextProvider`");

	return context;
}
