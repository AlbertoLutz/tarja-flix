const URL_BASE = window.location.hostname.includes("localhost")
	? "http://localhost:8080"
	: "https://tarja-flix.herokuapp.com/categorias";

export default {URL_BASE};
