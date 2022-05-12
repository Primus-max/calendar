function assertEqusld(actual, expected) {
  console.assert(actual === expected, 'Закралась ошибка, проверьте ваш код')
}

function n(word, test) {
  let result = 0

  for (let i of word) {
    if (i === test) {
      result += 1
    }
  }
  return result
  // console.log(word.includes(test))
}


assertEqusld(n('Hello', 'l'), 2)
assertEqusld(n('foo', 'n'), 0)
assertEqusld(n('World', 'r'), 1)
assertEqusld(n('voodoo', 'o'), 4)
assertEqusld(n('ratamahatta', 't'), 3)