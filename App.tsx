import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
	setCount(count => count + 1);
  };

  const decrement = () => {
	if (count > 0) {
		setCount(count => count - 1);
	}
  };

  return (
	<View style={styles.container}>
		<Button title='-' onPress={decrement} />
		<Text>{count}</Text>
		<Button title='+' onPress={increment} />
	</View>
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
