import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {CategoryPropsTypes} from './types';

const CategoryItemsList = ({
  categoriesRes,
  handleCategoryItemPress,
}: CategoryPropsTypes) => {
  return (
    <FlatList
      style={{maxHeight: 300}}
      data={categoriesRes}
      renderItem={({item}) => (
        <List.Item
          title={item.name}
          onPress={() => handleCategoryItemPress(item.name, item.id)}
        />
      )}
    />
  );
};

export default CategoryItemsList;
