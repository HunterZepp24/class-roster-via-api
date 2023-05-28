// My Scripts


// Data source of students
const url = "https://assets.codepen.io/16425/spring23web3.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
    console.log(data);
    console.log(data[5]);
    console.log(data[5].Name);
    console.log(data[5].Image);
    console.log(data[5].Emoji);
    console.log(data[5].Quote);
    console.log(data[5].Superpower);
    console.log(data[5].Color);

    // get container for data
    const roster = document.querySelector(".roster");

    // loop through data
    data.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption>${student.Name}</figcaption>
            <p>${student.Emoji}</p>
            <img src="${student.Image}" alt="${student.Name}">
          </figure>
       `;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);
    });
  });