import { Footer } from "react-daisyui";
import { UilSwatchbook } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

export default (args) => {
	return (
		<footer className="footer flex justify-between w-full h-1/6">
			{/* div containing icon and name text */}
			<div className="pl-9 h-full flex">
				<UilSwatchbook size={64} />
				<div className="flex flex-col h-full text-left pt-3">
					<a
						href="https://josephanthonysangine.com/"
						target="_blank"
						className="h-3/6"
					>
						josephanthonysangine.com
					</a>
					<a
						href="https://andynwood-portfolio.netlify.app/"
						target="_blank"
						className="h-3/6"
					>
						andywood.com
					</a>
				</div>
			</div>
			{/* CopyWrite Text */}
			<div className="justify-start pt-4 text-lg">
				<p className="text-center">Copyright © 2022 - All rights reserved</p>
			</div>
			{/* Twitter Logos */}
			<div className="pr-20 pt-2 ">
				<a
					href="https://twitter.com/SangineJoe"
					target="_blank"
					className="flex"
				>
					<UilTwitter size={20} />
					<span></span>Joseph Sangine
				</a>
				<a
					href="https://twitter.com/Andynwood79"
					target="_blank"
					className="flex"
				>
					<UilTwitter size={20} />
					<span>Andy Wood</span>
				</a>
			</div>
		</footer>
	);
};
