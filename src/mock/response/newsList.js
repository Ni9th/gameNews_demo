import Mock, { Random } from 'mockjs'

export const getMoreNews = () => {
  const arr = []
  for (let i = 5; i > 0; i--) {
    const template = {
      newsId: Random.id(),
      title: Random.ctitle(23, 24),
      newsContent: Random.cparagraph(50, 90),
      postImg: Random.boolean(1) ? [
        Random.image('200x100', '#00ff00', '封面'),
        Random.image('200x100', '#00ff00', '封面'),
        Random.image('200x100', '#00ff00', '封面')
      ] : [Random.image('200x100', '#00ff00', '封面')],
      comment: Random.natural(10, 200),
      author: Random.cword(2, 5),
      authorImg: Random.image('100x100', '', '头像'),
      good: Random.natural(10, 100),
      postDate: Random.date('yyyy-MM-dd'),
      postTime: Random.time('hh:mm'),
      lastDiscussDate: Random.date('yyyy-MM-dd'),
      lastDiscussTime: Random.time('hh:mm'),
      block: Random.cword(4, 6),
      admired: Random.natural(0, 100)
    }
    arr.push(template)
  }
  return Mock.mock(arr)
}
