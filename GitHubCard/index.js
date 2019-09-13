/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const followersArray = ['tonyrkovar'];
axios.get('https://api.github.com/users/tonyrkovar/followers')
  .then(response => {
    response.data.forEach( (obj) => {
      followersArray.push(obj.login)
    })
    followersArray.forEach( username => {
      axios.get(`https://api.github.com/users/${username}`)
        .then( res => {
          const createCards = userData(res.data);
          usersParent.appendChild(createCards);
          console.log(res);
        })
    })
    console.log(followersArray)
  })

  // map over followers array, do get request and the pur the request data into the card

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const usersParent = document.querySelector('.cards');




function userData(obj){
  //creating necessary elements
  const 
  newCard = document.createElement('div'),
  userImg = document.createElement('img'),
  info = document.createElement('div'),
  name = document.createElement('h3'),
  userName = document.createElement('p'),
  location = document.createElement('p'),
  profile = document.createElement('p'),
  profileLink = document.createElement('a'),
  followers = document.createElement('p'),
  following = document.createElement('p'),
  bio = document.createElement('p');
  calender = document.createElement('img');
  


  // setting the content fiels, need to come back and check pathing
  userImg.src = obj.avatar_url;
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = obj.location;
  profileLink.href = obj.html_url;
  profile.textContent = `Profile: ${obj.html_url}`;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  calender.src = `http://ghchart.rshah.org/${obj.login}`
  


  //adding classes to my created Elements
  newCard.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  calender.classList.add('calender');

  calender.style.width = '100%';


  // appending
  newCard.appendChild(userImg);
  newCard.appendChild(info);
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
  profile.appendChild(profileLink);
  newCard.appendChild(calender);
  
  return newCard;
}

userData(followersArray);


// console.log(userData('https://api.github.com/users/tonyrkovar/followers'));

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
