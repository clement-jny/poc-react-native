import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text}>Header</Text>
			</View>

			<View style={styles.footer}>
				<Text style={styles.text}>Footer</Text>
			</View>
		</View>
	);
}

// const CounterView = () => {
// 	const [count, setCount] = useState<number>(0);

// 	const increment = () => {
// 		setCount(count => count + 1);
// 	};

// 	const decrement = () => {
// 		if (count > 0) {
// 			setCount(count => count - 1);
// 		}
// 	};

// 	return (
// 		<View style={styles.countContainer}>
// 			<Button title='-' onPress={decrement} />
// 			<Text>{count}</Text>
// 			<Button title='+' onPress={increment} />
// 		</View>
// 	);
// }

const styles = StyleSheet.create({
	countContainer: {
		height: 100,
		width: 100,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	container: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 60,
		flex: 1
	},

	header: {
		backgroundColor: 'green',
		padding: 20
	},
	footer: {
		backgroundColor: 'red',
		padding: 20
	},

	text: {
		fontSize: 20,
		textAlign: 'center'
	}
});
