import { useState } from 'react';

const Say = () => {
  // useState 함수의 인자에는 상태의 초깃값을 넣어준다. 값의 형태는 자유이다.
  // 함수를 호출하면 배열이 반환되는데, 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꾸어주는 함수이다.
  const [message, setMessage] = useState('무야호');
  const onClickEnter = () => setMessage('안녕하시와요~ ^3^');
  const onClickLeave = () => setMessage('안녕히가시와요~ -_-');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
    </div>
  )
}

export default Say;

/**
 * - state 값을 바꾸어야할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다.
 * - 이벤트 사용시 주의사항
 * -- 1. 이벤트 이름은 카멜 표기법으로 작성한다
 * -- 2. 함수 형태의 값을 전달한다.
 * -- 3. DOM 요소에만 이벤트를 설정할 수 있다. 직접 만든 컴포넌트에는 이벤트를 설정할 수 없다. 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있다.
 */