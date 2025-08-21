/**
 * Format a number as currency (₹ in Indian style)
 * @param {number} amount - The amount to format
 * @param {string} locale - The locale to use (default: 'en-IN')
 * @param {string} currency - The currency to use (default: 'INR')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, locale = 'en-IN', currency = 'INR') => {
  if (isNaN(amount)) return '₹0.00';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Format a date string to a more readable format
 * @param {string} dateString - ISO date string
 * @param {string} format - Format to use (default: 'medium')
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString, format = 'medium') => {
  const date = new Date(dateString);
  if (isNaN(date)) return 'Invalid Date';

  const options = {
    short: { month: 'numeric', day: 'numeric', year: '2-digit' },
    medium: { month: 'short', day: 'numeric', year: 'numeric' },
    long: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
  };

  return date.toLocaleDateString('en-IN', options[format] || options.medium);
};

/**
 * Get a relative time description (e.g., "2 days ago")
 * @param {string} dateString - ISO date string
 * @returns {string} Relative time description
 */
export const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) return 'Invalid Date';

  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  }
  if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  }
  const years = Math.floor(diffInDays / 365);
  return `${years} ${years === 1 ? 'year' : 'years'} ago`;
};
