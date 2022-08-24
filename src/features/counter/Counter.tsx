import { useAppSelector, useAppDispatch } from "../../hooks";
import { decrement, increment } from "./counterSlice";

export const Counter = () => {
	// We can read data from the store with useSelector, and dispatch actions using useDispatch
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();
	return (
		<div>
			<div>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	);
};
