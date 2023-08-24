import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { add, loggerLibrary } from 'react-native-test-library';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    loggerLibrary().then((res) => setResult(res.type));

  }, [result]);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
