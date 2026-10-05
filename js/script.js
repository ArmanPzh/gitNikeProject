const shopBtn = document.getElementById("shopBtn");
const secondShopBtn = document.getElementById("secondShopBtn");
const watchBtn = document.getElementById("watchBtn");

shopBtn.addEventListener("click", () => {
    document.querySelectorAll("section")[1].scrollIntoView({ behavior: "smooth" });
});

secondShopBtn.addEventListener("click", () => {
    document.querySelectorAll("section")[2].scrollIntoView({ behavior: "smooth" });
});

watchBtn.addEventListener("click", () => {
    alert("Watch");
});

document.querySelectorAll(".shop-product").forEach(button => {
    button.addEventListener("click", () => alert("Shop"));
});

document.querySelectorAll(".explore-product").forEach(button => {
    button.addEventListener("click", () => alert("Explore"));
});

document.getElementById("prevBtn").addEventListener("click", () => {
    window.scrollBy({ left: -500, behavior: "smooth" });
});

document.getElementById("nextBtn").addEventListener("click", () => {
    window.scrollBy({ left: 500, behavior: "smooth" });
});

document.querySelectorAll(".team-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert(button.dataset.team);
    });
});

document.querySelectorAll(".more-soccer-card").forEach(card => {
    card.addEventListener("click", () => {
        alert(card.dataset.category);
    });
});

document.getElementById("countryBtn").addEventListener("click", () => {
    alert("Country: Canada");
});
