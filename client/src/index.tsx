import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext({user: new UserStore(), device: new DeviceStore()});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Context.Provider value={{
		user: new UserStore(),
		device: new DeviceStore()
	}} >
		<App />
	</Context.Provider>
); 
