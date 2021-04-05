
function setLinks (result) {
    const tweetString = `I took the @Pathstream Find Your Path Quiz and got ${result}!`
    const tweetUrlString = `http://twitter.com/share?url=http%3A%2F%2Fhttps://find-your-path.netlify.app/%2Fcampaigns%2Ffind-your-path&via=Pathstream&text=${tweetString.replace(/ /g, "%20")}`
    const aTwitter = document.getElementsByClassName('twitter-share')
    aTwitter[1].href = tweetUrlString 
    console.log(aTwitter)

}

function handleFacebookClick (result) {
    FB.ui({
        method: 'share',
        href: 'https://find-your-path.netlify.app/',
        quote: `I got ${result}!`
    }, function(response){
        if (response) {
            console.log('Facebook post published.');
        } else {
            console.log('Facebook post was not published.');
        }
    });
    
}

