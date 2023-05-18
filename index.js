
const axios = require('axios');

const bringCharacters = async () => {

    return await axios.get("https://rickandmortyapi.com/api/character/?page=6");

}


bringCharacters()
    .then(
        res => {
            res.data.results.map(
                (personaje, indice) => {
                    if(indice % 2 === 0 && personaje.status == 'Dead'){
                        console.log({
                            "Name" : personaje.name,
                            "Status": personaje.status
                        })
                    }
                }
            )
        }
    )
    .catch(
        error => console.log(error)
    );

    console.log("Voy detrás o voy delante??? ");