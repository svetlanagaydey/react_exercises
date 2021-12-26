
import React, { useState } from 'react';
const Checkboxes = () => {
	const defaultArray = ["one", "two", "three", "four", "five"];
	const defaultList = defaultArray.map((element) => {
		return {	name: element,
							isChecked: false,
						}
	})
	const [chekboxes, setChekboxes] = useState(defaultList);

	const changeChecked = (index) => {
		const tempArray = [...chekboxes];
		tempArray[index].isChecked===false? tempArray[index].isChecked=true: tempArray[index].isChecked=false;
		setChekboxes(tempArray);
	}

	const printCheckBoxes = () => {
		return (
			<ul>
				{chekboxes.map((el, index) => {
					return (
						<li key={el.name}>{el.name}
							<input type="checkbox" checked={el.isChecked} onChange={() => changeChecked(index)}/>
						</li>)
				})}
			</ul>
		) 
	}
	const deletChecked = () => {
		const tempDelete = chekboxes.filter(el => {
			return el.isChecked === false;
		})
		setChekboxes(tempDelete);
	}
	const resetAll = () => {
		setChekboxes(defaultList);
	}

	return (
		<div>
			<button onClick={deletChecked}>Delete</button>
			<button onClick={resetAll}>Reset</button>
			{printCheckBoxes()};
		</div>
		)
}
export default Checkboxes;