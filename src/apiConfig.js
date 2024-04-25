const API_Key = "feb22f9cb31d84181a8413515b4d955d"

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWIyMmY5Y2IzMWQ4NDE4MWE4NDEzNTE1YjRkOTU1ZCIsInN1YiI6IjY2MmFiZDI5NzY0ODQxMDExYjJiZWRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s84csaS6bOM5jaFR_fZY-v2sQay_dLsiO5iPVb0n3t4"

export const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
}
