export const apiConfig = {
	baseURL: "https://api.themoviedb.org/3/",
	api_key: process.env.REACT_APP_API_Key,
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
		"Content-Type": "application/json;charset=utf-8",
	},
}