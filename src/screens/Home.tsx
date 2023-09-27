import {useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {List, Button} from 'react-native-paper';
// import useFetchCategories from '../services/useFetchCategories';
import useFetchQuestionsCount from '../services/useFetchQuestionsCount';
import useFetchQuestions from '../services/useFetchQuestions';
import {TOKEN} from '../services/utils/constants';

const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard'];

const Home = () => {
  const {questionsCountRes, countLoading, countError, fetchQuestionsCount} =
    useFetchQuestionsCount();
  const {questionsRes, questionsLoading, questionsError, fetchQuestions} =
    useFetchQuestions();

  const [categoryId, setCategoryId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');

  useEffect(() => {
    if (questionsCountRes) {
      const amount = questionsCountRes < 10 ? questionsCountRes : 10;
      const category = categoryId;
      const token = TOKEN;
      fetchQuestions({amount, category, difficulty, token});
    }
  }, [questionsCountRes, categoryId, difficulty, fetchQuestions]);

  useEffect(() => {
    if (questionsRes) {
      console.log(
        questionsRes,
        'questionsRes...................................',
      );
    }
  }, [questionsRes]);

  const onCategoryIdChange = (val: number) => {
    setCategoryId(val);
  };
  const onDifficultyChange = (val: string) => {
    setDifficulty(val);
  };

  const handleStartTestPress = () => {
    fetchQuestionsCount({categoryId, difficulty});
    console.log('pressed');
  };

  if (countLoading || questionsLoading) return <Loading />;

  if (countError || questionsError) {
    console.log(countError);
    console.log(questionsError);

    return <Error />;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        gap: 70,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: 'red',
          fontSize: 40,
          marginTop: '30%',
          fontWeight: '700',
        }}>
        Sweeft Test
      </Text>

      <Accordion {...{onCategoryIdChange, onDifficultyChange}} />

      <Button
        disabled={!categoryId || !difficulty}
        contentStyle={{paddingVertical: 10, paddingHorizontal: 70}}
        // contentStyle={{
        //   paddingVertical: '2%',
        //   paddingHorizontal: '25%',
        // }}
        style={{
          // borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          // marginBottom: '20%',
        }}
        icon="camera"
        mode="contained"
        onPress={handleStartTestPress}>
        Press me
      </Button>
    </View>
  );
};

export default Home;

type AccordionPropsTypes = {
  onCategoryIdChange: (id: number) => void;
  onDifficultyChange: (val: string) => void;
};

const Accordion = ({
  onCategoryIdChange,
  onDifficultyChange,
}: AccordionPropsTypes) => {
  // const {categoriesRes, categoriesLoading, categoriesError} =
  //   useFetchCategories();

  const [expandedCategory, setExpandedCategory] = useState(false);
  const [expandedDifficulty, setExpandedDifficulty] = useState(false);

  const [categoryTitle, setCategoryTitle] = useState<string | number>(
    'Select Category',
  );
  const [difficultyTitle, setDifficultyTitle] =
    useState<string>('Select Difficulty');

  const handleCategoryPress = () => {
    setExpandedCategory(prevState => !prevState);
  };
  const handleCategoryItemPress = (name: string, id: number) => {
    setCategoryTitle(name);
    onCategoryIdChange(id);
    setExpandedCategory(prevState => !prevState);
  };

  const handleDifficultyPress = () => {
    setExpandedDifficulty(prevState => !prevState);
  };
  const handleDifficultyItemPress = (item: string) => {
    setDifficultyTitle(item);
    onDifficultyChange(item[0].toLowerCase() + item.slice(1));
    setExpandedDifficulty(prevState => !prevState);
  };

  // if (categoriesLoading) return <Loading />;

  // if (categoriesError) {
  //   console.log(categoriesError);

  //   return <Error />;
  // }

  return (
    <List.Section
      style={{
        gap: 20,
        width: '80%',
      }}>
      <List.Accordion
        titleStyle={{color: 'red'}}
        style={{
          backgroundColor: 'white',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 0.5,
        }}
        title={categoryTitle}
        expanded={expandedCategory}
        onPress={handleCategoryPress}>
        <ScrollView style={{maxHeight: 300}}>
          {DUMMY.map(({name, id}) => {
            return (
              <List.Item
                key={id}
                title={name}
                onPress={() => handleCategoryItemPress(name, id)}
                style={{backgroundColor: 'grey'}}
              />
            );
          })}
        </ScrollView>
      </List.Accordion>

      <List.Accordion
        titleStyle={{color: 'red'}}
        style={{
          backgroundColor: 'white',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 0.5,
        }}
        title={difficultyTitle}
        expanded={expandedDifficulty}
        onPress={handleDifficultyPress}>
        <ScrollView style={{maxHeight: 300}}>
          {DIFFICULTY_LEVELS.map(name => {
            return (
              <List.Item
                key={name}
                title={name}
                onPress={() => handleDifficultyItemPress(name)}
                style={{backgroundColor: 'grey'}}
              />
            );
          })}
        </ScrollView>
      </List.Accordion>
    </List.Section>
  );
};

const Error = () => {
  return <Text>Something went wrong, try again later</Text>;
};

const Loading = () => {
  return <Text>Loading...</Text>;
};

// const ListView

// const ListItem = ({
//   handler,
//   name,
//   id,
// }: {
//   handler: (name: string, id: number) => void;
//   // handler: (val: any) => void;
//   name: string;
//   id?: number;
// }) => {
//   return (
//     <List.Item
//       key={id ? id : name}
//       title={name}
//       onPress={() => handler(id ? id : name)}
//       style={{backgroundColor: 'grey'}}
//     />
//   );
// };

// <List.Item
//   key={id}
//   title={name}
//   onPress={() => handleCategoryItemPress(id)}
//   style={{backgroundColor: 'grey'}}
// />

// <List.Item
//   key={name}
//   title={name}
//   onPress={() => handleDifficultyItemPress(name)}
//   style={{backgroundColor: 'grey'}}
// />

const DUMMY = [
  {
    id: 9,
    name: 'General Knowledge',
  },
  {
    id: 10,
    name: 'Entertainment: Books',
  },
  {
    id: 11,
    name: 'Entertainment: Film',
  },
  {
    id: 12,
    name: 'Entertainment: Music',
  },
  {
    id: 13,
    name: 'Entertainment: Musicals & Theatres',
  },
  {
    id: 14,
    name: 'Entertainment: Television',
  },
  {
    id: 15,
    name: 'Entertainment: Video Games',
  },
  {
    id: 16,
    name: 'Entertainment: Board Games',
  },
  {
    id: 17,
    name: 'Science & Nature',
  },
  {
    id: 18,
    name: 'Science: Computers',
  },
  {
    id: 19,
    name: 'Science: Mathematics',
  },
  {
    id: 20,
    name: 'Mythology',
  },
  {
    id: 21,
    name: 'Sports',
  },
  {
    id: 22,
    name: 'Geography',
  },
  {
    id: 23,
    name: 'History',
  },
  {
    id: 24,
    name: 'Politics',
  },
  {
    id: 25,
    name: 'Art',
  },
  {
    id: 26,
    name: 'Celebrities',
  },
  {
    id: 27,
    name: 'Animals',
  },
  {
    id: 28,
    name: 'Vehicles',
  },
  {
    id: 29,
    name: 'Entertainment: Comics',
  },
  {
    id: 30,
    name: 'Science: Gadgets',
  },
  {
    id: 31,
    name: 'Entertainment: Japanese Anime & Manga',
  },
  {
    id: 32,
    name: 'Entertainment: Cartoon & Animations',
  },
];
