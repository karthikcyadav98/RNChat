import React, {useState} from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Dimensions,
	StyleSheet,
	TouchableHighlight,
	Keyboard,
	ActivityIndicator
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Login = ({isLogin, setLogin}) => {
	const [isLoading, setLoading] = useState(false);
	const [username, setUsername] = useState('');

	const handleSubmit = () => {
		if (username.length > 2) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setLogin(false);
			}, 1000);
		} else {
			alert('Username should be minimum 3 characters');
		}
	};

	return (
		<TouchableHighlight
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Text
					style={{
						fontWeight: '700',
						fontSize: 20,
						marginBottom: 20,
						textAlign: 'left',
						textDecorationLine: 'underline'
					}}
				>
					Login
				</Text>
				<View style={styles.inputView}>
					<TextInput
						value={username}
						onChangeText={text => setUsername(text)}
						style={styles.inputText}
						placeholder="Enter your name"
					/>
				</View>
				{isLoading ? (
					<TouchableOpacity style={styles.btnDisable} onPress={() => handleSubmit()}>
						<ActivityIndicator color="black" />
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
						<Text style={styles.btnText}>SUBMIT</Text>
					</TouchableOpacity>
				)}
			</View>
		</TouchableHighlight>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	inputView: {
		borderWidth: 1,
		borderColor: 'black',
		width: SCREEN_WIDTH * 0.9,
		height: SCREEN_HEIGHT * 0.06,
		justifyContent: 'center',
		padding: 10,
		borderRadius: 10
	},
	inputText: {
		fontSize: 17,
		fontWeight: '400'
	},
	btn: {
		height: SCREEN_HEIGHT * 0.05,
		width: SCREEN_WIDTH * 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'black',
		marginTop: 15
	},
	btnDisable: {
		height: SCREEN_HEIGHT * 0.05,
		width: SCREEN_WIDTH * 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#7c7c7c',
		marginTop: 15
	},
	btnText: {
		fontWeight: '400',
		fontSize: 17,
		color: 'white'
	}
});
