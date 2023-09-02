import { DATA } from "./project-data";
import Project from "./Project";
import { useState } from "react";
import ProjectType from "../../types/project-type";

var projectsList = [];

for (let i = 0; i < DATA.length; i++) {
	let object = DATA[i];
	const proj = new ProjectType(
		i,
		object.projectName,
		object.url,
		object.description,
		object.image
	);
	projectsList.push(proj);
}

const images = require.context("./images", true);

function Projects() {
	const [projectNum, setProjectNum] = useState(0);
	const curProject = projectsList[projectNum];
	const projectImage = images(`${curProject.image}`);
	return (
		<div
			id="projects"
			className="flex flex-row bg-lightblue h-[45rem] space-x-10 p-10"
		>
			<div className="flex flex-col w-1/2">
				<div className="flex flex-row">
					{projectsList.map((e) => {
						return (
							<div key={e.index}>
								<button
									key={e.index}
									className="bg-white ml-5 rounded-t-md w-40"
									onClick={() => {
										setProjectNum(e.index);
									}}
								>
									{e.projectName}
								</button>
							</div>
						);
					})}
				</div>
				<Project
					name={curProject.projectName}
					url={curProject.url}
					description={curProject.description}
				></Project>
			</div>
			<div className="w-1/2">
				<img
					src={projectImage}
					alt="projectImage"
					className="object-contain w-full h-full"
				></img>
			</div>
		</div>
	);
}
export default Projects;
