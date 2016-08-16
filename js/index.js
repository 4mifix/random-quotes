$(document).ready(function () {
  generate();
  $('.tweet a').attr('data-text', '"'+ $ ('.wisdom').text()+'"' + " " + $('.person').text())
  function generate () {
    var quotes = ["Relation and ship two words when not used together are like a relation ship without direction.@BL", "Own the day or the day will own you.@BL", "Do not judge me by success, judge me by how many times I fell down and got back up again.@Nelson Mandella ", "Nothing is impossible, the word itself says I'am possible.@Audrey Hepburn","There are no secrets to success. It is the result of preparation, hard work, and learning from failure.@Colin Powell","If you want something you never had, then you've got to do something you've never done.@Unknown", "The sin of doing nothing is the deadliest of all the seven sins. It has been said that for evil men to accomplish their purpose it is only necessary that good men should do nothing.@John F Kennedy", "The man who views the world at 50 the same as he did at 20 has wasted 30 years of his life.@Muhammad Ali"];
    randomQuote = quotes[ Math.floor(Math.random() * quotes.length) ];
    quoteAuthor = randomQuote.split( '@' );
		$('.wisdom').text(quoteAuthor[0]);
    $('.person').text(quoteAuthor[1]);
  }

$('.newquote').on('click', function () {
    generate();
});

$('#twitter_btn').on('click', function () {
    twtbutton();
});

});

function twtbutton() {
  var message = $('.wisdom').text() + " - " + $('.person').text();
  message = message.split(' ').join('%20');
  var tweetURL = "https://twitter.com/intent/tweet?";
  window.open((tweetURL + "text=" + message), '_blank', "width=450, height=300" );
}
