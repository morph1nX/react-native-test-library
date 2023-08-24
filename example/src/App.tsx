import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import LoggerObject from 'react-native-test-library';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  var loggerObj = new LoggerObject('MyApp');

  React.useEffect(() => {
    // loggerLibrary().then((res) => setResult(res.type));
    loggerObj.info('This is a debug message');

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
