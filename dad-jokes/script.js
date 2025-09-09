const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

async function generateJoke() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })

  console.log('response', res)

  const data = await res.json()
  console.log('data', data)

  jokeEl.innerHTML = data.joke
}
