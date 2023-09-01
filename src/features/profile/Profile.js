const logo = require("./puzzle.png");

function Profile() {
	return (
		<div className="items-center justify-center flex flex-col sm:flex-row ">
			<div className="w-1/2">
				<img
					className="sm:w-4/5 sm:h-4/5 sm:p-32 sm:pr-0 sm:mx-2"
					src={logo}
					alt="Logo"
				/>
			</div>
			<div className="w-1/2 h-min p-8 pl-0">
				<h3 className="font-satisfy text-6xl mb-2 sm:mb-4">Welcome!</h3>
				<p className="text-xl">
					I'm <b className="text-2xl">Grace</b>, a sophomore studying Computer
					Science at the University of California, Davis.
				</p>
			</div>
		</div>
	);
}

export default Profile;
