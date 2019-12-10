import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Card, CardSection } from '../../shared';
import { Icon } from 'react-native-elements';
import { Button } from '../../shared/Button';
import { getRandomInt } from '../../../helper/generateRandomInt';
import { images } from './fixtures';

const PeopleRow = ({data, navigation}) => {
  const index = getRandomInt(0, 4);
  return (
    <Card>
    <CardSection >
      <Image
        source={{uri: images[index].image}}
        style={styles.image}
      />
      <View style={styles.subText}>
      <View style={styles.extras}>
        <View>
          <Text style={styles.boldText}>{data.name}</Text>
          <Text style={styles.birthYear}>gender | {data.gender}</Text>
          <Text style={styles.birthYear}>height: {data.height}       mass: {data.mass} </Text>
            <View style={styles.birthdayView}>
              <Icon
              name='ios-calendar'
              type='ionicon'
              color='#26315F'
            />
              <Text style={styles.birthYear}>{data.birth_year}</Text>
            </View>
        </View>
        <Text style={styles.birthYear}>No of films: {data.films.length}</Text>
        <View style={styles.buttonContainer}>
          <Button 
            onPress={() => navigation.navigate('PeopleDetail', {data: {
              data,
              image: images[index].image
            }})}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.button}
          >
            Details
          </Button>

          <Button 
            buttonStyle={styles.outlineButtonStyle}
            textStyle={styles.outlineButton}
            >
            View Specie
          </Button>
        </View>
      
      </View>
        <Icon
            name='ios-heart-empty'
            type='ionicon'
            color='#517fa4'
          />
      </View>
      
    </CardSection>
</Card>
  );
}

const styles = StyleSheet.create({
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
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  button: {
    padding: 5, 
    textAlign: 'center', 
    color: "white"
  },
  buttonStyle: {
    backgroundColor: '#278ff7', 
    borderRadius: 5, 
    margin: 5, 
    padding: 5
  },
  outlineButtonStyle: {
    borderColor: '#278ff7', 
    borderRadius: 5, 
    margin: 5,
    padding: 5, 
    borderWidth: 1
  },
  outlineButton: {
    padding: 5, 
    textAlign: 'center', 
    color: '#26315F'
  },
  
});

export default PeopleRow;
