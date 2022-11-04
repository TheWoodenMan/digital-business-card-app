import { Button } from "react-daisyui";

export default (args) => {
	return (
		<div
			id="Demo"
			className="flex flex-col w-full h-5/6 c p-4 pt-8 items-center justify-center gap-2 font-sans bg-cyan-700 text-black"
		>
			<div className="h-1/6 w-full">
				<h2 className="text-3xl pb-5 mb-6">
					Customise Details to Suit your Company's Needs
				</h2>
			</div>
			<div className="flex h-5/6 justify-start">
				<div className="w-4/6 justify-end h-full px-10 py-10 rounded-lg">
					<img
						className="rounded-lg w-2/6"
						src="public/businessCard.png"
						alt="Business Card Being Handed Over"
					/>
				</div>
				<div className="flex flex-col text-xl w-3/6 h-full mt-5">
					<div className="flex flex-col pr-20 w-full">
						<h3 className="text-2xl">Feature Packed Cards</h3>
						<h4 className="italic"> Showcasing Your Team's Skills</h4>
					</div>
					<div className="w-5/6 pr-5 pt-10 pb-20">
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<br />
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<br />
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<br />
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<br />
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
					</div>
				</div>
			</div>
			<div className="w-full h-1/6 pb-8 mb-10">
				<Button
					{...args}
					color="primary"
					href="#Features"
					className="rounded-lg bg-black mr-12 px-8"
				>
					Learn More
				</Button>
			</div>
		</div>
	);
};
