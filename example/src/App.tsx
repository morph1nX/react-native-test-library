import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import LoggerObject from 'react-native-test-library';

export default function App() {
  // const [result, setResult] = React.useState<string | undefined>();

  var loggerObj = new LoggerObject('MyApp');

  React.useEffect(() => {
    loggerObj.info('This is a debug message');
  }, []);

  return (
    <View style={styles.container}>
      
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
