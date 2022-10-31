import { Theme, Button } from "react-daisyui";

export default (props) => {
	return (
		<>
			<Theme dataTheme="dark">
				<Button color="primary">Click me, dark!</Button>
			</Theme>

			<Theme dataTheme="light">
				<Button color="primary">Click me, light!</Button>
			</Theme>
		</>
	);
};
