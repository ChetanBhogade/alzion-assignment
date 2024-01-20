import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  cardImage: {
    width: 227,
    height: 250,
  },
  infoArea: {
    paddingTop: 74,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: '#9CE5CB',
  },
  tag: {
    fontSize: 14,
    fontWeight: '600',
    color: '#002140',
  },
  title: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 38,
    color: '#002140',
  },
  detailContainer: {
    gap: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#002140',
  },
  sectionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#002140',
  },
  imageArea: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  actionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginTop: 32,
  },
  likeIconWrapper: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  likeIcon: {
    width: 21,
    height: 18.6,
  },
  cartIcon: {
    width: 56,
    height: 56,
  },
});
