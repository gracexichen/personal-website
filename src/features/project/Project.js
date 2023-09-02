function Project(props) {
	return (
		<div className="bg-white rounded-md p-4 h-full shadow-md flex flex-col space-y-4">
			<h3 className="text-5xl font-semibold mb-2">{props.name}</h3>
			<p className=" text-xl mb-2">{props.description}</p>
			<a target="_blank" href={props.url} className="text-2xl hover:underline">
				View Project
			</a>
		</div>
	);
}

export default Project;
