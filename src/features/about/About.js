function About() {
	return (
		<div className="flex flex-row bg-turquoise h-[45rem]">
			<div className="w-1/2 flex items-center justify-center">
				<img className="scale-125" src={require("./koro.png")}></img>
			</div>
			<div className="flex flex-col w-1/2 h-full space-y-10 align-middle justify-center">
                <div class="space-y-3">
					<h3 className="text-5xl">About Me</h3>
					<p>Let me introduce myself!</p>
				</div>
				<div className="pl-5 flex flex-row space-x-3 items-center">
					<div className="bg-darkblue rounded-md w-4 h-4"></div>
					<h3 className="text-3xl">Skills & Tools</h3>
				</div>
				<div className="space-x-5 flex flex-row pl-5">
					<p className="bg-pink rounded-lg px-3 py-1">Python</p>
                    <p className="bg-tiffanyblue rounded-lg px-3 py-1">C/C++</p>
                    <p className="bg-fairytale rounded-lg px-3 py-1">Java</p>
                    <p className="bg-darkblue rounded-lg px-3 py-1">JavaScript</p>
                    <p className="bg-lightred rounded-lg px-3 py-1">HTML/CSS</p>
                    <p className="bg-vistablue rounded-lg px-3 py-1">PyQt</p>
                    <p className="bg-lightblue rounded-lg px-3 py-1">MongoDB</p>
				</div>
				<div className="pl-5 flex flex-row space-x-3 items-center">
					<div className="bg-darkblue rounded-md w-4 h-4"></div>
					<h3 className="text-3xl">Who Am I</h3>
				</div>
				<p className="pl-5">Hi, I'm Grace! I am currently a sopophomore studying computer science at UC Davis. I love watching anime, watching kdramas, listening to music, crocheting, and coding. In my future, I want to be a software developer where I can code a lot of cool websites and applications.</p>
			</div>
		</div>
	);
}

export default About;
