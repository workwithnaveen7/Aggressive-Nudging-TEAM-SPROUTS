// content.js

// Function to check for keywords and display popup
function checkForKeywords() {
  const foodieKeywords = ['food', 'restaurant', 'meal', 'recipe', 'dining', 'snack'];
  const productKeywords = ['product', 'buy', 'shop', 'item', 'ecommerce', 'purchase'];
  const query = new URLSearchParams(window.location.search).get('q');

  if (query) {
      const queryLower = query.toLowerCase();
      if (foodieKeywords.some(keyword => queryLower.includes(keyword))) {
          injectPopup('foodie');
      } else if (productKeywords.some(keyword => queryLower.includes(keyword))) {
          injectPopup('products');
      }
  }
}

// Function to inject popup into the page
function injectPopup(type) {
  const popup = document.createElement('div');
  popup.id = 'nudge-popup';
  popup.style.position = 'fixed';
  popup.style.top = '10px';
  popup.style.right = '10px';
  popup.style.zIndex = '10000';
  popup.style.backgroundColor = 'white';
  popup.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  popup.style.padding = '10px';
  popup.style.borderRadius = '5px';
  popup.innerHTML = `
      <div class="header">
          <h1>Trending Offers</h1>
          <button id="close-button" style="float:right;">&times;</button>
      </div>
      <div id="${type}">
          <h2>${type === 'foodie' ? 'Foodie Offers' : 'Online Products'}</h2>
          <ul class="offer-list"></ul>
      </div>
  `;

  document.body.appendChild(popup);

  // Call appropriate rendering function based on type
  if (type === 'foodie') {
      renderFoodieOffers(getFoodieOffers());
  } else {
      renderProductOffers(getProductOffers());
  }

  // Add event listener to close the popup
  document.getElementById('close-button').addEventListener('click', function() {
      document.body.removeChild(popup);
  });
}

// Example data fetching functions
function getFoodieOffers() {
  return [
      { title: "50% off on Pizza Hut Orders", url: "https://www.pizzahut.com/deals", type: "ecommerce" },
      { title: "20% off on UberEats Orders", url: "https://www.ubereats.com/offers", type: "ecommerce" },
      { title: "10% off on Local Restaurants via GrubHub", url: "https://www.grubhub.com/deals", type: "nearby" },
      { title: "15% discount at McDonald's", url: "https://www.mcdonalds.com/deals", type: "nearby" }
  ];
}

function getProductOffers() {
  return [
      { title: "30% off on Electronics at Best Buy", url: "https://www.bestbuy.com/deals", type: "ecommerce" },
      { title: "Up to 50% off on Clothing at Amazon", url: "https://www.amazon.com/fashion-sales", type: "ecommerce" },
      { title: "Free shipping on orders over $25 at Walmart", url: "https://www.walmart.com/cp/free-shipping", type: "nearby" },
      { title: "15% off Home Appliances at Target", url: "https://www.target.com/deals", type: "nearby" }
  ];
}

// Functions to render offers
function renderFoodieOffers(offers) {
  const foodieList = document.querySelector('#foodie .offer-list');
  foodieList.innerHTML = offers.map(offer => `<li><a href="${offer.url}" target="_blank">${offer.title}</a></li>`).join('');
}

function renderProductOffers(offers) {
  const productsList = document.querySelector('#products .offer-list');
  productsList.innerHTML = offers.map(offer => `<li><a href="${offer.url}" target="_blank">${offer.title}</a></li>`).join('');
}

// Execute the function on script load
checkForKeywords();
