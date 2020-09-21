import React, {useState} from 'react';
import {
	View,
	Text,
	Dimensions,
	Platform,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
	TouchableHighlight,
	Keyboard
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Chat = ({isLogin, setLogin}) => {
	const [chat, setChat] = useState('');
	const username = 'KC';
	const [meassage, setMessage] = useState([
		{id: 1, text: 'first msg'},
		{id: 2, text: 'second msg'},
		{id: 3, text: 'third msg'},
		{id: 4, text: 'fourth msg'}
	]);

	const handleSend = () => {
		const prevData = meassage;
		const data = {
			id: meassage.length,
			text: chat
		};
		prevData.push(data);
		setMessage(prevData);
	};

	return (
		<TouchableHighlight
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<KeyboardAvoidingView>
				<View style={styles.container}>
					<TouchableOpacity onPress={() => setLogin(true)}>
						<Text style={styles.headerBack}>Back</Text>
					</TouchableOpacity>
					<Text style={styles.headerText}>Chat App</Text>
				</View>

				<View style={styles.msgContainer}>
					{meassage.map(item => (
						<View key={item.id} style={{flexDirection: 'row', margin: 5}}>
							<View style={{justifyContent: 'center', padding: 10}}>
								<Text style={{fontSize: 19}}>{item.text}</Text>
							</View>
							<View style={{backgroundColor: 'black', borderRadius: 100, padding: 20}}>
								<Text style={{color: 'white', fontWeight: 'bold'}}>{username}</Text>
							</View>
						</View>
					))}
				</View>

				<View
					style={{
						flex: 1,
						justifyContent: 'flex-end',
						alignItems: 'flex-start',
						marginBottom: 30,
						alignItems: 'center'
					}}
				>
					<View style={{justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row'}}>
						<View style={styles.inputView}>
							<TextInput
								value={chat}
								onChangeText={text => setChat(text)}
								style={styles.inputText}
								placeholder="Enter text"
							/>
						</View>
						<TouchableOpacity
							style={styles.btnView}
							onPress={() => {
								handleSend();
							}}
						>
							<Text style={styles.btnSend}>Send</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableHighlight>
	);
};

export default Chat;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		height: Platform.OS === 'android' ? 60 : 90,
		backgroundColor: 'black',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: SCREEN_WIDTH
	},
	inputText: {
		fontSize: 17,
		fontWeight: '400'
	},
	headerText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: Platform.OS === 'android' ? 0 : 25,
		marginLeft: 30
	},
	headerBack: {
		color: 'white',
		fontSize: 15,
		marginTop: Platform.OS === 'android' ? 0 : 25,
		textDecorationLine: 'underline'
	},
	btnSend: {
		color: 'white',
		fontSize: 15
	},
	inputView: {
		borderWidth: 1,
		borderColor: 'black',
		width: SCREEN_WIDTH * 0.7,
		height: SCREEN_HEIGHT * 0.06,
		justifyContent: 'center',
		padding: 10,
		borderRadius: 10
	},
	btnView: {
		backgroundColor: 'black',
		padding: 15,
		marginLeft: 5,
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	msgContainer: {
		height: SCREEN_HEIGHT * 0.8,
		justifyContent: 'flex-end',
		padding: 20,
		alignItems: 'flex-end'
	}
});
