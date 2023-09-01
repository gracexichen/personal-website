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
		object.description
	);
	projectsList.push(proj);
}

function Projects() {
	const [projectNum, setProjectNum] = useState(0);
	const curProject = projectsList[projectNum];
	console.log(curProject.projectName);
	return (
		<div class="bg-lightblue p-5">
			<div>
				{projectsList.map((e) => {
					return (
						<>
							<button
								className="bg-white ml-5 rounded-t-sm w-[150px]"
								onClick={() => {
									setProjectNum(e.index);
								}}
							>
								{e.projectName}
							</button>
						</>
					);
				})}
				<Project
					name={curProject.projectName}
					url={curProject.url}
					description={curProject.description}
				></Project>
			</div>
			<div>
				<img></img>
			</div>
		</div>
	);
}
export default Projects;
