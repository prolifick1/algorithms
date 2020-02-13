const {expect} = require('chai')
const updateFileNames = require('../src/updateFileNames')

describe('Update File Names Implementation', ()=>{

  /*
  const beforeGroup = '
  photo.jpg, Warsaw, 2013-09-05 14:08:15\n => 04
  friends.png, London, 2014-04-03 12:29:33\n => 3
  love.jpeg, Paris, 2016-07-06 03:04:18\n => 1
  food.jpg, Warsaw, 2013-09-05 14:07:13\n => 03
  travel.jpg, Warsaw, 2014-05-03 11:08:05\n => 10
  friends.png, London, 2014-04-01 08:07:13\n => 1
  croissant.jpeg, Paris, 2016-07-08 04:17:22\n => 2
  tube.png, London, 2014-04-02 10:30:40\n => 2
  photo.jpg, Warsaw, 2013-09-08 07:51:15\n => 07
  queen.png, London, 2014-04-03 12:30:33\n => 4
  mood.jpg, Warsaw, 2013-09-05 22:22:11\n => 05
  taxi.jpg, Warsaw, 2013-09-09 09:03:43\n => 08
  dinner.jpg, Warsaw, 2013-09-05 11:18:15\n => 01
  hotel.jpg, Warsaw, 2013-09-05 23:37:52\n => 06
  bar.png, London, 2014-04-05 18:07:47\n => 5
  museum.jpg, Warsaw, 2013-09-05 13:08:15\n => 02
  art.jpg, Warsaw, 2013-09-09 12:04:55\n => 09
  '
*/
/*
  const afterGroup = '
    Warsaw04.jpg\n
    London3.png\n
    Paris1.jpeg\n
    Warsaw03.jpg\n
    Warsaw10.jpg\n
    London1.png\n
    Paris2.jpeg\n
    London2.png\n
    Warsaw07.jpg\n
    London4.png\n
    Warsaw05.jpg\n
    Warsaw08.jpg\n
    Warsaw01.jpg\n
    Warsaw06.jpg\n
    London5.png\n
    Warsaw02.jpg\n
    Warsaw09.jpg\n
    '
  */
  const beforeSingle = 'photo.jpg, Warsaw, 2013-09-05 14:08:15'
  const afterSingle = 'Warsaw1.jpg'

  const beforeGroup = `photo.jpg, Warsaw, 2013-09-05 14:08:15\nfriends.png, London, 2014-04-03 12:29:33\nlove.jpeg, Paris, 2016-07-06 03:04:18\nfood.jpg, Warsaw, 2013-09-05 14:07:13\ntravel.jpg, Warsaw, 2014-05-03 11:08:05\nfriends.png, London, 2014-04-01 08:07:13\ncroissant.jpeg, Paris, 2016-07-08 04:17:22\ntube.png, London, 2014-04-02 10:30:40\nphoto.jpg, Warsaw, 2013-09-08 07:51:15\nqueen.png, London, 2014-04-03 12:30:33\nmood.jpg, Warsaw, 2013-09-05 22:22:11\ntaxi.jpg, Warsaw, 2013-09-09 09:03:43\ndinner.jpg, Warsaw, 2013-09-05 11:18:15\nhotel.jpg, Warsaw, 2013-09-05 23:37:52\nbar.png, London, 2014-04-05 18:07:47\nmuseum.jpg, Warsaw, 2013-09-05 13:08:15\nart.jpg, Warsaw, 2013-09-09 12:04:55`
  const afterGroup = 'Warsaw04.jpg\nLondon3.png\nParis1.jpeg\nWarsaw03.jpg\nWarsaw10.jpg\nLondon1.png\nParis2.jpeg\nLondon2.png\nWarsaw07.jpg\nLondon4.png\nWarsaw05.jpg\nWarsaw08.jpg\nWarsaw01.jpg\nWarsaw06.jpg\nLondon5.png\nWarsaw02.jpg\nWarsaw09.jpg'

  it('Expect file names to be updated to correct format', ()=>{
    expect(updateFileNames(beforeSingle)).to.equal(afterSingle)
  })

   it('Expect files to be returned in the same order', () => {
    expect(updateFileNames(beforeGroup)).to.equal(afterGroup)
   })

})
