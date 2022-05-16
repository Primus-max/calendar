function assertEqusld(actual, expected) {
  console.assert(actual === expected, 'Закралась ошибка, проверьте ваш код')
}

function timeOfZone() {
  const date = new Date()

  let result = date.getTimezoneOffset()
  console.log(result)
}
timeOfZone()

assertEqusld(n('Hello', 'l'), 2)
assertEqusld(n('foo', 'n'), 0)
assertEqusld(n('World', 'r'), 1)
assertEqusld(n('voodoo', 'o'), 4)
assertEqusld(n('ratamahatta', 't'), 3)