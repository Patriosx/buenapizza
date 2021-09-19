import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Cookies from "universal-cookie";

const LogIn = ({ access, setAccess }) => {
	const cookies = new Cookies();

	const [login, setLogin] = useState({
		email: "",
		password: "",
	});

	const handleInputs = (event) => {
		setLogin({
			...login,
			[event.target.name]: event.target.value,
		});
	};

	const submitForm = async (event) => {
		event.preventDefault();

		await axios
			.post(`${process.env.REACT_APP_BASE_URL}/usuarios/login`, login)
			.then((response) => response.data)
			.then((data) => {
				// Usuario logeado correctamente
				console.log("Usuario logeado");
				//comprobamos cookies
				setAccess(true);
				//guardamos las cookies
				cookies.set("userId", data.userId, { path: "/" });
				cookies.set("nombre", data.nombre, { path: "/" });
				cookies.set("apellidos", data.apellidos, { path: "/" });
				cookies.set("email", data.email, { path: "/" });
				cookies.set("telefono", data.telefono, { path: "/" });
				swal(`Bienvenid@ ${data.nombre}`);
				window.location.href = "./";
			})
			.catch((error) => {
				console.log(error.response.data);
				alert("Fallo al iniciar Sesión. Comprueba tus datos.");
			});
	};
	return (
		<>
			<div className="log-in col mt-5">
				<div className="modal-con">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title text-muted fw-bold" id="staticBackdropLabel">
									INICIAR SESIÓN
								</h5>
							</div>
							<form action="" onSubmit={submitForm}>
								<div className="modal-body">
									<div className="input-group input-group-sm mb-3">
										<span className="input-group-text" id="inputGroup-sizing-sm">
											<ion-icon name="person-circle"></ion-icon>
										</span>
										<input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu email" name="email" onChange={handleInputs} required />
									</div>
									<div className="input-group input-group-sm mb-3">
										<span className="input-group-text" id="inputGroup-sizing-sm">
											<ion-icon name="key"></ion-icon>
										</span>
										<input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu contraseña" name="password" onChange={handleInputs} required />
									</div>
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary">
										Aceptar
									</button>
									<button type="reset" className="btn btn-secondary">
										Reset
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LogIn;
