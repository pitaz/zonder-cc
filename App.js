import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import * as Font from 'expo-font';
import store from './src/redux/store';
import Routes from './src/routes';
import Raleway from './assets/fonts/Raleway-Regular.ttf'

const App = () => {
	const [fontLoaded, setFontLoaded] = useState(false);

	const loadFont = async (font) => {
		await Font.loadAsync({
      'Raleway': font,
		});
		setFontLoaded(true);
	};

	useEffect(() => {
		loadFont(Raleway);
	}, []);

	{
		if(fontLoaded)  {
		return(	
			<Provider store={store}>
				<Routes />
			</Provider>
		)
	}

	return null;
	}
};

export default App;
