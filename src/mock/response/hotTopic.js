import Mock, { Random } from 'mockjs'

export const getHotTopic = () => {
  const arr = []
  for (let i = 10; i > 0; i--) {
    const tem = {
      topicName: Random.csentence(10, 18),
      discussed: Random.natural(100, 1000),
      Id: Random.id()
    }
    arr.push(tem)
  }
  return Mock.mock(arr)
}
