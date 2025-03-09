// Finnhub API Integration
const FINNHUB_API_KEY = 'cgh9mjaad3i80b2uko3gcgh9mjaad3i80b2uko40'; // Your Finnhub API key

// Function to fetch stock data from Finnhub
async function getStockQuote(symbol) {
  try {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
}

// Function to fetch company profile from Finnhub
async function getCompanyProfile(symbol) {
  try {
    const response = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching company profile:', error);
    return null;
  }
}

// Function to display stock data in a given element
function displayStockData(elementId, symbol) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  element.innerHTML = `<div class="loading">Loading ${symbol} data...</div>`;
  
  getStockQuote(symbol)
    .then(quoteData => {
      if (!quoteData) {
        element.innerHTML = `<div class="error">Unable to load ${symbol} data</div>`;
        return;
      }
      
      // Format the stock data
      const priceChange = quoteData.c - quoteData.pc;
      const priceChangePercent = (priceChange / quoteData.pc) * 100;
      const changeClass = priceChange >= 0 ? 'positive' : 'negative';
      
      element.innerHTML = `
        <div class="stock-widget">
          <h3>${symbol}</h3>
          <div class="stock-price">${quoteData.c.toFixed(2)}</div>
          <div class="stock-change ${changeClass}">
            ${priceChange.toFixed(2)} (${priceChangePercent.toFixed(2)}%)
          </div>
        </div>
      `;
    });
}

// Export functions for use in other files
window.finnhub = {
  getStockQuote,
  getCompanyProfile,
  displayStockData
}; 