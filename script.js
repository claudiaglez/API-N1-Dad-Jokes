const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

function generateJoke() {
      const config = {
        headers: {
          Accept: 'application/json',
         }
   }
   fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
     })
}



// USING ASYNC/AWAIT
/*
async function generateJoke() {
  const config = {
    headers: {
      Accept: '',
    },
  }

  const res = await ('', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
*/