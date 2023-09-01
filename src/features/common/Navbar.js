import logo from "./logo.png";
function Navbar() {
	return (
		<div className="flex bg-white sticky top-0 z-50 justify-content items-center">
			<ul className="flex flex-row basis-4/5 m-2 ml-4">
				<li>
					<a className="text-pink font-satisfy text-4xl">Grace Chen</a>
				</li>
			</ul>
			<ul className="basis-1/5 flex flex-row">
				<li className="m-4">
					<a className="text-darkblue hover:text-lightblue" href="#">
						Home
					</a>
				</li>
				<li className="m-4">
					<a className="text-darkblue hover:text-lightblue" href="#">
						Projects
					</a>
				</li>
				<li className="m-4">
					<a className="text-darkblue hover:text-lightblue" href="#">
						About
					</a>
				</li>
				<li className="m-4">
					<a className="text-darkblue hover:text-lightblue" href="#">
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
