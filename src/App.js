import { useRef } from 'react';

const App = () => {
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref.current);
  }

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App;
