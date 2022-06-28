import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
//
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
	const [loading, setLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);
	//setup function to fetch jobs from api
	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		setLoading(false);
	};
	//setup useEffect to call callback function fetchJobs once
	useEffect(() => {
		fetchJobs();
	}, []);
	//setup loading conditions
	if (loading) {
		return (
			<section classname="section loading">
				<h1>loading...</h1>
			</section>
		);
	}

	return <h2>jobs</h2>;
}

export default App;
