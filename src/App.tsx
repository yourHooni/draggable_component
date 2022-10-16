import Draggable from "./components/Draggable";
import Box from "./components/Box";

// <Box> 컴포넌트를 원하는 대로 생성합니다.
// <Draggable> 컴포넌트를 생성하여 외부 라이브러리 없이 <Box> 컴포넌트를 드래그 가능하게 만듭니다.
// ## 예시
// <Draggable>
// 	<Box />
// </Draggable>
// 드래그 가능 영역으로 현재 창을 오버플로할 수 없습니다.
// TypeScript를 사용하고 단위 테스트를 작성하면 추가 점수가 있습니다.

function App() {
  return (
    <Draggable>
      <Box />
    </Draggable>
  );
}

export default App;
