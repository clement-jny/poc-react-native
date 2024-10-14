import React, { useEffect, ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
	const CounterView = () => {
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
			<View style={styles.countContainer}>
				<Button title='-' onPress={decrement} />
				<Text>{count}</Text>
				<Button title='+' onPress={increment} />
			</View>
		);
	}

	const HeaderFooterView = () => {
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

	const ListView = () => {
		const infos = [
			{ key: 'firstname', title: 'Prénom', value: 'Clément'},
			{ key: 'lastname', title: 'Nom', value: 'Jaunay'},
			{ key: 'age', title: 'Âge', value: '25'},
			{ key: 'hobbies',title: 'Passions', value: 'Télévision' },
		];

		return (
			<View style={styles.ListViewContainer}>
				{
					infos.map(info => {
						return (
							<View key={info.key} style={styles.ListViewInnerContainer}>
								<Text style={styles.ListViewTitle}>{info.title}</Text>
								<Text>{info.value}</Text>
							</View>
						);
					})
				}
			</View>
		);
	}

	const PersonView = () => {
		type Person = {
			name: string,
			age?: number,
			type: 'Human' | 'Alien'
		}

		const persons: Person[] = [
			{ name: 'Clément', age: 22, type: 'Human' },
			{ name: 'Jean', age: 30, type: 'Human' },
			{ name: 'Pierre', age: 35, type: 'Alien' },
			{ name: 'Paul', type: 'Alien' },
		];

		return (
			<View style={styles.ListViewContainer}>
				{
					persons.map(({ name, age, type }) => {
						return <PersonInfo key={name} name={name} age={age}>
							<Text>And I'm {type === 'Human' ? 'a Human' : 'an Alien'}.</Text>
						</PersonInfo>
					})
				}
			</View>
		);
	}

	return (
		<>
			{/* <CounterView /> */}
			{/* <HeaderFooterView /> */}
			{/* <ListView /> */}
			<PersonView />
		</>
	);
}

type PersonInfoProps = {
	name: string,
	age?: number,
	children: ReactNode
}
const PersonInfo = ({ name, age, children }: PersonInfoProps) => {
	return (
		<>
			<Text>I'm {name} {age !== undefined && `and I have ${age} yo.`}</Text>
			{children}
			<Button title='Click me' disabled />
		</>
	);
}



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
		justifyContent: 'center',
		padding: 60,
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
	},

	ListViewContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		width: '100%',
		height: '100%',
		padding: 60,
	},
	ListViewInnerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	ListViewTitle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
	}
});
