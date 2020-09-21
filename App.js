import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

const App = () => {
	const [isLogin, setLogin] = useState(true);

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			{isLogin ? <Login isLogin={isLogin} setLogin={setLogin} /> : <Chat isLogin={isLogin} setLogin={setLogin} />}
		</View>
	);
};

export default App;
