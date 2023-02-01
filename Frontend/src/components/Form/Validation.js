export default function validation(userData) {
  let errors = {};

  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)
  ) {
    errors.username = "El email es inválido";
  }
  if (!userData.username) {
    errors.username = "Este campo es obligatorio";
  }
  if (userData.username.length > 35) {
    errors.username = "Tiene que ser menor a 35 caracteres";
  }

  if (!userData.password.match(/\d/)) {
    errors.password = "Debe tener al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La password tiene que tener entre 6 o 10 caracteres";
  }
  return errors;
}
