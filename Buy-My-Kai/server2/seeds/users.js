exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {id: 99901, name: 'Cheeky Cthulu', email: 'cthulu@hotmail.com', password: 'brains', age: '478', bio: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn", photo: 'https://vignette.wikia.nocookie.net/villains/images/7/72/Lovecraft-cthulhu.jpg/revision/latest?cb=20151128095138'},
      {id: 99902, name: 'Daisy', email: 'daisy@woof.com', password: 'dogfood', age: '12', bio: 'I like to shake things up.', photo: 'https://i.imgur.com/2Glr9sX.jpg'},
      {id: 99903, name: 'Minnie Tor', email: 'minnietor@protonmail.com', password: '0', age: '19', bio: 'I like going for walks in the Domain and getting sushi at my local.', photo: 'https://www.pixilart.com/images/art/87ec86d28d5f1ec.png'},
      {id: 99904, name: 'Ted Edwards', email: 'tededwards@gmail.com', password: '0', age: '23', bio: 'I come across as timid but am a loyal friend once you get to know me.', photo: 'http://4.bp.blogspot.com/-1LHikQffugU/ToQx0SBLODI/AAAAAAAAAcc/wJHUYTDqhMs/s1600/1614_album.jpg'},
      {id: 99905, name: 'Naughty Wombat', email: 'lovexx@textme.com', password: '0', age: '19', bio: 'I love flowers and expensive cars', photo: 'https://orig00.deviantart.net/a1fd/f/2017/319/4/0/soviet_womble_and_lulu_by_mamamoda-dbtt25i.png'},
      {id: 99906, name: 'Shy Chinchilla', email: 'callMeToday@gmail.com', password: '0', age: '10', bio: 'Very soft and gentle', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTYhXLBfnnSJDFTBJzIHGDzrac6Q9_YGznNLhg28IVylwTNJ2rA'},
      {id: 99907, name: 'Darth Vader', email: 'darkKnight@gmailCallMeLove.com', password: '0', age: '33', bio: 'Love my son Luke and to enslave the Universe', photo: 'https://nerdist.com/wp-content/uploads/2018/02/20180205_n_nerdistpresents_mastermind_vader_1x1-1.jpg'},
      {id: 99908, name: 'Ewok', email: 'loveLukeandChubaka', password: 'chewy', age: '1000', bio: 'I love chewbacca', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8p0D6F4h_WYyc4HNtYjj5d5ucgBn82jrU3YfyBe_PcC64P7wV'}
    ])
    )
}
