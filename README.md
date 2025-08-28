# Data-Scraping-Extension-Tool

A **Chrome Extension** that allows users to scrape text from webpages and export it as a CSV file. Built with **React.js**, **content scripts**, and **Chrome Manifest V3**.

---

## **Features**

- Select elements on a webpage using **CSS selectors**.
- Scrape text data and preview it in the popup.
- Export scraped data as a **CSV file**.
- Hover highlight feature for easier element selection.
- Simple, clean, and intuitive React-based UI.

---

## **Technologies Used**

- **Frontend:** React.js  
- **Chrome APIs:** `scripting`, `downloads`, `activeTab`  
- **Build Tools:** react-scripts, npm  
- **Other:** JavaScript, HTML, CSS

---

## **Installation / How to Load in Chrome**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/data-scraper-extension.git

2. Navigate into the project directory and install dependencies:
   cd data-scraper-extension
   npm install

4. Build the React app:
   npm run build

This will also copy necessary extension files into extension-dist/.

4. Open Chrome and go to chrome://extensions/.

5. Enable Developer Mode (top-right).

6. Click Load unpacked and select the extension-dist/ folder.

7. Pin the extension to the toolbar for easy access.


Usage

1.Open any webpage you want to scrape.
2.Click the Data Scraper Extension icon.
3.Enter a valid CSS selector in the input box.
4.Click Extract to view the scraped text.
5.Click Export CSV to download the data.
