fetch("https://api.api-ninjas.com/v1/chucknorris?")
        .then(response => {
            response.json()
   }).then(json=>JSON.stringify(json));