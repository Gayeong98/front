import React from 'react'

export default function index() {
    //# 1. 변수 선언 
    //? 변수를 선언하는 방법
    //? let 변수명;
    //? ES6 -> let 변수명;
    //? TS -> let 변수명: 데이터타입;
    let integer;
    let integer2: number;
    
    //# 상수 선언
    //? 상수를 선언하는 방법
    //? ES6 -> const 상수명 = 초기값;
    //? TS -> const 상수명: 데이터타입 = 초기값;
    const INTEGER = 10;
    const INTEGER2: number = 10;

    //^ Typescript의 경우 변수 혹은 상수를 선언과 동시에 초기화하면
    //^ 해당 변수 혹은 상수의 데이터타입을 자동으로 추론함
    //? typeof(변수) -> 해당 변수의 타입을 문자열로 나타내줌
    console.log(INTEGER);

    //# 3. 데이터 타입
    //? TS -> string, number, boolean, null, undefined, any, object
    
    //? string: 문자열
    //? 문자열을 표현할 때는 '', "", ``
    let str: string = '문자열';

    //? number: 숫자
    //? 실수와 정수를 모두 포함
    let num: number = 10;
    num = 3.14;

    //? boolean: 논리
    let bool: boolean = true;

    //? null: 아무것도 지정되지 않은 상태
    // str :  null;
    let n : null = null;

    //? undefined: 정의되지 않은 상태
    const obj: any = {};
    console.log(obj.a);

  return (
    <div>index</div>
  )
}
