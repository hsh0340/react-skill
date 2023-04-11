import {useEffect, useState} from "react";

// 컴포넌트에서 관리할 상태가 여러개라면, useState를 여러번 사용하면 된다.
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링 끝~!~!~!');
    console.log({
      name,
      nickname
    })
  })

  // 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고, 업데이트될 때 실행하지 않으려면 함수의 두번째 파라미터로 빈 배열을 넣어준다.
  useEffect(() => {
    console.log('마운트 될 때만 실행')
  }, [])

  // 특정 값이 업데이트 될 때만 실행하고 싶을 때는 배열 안에 검사하고 싶은 값을 넣는다.
  useEffect(() => {
    console.log('닉네임 업데이트 될 때만 실행')
  }, [nickname])

  // 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 특정 작업을 하고싶다면 cleanup 함수를 반환해주어야 한다.
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('clean up');
      console.log(name);
    }
  })
  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />

      <b>이름:</b>{name}
      <b>닉네임:</b>{nickname}
    </div>
  )
}

export default Info;

/**\
 * - useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있다.
 */