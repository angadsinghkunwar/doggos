    
    //  const DOG_URL = "https://dog.ceo/api/breeds/image/random"
    //  const doggos = document.querySelector(".Doggos");

    //  function addNewDoggo(BREEDS_URL) {
    //    const promise = fetch( DOG_URL);
    //    promise
    //     .then(function(response) {
    //        const processingPromise = response.json();
    //       return processingPromise;
    //      })
    //     .then(function(processedResponse) {
    //       const img = document.createElement("img");
    //       img.src = processedResponse.message;
    //        img.alt = "Cute doggo";
    //        doggos.appendChild(img);
    //      });
    //  }

    //  document.querySelector(".add-doggos").addEventListener("click", addNewDoggo);
    
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
  .then(function(response){
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    //console.log(Objects.keys(data.message));

    

    for(let i = 0; i < breedsArray.length;i++){
      const option = document.createElement('option');
      option.value = breedsArray  [i];
      option.innerText = breedsArray  [i];
      select.appendChild(option);
    }
  })

  select.addEventListener("change", function(event){
   //console.log(event.target.value);
    //console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

    getBreeds(url);
  });
  const img = document.querySelector('.dog-img');

  function getBreeds(url) {
    fetch (url)
    .then(function(response) {
      return response.json ();
    })
    .then(function(data){
      img.src = data.message;
    })
  }