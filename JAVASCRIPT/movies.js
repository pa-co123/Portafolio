const movies = [
    {
        plot: 'A woman, with the aid of her police officer sweetheart, endeavors to uncover the prostitution ring that has kidnapped her sister, and the philanthropist who secretly runs it.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzk0YWQzMGYtYTM5MC00NjM2LWE5YzYtMjgyNDVhZDg1N2YzXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg',
        title: 'Traffic in Souls'
      },
      {
        plot: "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take ...",
        poster: 'https://m.media-amazon.com/images/M/MV5BMzgxODk1Mzk2Ml5BMl5BanBnXkFtZTgwMDg0NzkwMjE@._V1_SY1000_SX677_AL_.jpg',
        title: 'The Perils of Pauline'
      },
      {
        plot: 'A tipsy doctor encounters his patient sleepwalking on a building ledge, high above the street.',
        poster: 'https://m.media-amazon.com/images/M/MV5BODliMjc3ODctYjhlOC00MDM5LTgzNmUtMjQ1MmViNDQ0NzlhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SY1000_SX677_AL_.jpg',
        title: 'High and Dizzy'
      },
      {
        plot: 'A romantic rivalry among members of a secret society becomes even tenser when one of the men is assigned to carry out an assassination.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTkwOTUyNDk1N15BMl5BanBnXkFtZTYwODI3MzI3._V1_SY1000_SX677_AL_.jpg',
        title: 'The Ace of Hearts'
      },
      {
        plot: 'The simple-minded son of a rich financier must find his own way in the world.',
        poster: 'https://m.media-amazon.com/images/M/MV5BZDNiODA3NzQtNTBmZS00NTM3LWJlOGMtMDg2NzFiNDU2M2M3XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
        title: 'The Saphead'
      },
      {
        plot: 'Christ takes on the form of a pacifist count to end a senseless war.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAwNTIxMjE5N15BMl5BanBnXkFtZTgwODc1Mjg1MzE@._V1_SY1000_SX677_AL_.jpg',
        title: 'Civilization'
      },
      {
        plot: 'A con artist masquerades a Russian nobility and attempts to seduce the wife of an American diplomat.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTk2NDkxMTY1Nl5BMl5BanBnXkFtZTgwNDI1NDU5MTE@._V1_SY1000_SX677_AL_.jpg',
        title: 'Foolish Wives'
      },
      {
        plot: 'The cartoonist, Winsor McCay, brings the Dinosaurus back to life in the figure of his latest creation, Gertie the Dinosaur.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTQxNzI4ODQ3NF5BMl5BanBnXkFtZTgwNzY5NzMwMjE@._V1_SY1000_SX677_AL_.jpg',
        title: 'Gertie the Dinosaur'
      },
      {
        plot: 'Salome, the daughter of Herodias, seduces her step-father/uncle Herod, governor of Judea, with a salacious dance. In return, he promises her the head of the prophet John the Baptist.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA0MTY4MzI2OV5BMl5BanBnXkFtZTgwNTMyODg5MTE@._V1_SY1000_SX677_AL_.jpg',
        title: 'Salomè'
      },
      {
        plot: 'Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjNlMThmNzItMTZlMS00YzJkLTk1MzktYzIyMzllOGFmZmRlXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg',
        title: 'The Blue Bird'
      },
      {
        plot: 'A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg',
        title: 'The Great Train Robbery'
      },
      {
        plot: 'Cartoon figures announce, via comic strip balloons, that they will move - and move they do, in a wildly exaggerated style.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzg2NjNhNTctMjUxMi00ZWU4LWI3ZjYtNTI0NTQxNThjZTk2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SY1000_SX677_AL_.jpg',
        title: 'Winsor McCay, the Famous Cartoonist of the N.Y. Herald and His Moving Comics'
      },
      {
        plot: 'Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjE3MjAyNzM5NV5BMl5BanBnXkFtZTgwMjA5OTg5NjE@._V1_SY1000_SX677_AL_.jpg',
        title: 'In the Land of the Head Hunters'
      },
      {
        plot: 'At 10 years old, Owens becomes a ragged orphan when his sainted mother dies. The Conways, who are next door neighbors, take Owen in, but the constant drinking by Jim soon puts Owen on the ...',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDkxZGU4NmMtODJlNy00YzA2LTg4ZGMtNGFlNzAyNzcxOTM1XkEyXkFqcGdeQXVyOTM3MjcyMjI@._V1_SY1000_SX677_AL_.jpg',
        title: 'Regeneration'
      },
      {
        plot: 'A young man, unaccustomed to children, must accompany a young girl on a train trip.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjgzYzY1NjEtYWQxZS00ZjA4LWJlYmQtYzRjNTg3NjUwNDRlXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
        title: 'Now or Never'
      },
      {
        plot: 'An extended family split up in France and Germany find themselves on opposing sides of the battlefield during World War I.',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTU1ODQyYTctODhkNy00YWRmLWE2YzYtMTQ5ZjA3OTNiN2QyXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg',
        title: 'The Four Horsemen of the Apocalypse'
      },
      {
        plot: 'A penniless young man tries to save an heiress from kidnappers and help her secure her inheritance.',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzE1OWRlNDgtMTllNi00NTZiLWIyNTktYTk0MDY1ZWUwYTc5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
        title: 'From Hand to Mouth'
      },
      {
        plot: 'Wlliam deMille produced and directed Miss Lulu Bett, a film of extraordinary conviction and insight. It was then often the custom for unmarried women to lodge with family; thus we discover ...',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTY5MTY0MzY0Ml5BMl5BanBnXkFtZTgwNjE4NDAxMjE@._V1_SY1000_SX677_AL_.jpg',
        title: 'Miss Lulu Bett'
      },
      {
        plot: 'When three thuggish men are responsible for the death of his father and the crippling of his brother, young David must choose between supporting his family or risking his life and exacting vengeance.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjIwMzA3MDAyNl5BMl5BanBnXkFtZTgwNzMyNTE1MjE@._V1_SY1000_SX677_AL_.jpg',
        title: "Tol'able David"
      },
      {
        plot: 'An irresponsible young millionaire changes his tune when he falls for the daughter of a downtown minister.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTcxMTEwMTIzNl5BMl5BanBnXkFtZTgwMzYzODYwMjE@._V1_SY1000_SX677_AL_.jpg',
        title: "For Heaven's Sake"
      },
      {
        plot: 'Ambientada en un futuro distópico, esta película dirigida por Ridley Scott presenta una ciudad de Los Ángeles sumida en la oscuridad y la lluvia constante.',
        poster: 'https://pics.filmaffinity.com/Blade_Runner-351607743-mmed.jpg',
        title: "Blade Runner 1982"
      }
]
const contenedor=document.getElementById("contenedor");

var salida = "";


for(dato of movies){
    salida = salida + `
    <div class="col">
        <div class="card">
        <img src="${dato.poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${dato.title}</h5>
                <p class="card-text">${dato.plot}</p>
            </div>
        </div>
  </div>
    `;
}

contenedor.innerHTML=salida;