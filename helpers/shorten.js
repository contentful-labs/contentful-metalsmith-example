module.exports = function (content) {
  return content.split(' ').slice(0, 50).join(' ') + '...'
}
