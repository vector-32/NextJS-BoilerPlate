import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactChild, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { useLoader } from "../../contexts/loaderContext";

const Authenticated = (props: { children: ReactChild }) => {
	const { checkStatus, user, logout } = useAuth();
	const router = useRouter();
	const { startLoading, stopLoading } = useLoader();
	const { colorMode, toggleColorMode } = useColorMode();

	useEffect(() => {
		if (checkStatus) checkStatus();
	}, []);

	useEffect(() => {
		if (user?.logged == false) router.push("/");
	}, [user]);

	const handleClick = () => {
		startLoading();
		setTimeout(() => {
			stopLoading();
		}, 3000);
	};

	return (
		<>
			<Flex
				justifyContent={"space-evenly"}
				alignItems={"center"}
				height={"100vh"}
				width={"100vw"}
			>
				<Button colorScheme={"red"} onClick={logout}>
					Logout
				</Button>
				 
				<Button colorScheme={"green"} onClick={handleClick}>
					Test Loading
				</Button>
				<Button colorScheme={"orange"} onClick={toggleColorMode}>
					Toggle {colorMode === "light" ? "Dark" : "Light"}
				</Button>
			</Flex>
		</>
	);
};

export default Authenticated;
