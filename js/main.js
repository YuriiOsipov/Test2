// Ищем кнопку

const button = document.querySelector(".button");

// Добавляем обработчик

button.addEventListener("click", showCards);

// Вызываем асинхронную функцию

async function showCards() {
  const container = document.querySelector(".container");

  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await request.json();

    data.forEach((element) => {
      const html = `<article class="card">
               <div class="card__img">
                 <img src="./img/${element.id}.gif" alt="profile-image" />
               </div>
               <div class="card-info">
                 <p class="card__name">Name: ${element.name}</p>
                 <p class="card__username">Username: ${element.username}</p>
                 <p class="card__email">Email: ${element.email}</p>
                 <p class="card__phone">Phone: ${element.phone}</p>
                 <p class="card__website">Website: ${element.website}</p>
               </div>
             </article>`;

      container.insertAdjacentHTML("afterbegin", html);
    });
  } catch (error) {
    console.error(`Ошибка ${error.message}`);
  }
}

console.log("Continue");
