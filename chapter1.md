---
title: Typescript基础入门
sidebar_label: Typescript基础入门
hide_title: true
sidebar_position: 1
---

:::tip
本课程更建议学习视频版，视频在网盘里(网盘地址在[《本手册的主页》](../index.md#资料获取))，请自行获取，感谢`@许竣皓`同学提供本教程！
:::
:::note
注意: 本基础教程不提供问答服务与源码，因为不需要！
:::

## 知识地图

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221209231902.png)

## JS 和 TS

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301549715.png#crop=0&crop=0&crop=1&crop=1&id=njBxw&originHeight=453&originWidth=2222&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 2012 年由微软发布

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301550863.png#crop=0&crop=0&crop=1&crop=1&id=h9SUH&originHeight=800&originWidth=1908&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 非常流行, 三大框架都在使用 TS

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301550830.png#crop=0&crop=0&crop=1&crop=1&id=z6bIY&originHeight=1074&originWidth=1817&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> TS 是 JS 的超集, 兼容 JS, 也提供强类型特性, 把 JS 提升了一个新的高度
>
> TS 在原生 JS 的基础上, 加了一层类型定义

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301551292.png#crop=0&crop=0&crop=1&crop=1&id=PwmzY&originHeight=1242&originWidth=2068&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 前置知识
>
> 1. JS 基础
> 2. ES6

> 注意: TS 无法在浏览器中运行, 需要借助工具进行编译(compile)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301557351.png#crop=0&crop=0&crop=1&crop=1&id=e4rBd&originHeight=855&originWidth=1516&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> TS 的好处
>
> 1. 规范我们的代码
> 2. 代码编译阶段就能及时发现错误
> 3. 可以提供类型检查, 避免低级错误, 解放劳动力
> 4. 帮助我们写出更高质量的代码
> 5. 支持 JS 最新特性(包含 ES6/7/8)

## 配置开发环境

> 英文官网: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
>
> 英文官网(中文版): [https://www.typescriptlang.org/zh/](https://www.typescriptlang.org/zh/)
>
> 中文网址: [https://www.tslang.cn/](https://www.tslang.cn/)

> 安装 TS(全局安装)

```bash
npm install -g typescript
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301619539.png#crop=0&crop=0&crop=1&crop=1&id=g52Yv&originHeight=766&originWidth=1468&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 查看版本

```bash
tsc -v
```

![image-20221205211017223](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202212052110331.png)

> 编写代码`main.ts`

```typescript
const hello = "hello world";
console.log(hello);
```

> 编译 TS

```bash
tsc main.ts
```

> 会生成对应的 main.js, 然后打开 main.js, 使用 node 运行, 可以看到结果

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301626871.png#crop=0&crop=0&crop=1&crop=1&id=Wx8tr&originHeight=1445&originWidth=1922&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301626081.png#crop=0&crop=0&crop=1&crop=1&id=jNAGu&originHeight=231&originWidth=888&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 当然, 两个命令可以合成一个

```bash
tsc main.ts && node main.js
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301627804.png#crop=0&crop=0&crop=1&crop=1&id=pmWiW&originHeight=209&originWidth=909&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 可以使用`code runner` 直接运行 ts 文件吗? 毕竟插件说明里说可以运行 TS

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301628053.png#crop=0&crop=0&crop=1&crop=1&id=YBoaB&originHeight=266&originWidth=1539&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 需要配置

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301628333.png#crop=0&crop=0&crop=1&crop=1&id=E12jI&originHeight=729&originWidth=806&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011936887.png#crop=0&crop=0&crop=1&crop=1&id=JyYLP&originHeight=497&originWidth=1349&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 打开配置文件`settings.json`中, 添加如下代码

```json
  "code-runner.executorMap": {
    "javascript": "node",
    "typescript": "tsc -t es5 $fileName && node $fileNameWithoutExt.js",
  },
```

> 会自动执行如下命令

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301633682.png#crop=0&crop=0&crop=1&crop=1&id=UeCRB&originHeight=206&originWidth=875&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## TS 工作流

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301634411.png#crop=0&crop=0&crop=1&crop=1&id=OQP5l&originHeight=702&originWidth=2047&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 工作流程:
>
> 1. 编写 TS 文件
> 2. 使用 tsc 编译成 JS 文件
> 3. 在 HTML 文件中引入 JS
> 4. 使用浏览器打开 HTML
> 5. 修改 TS 文件
> 6. 再次使用 tsc 编译成 JS 文件
> 7. 再次使用浏览器打开 HTML

> 我们可以简化这个流程
>
> 1. 第一种方案: live server

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301644483.png#crop=0&crop=0&crop=1&crop=1&id=bjPn9&originHeight=1358&originWidth=1488&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 2. 第二种方案: lite-server

> 首先初始化项目

```bash
npm init -y
```

> 安装`lite-server`

```bash
npm i lite-server --save-dev
```

> 配置`package.json`, 添加任务

```javascript
"start": "lite-server"
```

> 使用如下命令开启服务

```bash
npm run start
```

> 访问 [http://localhost:3000](http://localhost:3000), 以后每次修改 ts, 只需要重新编译即可

## TS 类型

> 基础类型(之前见过的)
>
> - boolean string number array null undefined object

> 基础类型(新增的)
>
> - tuple enum void never any

> 高级类型:
>
> - union Nullable Literal

## 数字 number

> 我们知道`+`, 有可能是算术运算符, 也有可能是字符串连接符, 如果有一边是字符串, 就是字符串连接符, 假设我们有如下代码

```typescript
const a = 123;
const b = 456;

function add(num1, num2) {
	return num1 + num2;
}

console.log(add(a, b));
```

> 此时是加法运算符, 如果把 a 改成字符串, 函数返回的就是字符串连接的结果, 如果我们想要限制参数的类型, 就是数字, 可以这么写

```typescript
// ...

function add(num1: number, num2: number) {
	// ...
}
// ...
```

> 使用冒号后面跟上类型的语法, 可以限制参数的类型, 如果传参的时候类型错误, 就会报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301747145.png#crop=0&crop=0&crop=1&crop=1&id=ucJ9H&originHeight=571&originWidth=1513&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 布尔值 boolean

> TS 可以在初始化变量的时候, 自动识别类型, 类型一旦确定, 不能更改

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301751522.png#crop=0&crop=0&crop=1&crop=1&id=RyCYA&originHeight=331&originWidth=995&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 手动显式指定类型

```typescript
let isLogin: boolean;
```

> 这样声明的变量也是 boolean 类型, 赋值其他类型会报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203301754664.png#crop=0&crop=0&crop=1&crop=1&id=AmIoi&originHeight=332&originWidth=954&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 字符串 string

> 可以指定字符串类型的值, 使用 string 来标记
>
> 自动识别

```ts
var aaa = "zhangsan";
var bbb = "lisi";
var ccc = `wangwu`;
```

> 手动指定类型

```ts
var aaa: string;
var bbb: string;
var ccc: string;

aaa = "zhangsan";
bbb = "lisi";
ccc = `wangwu`;
```

## 数组 array

> 数组中可以存放任意类型的数据, 使用`[]`
>
> 比如我们想定义一个全是数字的数组, 有三种写法

```typescript
let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [6, 7, 8, 9, 0];
let list3 = [1, 2, 3, 4, 5];
```

> 鼠标放到变量上面, 可以看到类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311035202.png#crop=0&crop=0&crop=1&crop=1&id=iUAab&originHeight=132&originWidth=527&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 这种数字类型的数组, 是不可以推字符串进去的

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311036606.png#crop=0&crop=0&crop=1&crop=1&id=fKKrj&originHeight=222&originWidth=831&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果你让数组, 既可以包含字符串, 又可以包含数字, 可以这么写

```typescript
let list4 = [1, "a"];
let list5: any[] = [1, "a"];
let list6: Array<any> = [1, "a"];

list4.push("aaa");
list5.push(123);
list6.push("abcd");
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311038924.png#crop=0&crop=0&crop=1&crop=1&id=tKrXr&originHeight=289&originWidth=513&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 我们发现, 都没有报错, 不过注意, list4(string|number)和 list5(any)的类型不同

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311040514.png#crop=0&crop=0&crop=1&crop=1&id=bUIye&originHeight=560&originWidth=1703&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 元组 tuple

> 元组是一个特殊数组, 固定长度, 固定类型

```typescript
let person: [number, string] = [11111, "zhangsan"];
person[0] = 456;
person[1] = 456;
person[0] = "zhangsan";
person[1] = "lisi";
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311042351.png#crop=0&crop=0&crop=1&crop=1&id=pds8T&originHeight=204&originWidth=676&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 我们发现, 会有两处报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311043993.png#crop=0&crop=0&crop=1&crop=1&id=FqhPZ&originHeight=253&originWidth=742&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311043044.png#crop=0&crop=0&crop=1&crop=1&id=VpRMw&originHeight=253&originWidth=742&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 因为赋值的时候, 改变了类型, 所以报错

> 有个小 bug
>
> 比如下面的代码, 下标 2 取不到值

```typescript
let person: [number, string] = [11111, "zhangsan"];
console.log(person[2]);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311046876.png#crop=0&crop=0&crop=1&crop=1&id=kgqMe&originHeight=166&originWidth=1101&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 但是元组可以 push, 打印也能看到 push 成功, 但是下标不能取值

```typescript
let person: [number, string] = [11111, "zhangsan"];
person.push("123");
console.log(person);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311047375.png#crop=0&crop=0&crop=1&crop=1&id=s78gt&originHeight=159&originWidth=594&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果这个时候尝试用下标 2 取值, 会报错, 因为元素固定类型, 固定长度

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311048915.png#crop=0&crop=0&crop=1&crop=1&id=h918v&originHeight=160&originWidth=1145&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 还有一点要注意, 元组声明的时候一定要指定类型, 如果不写, 会变成`联合类型数组`

```typescript
let person: [number, string] = [11111, "zhangsan"];
let person2 = [11111, "zhangsan"];
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311051635.png#crop=0&crop=0&crop=1&crop=1&id=VhZ7g&originHeight=191&originWidth=633&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311051648.png#crop=0&crop=0&crop=1&crop=1&id=VyECg&originHeight=191&originWidth=633&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 联合类型数组, 可以修改对应数据的类型(当然仅限 string 和 number), 可以随意的增减数据, 下面的代码不会报错

```typescript
let person2 = [11111, "zhangsan"];
person2[0] = "lisi";
person2[1] = 123;
person2[2] = "hello";
console.log(person2);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311055847.png#crop=0&crop=0&crop=1&crop=1&id=svcgD&originHeight=210&originWidth=567&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 联合类型 union

> 联合类型, 顾名思义, 一个变量可以支持多种类型

```typescript
let a: string | number;
```

> 上面的代码意味着, a 可以赋值字符串, 可以赋值数字, 都没有问题, 但是不能赋值其他类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311059499.png#crop=0&crop=0&crop=1&crop=1&id=yMLZs&originHeight=218&originWidth=513&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 你可以设置多个类型

```typescript
let b: number | string | boolean | string[];
```

> b 支持数字, 字符串, 布尔值, 字符串数组

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311101385.png#crop=0&crop=0&crop=1&crop=1&id=lGeBV&originHeight=283&originWidth=581&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 假如我们想定义函数, 计算两个数字的和

```typescript
function merge(a, b) {
	return a + b;
}
const mergeNumber = merge(1, 2);
console.log(mergeNumber);
```

> 当然, 我们可以给参数加上类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311106430.png#crop=0&crop=0&crop=1&crop=1&id=orvHR&originHeight=235&originWidth=625&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

```typescript
function merge(a: number, b: number) {
	return a + b;
}
const mergeNumber = merge(1, 2);
const mergeString = merge("hello", "world");
console.log(mergeNumber);
```

> 这个时候如果传的类型不对, 会报错
>
> 如果我们想让 merge 函数, 既支持两个数字相加, 又支持字符串合并, 可以这么写

```typescript
function merge(a: number | string, b: number | string) {
	return a + b;
}
const mergeNumber = merge(1, 2);
const mergeString = merge("hello", "world");
console.log(mergeNumber);
```

> 这个时候会报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311107075.png#crop=0&crop=0&crop=1&crop=1&id=g25gg&originHeight=227&originWidth=987&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 我们可以完善一下函数的逻辑

```typescript
function merge(a: number | string, b: number | string) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	} else {
		return a + b;
	}
}
const mergeNumber = merge(1, 2);
const mergeString = merge("hello", "world");
console.log(mergeNumber);
console.log(mergeString);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311109748.png#crop=0&crop=0&crop=1&crop=1&id=GxXgL&originHeight=176&originWidth=588&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 字面量类型 literal

> 字面量类型, 假如我们有如下代码

```typescript
const a = 123;
let b = 456;
```

> 鼠标移入变量, 会看到如下提示信息

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311221566.png#crop=0&crop=0&crop=1&crop=1&id=rwmPh&originHeight=253&originWidth=1327&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 含义是 a 是字面量类型, 值只能是 123
>
> 所谓字面量类型, 就是变量的特定值就是它的类型

> 所以我们不仅可以限定变量的多个类型, 也可以限定变量具体的值

```typescript
let a: 0 | 1 | 2;
a = 1;
a = 2;
a = 3;
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311217450.png#crop=0&crop=0&crop=1&crop=1&id=pI4cp&originHeight=182&originWidth=583&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 字面量类型可以很灵活

```typescript
let a: 1 | "2" | true | [1, 2, 3];
```

> 我们可以给之前的合并函数添加第三个字面量类型的参数, 来自定义返回值

```typescript
function merge(a: number | string, b: number | string, resultType: "as-number" | "as-string") {
	if (resultType === "as-string") {
		return a.toString() + b.toString();
	}
	if (resultType === "as-number") {
		return +a + +b;
	}
}
const merge1 = merge(1, 2, "as-string");
const merge2 = merge("123", "456", "as-number");
console.log(merge1);
console.log(merge2);
```

> 这样的话, 可以强制定义函数返回值的类型

## 枚举类型 Enum

> 之前学习的字面量类型属于枚举类型的变种
>
> 枚举类型也是多选一, 不过值是数字

```typescript
// 定义颜色的枚举类型
enum Color {
	red,
	green,
	blue,
}
// 使用
let color = Color.blue; // 2
console.log(color);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311451553.png#crop=0&crop=0&crop=1&crop=1&id=OKzj3&originHeight=372&originWidth=508&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 数字可以随意的定义

```tsx
// 定义颜色的枚举类型
enum Color {
	red = 1,
	green = 3,
	blue = 5,
}
// 使用
let color = Color.blue; // 5
console.log(color);
```

> 当然也可以设置成字符串

```tsx
// 定义颜色的枚举类型
enum Color {
	red = "红色!!!",
	green = "绿色!!!",
	blue = "蓝色!!!",
}
// 使用
let color = Color.blue; // 蓝色!!!
console.log(color);
```

## 任意类型 any

> any, 任意类型
>
> 写代码的时候, 暂时不清楚应该写什么类型, 那就可以先写上 any, 这个时候, 变量是不受类型限制的

```tsx
let a: any;
a = 123;
a = "hello";
a = true;
a = [1, 2, 3];
a = { name: "zhangsan" };
```

> 随意赋值, 不会报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311457567.png#crop=0&crop=0&crop=1&crop=1&id=jk9Ud&originHeight=243&originWidth=390&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> any 类型, 就是没有类型限制, 相当于和原生 JS 一样, 设计 any 类型的目的就是为了兼顾原生 JS 的灵活性和 TS 的严谨性

## 未知类型 unkown

> unkown 未知类型
>
> 和 any 很像, 不限制类型, 但是可以保证类型安全
>
> 和 any 对比一下, 代码如下

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311510982.png#crop=0&crop=0&crop=1&crop=1&id=REOmA&originHeight=190&originWidth=817&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 可以做如下修改

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311511626.png#crop=0&crop=0&crop=1&crop=1&id=r4EXO&originHeight=315&originWidth=489&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> any 适合代码的快速成型和上线, 但是可能会留下安全隐患
>
> unkown 会多一些限制, 可以保证类型的安全

## 空白类型 void

> 如果函数没有返回值, 函数是 void 类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311513134.png#crop=0&crop=0&crop=1&crop=1&id=yQWnc&originHeight=227&originWidth=518&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 代码写全是这个样子

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311535829.png#crop=0&crop=0&crop=1&crop=1&id=d6TyT&originHeight=107&originWidth=413&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 可以通过如下语法, 设置函数的返回值类型

```typescript
function demo(): type {}
```

> 比如限制必须返回字符串

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311534925.png#crop=0&crop=0&crop=1&crop=1&id=N58mB&originHeight=244&originWidth=586&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 也可以是一个具体的值

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311537028.png#crop=0&crop=0&crop=1&crop=1&id=XiClS&originHeight=193&originWidth=923&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 未定义 undefined

> 如果设置为 undefined, 必须写上 return, 因为 undefined 既可以是数据类型, 又可以是值, TS 把它当成了值, 所以必须写 return

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311536605.png#crop=0&crop=0&crop=1&crop=1&id=JmazY&originHeight=189&originWidth=1029&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 永不类型 never

> never 代表函数永远不可能执行完, 比如抛出异常的函数, 或者无限循环的函数

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311544789.png#crop=0&crop=0&crop=1&crop=1&id=TWKh7&originHeight=241&originWidth=459&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 类型断言/类型适配 Type Assertions

> 现在我们有如下代码

```typescript
let a: any = "hello";
console.log(a.endsWith("s"));
```

> 在编写代码的时候, vscode 的智能提示, 是不会提示 endsWith 的, 因为 endsWith 是 string 类型的方法, 而 a 是 any 类型

![image-20221205162720618](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221205162720.png)

> 解决方案: 类型断言, 指定 a 的类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311556294.png#crop=0&crop=0&crop=1&crop=1&id=trVNh&originHeight=224&originWidth=723&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311559843.png#crop=0&crop=0&crop=1&crop=1&id=SKw8v&originHeight=197&originWidth=656&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 温馨提醒, 如果需要正常运行的话, 需要修改 setting.json, 改成 es6, 否则无法使用 endsWith

```json
"typescript": "tsc -t es6 $fileName && node $fileNameWithoutExt.js",
```

> 这样就可以正常运行了

![image-20221207211458926](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202212072114036.png)

> 当然也可以连着写, 需要使用小括号

```ts
let a: any = "hello";
console.log((a as string).endsWith("o"));
```

```ts
let a: any = "hello";
console.log((<string>a).endsWith("o"));
```

## 函数类型 function

> 声明函数的语法和 ES6 一致

```typescript
let a = function (message) {
	console.log(message);
};
let b = (message) => console.log(message);
```

> 我们可以给参数加上类型的限制

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311622671.png#crop=0&crop=0&crop=1&crop=1&id=njunz&originHeight=314&originWidth=873&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果定义两个参数, 以及参数的类型, 那么调用函数的时候, 必须都传而且类型要匹配

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311623200.png#crop=0&crop=0&crop=1&crop=1&id=Fy5Q5&originHeight=70&originWidth=863&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311624618.png#crop=0&crop=0&crop=1&crop=1&id=IGb61&originHeight=87&originWidth=876&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311624698.png#crop=0&crop=0&crop=1&crop=1&id=IL1UQ&originHeight=96&originWidth=876&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果不想传值, 可以写上`?`, 这个时候参数不传, 默认 undefined, 称之为`可选参数`

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311627133.png#crop=0&crop=0&crop=1&crop=1&id=UkKJa&originHeight=78&originWidth=874&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 也可以设置参数的默认值, 称之为`默认参数`

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311628985.png#crop=0&crop=0&crop=1&crop=1&id=heguH&originHeight=80&originWidth=913&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 对象类型 object

> js 中的对象类型

![image-20221205165704701](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221205165704.png)

> 在 JS 中, 如果访问不存在的属性, 会返回 undefined
>
> 在 TS 中, 如果访问不存在的属性, 会报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311635914.png#crop=0&crop=0&crop=1&crop=1&id=mlzAD&originHeight=506&originWidth=717&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 鼠标移到变量上, 可以看到它的类型, 有属性, 以及属性的类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311636043.png#crop=0&crop=0&crop=1&crop=1&id=AhODh&originHeight=330&originWidth=712&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 后期赋值的类型不对, 也会报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311636946.png#crop=0&crop=0&crop=1&crop=1&id=pbyFU&originHeight=286&originWidth=548&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> js 中的对象类型是键值对
>
> ts 中的对象类型是键值类型对

## 接口 interface

> 假设我们有一个函数, 用来接收定位, 我们通常会传一个对象进去, 包含 x 和 y

```typescript
function demo(position) {
	const { x, y } = position;
	console.log(`x轴位置: ${x}, y轴位置: ${y}`);
}

demo({ x: 111, y: 222 });
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311710745.png#crop=0&crop=0&crop=1&crop=1&id=TlhM2&originHeight=133&originWidth=599&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 但是此时我们没有设置参数的检查, 比如参数必须包含 x 和 y 属性, 属性值必须是数字
>
> 以下写法逻辑上是错误的, 但是不运行是无法发现错误的

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311712243.png#crop=0&crop=0&crop=1&crop=1&id=TZmmy&originHeight=332&originWidth=615&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果对参数进行规范呢? 可以使用 interface, 对参数进行一定的限制
>
> 以下代码的含义, 传入的对象, 需要符合 interface 的定义

```typescript
function demo(position: Pos) {
	const { x, y } = position;
	console.log(`x轴位置: ${x}, y轴位置: ${y}`);
}

interface Pos {
	x: number;
	y: number;
}
```

> 这个时候, 编辑器就会发现错误并报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202203311714230.png#crop=0&crop=0&crop=1&crop=1&id=l8PMW&originHeight=136&originWidth=495&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 高内聚, 低耦合

> 高内聚: 功能, 逻辑相关的代码写在一起, 形成一个模块
>
> 低耦合: 各个模块相互独立, 互不影响
>
> 如何实现内聚? 可以把相关代码写在一个类(class)里面

## 类好比是“蓝图”

> 如同“蓝图/模板”一样，类只描述对象会拥有哪些属性和方法，但是并不具体指明属性的值

![image-20211101032952467](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20211101032952.png)

![image-20210507215125504](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/markdown20210507235209.png)

![image-20210507220904974](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/markdown20210507235212.png)

## 实例是具体的对象

> 类只描述对象会拥有哪些属性和方法，但是并不具体指明属性的值
>
> 实例是具体的对象, 需要指明具体的属性和值
>
> 都有颜色属性, 但是颜色的值是不同的

![image-20211101032952467](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20211101032952.png)

![image-20211105021233872](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20211105021234.png)

![image-20210507220904974](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/markdown20210507235212.png)

## 类和实例

![image-20211105021401116](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20211105021401.png)

> 狗是类, 拉布拉多, 金毛, 柯基, 秋田犬, 中华田园犬, 哈士奇 是狗的子类
>
> 史努比, 小白, 是类的实例
>
> 实例一定是具体的客观的, 看得见摸得着的
>
> 实例代表着具体, 类代表着抽象

![image-20211105021533925](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20211105021534.png)

![image-20210510093414983](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/markdown20210510231639.png)

## 类 class

> interface 可以看做是一种特殊的抽象类，可以指定一个类必须做什么，而不是规定它如何去做
>
> 接口定义了规范, 类可以实现(implements)接口定义的规范

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011504559.png#crop=0&crop=0&crop=1&crop=1&id=SuiR7&originHeight=412&originWidth=1637&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 假设我们有如下 interface

```typescript
interface IPoint {
	x: number;
	y: number;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
```

> 我们可以在 class 中实现 interface 定义的规范

```typescript
class Point implements IPoint {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	drawPoint = () => {
		console.log(this.x, this.y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this.x);
		const b = Math.abs(point.y - this.y);
		return Math.sqrt(a * a + b * b);
	};
}
```

> 如果需要计算两点之间的间距, 需要实例化对象, 然后使用对象来调用`getDistance`方法

```typescript
const point = new Point(24, 50);
console.log(point.getDistance({ x: 11, y: 12 }));
```

> 输出结果

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011524522.png#crop=0&crop=0&crop=1&crop=1&id=QvG2A&originHeight=150&originWidth=587&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 完整代码

```typescript
// 接口
interface IPoint {
	x: number;
	y: number;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
// 定义一个类, 实现接口定义的规范
class Point implements IPoint {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	// 实现具体的方法, 里面的逻辑需要写清楚
	drawPoint = () => {
		console.log(this.x, this.y);
	};
	getDistance = (point: { x: number; y: number }) => {
		// x轴的距离
		const a = Math.abs(point.x - this.x);
		// y轴的距离
		const b = Math.abs(point.y - this.y);
		// 勾股定理计算
		return Math.sqrt(a * a + b * b);
	};
}
// 实例化对象
const pointer = new Point(33, 44);
// 对象调用getDistance计算两点之间的距离
console.log(pointer.getDistance({ x: 55, y: 66 }));
```

## 访问修饰符 Access Modifier

> 类的属性和方法, 默认是 public

| 调用位置           | public | protected | private |
| ------------------ | ------ | --------- | ------- |
| 类外部(实例化对象) | √      | ×         | ×       |
| 类内部(子类)       | √      | √         | ×       |
| 类内部(自身)       | √      | √         | √       |

> public 使用对象可以访问

```typescript
// 定义接口
interface IPoint {
	x: number;
	y: number;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(public x: number, public y: number) {}
	drawPoint = () => {
		console.log(this.x, this.y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this.x);
		const b = Math.abs(point.y - this.y);
		return Math.sqrt(a * a + b * b);
	};
}
const point = new Point(24, 50);
console.log(point.x, point.y);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011539343.png#crop=0&crop=0&crop=1&crop=1&id=wsQDv&originHeight=148&originWidth=579&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果设置成 protected 或者 private, 运行就会报错, 因为实例化对象只能访问 public 的属性和方法

```typescript
// 定义接口
interface IPoint {
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(protected x: number, protected y: number) {}
	drawPoint = () => {
		console.log(this.x, this.y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this.x);
		const b = Math.abs(point.y - this.y);
		return Math.sqrt(a * a + b * b);
	};
}
const point = new Point(24, 50);
console.log(point.x, point.y);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011542469.png#crop=0&crop=0&crop=1&crop=1&id=B5taM&originHeight=216&originWidth=947&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果报`类错误实现接口`, 可以注释掉如下代码, 原因是接口中定义的 x,y 是 public 的, 只能扩大权限, 不能缩小权限

![image-20221207220026585](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202212072200703.png)

![image-20221207220056194](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202212072200352.png)

> 换成 private 试试

```typescript
// 定义接口
interface IPoint {
	// x: number;
	// y: number;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(private x: number, private y: number) {}
	drawPoint = () => {
		console.log(this.x, this.y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this.x);
		const b = Math.abs(point.y - this.y);
		return Math.sqrt(a * a + b * b);
	};
}
const point = new Point(24, 50);
console.log(point.x, point.y);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011542634.png#crop=0&crop=0&crop=1&crop=1&id=JusT4&originHeight=223&originWidth=886&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 怎么才能访问呢?
>
> 我们可以访问公有方法, 那么在公有方法中返回即可

```typescript
// 定义接口
interface IPoint {
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(private x: number, private y: number) {}
	drawPoint = () => {
		console.log(this.x, this.y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this.x);
		const b = Math.abs(point.y - this.y);
		return Math.sqrt(a * a + b * b);
	};
}
const point = new Point(24, 50);
point.drawPoint();
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011550753.png#crop=0&crop=0&crop=1&crop=1&id=Beovt&originHeight=139&originWidth=588&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 注意: 私有成员变量, 通常会在前面加上`_`

```typescript
// 定义接口
interface IPoint {
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(private _x: number, private _y: number) {}
	drawPoint = () => {
		console.log(this._x, this._y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this._x);
		const b = Math.abs(point.y - this._y);
		return Math.sqrt(a * a + b * b);
	};
}
const point = new Point(24, 50);
point.drawPoint();
```

## getter 和 setter

> 我们知道, 对象是没有办法访问私有属性的, 但是可以通过公共的方法获取和设置

```typescript
// 定义接口
interface IPoint {
	getX: () => number;
	setX: (value: number) => void;
	getY: () => number;
	setY: (value: number) => void;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(private _x: number, private _y: number) {}
	drawPoint = () => {
		console.log(this._x, this._y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this._x);
		const b = Math.abs(point.y - this._y);
		return Math.sqrt(a * a + b * b);
	};
	getX = () => {
		return this._x;
	};
	setX = (value: number) => {
		this._x = value;
	};
	getY = () => {
		return this._y;
	};
	setY = (value: number) => {
		this._y = value;
	};
}
const point = new Point(24, 50);
point.setX(111);
console.log(point.getX());
point.setY(222);
console.log(point.getY());
```

> ts 提供了简化操作

```typescript
// 定义接口
interface IPoint {
	X: number;
	Y: number;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(private _x: number, private _y: number) {}
	drawPoint = () => {
		console.log(this._x, this._y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this._x);
		const b = Math.abs(point.y - this._y);
		return Math.sqrt(a * a + b * b);
	};
	get X() {
		return this._x;
	}
	set X(value: number) {
		this._x = value;
	}
	get Y() {
		return this._y;
	}
	set Y(value: number) {
		this._y = value;
	}
}
const point = new Point(24, 50);
point.X = 111;
console.log(point.X);
point.Y = 222;
console.log(point.Y);
```

> 注意: 这是时候会报错

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011631158.png#crop=0&crop=0&crop=1&crop=1&id=fVtcd&originHeight=263&originWidth=1191&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 需要配置一下 vscode 的 setting.json

```json
"typescript": "tsc -t es5 $fileName && node $fileNameWithoutExt.js",
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011643189.png#crop=0&crop=0&crop=1&crop=1&id=dLPe8&originHeight=176&originWidth=609&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## module 模块

> 我们之前写的代码如下

```typescript
// 定义接口
interface IPoint {
	X: number;
	Y: number;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(private _x: number, private _y: number) {}
	drawPoint = () => {
		console.log(this._x, this._y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this._x);
		const b = Math.abs(point.y - this._y);
		return Math.sqrt(a * a + b * b);
	};
	get X() {
		return this._x;
	}
	set X(value: number) {
		this._x = value;
	}
	get Y() {
		return this._y;
	}
	set Y(value: number) {
		this._y = value;
	}
}
const point = new Point(24, 50);
point.X = 111;
console.log(point.X);
point.Y = 222;
console.log(point.Y);
```

> 我们可以把类的定义做成一个模块, 把定义和调用分开

```typescript
// point.ts

// 定义接口
interface IPoint {
	X: number;
	Y: number;
	drawPoint: () => void;
	getDistance: (point: { x: number; y: number }) => number;
}
class Point implements IPoint {
	constructor(private _x: number, private _y: number) {}
	drawPoint = () => {
		console.log(this._x, this._y);
	};
	getDistance = (point: { x: number; y: number }) => {
		const a = Math.abs(point.x - this._x);
		const b = Math.abs(point.y - this._y);
		return Math.sqrt(a * a + b * b);
	};
	get X() {
		return this._x;
	}
	set X(value: number) {
		this._x = value;
	}
	get Y() {
		return this._y;
	}
	set Y(value: number) {
		this._y = value;
	}
}
```

> 使用 export 导出

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011643518.png#crop=0&crop=0&crop=1&crop=1&id=WOum0&originHeight=206&originWidth=788&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 在 main.ts 中使用 import from 导入

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011643525.png#crop=0&crop=0&crop=1&crop=1&id=hIbWs&originHeight=294&originWidth=536&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011643189.png#crop=0&crop=0&crop=1&crop=1&id=dLPe8&originHeight=176&originWidth=609&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 如果是 export default, import 可以不加`{}`

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011644137.png#crop=0&crop=0&crop=1&crop=1&id=PqwqJ&originHeight=200&originWidth=708&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011645459.png#crop=0&crop=0&crop=1&crop=1&id=Hh3Bc&originHeight=245&originWidth=417&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 泛型 Generics

> 之前定义数组的时候, 我们已经接触到了泛型

```typescript
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

> 比如我们定义了一个函数, 接收数组, 返回数组的第一个元素

```typescript
function firstElement(arr: any[]) {
	return arr[0];
}

const arr = [1, 2, 3, 4, 5];

console.log(firstElement(arr));
```

> 我们发现, 函数的返回值是 any 类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021125923.png#crop=0&crop=0&crop=1&crop=1&id=wbzEv&originHeight=368&originWidth=887&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 很明显, 我们输入的是一个数字数组, 我们希望返回值是数字类型
>
> 如果将来输入字符串数组, 我们希望返回的值是字符串类型
>
> 现在的 any 类型不符合我们的需求
>
> 如果设置成`(string|number)[]`呢? 这样就不是纯数字数组或者纯字符串数组了, 也不符合我们的需求

```typescript
function firstElement(arr: (number | string)[]) {
	return arr[0];
}

const arr = [1, 2, 3, 4, 5];

console.log(firstElement(arr));
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021125106.png#crop=0&crop=0&crop=1&crop=1&id=RaBP4&originHeight=361&originWidth=1190&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 泛型用来解决两个值之间存在的对应关系, 在这里就是输入和输出的对应关系

```typescript
function firstElement<Type>(arr: Type[]): Type {
	return arr[0];
}

const arr = [1, 2, 3, 4, 5];

console.log(firstElement(arr));
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021130249.png#crop=0&crop=0&crop=1&crop=1&id=TRENx&originHeight=354&originWidth=935&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 这个时候, 我们变成字符串数组

```typescript
function firstElement<Type>(arr: Type[]): Type {
	return arr[0];
}

const arr = ["a", "b", "c"];

console.log(firstElement(arr));
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021131436.png#crop=0&crop=0&crop=1&crop=1&id=a0hnp&originHeight=378&originWidth=1016&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> ts 会根据输入来推断类型, 当然也可以手动指定

```typescript
function firstElement<Type>(arr: Type[]): Type {
	return arr[0];
}

const arr = ["a", "b", "c"];

console.log(firstElement<string>(arr));
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021157089.png#crop=0&crop=0&crop=1&crop=1&id=liDXk&originHeight=295&originWidth=1072&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 泛型的语法结构

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204011906312.png#crop=0&crop=0&crop=1&crop=1&id=RIv6E&originHeight=376&originWidth=776&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 类型守护 Type Guards

> 假设我们有如下代码

```ts
// 正方形类型
type Square = {
	size: number;
};
// 定义一个长方形类型
type Rectangle = {
	width: number;
	height: number;
};
// 定义一个形状类型
type Shape = Square | Rectangle;
// 定义一个函数, 求面积, 传入的参数是一个形状类型
function area(shape: Shape) {
	// 如果参数中有size, 就说明是正方形, 返回size的平方
	if ("size" in shape) {
		return shape.size * shape.size;
	}
	// 如果参数中有width, 说明是长方形, 返回长乘宽
	if ("width" in shape) {
		return shape.width * shape.height;
	}
}
// 调用函数
console.log(area({ size: 12 }));
```

> 利用类型守护, 可以避免类型不一致的情况, 代码可以做如下修改

```ts
// 正方形类型
type Square = {
	size: number;
};
// 定义一个长方形类型
type Rectangle = {
	width: number;
	height: number;
};
// 定义一个形状类型
type Shape = Square | Rectangle;
// 定义函数判断是否是正方形, 返回boolean
function isSquare(shape: Shape): shape is Square {
	return "size" in shape;
}
// 定义函数判断是否是长方形, 返回boolean
function isRectangle(shape: Shape): shape is Rectangle {
	return "width" in shape;
}
// 定义函数, 计算面积, 传入形状
function area(shape: Shape) {
	// 如果是正方形
	if (isSquare(shape)) {
		// 计算平方
		return shape.size * shape.size;
	}
	// 如果是长方形
	if (isRectangle(shape)) {
		// 计算宽乘以高
		return shape.width * shape.height;
	}
}
// 调用函数
console.log(area({ size: 12 }));
```

## 函数重载 Function Overloading

> 假如我们有如下代码, 可以翻转字符串或者字符串类型的数组

```typescript
function myReverse(stringOrArray: string | string[]) {
	// 判断参数的数据类型
	if (typeof stringOrArray === "string") {
		return stringOrArray.split("").reverse().join("");
	} else {
		return stringOrArray.reverse();
	}
}

const arr = "abcdefg";

const arr1 = myReverse(arr);

console.log(arr1);
```

> 虽然输出的类型是确定的, 但是我们把鼠标移入到变量上, 看到的还是混合类型

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021644542.png#crop=0&crop=0&crop=1&crop=1&id=S0eT8&originHeight=171&originWidth=650&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 因为函数无法通过参数来完成自动的类型匹配
>
> 函数重载可以解决这个问题, 所谓函数重载就是, 同一个函数名, 参数数量不同, 参数类型不同, 函数的返回值类型不同, 可以认为是不同的函数, 原生 js 没有这个概念

```typescript
function myReverse(string: string): string;
function myReverse(array: string[]): string[];

function myReverse(stringOrArray: string | string[]) {
	// 判断参数的数据类型
	if (typeof stringOrArray === "string") {
		return stringOrArray.split("").reverse().join("");
	} else {
		return stringOrArray.reverse();
	}
}

const arr = ["a", "b", "c"];

const arr1 = myReverse(arr);

console.log(arr1);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204061951842.png#crop=0&crop=0&crop=1&crop=1&id=OWukr&originHeight=163&originWidth=980&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 函数重载是编译时运行, 不是解释时运行的, 因为编译后就变成了 js, 就没有了函数重载了
>
> 再看一个例子, 比如有如下函数

```typescript
function makeDate(timestampOrYear: number, month?: number, day?: number) {
	if (month != null && day != null) {
		// 如果传的格式是 年, 月, 日, 三个参数的情况
		return new Date(timestampOrYear, month - 1, day);
	} else {
		// 如果是一个参数, 时间戳
		return new Date(timestampOrYear);
	}
}

const day1 = makeDate(2022, 1, 1); // 三个参数
const day2 = makeDate(1640966400000); // 一个参数

console.log(day1);
console.log(day2);
```

> 我们发现, 对于不同函数的情况, 全都需要在一个函数里处理, 这样很容易出问题, 比如这样写就会得不到我们想要的效果

```typescript
const day3 = makeDate(2022, 1); // 1970-01-01T00:00:02.022Z
```

> 使用重载可以很好的解决这个问题

```typescript
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;

function makeDate(timestampOrYear: number, month?: number, day?: number) {
	if (month != null && day != null) {
		return new Date(timestampOrYear, month - 1, day);
	} else {
		return new Date(timestampOrYear);
	}
}
const day1 = makeDate(2022, 1, 1);
const day2 = makeDate(1640966400000);
const day3 = makeDate(2022, 1);
console.log(day1); // 2021-12-31T16:00:00.000Z
console.log(day2); // 2021-12-31T16:00:00.000Z
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021708484.png#crop=0&crop=0&crop=1&crop=1&id=ktJdx&originHeight=129&originWidth=858&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 函数调用签名 Call Signatures

> 函数的参数, 参数类型, 以及返回值, 我们都是在定义函数的时候指定的
>
> 比如我们有四个函数, 分别计算加减乘除

```typescript
function add(num1: number, num2: number): number {
	return num1 + num2;
}
function minus(num1: number, num2: number): number {
	return num1 - num2;
}
function multi(num1: number, num2: number): number {
	return num1 * num2;
}
function division(num1: number, num2: number): number {
	return num1 / num2;
}
```

> 其实我们可以把规律抽出来, 做成函数调用签名, 使用 type 关键字

```typescript
type count = {
	(num1: number, num2: number): number;
};
```

> 代码就可以写成这样

```typescript
const add: count = (num1, num2) => {
	return num1 + num2;
};
const minus: count = (num1, num2) => {
	return num1 - num2;
};
const multi: count = (num1, num2) => {
	return num1 * num2;
};
const division: count = (num1, num2) => {
	return num1 / num2;
};
```

> 可以很方便的设置重载

```typescript
type count = {
	(num1: number, num2: number): number;
	(num1: number, num2: number, num3: number): number;
};
```

```typescript
const add: count = (num1, num2, num3?) => {
	if (num3) {
		return num1 + num2 + num3;
	} else {
		return num1 + num2;
	}
};
```

## 索引签名 Index Signatures

> 假设我们有如下对象, key 是 string 形式的

```ts
const user = {
	username: "zhangsan",
};

console.log(user["username"]); // zhangsan
```

> 还有一个对象, key 是 number 形式的

```ts
const student = {
	1111: "xiaoming",
};

console.log(student[1111]); // xiaoming
```

> 索引签名用于约束 key、value 类型的数据的结构
>
> 实例代码如下

```ts
type Person = {
	name: string;
	email: string;
};
type PersonDictionary = {
	[key: string]: Person;
};
const persons: PersonDictionary = {
	zhangsan: {
		name: "张三",
		email: "zhangsan@163.com",
	},
	lisi: {
		name: "李四",
		email: "lisi@126.com",
	},
};
```

> 因为有索引签名, 如果索引写错了, ts 会报错

![image-20221207161815788](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207161815.png)

> 读取, 赋值, 删除操作, 都和 js 的方法一样

```ts
// ...
// 读取值
const zhangsan = persons["zhangsan"];
console.log(zhangsan);

// 赋值
persons["wangwu"] = {
	name: "王五",
	email: "wangwu@163.com",
};

// 删除
delete persons["zhangsan"];
console.log(persons);
```

## 只读 readonly

> 意为只读, 也就是说, 传入函数的参数, 只能用不能改
>
> 比如下面的代码

```typescript
function reverseSorted(input: number[]): number[] {
	return input.sort().reverse();
}

const a = [1, 2, 3, 4, 5];
const result = reverseSorted(a);

console.log(a);
console.log(result);
```

> 运行之后, 发现结果都是`[ 5, 4, 3, 2, 1 ]`
>
> 因为传入的参数在进行`sort()`之后, 值被改变了
>
> 解决方案是加`readOnly`, 限制只能用, 不能改

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204021738752.png#crop=0&crop=0&crop=1&crop=1&id=oJvIJ&originHeight=413&originWidth=976&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 标红说明这个 sort 操作, 会修改变量的值, 解决方案

```typescript
function reverseSorted(input: readonly number[]): number[] {
	return [...input].sort().reverse();
}

const a = [1, 2, 3, 4, 5];
const result = reverseSorted(a);

console.log(a); // [ 1, 2, 3, 4, 5 ]
console.log(result); // [ 5, 4, 3, 2, 1 ]
```

## 双重断言 Double Assertion

> 假设我们有三个类型如下

```ts
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };
type Person = { name: string; email: string };
```

> 现在定义三个变量

```ts
let point2: Point2D = { x: 0, y: 0 };
let point3: Point3D = { x: 10, y: 10, z: 10 };
let person: Person = { name: "zhangsan", email: "zhangsan@126.com" };
```

> 如果牵涉到赋值

```ts
point2 = point3; // 成功
point3 = point2; // 失败
```

![image-20221207164701954](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207164702.png)

> 因为 point2 没有 point3 需要的数据, 可以使用类型断言阻止报错, 意思是告诉 ts, `我知道怎么做, 别管我`

```ts
point2 = point3; // 成功
point3 = point2 as Point3D; // 类型断言, 不报错了
```

![image-20221207164833663](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207164833.png)

> 如果做的太离谱, 比如下面的代码

```ts
person = point3; //error
point3 = person; //error
```

![image-20221207164935624](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207164935.png)

> 会报错, 而且一次类型断言解决不了问题

```ts
person = point3 as Person; //error
point3 = person as Point3D; //error
```

![image-20221207165059467](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207165059.png)

> 需要双重断言

```ts
person = point3 as any as Person; //不报错了
point3 = person as any as Point3D; //不报错了
```

![image-20221207165144967](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207165145.png)

## 常量断言 const Assertion

> js 中, 不能直接替换常量, 但是可以改常量的属性值

```ts
const user = {
	username: "zhangsan",
	age: 18,
};

user.username = "lisi";
user.age = 19;

console.log(user);
```

> 如果不想属性值被修改, 可以加常量断言

```ts
const user = {
	username: "zhangsan",
	age: 18,
} as const;
```

![image-20221207165706511](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207165706.png)

> 鼠标移入后会发现, 每个属性都变成了只读

![image-20221207165730572](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207165730.png)

> 这个操作是递归的

```ts
const user = {
	username: "zhangsan",
	age: 18,
	hobby: ["抽烟", "喝酒", "烫头"],
} as const;
```

![image-20221207170136111](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207170136.png)

> 以下这种情况, 也需要使用常量断言
>
> 先定义函数

```ts
function layout(setting: {
	align: "left" | "center" | "right"; //字面量类型
	padding: number;
}) {
	console.log("Layout: ", setting);
}
```

> 然后定义参数

```ts
const paramater = {
	align: "left",
	padding: 0,
};
```

> 调用函数则会报错

```ts
layout(paramater);
```

![image-20221207170528605](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207170528.png)

> 因为类型不对

![image-20221207170558608](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207170558.png)

> 传参是 string 类型, 函数定义时需要的是字面量类型

![image-20221207170629996](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207170630.png)

> 这个时候, 也需要常量断言

```ts
const paramater = {
	align: "left" as const,
	padding: 0,
};
```

> 这样类型就变了, 变成固定的值了, 错误就消失了

![image-20221207170809186](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207170809.png)

![image-20221207170834645](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207170834.png)

## ts 中的 this

> 先看一段 js 的代码

```js
function double() {
	this.age = this.age * 2;
}
const user = {
	age: 10,
	double,
};
user.double();
console.log(user.age);
```

> 这里的 this 指向调用 double 的对象
>
> 如果我们不小心把 age 写成了 ag

```js
function double() {
	this.ag = this.ag * 2;
}
```

> 代码并没有报错, 但是结果是不对的

```js
function double() {
	this.ag = this.ag * 2;
}
const user = {
	age: 10,
	double,
};
user.double();
console.log(user.age); // 10
```

> 我们可以给 this 定义类型

```ts
function double(this: { age: number }) {
	this.ag = this.ag * 2;
}
```

> 这个时候 ts 就会检查出问题

![image-20221207181352879](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207181352.png)

> 只有写对了属性, 才能运行成功

```ts
function double(this: { age: number }) {
	this.age = this.age * 2;
}
const user = {
	age: 10,
	double,
};
user.double();
console.log(user.age); // 20
```

> 温馨提醒: 如果有多个参数, this 要放到第一个的位置

![image-20221207181507185](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207181507.png)

## typeof 操作符

> 假设我们有如下代码

```ts
// 中心点
const center = {
	x: 0,
	y: 0,
};
// 定义一个单位
const unit1 = {
	x: center.x + 1,
	y: center.y + 1,
};
// 定义一个单位
const unit2 = {
	x: center.x + 2,
	y: center.y + 2,
};
// 定义一个单位
const unit3 = {
	x: center.x + 3,
	y: center.y + 3,
};
```

> 如果有一天, center 的定义为一个三维坐标

```ts
const center = {
	x: 0,
	y: 0,
	z: 0,
};
```

> 那么 unit1, unit2, unit3, 都是需要修改的, 如果自己漏掉了, 忘了改, 如何让 ts 报错提醒我们呢?
>
> 可以定义一个类型

```ts
// ...
type point = {
	x: number;
	y: number;
	z: number;
};
// ...
```

> 指定类型, 就会检查出错误

```ts
const unit1: point = {
	x: center.x + 1,
	y: center.y + 1,
};
const unit2: point = {
	x: center.x + 1,
	y: center.y + 1,
};
const unit3: point = {
	x: center.x + 1,
	y: center.y + 1,
};
```

![image-20221207183718957](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207183719.png)

> 鼠标移入 point 和 center 会发现, 展示的内容几乎是一样的

![image-20221207183849212](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207183849.png)

> 我们可以使用 typeof 简化代码

```ts
type point = typeof center;
```

![image-20221207183950592](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207183950.png)

> 还可以进一步简化

```ts
// ...
const unit1: typeof center = {
	x: center.x + 1,
	y: center.y + 1,
};
const unit2: typeof center = {
	x: center.x + 1,
	y: center.y + 1,
};
const unit3: typeof center = {
	x: center.x + 1,
	y: center.y + 1,
};
```

![image-20221207184039694](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207184039.png)

## keyof 操作符

> 假设我们有如下代码, 定义了一个对象以及它对应的类型

```ts
type Person = {
	username: string;
	age: number;
	location: string;
};

const user: Person = {
	username: "zhangsan",
	age: 18,
	location: "深圳",
};
```

> 我们有一个函数 getValueByKey, 使用 key 获取 value 值

```ts
function getValueByKey(obj, key) {
	const value = obj[key];
	return value;
}
```

> 打印代码, 会得到 zhangsan

```ts
console.log(getValueByKey(user, "username")); // zhangsan
```

> 如果我们第二个参数写错了, 并不会报错

![image-20221207185529396](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207185529.png)

> 如果想使用检查功能, 我们可以把第二个参数定义成联合类型

```ts
function getValueByKey(obj: Person, key: "username" | "age" | "location") {
	const value = obj[key];
	return value;
}
```

> 这个时候就可以检测出错误

![image-20221207185750256](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207185750.png)

> 代码可以简化

```ts
function getValueByKey(obj: Person, key: keyof Person) {
	const value = obj[key];
	return value;
}
```

> 一样可以检查

![image-20221207185905682](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207185905.png)

> 也可以使用泛型

```ts
function getValueByKey<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
	const value = obj[key];
	return value;
}
```

> 一样可以检查错误

![image-20221207190048282](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207190048.png)

## 类型查找 lookup types

> 项目中, 我们需要前后端分离, 那么需要确保前后端数据的一致性, 以下代码设置了数据的格式

```typescript
// 服务器的数据的结构, 转账交易记录
type RequestData = {
	// 交易id
	transactionId: string;
	// 用户信息
	user: {
		name: string;
		email: string;
		phone: string;
		nickname: string;
		gender: string;
		dob: string;
		nationality: string;
		address: {
			stress: string;
			unitNumber: string;
			city: string;
			provance: string;
			contury: string;
		}[];
	};
	// 驾照信息
	dirverInfo: {
		licenceNumber: string;
		exporyDate: string;
		classes: string;
		status: string;
	};
	// 交易信息
	payment: {
		creditCardNumber: string;
	};
};
```

> 这里有很多数据以及他们的类型, 但是前端可能只会用到其中的一部分
>
> 假设我们有一个函数, 用来获取信用卡信息

```typescript
function getPayment() {
	return {
		creditCardNumber: "1234567890",
	};
}
```

> 我们知道, 信用卡肯定是 string 格式, 所以需要限定返回值类型

```typescript
function getPayment(): { creditCardNumber: string } {
	return {
		creditCardNumber: "1234567890",
	};
}
```

> 这样当然没有问题, 但是代码重复了, 之前已经在 requestData 里面定义了

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204031556113.png#crop=0&crop=0&crop=1&crop=1&id=dLjza&originHeight=120&originWidth=466&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 我们可以把 payment 类型提取出来

```typescript
type PaymentRequestType = {
	creditCardNumber: string;
};
```

```typescript
function getPayment(): PaymentRequestType {
	return {
		creditCardNumber: "1234567890",
	};
}
```

```typescript
// 提交给服务器的数据结构
type RequestData = {
	// ...
	payment: PaymentRequestType;
};
```

> 但是这种写法, 破坏了原有类型规则的结构, 也会增加规则的复杂性
>
> 类型查找(Look up types)，通过类型查找，我们就可以避免重复
>
> 我们恢复一下之前定义的规则

```typescript
// 提交给服务器的数据结构
type RequestData = {
	// ...
	payment: {
		creditCardNumber: string;
	};
};
```

```typescript
function getPayment() {
	return {
		creditCardNumber: "1234567890",
	};
}
```

> 我们修改一下函数的类型, 使用索引从 RequestData 中获取对应的规则

```typescript
function getPayment(): RequestData["payment"] {
	return {
		creditCardNumber: "1234567890",
	};
}
```

> 这个时候, 如果类型不对, 就会报错

![image-20221207192655919](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207192656.png)

> 如果是正确的类型, 就不会报错

![image-20221207192721973](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207192722.png)

> 如果将来增加了支付宝功能

```ts
// 交易信息
payment: {
	creditCardNumber: string;
	alipay: string;
}
```

> 也会第一时间检测出错误

![image-20221207192758090](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207192758.png)

> 加上支付宝信息, 就不会报错了

![image-20221207193820118](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/20221207193820.png)

## 类型映射 Mapped Types

> 我们现在有 Point 类型, 代表一个三维坐标点, 定义一个常量 center, 也就是原点, 类型是 Point

```typescript
type Point = {
	x: number;
	y: number;
	z: number;
};

const center: Point = {
	x: 0,
	y: 0,
	z: 0,
};
```

> 因为 center 是原点, 我们希望 center 的 x,y,z 不可更改, 但是现在是可以更改的

```typescript
// ...

center.x = 1;
center.y = 1;
center.z = 1;

console.log(center);
```

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204040007015.png#crop=0&crop=0&crop=1&crop=1&id=pB1zK&originHeight=157&originWidth=584&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 我们可以这么设置

```typescript
// ...
type ReadOnlyPoint = {
	readonly x: number;
	readonly y: number;
	readonly z: number;
};

const center: ReadOnlyPoint = {
	x: 0,
	y: 0,
	z: 0,
};

// ...
```

> 这样就可以解决问题

![](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202204040009007.png#crop=0&crop=0&crop=1&crop=1&id=GDK4g&originHeight=284&originWidth=634&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 但是这么写, 代码过于冗余, 太重复了, 不利于将来的维护
>
> 可以使用类型映射 maped types

```typescript
type Point = {
	x: number;
	y: number;
	z: number;
};
type ReadOnlyPoint = {
	readonly [key in "x" | "y" | "z"]: number;
};

// ...
```

> 写死的代码可以精简

```typescript
type ReadOnlyPoint = {
	readonly [key in keyof Point]: number;
};
```

> 类型 number 也是写死的, 也需要修改

```typescript
type ReadOnlyPoint = {
	readonly [key in keyof Point]: Point[key];
};
```

> 当然也可以使用之前学过的泛型

```typescript
type Point = {
	x: number;
	y: number;
	z: number;
};

type isReadonlyType<T> = {
	readonly [key in keyof T]: T[key];
};

const center: isReadonlyType<Point> = {
	x: 0,
	y: 0,
	z: 0,
};
// ...
```

> 我们之前使用类型映射来解决只读问题, 代码还可以继续精简, 使用 ts 内建的函数`ReadOnly`

```typescript
type Point = {
	x: number;
	y: number;
	z: number;
};

const center: Readonly<Point> = {
	x: 0,
	y: 0,
	z: 0,
};

center.x = 1;
center.y = 1;
center.z = 1;

console.log(center);
```

