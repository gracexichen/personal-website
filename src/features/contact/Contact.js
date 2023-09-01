function Contact() {
	return (
		<div className="bg-white">
			<ul className="basis-1/5 flex flex-row">
				<li className="m-3">Contact:</li>
				<li className="m-3">
					<a className="text-purple hover:text-pink" href="#">
						Email
					</a>
				</li>
				<li className="m-3">
					<a className="text-purple hover:text-pink" href="#">
						Discord
					</a>
				</li>
				<li className="m-3">
					<a className="text-purple hover:text-pink" href="#">
						LinkedIn
					</a>
				</li>
				<li class="m-3">
					<a className="text-purple hover:text-pink" href="#">
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
