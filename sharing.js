
function setLinks (result) {
    const tweetString = `I took the @Pathstream Find Your Path Quiz and got ${result}!`
    const tweetUrlString = `http://twitter.com/share?url=http%3A%2F%2Fpathstream.com%2Fcampaigns%2Ffind-your-path&via=Pathstream&text=${tweetString.replace(/ /g, "%20")}`
    const aTwitter = document.getElementsByClassName('twitter-share')
    aTwitter[1].href = tweetUrlString 
    console.log(aTwitter)

}

function handleFacebookClick (result) {
    FB.ui({
        method: 'share',
        href: 'http://www.pathstream.com',
        quote: `I got ${result} - how cool!`
    }, function(response){
        if (response) {
            console.log('Facebook post published.');
        } else {
            console.log('Facebook post was not published.');
        }
    });
    
}

