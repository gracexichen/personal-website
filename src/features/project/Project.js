function Project(props) {
	return (
		<div className="bg-white rounded-b-md rounded-tr-md p-4 h-full shadow-md flex flex-col space-y-4">
			<h3 className="text-4xl sm:text-5xl font-semibold mb-2">{props.name}</h3>
			<p className="text-lg sm:text-xl mb-2">{props.description}</p>
			<a target="_blank" href={props.url} className="text-xl sm:text-2xl hover:underline">
				View Project
			</a>
		</div>
	);
}

export default Project;
