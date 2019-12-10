import React from 'react';
import { View } from 'react-native';

const Card = props => {
	const { children, cardStyle } = props;
	const { containerStyle } = styles;
	let style;
	style = {
		...containerStyle,
		...cardStyle
	};

	return <View style={style}>{children}</View>;
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
	}
};

export { Card };
