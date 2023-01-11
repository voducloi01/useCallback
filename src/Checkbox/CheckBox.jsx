import { useState } from "react";
import { DATA } from "../Product";
import _ from "lodash";

export default function Checkbox() {
	const [filterTags, setFilterTags] = useState([]);

	const lodashMap = _.filter(DATA, (node) => {
		return filterTags.length > 0
			? filterTags.every((filterTag) =>
					node.tags.map((tag) => tag.slug).includes(filterTag)
			  )
			: DATA;
	});

	const filterHandler = (event) => {
		if (event.target.checked) {
			setFilterTags([...filterTags, event.target.value]);
		} else {
			setFilterTags(
				filterTags.filter((filterTag) => filterTag !== event.target.value)
			);
		}
	};

	return (
        <>
        <h2 style={{color: 'red'}}>  Demo checkbox</h2>
			<div>
				<label htmlFor="english">
					<input
						type="checkbox"
						onChange={filterHandler}
						value="english"
						id="english"
					/>
					<span>English</span>
				</label>
				<label htmlFor="french">
					<input
						type="checkbox"
						onChange={filterHandler}
						value="french"
						id="french"
					/>
					<span>French</span>
				</label>
				<label htmlFor="kids">
					<input
						type="checkbox"
						onChange={filterHandler}
						value="kids"
						id="kids"
					/>
					<span>Kids</span>
				</label>
				<label htmlFor="adults">
					<input
						type="checkbox"
						onChange={filterHandler}
						value="adults"
						id="adults"
					/>
					<span>Adults</span>
				</label>
			</div>
			<ul>
				{lodashMap.map((node) => (
					<li key={node.id}>{node.title}</li>
				))}
			</ul>
		</>
	);
}
