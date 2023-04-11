// import 는 특정 파일을 불러올 때 사용한다.
import './App.css';
// 다른 컴포넌트를 불러온다.
import MyComponent from "./MyComponent";
import Say from "./Say";
import EventPractice from "./EventPractice";

// App 컴포넌트 생성 (함수 컴포넌트)
// 프로젝트에서 컴포넌트를 렌더링하면, 함수에서 리턴하는 내용을 나타낸다.
// JSX 라고 부름
function App() {
  const greeting = 'Hello';
  const name = 'Seungha';
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* 표현식을 쓸 수 있다. */}
          {greeting}
          {/* 삼항연산자를 사용할 수 있다. */}
          {name === 'Seungha' ? <h1>반갑소.</h1> : <h3>안녕히가시오.</h3> }
          {/* 조건부 렌더링을 할 수 있다. (null) */}
          {name === 'Kkongchi' && <h1>반갑소.</h1>}
        </p>
        {/* 컴포넌트 import */}
        <MyComponent name='승하' number={100}>까꿍</MyComponent>
        <Say />
        <EventPractice />
      </header>
    </div>
  );
}

export default App;

/**
 * - JSX 코드는 브라우저에서 실행되기 전에 코드가 번들링 되는 과정에서 바벨을 사용하여 자바스크립트 코드로 변환된다.
 * - 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야한다. <div> 또는 <Fragment> 또는 <>로 감싸준다.
 * - falsy한 값 중 0은 화면에 나타난다.
 * - 리액트 컴포넌트는 undefined를 리턴할 경우 오류가 발생한다. JSX 내부에서 undefined를 리턴하는 것은 괜찮다.
 */


