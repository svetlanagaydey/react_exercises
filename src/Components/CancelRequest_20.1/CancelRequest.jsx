
import axios from "axios";
import React, { useState, useEffect} from "react";

const DataComponent = () => {
	const [data, setData] = useState("");
	const [text, setText] = useState("");
	
	useEffect(() => {
	const source = axios.CancelToken.source();
	//const source2 = axios.CancelToken.source();
	const getData = async () => {
		const result = await axios.get(
		"https://api.chucknorris.io/jokes/random",
		{
			cancelToken: source.token
		}
		);
		setData(result.data.value);
	};

	// const getData2 = async () => {
	// 	const result2 = await axios.get(
	// 	"https://api.chucknorris.io/jokes/random",
	// 	{
	// 		cancelToken: source2.token
	// 	}
	// 	);
	// };
	getData();

	return () => {
		source.cancel("AAAAA");
	//	source2.cancel("AAAAA");
	};
	}, [text]);

	return <>
		<div>{data}</div>
		<input value={text} onChange={(e) => setText(e.target.value)}></input>
	</>;
};

export default function CancelRequest() {
	const [isShown, setIsShown] = useState(false);
	return (
	<div className="App">
		<button onClick={() => setIsShown(!isShown)}>Toggle Component</button>
		{isShown && <DataComponent />}
	</div>
	);
}