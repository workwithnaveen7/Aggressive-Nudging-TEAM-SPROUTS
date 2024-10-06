// popup.js

document.addEventListener('DOMContentLoaded', function() {
    const filterOptions = document.getElementById('filter-options');
    const locationOptions = document.getElementById('location-options');

    // Fetch and render initial offers
    const originalFoodieOffers = getFoodieOffers(true);
    const originalProductOffers = getProductOffers(true);
    renderFoodieOffers(originalFoodieOffers);
    renderProductOffers(originalProductOffers);

    // Add event listeners for filters
    filterOptions.addEventListener('change', function() {
        const selectedFilter = this.value;
        renderFoodieOffers(originalFoodieOffers, selectedFilter);
        renderProductOffers(originalProductOffers, selectedFilter);
    });

    locationOptions.addEventListener('change', function() {
        const selectedLocation = this.value;
        renderNearbyOffers(selectedLocation);
    });
});

// Example data fetching functions
function getFoodieOffers(original = false) {
    if (original) {
        return [
            { title: "50% off on Pizza Hut Orders", url: "https://www.pizzahut.com/deals", type: "ecommerce" },
            { title: "20% off on UberEats Orders", url: "https://www.ubereats.com/offers", type: "ecommerce" },
            { title: "10% off on Local Restaurants via GrubHub", url: "https://www.grubhub.com/deals", type: "nearby" },
            { title: "15% discount at McDonald's", url: "https://www.mcdonalds.com/deals", type: "nearby" }
        ];
    }
    return foodieOffers.sort(() => 0.5 - Math.random()).slice(0, 4);
}

function getProductOffers(original = false) {
    if (original) {
        return [
            { title: "30% off on Electronics at Best Buy", url: "https://www.bestbuy.com/deals", type: "ecommerce" },
            { title: "Up to 50% off on Clothing at Amazon", url: "https://www.amazon.com/fashion-sales", type: "ecommerce" },
            { title: "Free shipping on orders over $25 at Walmart", url: "https://www.walmart.com/cp/free-shipping", type: "nearby" },
            { title: "15% off Home Appliances at Target", url: "https://www.target.com/deals", type: "nearby" }
        ];
    }
    return productOffers.sort(() => 0.5 - Math.random()).slice(0, 4);
}

function renderFoodieOffers(offers, filter = 'all') {
    const filteredOffers = filter === 'all' ? offers : offers.filter(offer => offer.type === filter);
    document.querySelector('#foodie .offer-list').innerHTML = filteredOffers.map(offer => `<li><a href="${offer.url}" target="_blank">${offer.title}</a></li>`).join('');
}

function renderProductOffers(offers, filter = 'all') {
    const filteredOffers = filter === 'all' ? offers : offers.filter(offer => offer.type === filter);
    document.querySelector('#products .offer-list').innerHTML = filteredOffers.map(offer => `<li><a href="${offer.url}" target="_blank">${offer.title}</a></li>`).join('');
}

function renderNearbyOffers(location) {
    const nearbyOffers = getNearbyOffers(location);
    document.querySelector('#products .offer-list').innerHTML = nearbyOffers.map(offer => `<li><a href="${offer.url}" target="_blank">${offer.title}</a></li>`).join('');
}

function getNearbyOffers(location) {
    const locationOffers = {
        thiruvananthapuram: [
            { title: "10% off at Mall of Travancore", url: "https://www.malloftravancore.com" },
            { title: "Buy 1 Get 1 Free at Zam Zam", url: "https://www.zamzam.com" }
        ],
        kochi: [
            { title: "30% off at Lulu Mall", url: "https://www.lulumall.in" },
            { title: "20% off at Grand Hyatt", url: "https://www.hyatt.com" }
        ],
        kozhikode: [
            { title: "15% off at Focus Mall", url: "https://www.focusmall.com" },
            { title: "Special offers at Paragon Restaurant", url: "https://www.paragonrestaurant.com" }
        ],
        thrissur: [
            { title: "10% off at Sobha City Mall", url: "https://www.sobhacity.com" },
            { title: "Discounts at C'sons Hypermart", url: "https://www.csonshypermart.com" }
        ],
        kollam: [
            { title: "Offers at RP Mall", url: "https://www.rpmallkollam.com" },
            { title: "Special Discounts at Meenakshi Cinemas", url: "https://www.meenakshicinemas.com" }
        ]
    };

    return locationOffers[location] || [];
}
