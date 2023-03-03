let container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
    container.innerHTML = `<div class="info">
                <span>event.key</span>
                <p>${e.keyCode === 32 ? e.code : e.key}</p>
            </div>

            <div class="info">
                <span>event.keyCode</span>
                <p>${e.keyCode}</p>
            </div>
            <div class="info">
                <span>event.code</span>
                <p>${e.code}</p>
            </div>`;
});
