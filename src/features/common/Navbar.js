import { Link } from "react-scroll";
function Navbar() {
	return (
		<div className="flex bg-white sticky top-0 z-50 justify-content items-center fixed">
			<div className="flex flex-row basis-4/5 m-2 ml-4">
				<p className="text-pink font-satisfy text-2xl sm:text-4xl">
					Grace Chen
				</p>
			</div>
			<ul className="basis-1/5 flex flex-row">
				<li className="mt-4 sm:m-4">
					<Link
						to="profile"
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}
						className="text-darkblue hover:text-lightblue"
						href="#profile"
					>
						Home
					</Link>
				</li>
				<li className="mt-4 sm:m-4">
					<Link
						to="projects"
						spy={true}
						smooth={true}
						offset={-50}
						duration={500}
						className="pl-4 sm:pl-0 text-darkblue hover:text-lightblue"
						href="#projects"
					>
						Projects
					</Link>
				</li>
				<li className="mt-4 sm:m-4">
					<Link
						to="about"
						spy={true}
						smooth={true}
						offset={-50}
						duration={500}
						className="pl-4 sm:pl-0 text-darkblue hover:text-lightblue"
						href="#about"
					>
						About
					</Link>
				</li>
				<li className="mt-4 sm:m-4">
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={-50}
						duration={500}
						className="pl-4 sm:pl-0 text-darkblue pr-2 sm:pr-0 hover:text-lightblue"
						href="#contact"
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
