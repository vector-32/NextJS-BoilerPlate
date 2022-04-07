import { createContext, useContext, useState } from "react";

export const LoaderContext = createContext({loader: 0, stopLoading: ()=>{}, startLoading: ()=>{}});

export default function LoaderContextProvider(props: any) {
    const [loader, setLoader] = useState(0);

    const startLoading = () => {
        setLoader((prev) => prev+1);
    }

    const stopLoading = () => {
        setLoader((prev) => prev-1);
    }

    return (
        <LoaderContext.Provider value={{loader, startLoading, stopLoading}}>
            {props.children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
	const context = useContext(LoaderContext);

	if (!context)
		throw new Error("useLoader must be used inside a `LoaderContextProvider`");

	return context;
}
