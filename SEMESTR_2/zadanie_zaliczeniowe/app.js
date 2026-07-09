const modalHtml = `
    <div id="welcome-modal" class="custom-modal">
        <div class="custom-modal__content">
            <h2>Witaj na Shopstagramie! 🚀</h2>
            <p>Modal - zaliczenie semstr 2</p>
            <button id="close-modal-btn" class="custom-modal__close-btn">Zamknij okno</button>
        </div>
    </div>
`;

document.body.insertAdjacentHTML('afterbegin', modalHtml);

const modal = document.querySelector("#welcome-modal");
const closeModalBtn = document.querySelector("#close-modal-btn");

window.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        if (modal) {
            modal.classList.add("is-visible");
        }
    }, 100);
});

if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", function() {
        modal.classList.remove("is-visible");
        setTimeout(function() {
            modal.style.display = "none";
        }, 400);
    });
}


const loadMoreBtn = document.querySelector(".load-more");
const hiddenPost = document.querySelector(".post.hide");

if (loadMoreBtn && hiddenPost) {
    loadMoreBtn.addEventListener("click", function() {
        // Pokazujemy ukryty post
        hiddenPost.classList.remove("hide");
        hiddenPost.style.display = "block";
        
        // Ukrywamy przycisk
        loadMoreBtn.style.display = "none";
    });
}