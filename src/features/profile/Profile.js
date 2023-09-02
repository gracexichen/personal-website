const logo = require("./puzzle.png");

function Profile() {
	return (
		<div
			id="profile"
			className="items-center justify-center flex flex-col sm:flex-row h-[45rem]"
		>
			<div className="w-1/2">
				<img
					className="sm:w-4/5 sm:h-4/5 sm:p-32 sm:pr-0 sm:mx-2"
					src={logo}
					alt="Logo"
				/>
			</div>
			<div className="text-center sm:w-1/2 sm:text-left h-min p-8 pl-0">
				<h3 className="font-satisfy text-6xl">Welcome!</h3>
				<p className="text-2xl">
					I'm Grace, a sophomore studying Computer Science at the University of
					California, Davis.
				</p>
			</div>
		</div>
	);
}

export default Profile;
