import React, { useState, useEffect } from "react";
import Input from "./input";
import List from "./list";


//create your first component

const Home = () => {
	const [texto_Prueba, setTexto_Prueba] = useState([]);


	const botonEliminar = (index) => {
		console.log(index);

		fetch('https://playground.4geeks.com/todo/todos/' + index, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then((response) => {
				if (response.status === 204) {
					obtener_Usuario_Tarea()
				}
				return response.json();
			})
			.then((data) => {
				console.log(data)
				// if (data) {
				// 	setTexto_Prueba(texto_Prueba => texto_Prueba.filter());
				// }
			})
			.catch((error) => console.log(error))
	};

	const entradaTeclado = (palabra) => {
		fetch('https://playground.4geeks.com/todo/todos/diego36', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"label": palabra,
				"is_done": false
			})
		})
			.then((response) => {
				console.log(response.status)
				if (response.status == 201) {
					obtener_Usuario_Tarea()
				}
				return response.json()
			})
			.then((data) => console.log(data))
			.catch((error) => console.log(error))

		// setTexto_Prueba(texto_Prueba.concat(palabra));
	};

	function editarTarea(id, tareaModificada) {
		fetch('https://playground.4geeks.com/todo/todos/' + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"label": tareaModificada,
				"is_done": false
			})
		})
			.then((response) => {
				// console.log(response.status)
				if (response.status === 200) {
					obtener_Usuario_Tarea()
				}
				return response.json();
			})
			.then((data) => {
				console.log(data)
				// if (data) {
				// 	setTexto_Prueba(texto_Prueba => texto_Prueba.filter());
				// }
			})
			.catch((error) => console.log(error))

	}

	function crearUsuario() {
		fetch('https://playground.4geeks.com/todo/users/diego36', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}

		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error))
	}

	function obtener_Usuario_Tarea() {
		fetch('https://playground.4geeks.com/todo/users/diego36', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}

		})
			.then((response) => {
				console.log(response.status)
				if (response.status == 404) {
					crearUsuario()
				}
				return response.json()
			})

			.then((data) => setTexto_Prueba(data.todos))
			.catch((error) => console.log(error))
	}

	useEffect(() => {
		// crearUsuario()
		obtener_Usuario_Tarea()
	}, [])

	return (
		<div className="text-center">
			<Input onEnter={entradaTeclado} />
			<List palabras={texto_Prueba} onDelete={botonEliminar} onEdit={editarTarea} />
		</div>
	);
};
export default Home;
