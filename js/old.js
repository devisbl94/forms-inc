	// Validacion de formulario de registro
				// Validar correo
					if(username.value == '' || username.value.length > 30) {
						username.style.background = '#FFFFCC';
						errorUsername.style.visibility = 'visible';
						error = 1;
					} else {
						username.style.background = '#FFF';
						errorUsername.style.visibility = 'hidden';
					}
					// Verificar si correo es válido
					if (username.value.indexOf("@") == -1) {
						username.style.background = '#FFFFCC';
						alert("El correo requiere un arroba (@)");
						error = 1;
					} else if (username.value.indexOf("@") == 0) {
						username.style.background = '#FFFFCC';
						alert("Es necesario texto antes del arroba");
						error = 1;
					} else if (username.value.indexOf("@") == (username.value.length) - 1) {
						username.style.background = '#FFFFCC';
						alert("Ese necesario texto después del arroba");
						error = 1;
					} else {
						username.style.background = '#FFF';
					}
					// Verificar estructura
					if (!isEmail(username.value)) {
						username.style.background = '#FFFFCC';
						alert("Correo no válido");
						error = 1;
					}

				// Validar contraseña
					if(password.value == '' || password.value.length > 30) {
						password.style.background = '#FFFFCC';
						errorPassword.style.visibility = 'visible';
						error = 1;
					} else {
						password.style.background = '#FFF';
						errorPassword.style.visibility = 'hidden';
					}
					if(password2.value == '') {
						password2.style.background = '#FFFFCC';
						errorPassword2.style.visibility = 'visible';
						error = 1;
					} else {
						password2.style.background = '#FFF';
						errorPassword2.style.visibility = 'hidden';
					}
					// Verificar si las dos contraseñas son iguales
					if (password.value != password2.value) {
						alert('Las contraseñas NO coinciden');
						password2.style.background = '#FFFFCC';
						error = 1;
					}

				// Validar nombre
					if(nombre.value == '' || nombre.value.length > 30) {
						nombre.style.background = '#FFFFCC';
						errorNombre.style.visibility = 'visible';
						error = 1;
					} else {
						nombre.style.background = '#FFF';
						errorNombre.style.visibility = 'hidden';
					}
					// Verificar longitud y si contiene numeros
					if (nombre.value < 3 || hasNumbers(nombre.value)) {
						nombre.style.background = '#FFFFCC';
						alert("Ingrese un nombre válido");
						error = 1;
					}

				// Validar fecha de nacimiento
					if(nacimiento.value == '') {
						nacimiento.style.background = '#FFFFCC';
						errorNacimiento.style.visibility = 'visible';
						error = 1;
					} else {
						nacimiento.style.background = '#FFF';
						errorNacimiento.style.visibility = 'hidden';
					}
					// Verificar si fecha ingresada excede fecha actual
					if (new Date(nacimiento.value) > new Date(todayIs())) {
						nacimiento.style.background = '#FFFFCC';
						alert("Ingrese una fecha válida");
						error = 1;
					}

				// Validar radio
					var Radio = document.registro.genero;
					var selected = false;
					for( var i = 0; i < 3; i++) {    
					  if (Radio[i].checked) {
							selected = true;	
						}
						errorGenero.style.visibility = 'hidden';
					}
					if (selected == false) {
						errorGenero.style.visibility = 'visible';
						error = 1;
					}

				// Validar select
					if(pais.value == '') {
						pais.style.background = '#FFFFCC';
						errorPais.style.visibility = 'visible';
						error = 1;
					} else {
						pais.style.background = '#FFF';
						errorPais.style.visibility = 'hidden';
					}


	// Validacion de formulario de contactanos
				// Validar connombre
					if(connombre.value == '' || connombre.value.length > 30) {
						connombre.style.background = '#FFFFCC';
						errorConnombre.style.visibility = 'visible';
						error = 1;
					} else {
						connombre.style.background = '#FFF';
						errorConnombre.style.visibility = 'hidden';
					}
					// Verificar longitud y si contiene numeros
					if (connombre.value < 3 || hasNumbers(connombre.value)) {
						connombre.style.background = '#FFFFCC';
						alert("Ingrese un nombre válido");
						error = 1;
					}

				// Validar concorreo
					if(concorreo.value == '' || concorreo.value.length > 30) {
						concorreo.style.background = '#FFFFCC';
						errorConcorreo.style.visibility = 'visible';
						error = 1;
					} else {
						concorreo.style.background = '#FFF';
						errorConcorreo.style.visibility = 'hidden';
					}
					// Verificar si correo es válido
					if (concorreo.value.indexOf("@") == -1) {
						concorreo.style.background = '#FFFFCC';
						alert("El correo requiere un arroba (@)");
						error = 1;
					} else if (concorreo.value.indexOf("@") == 0) {
						concorreo.style.background = '#FFFFCC';
						alert("Es necesario texto antes del arroba");
						error = 1;
					} else if (concorreo.value.indexOf("@") == (concorreo.value.length) - 1) {
						concorreo.style.background = '#FFFFCC';
						alert("Ese necesario texto después del arroba");
						error = 1;
					} else {
						concorreo.style.background = '#FFF';
					}
					// Verificar estructura
					if (!isEmail(concorreo.value)) {
						concorreo.style.background = '#FFFFCC';
						alert("Correo no válido");
						error = 1;
					}

				// Validar coninfo
					if(coninfo.value == '') {
						coninfo.style.background = '#FFFFCC';
						errorConinfo.style.visibility = 'visible';
						error = 1;
					} else {
						coninfo.style.background = '#FFF';
						errorConinfo.style.visibility = 'hidden';
					}
					// Verificar longitud y si contiene numeros
					if (coninfo.value.length < 3) {
						coninfo.style.background = '#FFFFCC';
						alert("Ingrese más de 2 caracteres :(");
						error = 1;
					}
					if (coninfo.value.length > 100) {
						coninfo.style.background = '#FFFFCC';
						alert("Demasiada información!");
						error = 1;
					}


	// Validacion de formulario de inicio de sesion
				// Validar username
					if(username.value == '') {
						username.style.background = '#FFFFCC';
						errorUsername.style.visibility = 'visible';
						error = 1;
					} else {
						username.style.background = '#FFF';
						errorUsername.style.visibility = 'hidden';
					}
					// Verificar si correo es válido
					if (username.value.indexOf("@") == -1) {
						username.style.background = '#FFFFCC';
						alert("El correo requiere un arroba (@)");
						error = 1;
					} else if (username.value.indexOf("@") == 0) {
						username.style.background = '#FFFFCC';
						alert("Es necesario texto antes del arroba");
						error = 1;
					} else if (username.value.indexOf("@") == (username.value.length) - 1) {
						username.style.background = '#FFFFCC';
						alert("Ese necesario texto después del arroba");
						error = 1;
					} else {
						username.style.background = '#FFF';
					}
					// Verificar estructura
					if (!isEmail(username.value)) {
						username.style.background = '#FFFFCC';
						alert("Correo no válido");
						error = 1;
					}

				// Validar contraseña
					if(password.value == '' || password.value < 3) {
						password.style.background = '#FFFFCC';
						errorPassword.style.visibility = 'visible';
						error = 1;
					} else {
						password.style.background = '#FFF';
						errorPassword.style.visibility = 'hidden';
					}