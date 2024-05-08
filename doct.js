async function fetchurl() {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';

    try {
        let input = document.getElementById('inp');
        let button = document.querySelector('#btn');

        let def = document.querySelector('.def');

        button.addEventListener("click", async () => {
            try {
                let inpVal = input.value;
                let resp = await fetch(url + inpVal, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '67d9b4011emshe451b567bf5f60ep124c93jsnb5d262c7267c',
                        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
                    }
                });
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await resp.json();
                wordheading.innerHTML = data.word;

                // Splitting the definition into an array of points
                if (data.definition == '') {
                    def.innerHTML='defenation not found';
                } else {
                    let definitionPoints = data.definition.split('\n');

                    // Joining the points with line breaks
                    def.innerHTML = definitionPoints.join('<br>');
                }

            } catch (error) {
                console.error(error);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

fetchurl();




