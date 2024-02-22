const accors = document.querySelectorAll(".accordion");

accors.forEach(accor => {
    const icon = accor.querySelector(".icon");
    const answer = accor.querySelector(".answer");

    accor.addEventListener("click", function () {
        icon.classList.toggle("active");
        answer.classList.toggle("active");
    })
})