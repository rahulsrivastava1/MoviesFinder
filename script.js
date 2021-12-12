window.onload = function () {
  const btn = document.getElementById("button");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=473ce42b7b92f1fcd1bb5f06b4217fdb&query=`;
    const seriesName = document.getElementById("keyword").value;
    const newUrl = `${url}${seriesName}`;
    xhr.open("GET", newUrl);
    xhr.onreadystatechange = () => {
      if (xhr.status == 200 && xhr.readyState == 4) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        let output = "";
        for (let i = 0; i < response.results.length; i++) {
          const image = `<img style="margin: 10px; border: 2px solid black; padding: 5px; width:200px; height:300px;" src="https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}" >`;
          output += ` ${image} <br /> <br /> <b> <u> ${response.results[i].title} </u> </b> <small> (Released in ${response.results[i].release_date}) </small><br> Popularity: <b>${response.results[i].popularity}</b><br /> <br /> <hr /> <hr />`;
          const container = document.getElementById("join");
          container.innerHTML = output;
        }
      }
    };
    xhr.send();
  });
};
