import { useState } from 'react';

const Counter = () => {
  // useState 함수의 파라미터에는 상태의 기본값을 넣어준다.
  // useState 함수가 호출되면 배열을 반환하는데, 첫번째 원소는 상태값, 두번째 원소는 상태를 설정하는 함수이다.
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  )
}

export default Counter;

/**
 * - hook은 함수 컴포넌트에서 상태관리를 할 수 있도록 한다.
 * - useState 는 가장 기본적인 hook이며, 가변적인 상태를 지닐 수 있게 한다.
 */