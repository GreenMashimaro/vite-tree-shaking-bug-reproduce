import serialize from 'serialize-javascript'

export function getName() {
  return 'hello_coco'
}

export function testTreeShaking() {
  return 'aa' + serialize
}