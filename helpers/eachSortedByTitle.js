module.exports = function (context, options) {
  var ret = ''

  var sortedContext = context.sort(function (a, b) {
    if (a.fields.title < b.fields.title) {
      return -1
    }
    if (a.fields.title > b.fields.title) {
      return 1
    }
    return 0
  })

  for (var i = 0, j = sortedContext.length; i < j; i++) {
    ret = ret + options.fn(sortedContext[i])
  }

  return ret
}
