//1.声明对象类型
let e: { name: string, age?: number }// 指定对象必须包含“name属性”&属性值须是“string类型”，age属性可选（属性名后追加“？”表示可选）
e = { name: '孙悟空', age: 12 }

let d: { name: string, [propName: string]: any }// 指定对象必须包含“name属性”&属性值须是“string类型”， [propName: string]: any表任何类型的属性值
d = { name: '猪八戒', age: 12, sex: 0 }

//2.声明函数类型
let f: (a: number, b: number) => number
f = function (n1: number, n2: number): number {
    return n1 + n2
}

//3.声明数组类型
let g: string[]
g = ['string', 'string', 'string']
let h: number[]
h = [1, 2, 3]

let i: Array<number>
i = [1, 2, 3]
let o: Array<string>
o = ['1', '2', '3']

//4.元组,是固定长度的数组
let p: [string, string, number]
p = ['string', 'string', 3]

//5.枚举类(把所有可能的情况列举出来)
enum Gender {
    Male = 1,
    Female = 0
}
let q: { name: string, gender: Gender }
q = {
    name: '孙悟空',
    gender: Gender.Male
}
console.log(q); // {name:'孙悟空',gender:1}

//6.“&”表“同时”  “|”表“或”
let r: { name: string } & { age: number }
r = { name: '孙悟空', age: 15 }

//7.类型的别名 
// 当我们需要重复利用到自定义的类型时,可使用别名
type myType = 1 | 2 | 3 | 4 | 5
let s: myType;
let t: myType;
let u: myType;

s = 1
s = 2
// s = 9（报错）
