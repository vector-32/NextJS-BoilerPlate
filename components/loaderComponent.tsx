import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import SkewLoader from "react-spinners/SkewLoader";
import { LoaderContext } from "../contexts/loaderContext";

export default function LoaderComponent(props: any) {
	const { loader } = useContext(LoaderContext);

	return (
		<div>
			{loader > 0 && (
				<div className="backdrop">
					<Flex
						justifyContent="center"
						alignItems="center"
						height="100vh"
					>
						<SkewLoader
							size={50}
							color={""}
							loading={loader != 0}
						/>
					</Flex>
				</div>
			)}
		</div>
	);
}
