import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {DifficultyPropsTypes} from './types';

const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard'];

const DifficultyItemsList = ({
  handleDifficultyItemPress,
}: DifficultyPropsTypes) => {
  return (
    <FlatList
      style={{maxHeight: 300}}
      data={DIFFICULTY_LEVELS}
      renderItem={({item: name}) => (
        <List.Item
          title={name}
          onPress={() => handleDifficultyItemPress(name)}
        />
      )}
    />
  );
};

export default DifficultyItemsList;
