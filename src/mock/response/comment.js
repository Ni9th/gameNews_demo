import Mock, { Random } from 'mockjs'

export const getComment = () => {
  const arr = []
  for (let i = 6; i > 0; i--) {
    const tem = {
      author: Random.cword(2, 5),
      authorImg: Random.image('100x100', '', '头像'),
      postDate: Random.date(),
      postTime: Random.time('HH:mm'),
      content: Random.csentence(4, 30),
      admired: Random.natural(0, 100)
    }
    arr.push(tem)
  }
  return Mock.mock(arr)
}
