import { Button } from "react-daisyui";

export default (args) => {
	return (
		<div className="flex flex-col w-full h-5/6 c p-4 items-center justify-center gap-2 font-sans bg-zinc-900">
			<div className="h-1/6 w-full">
				<h1 className="text-5xl">Digital Business Cards for your Team</h1>
				<span className="text-2xl italic">At the click of a button</span>
			</div>
			<div className="flex h-4/6 justify-start">
				<div className="flex text-xl w-3/6 h-full">
					<p className="w-5/6 pl-20 pt-36">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur aperiam architecto sint quasi a explicabo repellendus
						rem, veritatis sed repudiandae eum eligendi illo, doloremque magni
						possimus mollitia rerum expedita quae.
					</p>
				</div>
				<div className="w-3/6 justify-end h-full px-10 py-10 rounded-lg">
					<img
						className=" rounded-lg w-5/6"
						src="public/businessCard.avif"
						alt="Business Card Being Handed Over"
					/>
				</div>
			</div>
			<div className="w-full h-1/6">
				<Button
					{...args}
					color="primary"
					className="rounded-lg bg-black mr-12 px-8"
				>
					How Does it Work
				</Button>
			</div>
		</div>
	);
};
