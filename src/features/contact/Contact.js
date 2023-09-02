const emailIcon = require("./email.png");
const discordIcon = require("./discord.png");
const linkedinIcon = require("./linkedin.png");
const githubIcon = require("./github.png");
function Contact() {
	return (
		<>
			<div
				id="contact"
				className="flex items-center justify-center flex-col sm:flex-row w-full h-[45rem]"
			>
				<div id="info" className="sm:w-1/2 px-16">
					<h3 className="font-satisfy text-6xl">Connect With Me</h3>
					<p className="text-2xl">
						Let me know if you have any exciting ideas I can help bring to life!
						Whether it's if you need a new website or have vision for an
						exciting software, I would love to collaborate with you!
					</p>
				</div>
				<div className="w-1/2 ">
					<div
						id="icons"
						className="object-fill grid grid-cols-2 w-full h-full place-items-center"
					>
						<a href="mailto:grxchen@ucdavis.edu" target="_blank">
							<img
								src={emailIcon}
								className="scale-[0.5] hover:scale-[0.6]"
							></img>
						</a>
						<a
							href="https://discordapp.com/users/727309096847671416"
							target="_blank"
						>
							<img
								src={discordIcon}
								className="scale-[0.5] hover:scale-[0.6]"
							></img>
						</a>
						<a href="https://github.com/gracexichen" target="_blank">
							<img
								src={githubIcon}
								className="scale-[0.5] hover:scale-[0.6]"
							></img>
						</a>
						<a href="https://www.linkedin.com/in/gracexchen/" target="_blank">
							<img
								src={linkedinIcon}
								className="scale-[0.5] hover:scale-[0.6]"
							></img>
						</a>
					</div>
				</div>
			</div>
			<div className="bg-pink h-[2rem] text-right pr-4">
				<a
					href="https://iconscout.com/lotties/github"
					target="_blank"
					className="text-sm text-purple"
				>
					Logo Animated Icon by Thao Phan
				</a>
			</div>
		</>
	);
}

export default Contact;
