interface Users {
	id: Date | number;
	name: string;
}
const defaultState = {
	users: [
		{
			name: "John",
			id: 2354345,
		},
	],
};

const ADD_USER: string = "ADD_USER";
const REMOVE_USER: string = "REMOVE_USER";
const EDIT_USER: string = "EDIT_USER";

export const reducerList = (
	state = defaultState,
	action: { type: string; payload: Users | Date | number }
) => {
	switch (action.type) {
		case ADD_USER:
			return { ...state, users: [...state.users, action.payload] };
		case REMOVE_USER:
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
			};
		case EDIT_USER:
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.payload.id ? action.payload : user
				),
			};
		default:
			return state;
	}
};

export const addUserAction = (payload: Users) => ({
	type: ADD_USER,
	payload,
});

export const removeUserAction = (payload: Date | number) => ({
	type: REMOVE_USER,
	payload,
});

export const editUserAction = (payload: Users) => ({
	type: EDIT_USER,
	payload,
});
