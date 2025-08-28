/* global chrome */

import React, { useState } from "react";
import "../App.css";

function Popup() {
  const [selector, setSelector] = useState("");
  const [data, setData] = useState([]);

  // Extracting text using CSS selector
  const handleExtract = () => {
    if (!selector.trim()) return alert("Enter a valid CSS selector");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          func: (sel) => {
            return [...document.querySelectorAll(sel)].map(el => el.innerText.trim());
          },
          args: [selector],
        },
        (results) => {
          if (results && results[0]) {
            setData(results[0].result);
          }
        }
      );
    });
  };

  // Exporting scraped data as CSV
  const exportCSV = () => {
    if (!data.length) return;

    const csvContent = "data:text/csv;charset=utf-8," + data.map(d => `"${d}"`).join("\n");
    const blob = new Blob([decodeURIComponent(csvContent)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
      url: url,
      filename: "scraped_data.csv"
    });
  };

  return (
    <div className="popup">
      <h2>📊 Data Scraper</h2>
      <input
        type="text"
        value={selector}
        onChange={(e) => setSelector(e.target.value)}
        placeholder="Enter CSS selector (e.g. p, h1, .class)"
      />
      <button onClick={handleExtract}>Extract</button>
      <button onClick={exportCSV} disabled={!data.length}>Export CSV</button>

      {data.length > 0 && (
        <ul>
          {data.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Popup;
