import React, { useEffect, ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, SafeAreaView, FlatList } from 'react-native';
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
	};

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
	};

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
	};

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
	};

	const DynamicView = () => {
		type Info = {
			name: string,
			age: number
		};

		const [infos, setInfos] = useState<Info>({ name: 'Clément', age: 22 });

		const changeAge = () => {
			const random = Math.floor(Math.random() * 100);
			setInfos({ ...infos, age: random });
		} 

		return (
			<View style={styles.ListViewContainer}>
				<Text>I'm {infos.name} and I have {infos.age} yo.</Text>
				<Button title='Change age' onPress={changeAge} color='violet' />
			</View>
		);
	};

	const InputView = () => {
		const [name, setName] = useState<string>('Clem');
		const [age, setAge] = useState<string>('0');

		return (
			<View style={styles.ListViewContainer}>
				<Text>Name:</Text>
				<TextInput style={styles.input} value={name} onChangeText={setName} placeholder='name' />
				<Text>Age:</Text>
				<TextInput style={styles.input} value={age} onChangeText={setAge} placeholder='age' keyboardType='numeric' />

				<Text>{name} : {age}</Text>
			</View>
		);
	};

	const ScrollViewView = () => {
		return (
			<ScrollView>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
				<Text>roar smell particularly combination consist rhythm must sitting running adjective left affect history care company sheep stepped orange unhappy start arrangement himself former herd</Text>
			</ScrollView>
		);
	};

	const FlatListView = () => {
		const [refreshing, setRefreshing] = useState<boolean>(false);
		const [isHorizontal, setIsHorizontal] = useState<boolean>(false);

		type ItemType = {
			key: string,
			title: string
		}
		const datas: ItemType[] = [
			{ key: '1', title: 'First item' },
			{ key: '2', title: 'Second item' },
			{ key: '3', title: 'Third item' },
			{ key: '4', title: 'Fourth item' },
		];
		const renderItem = (item: ItemType) => {
			return refreshing ? (
				<Text>Refreshing...</Text>
			) : (
				<Text key={item.key} style={{ backgroundColor: 'red', margin: 100, fontSize: 70}}>{item.title}</Text>
			);
		}

		const onRefresh = () => {
			setRefreshing(previous => !previous);
			console.log('Refreshing...');

			setTimeout(() => {
				setRefreshing(previous => !previous);
				console.log('Refreshed !');
			}, 2000);
		};

		const changeOrientation = () => {
			setIsHorizontal(previous => !previous);
		}


		return (
			<>
				<View style={{ marginTop: 100}}>
					<Button title='Change orientation' onPress={changeOrientation} />
				</View>
				<FlatList data={datas} keyExtractor={item => item.key} renderItem={({ item }) => renderItem(item)} onRefresh={onRefresh} refreshing={refreshing} horizontal={isHorizontal} />
			</>
		);
	};


	return (
		<>
			{/* <CounterView /> */}
			{/* <HeaderFooterView /> */}
			{/* <ListView /> */}
			{/* <PersonView /> */}
			{/* <DynamicView /> */}
			{/* <InputView /> */}
			{/* <ScrollViewView /> */}
			<FlatListView />
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
	},

	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
