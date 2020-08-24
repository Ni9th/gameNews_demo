import Mock, { Random } from 'mockjs'

export const getGameImgs = () => {
  const tem = [
    Random.image('200x100', '', '1'),
    Random.image('200x100', '', '2'),
    Random.image('200x100', '', '3'),
    Random.image('200x100', '', '4'),
    Random.image('200x100', '', '5'),
    Random.image('200x100', '', '6'),
    Random.image('200x100', '', '7')
  ]
  return Mock.mock(tem)
}
