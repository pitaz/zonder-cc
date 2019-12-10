import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, Dimensions, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native';
import { fetchPeople } from '../../../redux/actions/people';
import PeopleRow from './PeopleRow';
import { Spinner } from '../../shared';
import { trimHttpURL } from '../../../helper/trimHttpUrl';


const People = (props) => {
  const [peopleData, setPeopleData] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [contentUrl, setContentUrl] = useState('people');
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false)

  /**
   * fetch data
   */
  const getAll = async() => {
    const { getPeople, data } = props;
    const url = contentUrl;
    const result = await getPeople(url);
    if(result) {
      setIsRefreshing(false);
      setLoadingMore(false);
      const resultData = page === 1 ? result.payload : {...peopleData, ...result.payload}
      setPeopleData(resultData);
    }
  }

 
 /**
   * fetch data
   */
  const onRefresh = () => {
    const nextPage =  trimHttpURL(peopleData && peopleData.next);
    setContentUrl(nextPage);
    setIsRefreshing(true);
    getAll();
  }

  const handleLoadMore = () => {
    const nextPage =  trimHttpURL(peopleData && peopleData.next);
    setPage(page + 1);
    setContentUrl(nextPage);
    setIsRefreshing(true);
    setLoadingMore(true);
    getAll();
  }

  const renderFooter = () => {
    if (!loadingMore) return null;

    return (
      <View
        style={styles.footerStyle}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  useEffect(() => {
    getAll();
  }, []);


  if (!props.loading && peopleData) {
		return <View style={styles.spinnerView}><Spinner /></View>;
	}
  return ( 
    <View style={styles.main}>
    {
      peopleData && peopleData.results && peopleData.results.length === 0 
      ? <Text style={{...styles.boldText, textAlign: 'center', textAlignVertical: 'center'}}>No results returned</Text>
      : (
        <FlatList
        onRefresh={() => onRefresh()}
        refreshing={isRefreshing}
        data={peopleData && peopleData.results}
        renderItem={({ item }) => <PeopleRow data={item} navigation={props.navigation} />}
        keyExtractor={(item, index )=> index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={ () => handleLoadMore()}
        initialNumToRender={10}
        ListFooterComponent={() => renderFooter()}
      />
      )
    }

   </View>
   );
}

const styles = StyleSheet.create({
  spinnerView: {
    width: '100%',
    height: '100%'
  },
  subText: {
    flex:1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  boldText: {
    fontSize: 18,
    color: '#26315F',
    fontFamily: 'Raleway',
    marginLeft: 5,
    padding: 5,
  }, 
  birthYear: {
    fontSize: 12,
    color: '#26315F',
    marginLeft: 5,
    padding: 5,
    fontFamily: 'Raleway'
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  image: {
    width: 100, 
    height: '95%', 
    padding: 10, 
    alignSelf: 'center', 
    borderRadius: 5
  }, 
  birthdayView: {
    flexDirection: 'row', 
    marginLeft: 9
  },
  extrasAlignment: {
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  buttonStyle: {
    backgroundColor: '#278ff7', 
    borderRadius: 5, 
    margin: 5, 
    padding: 5
  },
  footerStyle: {
    position: 'relative',
    width: "100%",
    height: 200,
    paddingVertical: 20,
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  }
});


const mapStateToProps = ({people}) => ({
...people
});

const mapDispatchToProps = {
  getPeople: fetchPeople
}
 
export default connect(mapStateToProps, mapDispatchToProps)(People);
