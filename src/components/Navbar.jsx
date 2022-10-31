import { Navbar, Button } from "react-daisyui";

export default (args) => {
	return (
		<div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
			<Navbar {...args}>
				<Button className="text-xl normal-case" color="ghost">
					Home
				</Button>
				<Button className="text-xl normal-case" color="ghost">
					About
				</Button>
				<Button className="text-xl normal-case" color="ghost">
					Login
				</Button>
			</Navbar>
		</div>
	);
};
