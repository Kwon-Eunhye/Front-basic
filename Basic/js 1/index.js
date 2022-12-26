// console.log('Hello JavaScript');
// 자바스크립트는 ; 필수 아님

/* 
  *** 데이터 타입 ***

  String, Number, Boolean, Null, Undefined, BigInt

*/

/*
  1. String (문자열)
  연속된 문자를 나타낸다. ''(홀따옴표), ""(쌍따옴표) 안에 작성한다.
*/

// console.log('foo');  //어떤 따옴표를 써도 상과없음
// console.log("foo");
// console.log(typeof "foo");  // tyepof: 타입 종류 출력 // String
// console.log('foo bar baz')
// console.log(""); //빈 문자열 출력
// console.log('2022');
// console.log(typeof '2022'); //string


// 개별 문자에 접근하기
// var foo = 'bar';
// console.log (foo)

// console.log (foo[0])  // b
// console.log (foo[1])  // a
// console.log (foo[2])  // r
// console.log (foo.length) // 3 ,문자열 길이

/*
  2 Number
  숫자를 나타낸다
  값: 정수, 소수, NaN(Not a Number), +Infinity, _Infinity
*/

// console.log(2022)
// console.log(typeof 2022)  //number
// console.log(3.14)
// console.log(0)
// console.log(-2)
// console.log(2 - 'foo')  //NaN

// console.log(-Number.MAX_VALUE); //그 이하는 -Infinity -(2^1024)
// console.log(Number.MAX_VALUE);  //숫자로 표현할 수 있는 가장 큰 수 / 그 이상은 +Infinity (2^1024) 

/*
  3 Boolean
  참 또는 거짓(True or False)의 값을 갖는다
*/

// console.log(true)
// console.log(false)
// console.log(typeof true)  // boolean
// console.log(1>0)

/*
  4 Null
  의도적으로 '없음', '무효'를 나타낼때 사용된다
*/


// console.log(null);
// console.log(typeof null);

// var foo = null;
// console.log (foo);

// var homeForStreetCats = null;

/*
  5 Undefined
  정의되지 않음을 나타낸다.
*/

// console.log(undefined);
// var x;
// console.log(x); //undefined
// console.log(typeof x) // undefined

/*
  6 BigInt
  safe integer (안전한 정수) 밖의 정수를 나타낼 때 사용한다.
  -(2^53 -1) ~ +(2^53 -1) 밖의 정수가 Bit integer라고 한다.
  약 -9000조 ~ 9000조
*/

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(9999999999999999)
// console.log(9999999999999999n)
// console.log(typeof 9999999999999999n)  //Bigint000000000000000000000000000000000000000000000000000000000000000000


/*
  Q. 데이터 타입 문제

  1 Number 타입의 범위

          [-2^1024]                [2^1024]
  -Infinity <----------- 0 -----------> +Infinity

  2 safe integer (안전한 정수)의 범위
            [-(2^53-1)]                  [2^53-1]
  Big integer(-) <----------- 0 -----------> Big integer(+)

  3 없음, 무효를 나타내는 데이터 타입은?
    - Null

  4 정의되지 않음을 나타내는 데이터 타입은?
    - Undefined
  */


/*
  *** 연산자 ***
  1 할당 연산자
  2 수리 연산자
  3 비교 연산자
  4 논리 연산자
  5 타입 연산자
*/

/*
  1 수리 연산자
  + - * / (사칙연산)
  ++(증가), --(감소)
  **(재곱), %(계수, 나머지)
*/

  // > 사친연산
  // console.log(1 + 2);
  // console.log('foo' + 'bar'); //문자열끼리 합칠때도 사용
  // console.log(1+ 'foo') // 1foo (string)
  // console.log(2*2)
  // console.log(3/2)

  // > 증가, 감소
  // var year = 2022;
  // year++
  // console.log(year) //증가 연산자는 현재 동작중이므로 연산이 끝난 시점에 출력해야지 적용됨

  // var x = 1;
  // x--;
  // console.log(x)

  // > 제곱, 나머지
  // console.log(2**7) // 2^7 
  // console.log(5%2) // 1

  

/*
  2 할당연산자
  = += -= /= %= **=
*/

// > =
// var foo = 'bar'

// > +=
// var year =2022;
// year += 1;  // year = year + 1
// console.log(year)

//  > *=
// var x = 1;
// x *= 2;
// console.log(x)


/*
  3 비교 연산자

  == === != !==
  > < >= <=
*/

// > == (동등 연산자 / 타입이 다른데 같다고 나와 잘 안쓰임)

// console.log(1 == 1)
// console.log(1 == 0)
// console.log(2022 == '2022') //true

// > === (엄경 동등 연산자)
// 값과 타입 모두 비교

// console.log(1 === 1)
// console.log(2022 === '2022')  //false

// > !=

// console.log(1 !== 1)  // FALSE
// console.log(2 !== 1)  // TRUE

// > !==
// 값과 타입 모두 비교

// console.log(1 != '1') // flse
// console.log(1 !== '1')  // true

// > > < <= >= (숫자끼리 비교할때만 사용)

// console.log(2<2)
// console.log(2<=2)

/*
  4 논리 연산자

  [조건 1] && [조건 2] (그리고)
  [조건 1] || [조건 2] (또는)
  [!조건] (부정)
*/

// > && (그리고)
// console.log(2>0 && 2>1) // 두 조건이 모두 만족 해야 true
// console.log(2>0 && 2<1) //false

// > || (또는)
// console.log(2>0 || 2<1)
// console.log(2<0 || 2<1)

// > ! (부정)

// console.log (!(1>0))
// console.log (!false)
// console.log (!"") // 빈문자의 부정은 True 
// console.log (!undefined) // true
// console.log (!null)  // true
// console.log(!'foo')  // false

/*
  5 타입 연산자

  typeof + 값
  instanceof + 값
*/

// console.log(typeof 'foo')
// console.log(typeof null)

// // Q. 연산자 문제
// var likes = 999;
// // 증가연산자를 사용하여 좋아요 수를 1 증가시켜 보세요
// likes++;
// console.log(likes)

// var beers = 'Heineken(Netherlands)'
// // 다음을 += 연산자를 사용하여 beers값을 바꿔보세요

// beers = beers + 'Guinness(Ireland)'
// // beers += 'Guinness(Ireland)'
// console.log(beers)

// 10대: 13세 이상 19세 이하를 10대라고 한다.
// 논리연산자 'AND(그리고)'를 사용하여 코드로 작성해보세요

// var x = 15
// var y = 34

// console.log(x >=13 && x <=19)
// console.log(y >=13 && y <=19)

/*
  *** 조건문 ***
  
  1 if 조건문
  2 switch 조건문
  3 ? (삼항연산자)
*/

/*
  1 if 조건문
  
  if (조건) {
    조건이 참일 경우 실행되는 코드
  }  
*/

// > if 조건문
  // if (1>0) {
  //   console.log('foo')
  // }

  // if (1>2) {  //조건이 참이 아닌 경우 해당 블록안에 코드가 실행되지않음
  //   console.log('foo')
  // }

// > if/else

// if(1>2) { // if 블록이 참이 아닐경우 else 블록의 코드가 실행
//   console.log('foo')
// } else {
//   console.log('bar')
// }

// > if/elseif/else
//   var year = 2022;

// if (year === 2021) {
//   console.log('Last year') 
// } else if (year === 2022) {
//   console.log('This year')
// } else {
//   console.log('Next year')
// }


// if 조건문에서 조건이 boolean 타입이 아닌 경우
// if (true) {
//   console.log('foo')
// }

// if ('foo') { // 문자열은 참으로 간주됨
//   console.log('bar')
// }

// if ('') { // 빈문자열은 거짓으로 간주됨
//   console.log('foo')
// }

// if(null) { // 빈문자열은 거짓으로 간주됨
//   console.log('foo')
// }

// if(undefined) { // 빈문자열은 거짓으로 간주됨
//   console.log('bar')
// }

// if(!null) {   //null의 부정은 boolear타입임으로 참
//   console.log('foo')
// }


/*
  2 Switch 조건문

  엄격 동등 연산(===)을 수행한다
*/

// var year = 2022;

// switch(year) {
//   case 2021:
//     console.log('작년')
//     break;
//   case 2022:
//     console.log('이번 년도')
//     break;
//   case 2023:
//     console.log('내년')
//     break;
//   default:  //일치하는 케이스가 없을 때 실행됨
//     console.log('.')
// }

/*
  3 ? (삼항연산자)

  조건문을 간단한 문법으로 구현할 수 있다.

  조건 ? 값1 : 값2
  조건이 참인 경우 값1을 리턴한다.
  조건이 거짓인 경우 값2를 리턴한다.
*/

// var year = 2022;

// var r = year === 2022 ? '올해' : '올해가 아닙니다'

// console.log (r) 


// Q1. 다음 변수를 활용해서 나이가 십대이면 '그는 십대입니다'
// 십대가 아니면 '그는 십대가 아닙니다'를 출력하는 조건문을 만들어보세요
// if 조건문, ?(삼항연산자) 두경우를 모두 만들어 보세요

// var joAge = 24

// // if 조건문
// if (joAge > 13 && joAge <19 ) {
//   console.log('십대')
// } else {
//   console.log ('십대가 아닙니다.')
// } 

// // 삼항연산자
// // 성인/성인이 아닌지 (18세 기준)
// console.log (
//   (joAge >= 18) ? '성인' : '성인이 아닙니다.'
// )

/*
  *** 반복문 ***

  1 For 반복문
  2 Whire 반복문
*/

// 1 For 반복문

// 0에어 3 사이의 숫자를 출력한다
// for (var i=0; i<3; i++) {
//   console.log(i)
// }

// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum +=i;  // sum = sum + i;
// }

// console.log(sum);

// # 문자열 순회하기
// var foo = 'bar'

// for (var i=0; i<foo.length; i++) {  //foo.length = 문자열의 길이, 즉 3
//   console.log(foo[i])
// } 

// #break와 continue

// for (var i=0; i<=10; i++) {
//   if (i===5) {
//     break;
//   }
//   console.log(i)
// }

// for (var i=0; i<=10; i++) {
//   if (i===5) {  
//     continue; // i가 5일때 해당 순서를 건너뜀
//   }
//   console.log(i)
// }

// 2 while 반복문
// for 반복문과 문법의 차이가 존재
// 0 과 3사이의 숫자 출력하기

// var i=0;

// while(i<3) {
//   console.log(i);
//   i++;
// }


// Q1, for반복문을 사용해서 a에서 c까지만 출력해보시오
// var ahlpabets = 'abcdefg';

// for (i=0; i<3; i++) {
//   console.log(ahlpabets[i])
// }

// Q2. 10, 20, 30, ...100 까지의 합을 구해보시오

// A 방식
// var sum = 0; //*sum을 정의 해줘야하ㅁ
// for (var i=1; i<=10; i++) {
//   sum +=i*10;
// }
// console.log(sum)


// B 방식
// var sum = 0;
// for (var i=10; i<=100; i+=10) {
//   sum +=i;
// }
// console.log(sum)


/*
  *** 변수와 상수 ***

  1 var (변수, variables)
  2 let (변수)
  3 const (상수, constant)
*/

// 1 var
// var foo = 'bar'
// console.log(foo)

// var foo = 'bar'
// foo = 'baz'

// console.log(foo)  //변수를 다시 다른 값으로 할당 가능

// var foo = 'bar'
// var foo = 'baz' // foo 변수 재선언

// console.log(foo)  //변수를 다시 선언하여 다른값으로 할당 가능

// var foo;  // 선언
// foo = 'bar' // 정의

// console.log(foo)

// 2 let
// var 변수보다 더 엄격한 변수

// let foo = 'bar'
// console.log(foo)

// let foo = 'bar' // 초기화(initialization): 변수를 선언하고 정의하는 것
// foo = 'baz' //재정의

// console.log(foo);

// let foo;  //선언
// foo ='bar'; //정의

// console.log(foo)

// let foo = 'bar';
// let foo = 'baz';  //재선언 불가 

// console.log(foo)

// 3 const
// const foo = 'bar';  //재선언 재정의 불가, 즉, 초기화만 가능

// foo = 'baz'
// console.log(foo)

// # let과 const는 블록(block,{}) 범위를 갖는다.

// {  // if, for
//   var foo = 'Foo'
//   let bar = 'Bar'
//   const baz = 'Baz'

//   // console.log(foo)
//   // console.log(bar)
//   // console.log(baz)
// }

// console.log(foo)  // 블록 밖에서 블록 안에 있는 변수에 접근 가능
// console.log(bar)  // 블록 밖에서 블록 안에 있는 변수에 접근 불가
// console.log(baz)  // 블록 밖에서 블록 안에 있는 변수에 접근 불가

/*
  *** 함수 ***
  호출될 때만 실행되는 코드

  1 함수 정의하기
    > 함수선언식
    > 함수표현식과 화살표 함수
  2 Hoisting
  3 전역변수와 지역변수
  4 'return' 키워드
  5 함수의 인자
  6 콜백
*/

// 1 함수 정의하기
//  > 함수선언식

// function f() {
//   console.log('foo')
// }
// // 함수 실행
// f()

//  > 함수표현식

// 변수에 익명함수를 할당
// const f = function () { //익명함수 : 변수자리에 이름이 없음
//   console.log('foo')
// }
// f()

//  > 화살표 함수
// const f = () => { //function 글자대신 화살표로 대체하여 함수식을 간편화함
//   console.log('foo')
// }
// f()

// 2 Hoisting (게양)
// 함수의 정의가 실행 시점보다 윗줄에 있음
// 함수선언식에서만 적용 가능

// f()
// function f() {
//   console.log('foo')
// }

// f() //함수 정의보다 윗줄에 선언, 초기화 전에는 접근 불가

// const f = () => {
//   console.log('foo')
// }

// 3 전역변수와 지역변수
// 변수 종류와 상관없이 함수밖에서 정의하면 전역변수, 함수안에서 정의하면 지역변수

// > 전역(global) 변수
// 함수 밖에서 선언되 변수

// const foo = 'bar'

// function f() {
//   // 함수안으로 접근 가능
//   console.log(foo)
// }
// f()

// > 지역(local) 변수
// 함수 안에서 선언된 변수

function f() {
  const foo = 'bar'
}
f();

// 함수밖에서 접근이 불가
console.log(foo)



