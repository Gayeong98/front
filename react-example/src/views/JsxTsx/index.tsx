import React from 'react'

//# JSX, TSX
//? JSX : Javascript 기반
//? TSX : Typescript 기반

//? TSX
//? - Typescript XML
//^ XML : eXtensible Markup Language
//? - React에서 Typescript로 HTML을 작성할 수 있도록 하는 파일

export default function JsxTsx() {

    const text = "JSX + TSX";

    //# 1. tsx 파일에서 작성된 Typescript 컴포넌트 함수는
    //# return의 () 안에 HTML 태그를 포함할 수 있음
    //? Tyscript return에 HTML을 표기하려면 ()로 묶어줘야 함
    //^ return () 안에는 최상위 부모 태그가 무조건 1개 있어야 함
    //! 0개도 안됨!!
    
    //? return () 안에서 Typescript를 사용하려면 {}로 묶어서 작성해야 함
    //^ {}를 써서 Typescript를 작성하고 싶으면 필수적으로 html 태그 안에 있어야 함
    
    //? return () 안의 {} 안에서 다시 html을 표기하려면 ()로 반환해야 함
  return (
    <div>{text}</div>
  )
}
