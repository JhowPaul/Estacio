
import AppNavigation from './src/navigation';

import tw from 'twrnc';

// nativewind approach
export default function App() {
  return (
    <AppNavigation/>
  );
}


// // twrnc approach
// export default function App() {
//   return (
//     <View style={tw`flex-1 justify-center items-center bg-white`}>
//       <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-l`}>
//         <Text style={tw`text-white text-3xl font-bold`}>Hello World</Text>
//       </TouchableOpacity>
      
//       <StatusBar style="dark" />
//     </View>
//   );
// }
