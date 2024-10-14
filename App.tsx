import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount(count => count + 1);
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count => count - 1);
		}
	};

	return (
		<View style={{ display: 'flex', justifyContent: 'space-between', padding: 60, flex: 1 }}>
			<View style={{ backgroundColor: 'green', padding: 20 }}>
				<Text style={{ fontSize: 20, textAlign: 'center' }}>Header</Text>
			</View>

			<View style={{ backgroundColor: 'red', padding: 20 }}>
				<Text style={{ fontSize: 20, textAlign: 'center' }}>Footer</Text>
			</View>
		</View>

		// <View style={styles.container}>
		// 	<Button title='-' onPress={decrement} />
		// 	<Text>{count}</Text>
		// 	<Button title='+' onPress={increment} />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: 100,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
});
