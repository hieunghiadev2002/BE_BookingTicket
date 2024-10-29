function getPrefixBySoCho(soCho) {
  switch (soCho) {
    case 8:
      return 'LMS-';
    case 12:
      return 'GN-';
    case 10:
      return 'XT-';
    default:
      return '';
  }
}
module.exports = { getPrefixBySoCho };
