import Mock from 'mockjs'
const Random = Mock.Random

export const getImgList = () => {
  const template = [
    {
      newsId: Random.id(),
      Title: Random.ctitle(15, 25),
      newsContent: Random.cparagraph(50, 90),
      postImg: Random.natural(1, 3) === 3 ? [
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面')
      ] : [Random.image('100x200', '#00ff00', '封面')],
      comment: Random.natural(10, 200),
      author: Random.csentence(2, 3),
      good: Random.natural(10, 100)
    }, {
      newsId: Random.id(),
      Title: Random.ctitle(15, 25),
      newsContent: Random.cparagraph(50, 90),
      postImg: Random.natural(1, 3) === 3 ? [
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面')
      ] : [Random.image('100x200', '#00ff00', '封面')],
      comment: Random.natural(10, 200),
      author: Random.csentence(2, 3),
      good: Random.natural(10, 100)
    }, {
      newsId: Random.id(),
      Title: Random.ctitle(15, 25),
      newsContent: Random.cparagraph(50, 90),
      postImg: Random.natural(1, 3) === 3 ? [
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面')
      ] : [Random.image('100x200', '#00ff00', '封面')],
      comment: Random.natural(10, 200),
      author: Random.csentence(2, 3),
      good: Random.natural(10, 100)
    }, {
      newsId: Random.id(),
      Title: Random.ctitle(15, 25),
      newsContent: Random.cparagraph(50, 90),
      postImg: Random.natural(1, 3) === 3 ? [
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面'),
        Random.image('100x200', '#00ff00', '封面')
      ] : [Random.image('100x200', '#00ff00', '封面')],
      comment: Random.natural(10, 200),
      author: Random.csentence(2, 3),
      good: Random.natural(10, 100)
    }
  ]
  return Mock.mock(template)
}
