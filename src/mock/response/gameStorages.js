import Mock, { Random } from 'mockjs'

export const getGameStorages = () => {
  const block = Random.natural(3, 5)
  const arr = []
  for (let i = block; i > 0; i--) {
    const temArr = []
    for (let j = Random.natural(2, 8); j > 0; j--) {
      temArr.push(Random.cword(5, 10))
    }
    const tem = {
      blockName: Random.cword(3, 6),
      storageList: temArr
    }
    arr.push(tem)
  }
  return Mock.mock(arr)
}
