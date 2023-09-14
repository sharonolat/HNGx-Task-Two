export const convertToUTCDate = (dateString) => {
  // Split the date string into year, month, and day components
  var date = dateString.split('-');
  var year = parseInt(date[0]);
  var month = parseInt(date[1]) - 1; // Months are 0-based in JavaScript
  var day = parseInt(date[2]);

  // Create a UTC date object
  return new Date(Date.UTC(year, month, day));
};
