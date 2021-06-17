import axios from "axios";
import { useState, useEffect, React } from "react";
import { API } from "../configuration/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Setup(props) {
	const [classes, setClasses] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		axios.get(`${API}/Classes`)
		.then((response) => {
			setClasses(response.data);
			setLoading(false);
		})
		.catch(error => {
			console.log(error);
			alert(error);
		})
	}, [])
    
	return (
		<>
				{ isLoading
		? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
		: <>
		<h1>Třídy</h1>

		<table>
			<thead>
			<tr>
				<th>Třída</th>
                <th></th>
			</tr>
			</thead>
			<tbody>
				{classes.map((helperClass, index) => {
					return (
						<tr key={index}>
							<td>{helperClass.name}</td>
                            <td><Link to={`/class-detail/${helperClass.name}`}>Studenti</Link></td>
						</tr>
					)
				})}
			</tbody>
		</table>
		</>}
		</>
	)
}

export default Setup;