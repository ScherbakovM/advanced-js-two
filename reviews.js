const productSelect = document.getElementById("product-select");
const reviewInput = document.getElementById("review-input");
const submitButton = document.getElementById("submit-button");
const reviewsList = document.getElementById("reviews-list");

function addReview() {
  const product = productSelect.value;
  const review = reviewInput.value;
  if (review.length < 10 || review.length > 500) {
    alert("Длина отзыва должна быть от 10 до 500 символов");
    return
  }
  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");
  reviewDiv.innerHTML = `
    <h3>${product}</h3>
    <p>${review}</p>
  `;
  reviewsList.appendChild(reviewDiv);
  reviewInput.value = "";
}

submitButton.addEventListener("click", function () {
  addReview();
});