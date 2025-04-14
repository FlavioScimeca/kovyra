import { useState } from 'react';
import { Button, Text, View } from 'tamagui';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="azure"
      height="100%"
    >
      <Text fontSize={24} fontWeight="bold">
        Hello World
      </Text>
      <Button onPress={() => setCount(count + 1)}>Click me</Button>
      <Text>{count}</Text>
      <div>hey</div>
    </View>
  );
}

export default App;
