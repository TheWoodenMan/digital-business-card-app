import { Button } from "react-daisyui";

export default (args) => {
	return (
		<div
			id="Features"
			className="flex flex-col w-full h-5/6 c p-4 pt-16 items-center justify-center gap-2 font-sans bg-zinc-900"
		>
			<div className="h-1/6 w-full">
				<h2 className="text-5xl pb-5 pt-3">
					Manage Your Company Account Quickly and Easily
				</h2>
			</div>
			<div className="flex h-4/6 justify-start">
				<div className="flex flex-col pt-16 text-xl w-3/6 h-full">
					<span>Manged company account</span>
					<br />
					<span>Ability to mass invite your team</span>
					<br />
					<span>User management for new additions or leavers</span>
					<br />
					<span>
						Fine tune your company image with full control over content
					</span>
					<br />
					<span>Or delegate it completely to users themselves</span>
				</div>
				<div className="w-3/6 justify-end h-full px-10 py-10 rounded-lg">
					<img
						className=" rounded-lg w-5/6"
						src="public/pileOfCards.avif"
						alt="Business Card Being Handed Over"
					/>
				</div>
			</div>
			<div className="w-full h-1/6 pb-12">
				<Button
					{...args}
					color="primary"
					href="#Demo"
					className="rounded-lg bg-black mr-12 px-8"
				>
					Create a Free Account Today
				</Button>
			</div>
		</div>
	);
};
