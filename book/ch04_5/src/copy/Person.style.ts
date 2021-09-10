import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import color from 'color';

export const styles = StyleSheet.create({
  topView: {
    height: 30,
    backgroundColor: Colors.yellow400,
  },
  view: {
    backgroundColor: Colors.lime100,
    padding: 5,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  lefrView: {padding: 5},
  avatar: {
    borderColor: color(Colors.blue500).lighten(0.5).string(),
    borderWidth: 2,
  },
  rightView: {flex: 1, padding: 5, marginRight: 10},
  name: {marginRight: 5, fontSize: 22, fontWeight: '500'},
  email: {
    textDecorationLine: 'underline',
    color: Colors.blue500,
    textDecorationColor: Colors.blue500,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    marginTop: 5,
  },
  text: {fontSize: 16},
  comments: {marginTop: 10, fontSize: 16},
  image: {marginTop: 15, height: 150},
  countsView: {
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'space-around',
  },
  touchableIcon: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  iconText: {color: Colors.deepPurple500, marginLeft: 3},
});
