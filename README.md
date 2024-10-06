# Aggressive Nudging Extension

The Agressive Nudging  Extension is a browser add-on that enhances your online shopping and dining experiences by providing timely, relevant offers based on your search queries.

## Features

- **Contextual Relevance:** Automatically detects relevant keywords in your search queries to display offers related to food, dining, and shopping.
- **Personalized Offers:** Filter offers based on location and type (e-commerce or nearby deals) to ensure you receive the most relevant promotions.
- **User-Friendly Interface:** Enjoy a clean and intuitive interface that allows easy navigation and access to offers without disrupting your browsing experience.
- **Customizable Notifications:** Control the frequency and type of notifications to enhance your experience and avoid notification fatigue.

## Installation

1. Clone or download this repository to your local machine.
2. Open your Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded the extension.
5. The extension will now be installed and active in your browser.

## Usage

1. Perform a search on Google for food-related or shopping-related terms.
2. The Aggressive Nudging Extension will automatically display relevant offers in a popup.
3. Use the filters to refine the offers based on your location and preference for e-commerce or nearby deals.
4. Click on any offer to view more details and make a purchase.

## Files

- `manifest.json`: Defines the extension's permissions, content scripts, and background scripts.
- `content.js`: Contains the logic to detect relevant keywords in search queries.
- `background.js`: Manages the background tasks and communication between content scripts and the popup.
- `popup.html`: The HTML structure for the extension's popup.
- `popup.css`: Styles for the extension's popup.
- `popup.js`: Handles the dynamic rendering and filtering of offers in the popup.

### Testing

1. Perform searches on Google with terms related to food or shopping.
2. Verify that the extension's popup displays relevant offers.
3. Test the filters to ensure they correctly refine the displayed offers.


---

Enjoy enhanced shopping and dining experiences with the Smart Nudge Extension! If you have any questions or feedback, feel free to open an issue or reach out.
