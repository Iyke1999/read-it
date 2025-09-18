import React from 'react';

export default function ErrorBanner({ message, onRetry }) {
  return (
    <div className="error-banner">
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
}
