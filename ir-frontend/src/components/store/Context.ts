import { createdContext } from 'react';

const StoreContext = createdContext({
	token: null,
	setToken: () => {},
});

export default StoreContext;

