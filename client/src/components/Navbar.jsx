import { Navbar, Button } from "react-daisyui";
import { UilSwatchbook } from "@iconscout/react-unicons";

export default (args) => {
	return (
		<Navbar {...args}>
			<div id="Navbar" className="flex justify-between w-full h-1/6 ">
				<div className="text-2xl flex justify-start  ">
					<UilSwatchbook size={64} />
					<h3 className="pt-4 pl-3">Digital Business Card App</h3>
				</div>
				<div className="mr-9 w-3/6 flex justify-end rounded-xl">
					<Button className="rounded-lg mx-3 text-xl normal-case">
						Sign Up
					</Button>
					<Button className="rounded-lg mx-3 text-xl normal-case">About</Button>
					<Button className="rounded-lg mx-4 text-xl normal-case">Login</Button>
				</div>
			</div>
		</Navbar>
	);
};
