import Mock, { Random } from 'mockjs'
// import
export const getUserInfo = (options) => {
  const template = {
    userName: 'Ninth',
    headImg: Random.image('100x100', '', '头像'),
    focus: Random.natural(0, 500),
    fans: Random.natural(0, 500),
    collection: Random.natural(0, 100),
    history: Random.natural(0, 500),
    comment: [
      {
        content: Random.csentence(4, 15),
        commentDate: Random.date('yyyy-MM-dd'),
        admired: Random.natural(0, 100),
        from: Random.id()
      }, {
        content: Random.csentence(4, 15),
        commentDate: Random.date('yyyy-MM-dd'),
        admired: Random.natural(0, 100)
      }, {
        content: Random.csentence(4, 15),
        commentDate: Random.date('yyyy-MM-dd'),
        admired: Random.natural(0, 100)
      }, {
        content: Random.csentence(4, 15),
        commentDate: Random.date('yyyy-MM-dd'),
        admired: Random.natural(0, 100)
      }, {
        content: Random.csentence(4, 15),
        commentDate: Random.date('yyyy-MM-dd'),
        admired: Random.natural(0, 100)
      }
    ]
  }
  return Mock.mock(template)
}
