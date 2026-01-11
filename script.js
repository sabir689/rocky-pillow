// Change main image when selecting color
const colorButtons = document.querySelectorAll('.color');
const mainImage = document.getElementById('main-image');

colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    mainImage.src = btn.getAttribute('data-image');
  });
});

// Buy Now button
const buyNow = document.getElementById('buy-now');
buyNow.addEventListener('click', () => {
  const color = [...colorButtons].find(c=>c.getAttribute('data-image')===mainImage.src).title;
  const size = document.getElementById('size-selector').value;
  const quantity = document.getElementById('quantity').value;
  alert(`Buying ${quantity} ${color} pillow(s), Size: ${size}`);
});

// Add to Cart button
const addCart = document.getElementById('add-cart');
addCart.addEventListener('click', () => {
  const color = [...colorButtons].find(c=>c.getAttribute('data-image')===mainImage.src).title;
  const size = document.getElementById('size-selector').value;
  const quantity = document.getElementById('quantity').value;
  alert(`Added ${quantity} ${color} pillow(s), Size: ${size} to cart`);
});
