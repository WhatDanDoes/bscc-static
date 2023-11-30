require('dotenv').config();
module.exports = function() {
  return {
    environment: process.env.NODE_ENV || '',
    url: process.env.NODE_ENV === 'development' ? `dev.${process.env.VIRTUAL_HOST}` : process.env.VIRTUAL_HOST,
    matomo: process.env.MATOMO_URL,
    matomoId: process.env.MATOMO_SITE_ID,
  };
};
