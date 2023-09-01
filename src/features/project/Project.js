function Project(props) {
	return (
		<div className="bg-white rounded-md p-4 h-full shadow-md">
			<h3 className="text-2xl font-semibold mb-2">{props.name}</h3>
			<p className=" text-700 mb-2">{props.description}</p>
			<a target="_blank" href={props.url} className="text-600 hover:underline">
				View Project
			</a>
		</div>
	);
}

export default Project;
