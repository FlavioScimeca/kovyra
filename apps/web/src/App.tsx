import { Home } from '@kovyra/app';
import { UiButton, UiStack } from '@kovyra/ui';

function App() {
  return (
    <div className="text-center">
      hey
      <UiStack>
        <UiButton>Click me</UiButton>
      </UiStack>
      <Home />
    </div>
  );
}

export default App;
