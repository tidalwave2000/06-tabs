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
	// destucture the array for the jobs here because after loading the arrary isn't empty anymore
	const { company, dates, duties, title } = jobs[value];
	return (
		<section className="section">
			<div className="title">
				<h2>experience</h2>
				<div className="underline"></div>
			</div>
			<div className="jobs-center">
				{/* btn-container */}
				<div className="btn-container">
					{jobs.map((item, index) => {
						return (
							<button
								key={item.id}
								onClick={() => setValue(index)}
								className={`job-btn ${index === value && "active-btn"}`}>
								{item.company}
							</button>
						);
					})}
				</div>
				{/* job info */}
				<article className="job-info">
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className="job-date">{dates}</p>
					{/* setup the display for the unordered list from duties */}
					{duties.map((duty, index) => {
						return (
							<div key={index} className="job-dec">
								<FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
								<p>{duty}</p>
							</div>
						);
					})}
				</article>
			</div>
		</section>
	);
}

export default App;
