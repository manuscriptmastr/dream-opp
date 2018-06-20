import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
  opp: {
    position: 'relative',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 2,
  },
  oppBookmark: {
    position: 'absolute',
    top: 0,
    right: 2
  },
  oppHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  oppTitle: {
    fontWeight: "700",
    fontSize: 16,
    flex: 1,
    marginLeft: 10
  },
  oppAvatar: {
    width: 50,
    height: 50
  }
});

export default styles;