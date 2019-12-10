import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { films } from '../People/fixtures';
import { getRandomInt } from '../../../helper/generateRandomInt';

const PeopleDetail = (props) => {
  const data = props.navigation.getParam('data', 'default');
  
  return ( 
    <ScrollView>
      <View>
          <View>
          <ImageBackground
              source={{uri: data.image}}
              style={styles.imageBackground}
              resizeMode="cover"
            >
            <View style={styles.menuIconRow}>
              <Icon
                name='ios-arrow-back'
                type='ionicon'
                color='#fff'
                backgroundColor="#7e858c78"
                iconStyle={{
                  top: 50,
                  padding: 15,
                  backgroundColor: '#7e858c78'
                }}
              />
              <Icon
              name='md-bookmark'
              type='ionicon'
              color='#fff'
              backgroundColor="#7e858c78"
              iconStyle={{
                top: 50,
                padding: 15,
                backgroundColor: '#7e858c78'
              }}
            />
            </View>
            </ImageBackground>


              <View style={styles.body}>
                <Text style={styles.boldText}>{data.data.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                          name='ios-calendar'
                          type='ionicon'
                          color='#26315F'
                          iconStyle={{
                            marginLeft: 9
                          }}
                      />
                      <Text style={styles.birthYear}>{data.data.birth_year}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                          <Icon
                            name='ios-globe'
                            type='ionicon'
                            color='#26315F'
                            iconStyle={{
                              marginLeft: 9
                            }}
                          />
                      <Text style={styles.birthYear}>Featured films: {data.data.films.length}</Text>
                    </View>
                </View>
                <View>
                  <Text style={{...styles.birthYear, marginTop: 20}}>Description</Text>
                  <Text style={styles.birthYear}>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
                  </View>
                  
                  
                  <View style={styles.films}>
                  <Text style={{...styles.birthYear, marginTop: 20}}>Films</Text>
                    <View style={styles.filmsRow}>
                    {
                      data.data && data.data.films.map((item, index) => {
                        const filmIndex = getRandomInt(0, 3);
                       return (
                         <Image
                         key={index}
                          source={{uri: films[filmIndex].image}}
                          style={styles.filmsImage}
                        />
                      );
                      })
                    }

                   
                   { 
                }
                    </View>
                  </View>

              </View>
          </View>
      </View> 
    </ScrollView>
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
    fontSize: 24,
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
  imageBackground: {
    width: '100%', 
    height: 400
  },
  menuIconRow: {
    flexDirection: 'row', 
    padding: 5, 
    justifyContent: 'space-between'
  },
  body: {
    padding: 10
  },
  films: {
    flex: 1
  },
  filmsRow: {
    flexDirection: 'row', 
    alignSelf: 'center',
    flexWrap: 'wrap'
  },
  filmsImage: {
    width: '48%', 
    height: 100, 
    padding: 2, 
    borderRadius: 5, 
    margin: 2
  }
})
 
export default PeopleDetail;
