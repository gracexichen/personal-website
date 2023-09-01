import logo from "./logo.png";
function Navbar() {
	return (
		<div class="flex bg-white sticky top-0 z-50 justify-content items-center">
			<ul class="flex flex-row basis-4/5 m-2 ml-4">
				<li>
					<a class="text-pink font-satisfy text-4xl">Grace Chen</a>
				</li>
			</ul>
			<ul class="basis-1/5 flex flex-row">
				<li class="m-4">
					<a class="text-darkblue hover:text-lightblue" href="#">
						Home
					</a>
				</li>
				<li class="m-4">
					<a class="text-darkblue hover:text-lightblue" href="#">
						Projects
					</a>
				</li>
				<li class="m-4">
					<a class="text-darkblue hover:text-lightblue" href="#">
						About
					</a>
				</li>
				<li class="m-4">
					<a class="text-darkblue hover:text-lightblue" href="#">
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
