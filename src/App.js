import Profile from "./features/profile/Profile";
import Navbar from "./features/common/Navbar";
import Contact from "./features/contact/Contact";
import Projects from "./features/project/Projects";
import About from "./features/about/About";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Profile></Profile>
			<Projects></Projects>
			<About></About>
			<Contact></Contact>
		</>
	);
}

export default App;
