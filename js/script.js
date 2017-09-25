	// var div = document.createElement("div");
	// var attr = document.createAttribute("class");
	// attr.value = "test-class";
	// div.setAttributeNode(attr);

	// var div = document.querySelector("#test");
	// var msg = showMessage("success","Esta funcionando!");
	// div.innerHTML = msg;

	// Accesos del usuario TopSecret
		var user = {
			"username" : "admin@admin.com",
			"password" : "123456"
		}

	// Válido minimo del campo de fecha de nacimiento
		var date = document.querySelector("#nacimiento");
		if (date) {
			date.max = todayIs();
		}

	// Llenado de paises en el Select
		var select = document.querySelector("#pais");
		if (select) {
			var country_list = [
				"Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
				];
		    country_list.forEach(function(country){
		    	var option = document.createElement("option");
		    	var optionAttr = document.createAttribute("value");
		    	var optionText = document.createTextNode(country);
		    	optionAttr.value = country;
		    	option.setAttributeNode(optionAttr);
		    	option.appendChild(optionText);
		    	select.appendChild(option);
		    });
		}

	// Mensajes de respuesta y exito de submit
		var mensajes = document.querySelector("#mensajes");
		if ($_GET("form")) {
			window.addEventListener("load", function(){
				mensajes.innerHTML = showMessage("success", "Datos enviados exitosamente!");
				msgclose.focus();
			});
		}
		var conmensajes = document.querySelector("#conmensajes");
		if ($_GET("contactanos")) {
			window.addEventListener("load", function(){
				conmensajes.innerHTML = showMessage("success", "Datos enviados exitosamente!");
				msgclose.focus();
			});
		}
		if ($_GET("secret")) {
			window.addEventListener("load", function(){

			});
		}

	// Validacion de formulario de registro
		if(document.querySelector("#registro")) {
			document.registro.addEventListener("submit", function(event){
				var error = 0;

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

				// Verifica si hay errores
				if (error != 0) {
					event.preventDefault();
					mensajes.innerHTML = showMessage("warning", "Por favor, verifique sus datos");
					msgclose.focus();
				}

			});
		}

	// Validacion de formulario de contactanos
		if(document.querySelector("#contactanos")) {
			document.contactanos.addEventListener("submit", function(event){
				var error = 0;

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

				// Validar correo
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

				// Verifica si hay errores
					if (error != 0) {
						event.preventDefault();
						conmensajes.innerHTML = showMessage("warning", "Por favor, verifique sus datos");
						msgclose.focus();
					}

			});
		}

	// Validacion de formulario de inicio de sesion
		if(document.querySelector("#secret")) {
			document.secret.addEventListener("submit", function(event){
				var error = 0;

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

				// Verifica si hay errores
					if (error != 0) {
						event.preventDefault();
						conmensajes.innerHTML = showMessage("warning", "Por favor, verifique sus datos");
						msgclose.focus();
					} else {
						if (username.value == user.username && password.value == user.password) {
							event.preventDefault();
							if (confirm("Estás seguro? ENTRA BAJO TU PROPIO RIESGO")) {
								window.location = 'https://www.youtube.com/watch?v=Lmw4lzjEqD8';
							} else {
								conmensajes.innerHTML = showMessage("danger", "such a pussy");
								msgclose.focus();
							}
						} else {
							event.preventDefault();
							conmensajes.innerHTML = showMessage("info", "Usuario o Contraseña incorrecta.");
							username.style.background = '#FFFFCC';
							password.style.background = '#FFFFCC';
							msgclose.focus();
						}
					}

			});
		}

	function hasNumbers(param){
	  	return param.match(/\d+/g);
	}

	function isEmail(param){
		return param.match(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g);
	}

	function todayIs(){
		var fullDate = new Date();
		var month = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) :(fullDate.getMonth()+1);
		return fullDate.getFullYear() + "-" + ("0" + month).slice(-2) + "-" + fullDate.getDate();
	}

	function $_GET(param) {
	    var vars = {};
	    window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(m, key, value) {
	        vars[key] = value !== undefined ? value : '';
	    });

	    if ( param ) {
	        return vars[param] ? vars[param] : null;    
	    }
	    return vars;
	}


	function showMessage(type, msg){
		switch(type) {
		    case "success":
		        return "<div class='alert alert-success'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>"+msg+"</strong> \
						</div>";
		        break;
		    case "info":
		        return "<div class='alert alert-info'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>Alerta! </strong>"+msg+
						"</div>";
		        break;
		    case "warning":
		        return "<div class='alert alert-warning'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>Alerta! </strong>"+msg+
						"</div>";
		        break;
		    case "danger":
		        return "<div class='alert alert-danger'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>Alerta! </strong>"+msg+
						"</div>";
		        break;
		    default:
		        return "<b>BAD CALLING</b>";
		        break;
		}
	}