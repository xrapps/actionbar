import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import ActionBarHeader from '../components/ActionBarHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <ActionBarHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'Premier L',
          '01.05 19:30',
          'Manchester City \n' + 'Arsenal',
        )}
        {renderBroadcast(
          'La Liga',
          '03.05 20:00',
          'Barcelona \n' + 'Atletico Madrid',
        )}
        {renderBroadcast('Serie A', '05.05 21:15', 'AC Milan \n' + 'Napoli')}
        {renderBroadcast(
          'Bundesliga',
          '07.05 18:45',
          'Borussia Dortmund \n' + 'RB Leipzig',
        )}
        {renderBroadcast(
          'Ligue 1',
          '09.05 19:00',
          'Paris Saint-Germain \n' + 'AS Monaco',
        )}
        {renderBroadcast('Eredivisie', '11.05 17:30', 'Ajax \n' + 'Feyenoord')}
        {renderBroadcast(
          'MLS',
          '13.05 22:00',
          'LA Galaxy \n' + 'New York City FC',
        )}
        {renderBroadcast('Copa', '15.05 20:30', 'Boca Juniors \n' + 'Flamengo')}
        {renderBroadcast(
          'Champions L',
          '17.05 21:45',
          'Real Madrid \n' + 'Bayern Munich',
        )}
        {renderBroadcast('Euro League', '19.05 22:00', 'Liverpool \n' + 'Roma')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    paddingVertical: 5,
  },
});
