import React, { useEffect, useState } from 'react'

//# Hook -> 함수형 컴포넌트에서만 동작
//? state와 React 기능을 관리하는 메서드

//^ Hook 함수의 규칙
//? 1. 무조건 함수형 컴포넌트 내에서만 호출할 수 있음
//? 2. 무조건 함수형 컴포넌트 최상위 단에서만 호출할 수 있음
//? 3. 조건부로 호출할 수 없음

export default function Hook() {

    //# 1. useState()
    //? React 컴포넌트 내에서 state를 추적
    //? state를 만들어주는 메서드
    //? import { useState } from 'react';

    //? State 선언
    //? const [ 상태명, set메서드 ] = useState<데이터타입>(초기값);
    //? 여기서 지정한 State가 변경되면 해당 State를 사용하고 있는 컴포넌트가 리랜더링됨
    const [state, setState] = useState<boolean>(false);

    //? State를 변경할 때는 state를 상수로 선언하기 때문에 setState로 변경해줘야 함
    let [state2, setState2] = useState<boolean>(false);
    //? 위처럼 state를 변수로 선언하고 해당 변수를 대입연산자로 변경하더라도
    //? 리랜더링되지 않음 (무조건 set메서드로 변경해줘야 함)

    const [objectState, setObjectState] = useState<number[]>([1]);

    const onClickHandler = () => {
        //^ 주의할 점
        //^ 배열 혹은 객체를 가지고 있는 참조변수의 경우
        //^ 실제 값을 변경하고 다시 set메서드로 적용시켜준다 하더라도
        //^ 참조변수가 가지고 있는 주소는 변경되지 않기 때문에
        //^ state가 변경되었다고 인식되지 못해서
        //^ 랜더링이 다시 되지 않음
        objectState.push(1)
        
        //^ 새로운 배열 혹은 객체를 생성하여 새로운 주소를 할당한 다음
        //^ 새로운 주소를 가지고 있는 참조 변수로 변경해야 리랜더링이 됨
        const tmp = objectState.map((item) => item + 1);
        setObjectState(tmp);
    }

    //# 2. useEffect
    //? 특정 상태값이 변경되는지 추적하고 있다가 
    //? 변경이 이루어지면 실행할 코드블록

    //? 함수형 컴포넌트 최상위에서 함수를 호출하면
    //? 매 랜더링시 호출됨
    // console.log(objectState);

    //? import { useEffect } = 'react;

    //? 호출 방법
    //? useEffect(특정 상태가 변경되었을 때 실행되는 함수, 추적할 상태의 배열);
    useEffect(() => {
        console.log(objectState);
    }, [objectState])

    useEffect(() => {
        console.log('로드 될때만 실행되는 함수!!');
    }, [])

  return (
    <div>
        <div>{state2 ? 'true' : 'false'}</div>
        <button onClick={() => state2 = !state2}>버튼</button>
        {objectState.map((num) => (
            <div>{num}</div>
        ))}
        <button onClick={onClickHandler}>Add number!</button>
    </div>
  )
}
