const getData = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((rawData) => rawData.json())
    .then((data) => {
      showData(data.data);
    });
};
const btnClick = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((catchData) => catchData.json())
    .then((show) => {
      showLevelData(show.data);
    });
};
const showLevelData = (data) => {
  console.log(data);
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  data.forEach((element) => {
    const addLevelData = document.createElement("div");
    addLevelData.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm">
                <div class="card-body">
                  <div class="flex flex-col items-center gap-6">
                    <h2 class="card-title text-4xl font-bold">${element.word}</h2>
                    <p class="text-xl font-medium">Meaning / Pronounciation</p>
                    <span class="font-semibold text-4xl">${element.meaning}</span>
                  </div>
                  <div class="card-actions justify-between">
                    <span class="bg-blue-100 p-2 rounded-lg">
                      <i class="fa-solid fa-circle-info"></i
                    ></span>
                    <span class="bg-blue-100 p-2 rounded-lg"
                      ><i class="fa-solid fa-volume-high"></i
                    ></span>
                  </div>
                </div>
              </div>
    `;
    levelContainer.append(addLevelData);
  });
};
const showData = (data) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  data.forEach((item) => {
    const addLesson = document.createElement("div");
    addLesson.innerHTML = `
        <button onClick="btnClick(${item.level_no})" class="ring rounded-lg p-2 flex items-center space-x-2 btn btn-soft btn-primary" type="button" >
            <img src="./assets/fa-book-open.png">
            <span>Level - ${item.level_no}</span>
        </button>
        `;
    lessonContainer.append(addLesson);
  });
};
getData();
