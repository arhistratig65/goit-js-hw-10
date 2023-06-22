

// api
const urlHost = `https://api.thecatapi.com/v1`;
const apiKey = 'live_RYeRNGczSYYwxluYqgiYL5bURXhWnBdkUUgsHhycoFAcnz9NPWS8HbcRH9uE8fYB'; 

export function fetchBreeds() {
  return fetch(`${urlHost}/breeds`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || response.status)}
                return response.json()
            })
};

 export function fetchCatByBreed(id) {
    return fetch(`${urlHost}/images/search?breed_ids=${id}&api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || response.status)}
                return response.json()
            })
 }
