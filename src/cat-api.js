export { fetchBreeds };
export { fetchCatByBreed };
import { selectEl } from './index'
import { loaderEl } from './index'
import { errorEl } from './index';

function fetchBreeds() {
  selectEl.classList.add('none')
  loaderEl.classList.add('block')
  
    const apiKey = 'live_RYeRNGczSYYwxluYqgiYL5bURXhWnBdkUUgsHhycoFAcnz9NPWS8HbcRH9uE8fYB'
    const baseUrl = 'https://api.thecatapi.com/v1/breeds'
   return fetch(`${baseUrl}?api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
     
      throw new Error(response.status);
    }
    return response.json();
  })
}
function fetchCatByBreed(breedId) {
  errorEl.classList.remove('block')
  selectEl.classList.add('none')
  loaderEl.classList.add('block')
  
  const apiKey = 'live_RYeRNGczSYYwxluYqgiYL5bURXhWnBdkUUgsHhycoFAcnz9NPWS8HbcRH9uE8fYB'
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
       
      throw new Error(response.status);
      }
      return response.json()
  })
}

    
