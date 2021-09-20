import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const SignUp = () => {
	const [newCustomer, setNewCustomer] = useState({
		nombre: "".trim(),
		apellidos: "",
		fNacimiento: "",
		telefono: "",
		email: "",
		password: "",
	});

	const handleInputs = (event) => {
		setNewCustomer({
			...newCustomer,
			[event.target.name]: event.target.value,
		});
	};

	const submitForm = async (event) => {
		event.preventDefault();
		await axios
			.post(`${process.env.REACT_APP_BASE_URL}/usuarios/`, newCustomer)
			.then((response) => {
				Swal.fire({
					position: "top",
					icon: "success",
					title: `Usuario creado correctamente`,
					showConfirmButton: false,
					timer: 1500,
				  }).then(() => {
					window.location.href = "./login";
				  });
				
			})
			.catch((error) => {
				Swal.fire({
					position: "top",
					icon: "warning",
					title: `Error al crear usuario`,
					text: 'Comprueba tus datos',
					showConfirmButton: false,
					timer: 1500,
				  })
				document.getElementById("legal").checked = false;
			});
	};
	const repeatPassword = () => {
		const p1 = document.getElementById("pass1");
		const p2 = document.getElementById("pass2");
		
		if (p1.value !== p2.value) {
		document.getElementById("legal").checked = false;
			Swal.fire({
				position: "top",
				icon: "warning",
				title: "Las contraseñas no coinciden",
				text: 'Comprueba tus datos',
				showConfirmButton: false,
				timer: 1500,
			  })
		}
	};
	return (
		<>
			<div className="mt-5">
				<form action="" onSubmit={submitForm}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title text-muted fw-bold" id="staticBackdropLabel">
									REGISTRARSE
								</h5>
							</div>
							<div className="modal-body">
								<div className="input-group input-group-sm mb-3">
									<span className="input-group-text" id="inputGroup-sizing-sm">
										<ion-icon name="person-circle"></ion-icon>
									</span>
									<input type="text" className="form-control" aria-label="Nombre" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu nombre" name="nombre" onChange={handleInputs} required />

									<input type="text" className="form-control" aria-label="Apellido" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu apellido" name="apellidos" onChange={handleInputs} required />
								</div>
								<div className="input-group input-group-sm mb-3">
									<span className="input-group-text" id="inputGroup-sizing-sm">
										<ion-icon name="calendar"></ion-icon>
									</span>
									<input type="date" className="form-control" aria-label="Fecha de nacimiento" aria-describedby="inputGroup-sizing-sm" name="fNacimiento" onChange={handleInputs} required />
									<span className="input-group-text" id="inputGroup-sizing-sm">
										<ion-icon name="call"></ion-icon>
									</span>
									<input type="text" className="form-control" aria-label="teléfono" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu teléfono" name="telefono" onChange={handleInputs} required />
								</div>

								<div className="input-group input-group-sm mb-3">
									<span className="input-group-text" id="inputGroup-sizing-sm">
										<ion-icon name="mail"></ion-icon>
									</span>
									<input type="email" className="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu email" name="email" onChange={handleInputs} required />
								</div>
								<div className="input-group input-group-sm mb-3">
									<span className="input-group-text" id="inputGroup-sizing-sm">
										<ion-icon name="key"></ion-icon>
									</span>
									<input type="password" className="form-control" aria-label="contraseña" aria-describedby="inputGroup-sizing-sm" placeholder="Introduce tu contraseña" id="pass1" />

									<input type="password" className="form-control" aria-label="contraseña" aria-describedby="inputGroup-sizing-sm" placeholder="Repite tu contraseña" name="password" id="pass2" onChange={handleInputs} required />
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" name="legal" id="legal" onChange={handleInputs} required />
									<label className="form-check-label fs-6 lh-1 text-muted" htmlFor="flexRadioDefault1">
										He leído y acepto el Aviso Legal y la Política de Privacidad. Aviso Legal y politica de privacidad y los Terminos y condiciones
									</label>
								</div>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-primary" onClick={repeatPassword}>
									Registrarse
								</button>
								<button type="reset" className="btn btn-secondary">
									Reset
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignUp;
