import React from 'react';
import {Button, TamaguiProvider} from 'tamagui';
import config from '../../../tamagui.config';

console.log('MyButton');

export const MyButton = () => {
  return (
    <TamaguiProvider config={config}>
      <Button />
    </TamaguiProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: 'purple',
//     borderRadius: 8,
//   },
//   text: {color: 'white'},
// });
