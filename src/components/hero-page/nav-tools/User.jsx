import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import swal from "sweetalert";

const User = () => {
	const cookies = new Cookies();
	const [user, setUser] = useState({
		nombre: "".trim(),
		apellidos: "",
		fNacimiento: "",
		telefono: "",
		email: "",
		password: "",
	});

	const logOut = () => {
		cookies.remove("email");
		window.location.href = "./login";
	};

	const handleInputs = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	// console.log(cookies.get("userId"));
	const submitForm = async (event) => {
		event.preventDefault();
		await axios
			.patch(`${process.env.REACT_APP_BASE_URL}/usuarios/${cookies.get("userId")}`, user, {
				headers: {
					Authorization: "Bearer " + cookies.token, // En los headers van 'Bearer ' + token recibido
				},
			})
			.then((response) => {
				swal("Bien!", "Información actualizada", "success");
			})
			.catch((error) => {
				// console.log(error.response.data);
				swal("Atención!", "Este email ya esta en eso", "warning");
			});
	};
	const repeatPassword = () => {
		const p1 = document.getElementById("pass1");
		const p2 = document.getElementById("pass2");

		if (p1.value !== p2.value) {
			swal("Las contraseñas no coinciden", "comprueba haberlas escrito bien", { icon: "warning" });
		}
	};
	return (
		<div className="mt-5">
			<form action="" onSubmit={submitForm}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title text-muted fw-bold" id="staticBackdropLabel">
								ACTUALIZAR DATOS
							</h5>
							<button className="btn btn-outline-danger" onClick={logOut}>
								Cerrar sesión
							</button>
						</div>
						<div className="modal-body">
							<div className="input-group input-group-sm mb-3">
								<span className="input-group-text" id="inputGroup-sizing-sm">
									<ion-icon name="person-circle"></ion-icon>
								</span>
								<input type="text" className="form-control" aria-label="Nombre" aria-describedby="inputGroup-sizing-sm" placeholder={cookies.get("nombre")} name="nombre" onChange={handleInputs} required />

								<input type="text" className="form-control" aria-label="Apellido" aria-describedby="inputGroup-sizing-sm" placeholder={cookies.get("apellidos")} name="apellidos" onChange={handleInputs} required />
							</div>
							<div className="input-group input-group-sm mb-3">
								<span className="input-group-text" id="inputGroup-sizing-sm">
									<ion-icon name="calendar"></ion-icon>
								</span>
								<input type="date" className="form-control" aria-label="Fecha de nacimiento" aria-describedby="inputGroup-sizing-sm" name="fNacimiento" onChange={handleInputs} required />
								<span className="input-group-text" id="inputGroup-sizing-sm">
									<ion-icon name="call"></ion-icon>
								</span>
								<input type="text" className="form-control" aria-label="teléfono" aria-describedby="inputGroup-sizing-sm" placeholder={cookies.get("telefono")} name="telefono" onChange={handleInputs} required />
							</div>

							<div className="input-group input-group-sm mb-3">
								<span className="input-group-text" id="inputGroup-sizing-sm">
									<ion-icon name="mail"></ion-icon>
								</span>
								<input type="email" className="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-sm" placeholder={cookies.get("email")} name="email" onChange={handleInputs} required />
							</div>
							<div className="input-group input-group-sm mb-3">
								<span className="input-group-text" id="inputGroup-sizing-sm">
									<ion-icon name="key"></ion-icon>
								</span>
								<input type="password" className="form-control" aria-label="contraseña" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu contraseña" id="pass1" minlength="6" />

								<input type="password" className="form-control" aria-label="contraseña" aria-describedby="inputGroup-sizing-sm" placeholder="Repite tu contraseña" name="password" id="pass2" onChange={handleInputs} required minlength="6" />
							</div>
						</div>
						<div className="modal-footer">
							<button type="submit" className="btn btn-primary" onClick={repeatPassword}>
								Aceptar
							</button>
							<button type="reset" className="btn btn-secondary">
								Reset
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default User;
