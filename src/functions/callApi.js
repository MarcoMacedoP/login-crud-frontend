const BASE_URL = "http://localhost:3000/api";

export function callApi(endpoint, options = {}) {
  const accessToken = localStorage.getItem("token");

  const baseOptions = {
    ...options,
    credentials: "include",
    redirect: "follow",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers
    }
  };

  const url = BASE_URL + endpoint;
  return fetch(url, baseOptions)
    .then(response => response.json())
    .then(({data, statusCode, message}) => {
      return {
        data,
        statusCode,
        message
      };
    });
}

export function statusCodeIsValid(statusCode) {
  const UNAUTHTORIZED_ERROR = 401;
  const SERVER_CODE_ERROR = 500;
  const BAD_REQUEST = 400;

  console.log("checking statusCode: ", statusCode);
  if (!statusCode) {
    throw "No sé especifico un código en la respuesta.";
  } else if (typeof statusCode !== "number") {
    throw "Él código de la respuesta no es un error";
  } else {
    switch (statusCode) {
      case SERVER_CODE_ERROR:
        throw "Parece que tenemos un problema interno, intentalo más tarde 🙊";
      case UNAUTHTORIZED_ERROR:
        throw "Parece qué tu sesión ha expirado 😅";
      case BAD_REQUEST:
        throw "Uno de los campos introducidos no es válido  🤐";
      default:
        return true;
    }
  }
}
