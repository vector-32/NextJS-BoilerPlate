import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoaderContextProvider from "../contexts/loaderContext";
import { AuthContextProvider, useAuth } from "../contexts/authContext";
import LoaderComponent from "../components/loaderComponent";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme/extendedTheme";

function AuthIntialize() {
	const { checkStatus } = useAuth();

	useEffect(() => {
		if (checkStatus) checkStatus();
	}, []);

	return <></>;
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AuthContextProvider>
				<AuthIntialize />
				<LoaderContextProvider>
					<LoaderComponent />
					<Component {...pageProps} />
				</LoaderContextProvider>
			</AuthContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
