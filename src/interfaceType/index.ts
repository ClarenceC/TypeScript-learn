interface List {
  readonly id: number,
  name: string,
  // [x: string]: any
  age?: number // 可选属性
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}

let result = {
  data: [
    { id: 1, name: 'A', sex: 'male'},
    { id: 2, name: 'B', age: 10}
  ]
}

render(result)

// render({
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// } as Result) // 类型断言

// render(<Result>{
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// })


// 数组索引接口
interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['A', 'B']

// 字符串索引接口
interface Names {
  [x: string]: any,
  // y: number
  [z: number]: number
}