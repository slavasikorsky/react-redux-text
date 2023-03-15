const defaultState = {
	count: 0,
};

const PLUS: string = "PLUS";
const MINUS: string = "MINUS";
const RESET: string = "RESET";

export const reducerCounter = (
	state = defaultState,
	action: { type: string; payload: number }
) => {
	switch (action.type) {
		case PLUS:
			return { ...state, count: state.count + action.payload };
		case MINUS:
			return { ...state, count: state.count - action.payload };
		case RESET:
			return { ...state, count: 0 };
		default:
			return state;
	}
};

export const plusCounterAction = (payload: number) => ({
	type: PLUS,
	payload,
});

export const minusCounterAction = (payload: number) => ({
	type: MINUS,
	payload,
});

export const resetCounterAction = () => ({
	type: RESET,
});
