// import React from 'react'
// import { View, Text } from 'react-native'

// export default function CategoryScreen() {
//     return (
//         <View>
//             <Text>CategoryScreen</Text>
//         </View>
//     )
// }


import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Button } from 'react-native';

function CategoryScreen({ navigation }) {
  const [products, setProducts] = useState([
    { id: '1', name: 'Product 1', category: 'Category 1' },
    { id: '2', name: 'Product 2', category: 'Category 1' },
    { id: '3', name: 'Product 3', category: 'Category 2' },
    { id: '4', name: 'Product 4', category: 'Category 2' },
    { id: '5', name: 'Product 5', category: 'Category 3' },
    { id: '6', name: 'Product 6', category: 'Category 3' },
    { id: '7', name: 'Product 7', category: 'Category 4' },
    { id: '8', name: 'Product 8', category: 'Category 4' },
    { id: '9', name: 'Product 9', category: 'Category 5' },
    { id: '10', name: 'Product 10', category: 'Category 5' },
  ]);
  const [category, setCategory] = useState('Category 1');

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <Button
          title="Category 1"
          onPress={() => setCategory('Category 1')}
        />
        <Button
          title="Category 2"
          onPress={() => setCategory('Category 2')}
        />
        <Button
          title="Category 3"
          onPress={() => setCategory('Category 3')}
        />
        <Button
          title="Category 4"
          onPress={() => setCategory('Category 4')}
        />
        <Button
          title="Category 5"
          onPress={() => setCategory('Category 5')}
        />
      </View>
      <FlatList
        data={products.filter(product => product.category === category)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetails', {
                productId: item.id,
              })
            }
          >
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
}

export default CategoryScreen;
