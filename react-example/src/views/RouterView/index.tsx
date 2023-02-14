import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'

//# Router
//? Server의 Resource 경로를 추적하고 있다가 해당 경로가 바뀌면
//? 지정된 경로의 Resource를 반환해주는 역할
//? npm install react-router-dom

//? root 경로의 index.tsx의 render 함수 내부에
//? <BrowserRouter>로 App 컴포넌트를 감싸줘야 함

//^ Route 컴포넌트
//? Resource Path(경로)에 따라 보여주고자 하는 컴포넌트를 지정할 때 사용

//^ Link 컴포넌트
//? Web 서버 내에서 특정한 Resource Path로 변경하고자 할 때 사용

//^ useNavigate Hook 함수
//? Resource Path를 변경 혹은 이동시켜주는 훅 함수
//? import { useNavigate } from 'react-router-dom';

//? const 내비게이터 함수명 = useNavigate();
//? 내비게이터함수명(path);

//? Resource Path를 변경시키기 전에 특정 작업하고자 할 때 사용됨

//^ useParam Hook 함수
//? Resource Path로부터 특정 값을 가져올 때 사용
//? import { useParam } from 'react-router-dom';

//? const { pathVariable명 } = useParams();

export default function RouterView() {

  const  [path, setPath] = useState<string>(''); 
  const navigator = useNavigate();

  const { pathValue } = useParams(); 

  const movePath = () => {
    console.log(path);
    //^ navigate hook 및 Link의 path 자리에
    //^ '/'가 붙지 않으면 현재 path 뒤에 '/'가 붙고
    //^ 경로가 추가되어 변경됨
    if (path !== '' && path !== 'main')
      navigator('/' + path);
  }

  return (
    <>
    <Typography variant='h3'>{pathValue}</Typography>
      <Routes>
        <Route path='test' element={(<Typography variant='h3'>Test Page</Typography>)}></Route>
      </Routes>
      <Link to='test'>test</Link> {' '}
      <Link to = ''>main</Link>
      <TextField variant='filled' label='path' onChange={(event) => setPath(event.target.value)}/>
      <Button variant='contained' onClick={movePath}>move!</Button>
    </>
  )
}
