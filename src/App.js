import { useState, useEffect } from "react";
import MiniChart from "./MiniChart";

const DEFAULT_STOCKS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];

function App() {
  const [stocks, setStocks] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortKey, setSortKey] = useState("symbol");
  const [sortOrder, setSortOrder] = useState("asc");

  // Reusable fetch function for quote + history
  const fetchSingleStock = async (symbol) => {
    const quoteRes = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`
    );
    const quote = await quoteRes.json();

    if (!quote || quote.c === 0) return null;

    const now = Math.floor(Date.now() / 1000);
    const tenDaysAgo = now - 10 * 24 * 60 * 60;

    const historyRes = await fetch(
      `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${tenDaysAgo}&to=${now}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`
    );
    const historyData = await historyRes.json();

    return {
      symbol,
      price: quote.c,
      changePercent: quote.dp
    };
  };

  // Load default stocks on mount
  useEffect(() => {
    const loadDefaults = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(DEFAULT_STOCKS.map(fetchSingleStock));
        setStocks(results.filter(Boolean));
      } catch {
        setError("Failed to load default stocks");
      } finally {
        setLoading(false);
      }
    };
    loadDefaults();
  }, []);

  // Add new stock from search
  const fetchStock = async () => {
    if (!symbol) return;

    setLoading(true);
    setError("");

    try {
      if (stocks.find((s) => s.symbol === symbol)) {
        setError("Stock already added");
        return;
      }

      const stock = await fetchSingleStock(symbol);

      if (!stock) throw new Error();

      setStocks((prev) => [...prev, stock]);
      setSymbol("");
    } catch {
      setError("Invalid stock symbol");
    } finally {
      setLoading(false);
    }
  };

  // Sorting
  const sortedStocks = [...stocks].sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;

    if (sortKey === "price") return (a.price - b.price) * order;
    if (sortKey === "change") return (a.changePercent - b.changePercent) * order;

    return a.symbol.localeCompare(b.symbol) * order;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">📈 Stock Price Dashboard</h1>

      {/* Search */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g. AAPL)"
          className="border p-2 flex-1 rounded"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchStock();
          }}
        />
        <button
          onClick={fetchStock}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-600"
          }`}
        >
          Add
        </button>
      </div>

      {/* Sorting */}
      <div className="flex gap-2 mb-4">
        <select
          className="border p-2 rounded"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="symbol">Symbol</option>
          <option value="price">Price</option>
          <option value="change">% Change</option>
        </select>

        <button
          className="border px-3 rounded"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "⬆ Asc" : "⬇ Desc"}
        </button>
      </div>

      {/* Loading / Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Table */}
      {stocks.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-left">Price ($)</th>
                <th className="p-3 text-left">% Change</th>
              </tr>
            </thead>
            <tbody>
              {sortedStocks.map((stock) => (
                <tr key={stock.symbol} className="border-t">
                  <td className="p-3 font-medium">{stock.symbol}</td>
                  <td className="p-3">{stock.price.toFixed(2)}</td>
                  <td
                    className={`p-3 font-semibold ${
                      stock.changePercent >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stock.changePercent.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
