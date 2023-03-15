import { useDispatch, useSelector } from "react-redux";
import { Button, Space, Card, Typography } from "antd";

import {
	plusCounterAction,
	minusCounterAction,
	resetCounterAction,
} from "../../redux/reducerCounter";

import {
	addUserAction,
	removeUserAction,
	editUserAction,
} from "../../redux/reducerList";

const { Title } = Typography;

type Props = {
	children?: JSX.Element | JSX.Element[] | ReactNode;
};

interface CounterState {
	counter: {
		count: number;
	};
}

interface UseerState {
	list: {
		users: [id: Date | number, name: string];
	};
}

const Home = (props: Props) => {
	const dispatch = useDispatch();
	const counter = useSelector((state: CounterState) => state.counter.count);
	const users = useSelector((state: UseerState) => state.list.users);

	//counter
	const plusCounter = (number: number) => {
		dispatch(plusCounterAction(number));
	};

	const minusCounter = (number: number) => {
		dispatch(minusCounterAction(number));
	};
	const resetCounter = () => {
		dispatch(resetCounterAction());
	};

	//users
	const addUsers = (name: string) => {
		const user = {
			name,
			id: Date.now(),
		};
		dispatch(addUserAction(user));
	};

	const removeUsers = (userID: Date) => {
		dispatch(removeUserAction(userID));
	};

	const editUser = (userID: Date, name: string) => {
		const user = {
			name: name,
			id: userID,
		};
		dispatch(editUserAction(user));
	};

	return (
		<>
			<Space>
				<p>Counter: {counter}</p>
			</Space>
			<Space>
				<Button type="primary" onClick={() => plusCounter(1)}>
					PLUS
				</Button>
				<Button type="primary" onClick={() => minusCounter(1)}>
					MINUS
				</Button>
				<Button type="primary" onClick={() => resetCounter()}>
					RESET
				</Button>
			</Space>

			<div>
				<Title>Users</Title>
				{users &&
					users.map((user: any) => (
						<Card key={user.id} style={{ marginBottom: 20 }}>
							<b>{user.name}</b>
							<Space style={{ marginLeft: 20 }}>
								<Button
									type="dashed"
									onClick={() => removeUsers(user.id)}
								>
									REMOVE
								</Button>
								<Button
									type="dashed"
									onClick={() =>
										editUser(
											user.id,
											prompt("Update name", user.name)!
										)
									}
								>
									EDIT
								</Button>
							</Space>
						</Card>
					))}
				<Button type="primary" onClick={() => addUsers(prompt()!)}>
					ADD
				</Button>
			</div>
		</>
	);
};

export default Home;
