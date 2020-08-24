import Mock, { Random } from 'mockjs'

export const getGameList = () => {
  const arr = []
  for (let i = 40; i > 0; i--) {
    const template = {
      name: Random.ctitle(2, 6),
      score: Random.float(3, 10, 1, 1),
      post: Random.image('100x180', '', '封面'),
      postDate: Random.date('yyyy-MM-dd'),
      stage: [
        Random.pick(['PC', 'PS4', 'NS', 'XBONE']),
        Random.pick(['PC', 'PS4', 'NS', 'XBONE'])
      ],
      played: Random.natural(90, 900),
      Id: Random.id(),
      blockClass: Random.pick(['A类', 'B类', 'C类', 'D类', 'E类']),
      price: Random.natural(50, 500),
      language: Random.pick(['中文', '英文']),
      introduction: Random.cparagraph(50, 70)
    }
    arr.push(template)
  }
  return Mock.mock(arr)
}
