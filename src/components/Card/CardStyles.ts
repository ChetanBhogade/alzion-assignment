import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  cardImage: {
    width: 116,
    height: 150,
  },
  infoArea: {
    width: '80%',
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#9CE5CB',
    borderRadius: 18,
  },
  cardTag: {
    fontSize: 14,
    color: '#002140',
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#002140',
  },
  likeIcon: {
    width: 24,
    height: 21,
  },
  cartIcon: {
    width: 56,
    height: 56,
  },
  actionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002140',
  },
  cardImageArea: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
