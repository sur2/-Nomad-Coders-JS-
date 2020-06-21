# Nomad Coder Vanilla JavaScript
[Nomad Corders] 바닐라 JS로 크롬 앱 만들기

**Vanilla JS : No Library Only JavaScript**



# var, let, const

var는 function-scoped 단위로 hosting 되어변수 재선언 및 할당이 가능하다.
```
var a = 'test1'
var a = 'test2'
```

let과 const는 block-scoped 단위로 hosting 된다.

let은 선언을 한 뒤 값을 할당할 수 있으며 같은 변수명으로 재선언 할 수 없다.

const는 선언과 동시에 값을 할당해야하며 재할당할 수 없다.

```
let b
b = 123456
const c = 'initialize'
```



# DOM(Document Object Model)

Document = HTML 문서

``` js
// 콘솔에 내 HTML 문서가 보여진다.
console.log(document)
```

즉,  DOM은 HTML 문서의 각 요소들을 전부 객체 단위로 사용할 수 있다.

```js
document.getElementById("title").innerText = "Change H1"
```

DOM은 JS(**j**ava**s**cript)를 사용해 수정할 수 있다.



## HTML Javascript DOM event MDN

필요한 이벤트를 찾아서 써보자!

https://developer.mozilla.org/ko/docs/Web/Events

 

### COLOR

https://flatuicolors.com/

