document.querySelector('button').addEventListener('click', getNasaApod)




function getNasaApod() {
    const choice = document.querySelector('input').value

    const url = `https://api.nasa.gov/planetary/apod?api_key=RJabxGj50u3nnbQrDd1iMkU57ah22rum1L1ycqYJ&thumbs=true&date=${choice}`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(_data => {
            data = _data;
            console.log(_data);
            document.querySelector('h1').innerText = data.title;
            document.querySelector('.date').innerText = data.date;
            document.querySelector('.explain').innerText = data.explanation;
            if (data.media_type === "image") {
                document.querySelector(".image").src = data.url;
            } else if (data.media_type === "video") {
                document.querySelector(".video").setAttribute("src", data.url);

            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

getNasaApod()