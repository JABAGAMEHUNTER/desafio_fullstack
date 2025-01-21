import React, {Children} from "react";
import Context from './Context';
import useStorage from 'utils/useStorage';

const StoreProvider = () => {
	const [token, setToken] = useStorage('token');
	return (
		<ContextProvider	value={{token,setToken,}}>
		{Children}
		</ContextProvider>
	)
}

export default StoreProvider;
