// My Scripts


// Data source of students
const url = "https://assets.codepen.io/16425/spring23web3.json";

// Get data
fetch(url)
  .then(response => response.json())
  .then(data => {
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
    data.forEach(student => {

      // template
      const template = `
          <figure class="card" id="${student.Name}">
            <div class="card-inner">
              <img src="${student.Image}" alt="${student.Name}">
              <figcaption>
                <h1>${student.Name}</h1>
                <blockquote>${student.Quote}</blockquote>
                <p>${student.Superpower}</p>
                <p><span>${student.Emoji}</span></p>
              </figcaption>
            </div>
          </figure>
       `;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);

      // change the boxshadow color of each to student.Color by id
      document.getElementById(student.Name).style.boxShadow = `0 0 20px 20px ${student.Color}, 0 0 20px 20px ${student.Color} inset`;

      // change the color of each h1 to student.Color
      document.getElementById(student.Name).querySelector("h1").style.color = student.Color;

    });
  });
