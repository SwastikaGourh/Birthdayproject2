const giftBtn = document.getElementById('gift-btn');
const gift = document.getElementById('gift');

giftBtn.addEventListener('click', () => {
 gift.innerHTML = '<img src="Birthday card.JPG" alt="Gift">';
});