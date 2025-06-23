import React, { useEffect, useState } from 'react';
import { getUrlAnalytics } from '../api';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnalyticsData = async () => {
      try {
        const data = await getUrlAnalytics();
        setAnalyticsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAnalyticsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="analytics">
      <h2>Analytics Insights</h2>
      <ul>
        {analyticsData.map((item) => (
          <li key={item.id}>
            <p>Shortened URL: {item.shortUrl}</p>
            <p>Clicks: {item.clicks}</p>
            <p>Created At: {new Date(item.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;