function About() {
	return (
		<div
			id="about"
			className="flex flex-col xl:flex-row bg-turquoise h-auto xl:h-[45rem]"
		>
			<div className="xl:w-1/2 flex items-center justify-center h-[20rem] sm:h-full">
				<img
					className="scale-[0.65] scale-y-[0.5] xl:scale-125"
					src={require("./koro.png")}
				></img>
			</div>
			<div className="flex flex-col xl:w-1/2 h-full space-y-5 lg:space-y-10 align-middle justify-center">
				<div class="space-y-3">
					<h3 className="text-5xl sm:text-6xl font-satisfy text-center">About Me</h3>
					<p className="text-xl sm:text-2xl text-center">Let me introduce myself!</p>
				</div>
				<div className="pl-5 flex flex-row space-x-3 items-center">
					<div className="bg-darkblue rounded-lg w-4 h-4"></div>
					<h3 className="text-2xl sm:text-3xl">Skills & Tools</h3>
				</div>
				<div className="text-center xl:space-x-2 grid grid-cols-4 xl:flex xl:flex-row xl:pl-5">
					<p className="bg-pink rounded-lg px-3 py-1 m-1">Python</p>
					<p className="bg-tiffanyblue rounded-lg px-3 py-1 m-1">C/C++</p>
					<p className="bg-fairytale rounded-lg px-3 py-1 m-1">Java</p>
					<p className="bg-darkblue rounded-lg px-3 py-1 m-1">JavaScript</p>
					<p className="bg-lightred rounded-lg px-3 py-1 m-1">HTML/CSS</p>
					<p className="bg-vistablue rounded-lg px-3 py-1 m-1">PyQt</p>
					<p className="bg-lightblue rounded-lg px-3 py-1 m-1">MongoDB</p>
					<p className="bg-tiffanyblue rounded-lg px-3 py-1 m-1">Tailwind</p>
				</div>
				<div className="pl-5 flex flex-row space-x-3 items-center">
					<div className="bg-darkblue rounded-lg w-4 h-4"></div>
					<h3 className="text-2xl sm:text-3xl">Who Am I?</h3>
				</div>
				<p className="px-5 text-xl lg:text-2xl pb-3 lg:pb-0">
					Hi, I'm Grace! I am currently a sophomore studying computer science at
					UC Davis. I love watching anime, watching kdramas, listening to music,
					crocheting, and coding. In my future, I want to be a software
					developer where I can code a lot of cool websites and applications.
				</p>
			</div>
		</div>
	);
}

export default About;
