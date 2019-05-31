let isFoundArray = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

for (let i = 1; i < 15; i++) {
  let guitar = document.getElementById(i);
  guitar.addEventListener("click", () => {
    if (guitar.id === "1") guitar.classList.add("action-guitar--big");
    if (guitar.id === "4") {
      guitar.classList.add("action-guitar");
      guitar.classList.add("action-guitar--bas");
    } else guitar.classList.add("action-guitar");

    isFoundArray[parseInt(guitar.id - 1)] = true;
    if (!IsAnyNotFound()) {
      document.getElementById("win-screen").classList.remove("display-none");
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    }
  });
}

function IsAnyNotFound() {
  let isAnyNotFound = false;

  isFoundArray.forEach(isFound => {
    if (!isFound) isAnyNotFound = true;
  });

  return isAnyNotFound;
}
