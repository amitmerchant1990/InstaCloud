SC.initialize({
  client_id: '2a4e853698aa512be4c08db31c32dc67'
});

var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true, height: '100px' }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
  $('#embedPlayer').html(oEmbed.html)
});

$('#search_song').keyup(function(){
  var song = $('#search_song').val();

  setTimeout(playSong(song), 200);
});

function playSong(song){
  $('#embedPlayer').html('');

  SC.get('/tracks', {
    q: song, license: 'cc-by-sa'
  }).then(function(tracks) {
    console.log(tracks[0].permalink_url);

    SC.oEmbed(tracks[0].permalink_url, { auto_play: true, height: '100px' }).then(function(oEmbed) {
      console.log('oEmbed response: ', oEmbed);
      $('#embedPlayer').html(oEmbed.html)
    });
  });

}
