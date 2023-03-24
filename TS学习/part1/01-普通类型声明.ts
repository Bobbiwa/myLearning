//1.TS中可以直接写JS
console.log('hello ts');

//2.声明类型，一般写法
let a: number;
a = 10;
a = 11;
//a = 'string' （ 报错 ） 

//3.若变量的声明和赋值是同时进行的，TS底层自动(let c: boolean)对变量进行检测
let c = false;
c = true;
//c = 123 （报错） 

//4.声明类型，函数输入与输出写法
function sum(a: number, b: number): number {
    return a + b
}
let result = sum(1, 2)

//5.any数据类型 (设置any代表关闭TS数据类型检测)
let k: any
k = 10
k = 'string'
k = true

//6.unknown 表示未知数据类型
let l: unknown
l = 10
l = 'string'
l = true

//7.any与unknown区别
let str: string
str = k //any可以赋值给任何数据类型 （any会污染其他类型变量）
str = l //unknown不可以 （unknown实际上是一个类型安全的any，unknown类型变量不能直接赋值给其他变量）

//8.如何上unknown类型赋值时不报错
if (typeof l === 'string') str = l  //方式一
//类型断言：用来告诉解析器变量的实际类型
str = l as string  
str = <string>l


