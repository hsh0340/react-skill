// 컴포넌트의 필수 props를 지정하거나 타입을 지정할 때 사용
import PropTypes from 'prop-types';

// 함수형 컴포넌트 선언시 화살표 문법을 사용하는 것이 간결하다.
// 파라미터가 객체일 때 비구조화 할당 가능
const MyComponent = ({ name, children, number }) => {
  return (
    <div>
      {name}의 멋진 컴포넌트 <br />
      {/* 컴포넌트 태그 사이의 내용을 보여줄 때 props.children 사용 */}
      ~{children}~ <br />
      이것은 isRequired 테스트를 하기 위한 텍스트 입니다. : {number}
    </div>
  )
}

// props 값을 지정하지 않았을 때 기본값을 설정할 수 있다.
MyComponent.defaultProps = {
  name: '꽁치',
};

// name 값은 string 이어야 한다.
MyComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
};

// 모듈 내보내기
// 다른 파일에서 이 파일을 import 할 때, 위에서 선언한 MyComponent를 불러오도록 설정한다.
export default MyComponent;

/**
 * - props는 컴포넌트 속성을 설정할 때 사용하는 요소이다. 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.
 * - state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. 함수 컴포넌트에서 useState 함수를 사용한다.
 */