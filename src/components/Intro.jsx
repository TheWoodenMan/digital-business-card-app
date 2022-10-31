const Intro = () => {
	const imgURL =
		"https://images.unsplash.com/photo-1606819717115-9159c900370b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
	return (
		<div
			className="hero h-96"
			style={{
				backgroundImage: `url(${imgURL})`
			}}
		>
			<div className="hero-overlay bg-opacity-60" />
			<div className="text-center hero-content text-neutral-content">
				<div className="w-full">
					<h1 className="mb-6 text-5xl font-bold">
						Hello there, welcome to our daisy gallery
					</h1>
					<p className="text-lg">
						Built with images from{" "}
						<a
							href="https://unsplash.com/developers"
							className="hover underline mt-8 bg-white px-2 py-1.5 rounded-sm text-black"
						>
							Unsplash API
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Intro;
