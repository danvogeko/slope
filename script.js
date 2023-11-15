// script.js
// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


document.getElementById('scrolltopanels').addEventListener('click', () => {
    document.getElementById('matchButton').scrollIntoView({ behavior: 'smooth' });
});


var firebaseConfig = {
    apiKey: "AIzaSyB0y4sy08kWSh3-TsVr5kw6h_3r5N5TIxc",
    authDomain: "slope-60035.firebaseapp.com",
    databaseURL: "https://slope-60035-default-rtdb.firebaseio.com",
    projectId: "slope-60035",
    storageBucket: "slope-60035.appspot.com",
    messagingSenderId: "39623942429",
    appId: "1:39623942429:web:f3e73a229a6a28bfba81f4",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scrolltopanels').addEventListener('click', () => {
    document.getElementById('panels-wrapper').scrollIntoView({ behavior: 'smooth' });
});
    loadUserProfiles('panel1');
    loadUserProfiles('panel2');
    document.getElementById('ageFilterpanel1').addEventListener('change', () => filterProfiles('panel1'));
    document.getElementById('ageFilterpanel2').addEventListener('change', () => filterProfiles('panel2'));
    document.getElementById('prefFilterpanel1').addEventListener('change', () => filterProfiles('panel1'));
    document.getElementById('prefFilterpanel2').addEventListener('change', () => filterProfiles('panel2'));
    document.getElementById('matchButton').addEventListener('click', Match);
});

function loadUserProfiles(panelID) {
    const userProfiles = document.getElementById(panelID);

    // Example users (static data for demonstration)
    const users = [
        { imageUrl: 'cornellguy0.png', name: 'Alice', age: 19, preference: 'Male', interests: 'Music, Hiking' },
        { imageUrl: 'cornellgirl1.png',name: 'Elise', age: 19, preference: 'Male', interests: 'Hiking, Movies' },
        { imageUrl: 'cornellguy1.png',name: 'Bob', age: 21, preference: 'Female', interests: 'Movies, Gaming' },
        { imageUrl: 'cornellguy2.png', name: 'David', age: 22, preference: 'Female', interests: 'Music, Tennis' },
        { imageUrl: 'cornellguy3.png',name: 'Max', age: 22, preference: 'Female', interests: 'Sports, Gaming' },
        { imageUrl: 'cornellgirl2.png',name: 'Megan', age: 20, preference: 'Male', interests: 'Movies, Music' },
        { imageUrl: 'cornellgirl5.png',name: 'Jason', age: 20, preference: 'Female', interests: 'Painting, Music' },
        { imageUrl: 'cornellgirl6.png',name: 'Lia', age: 22, preference: 'Male', interests: 'Sports, Music' },
        // Add more user profiles here
    ];

    firebase.database().ref('1PBRW3nSQ54ZNPe6whPwhkStpCRsJSxpiEMps670W72o/Users/').once('value',   function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log(childData.interests);

        const userProfile = document.createElement('div');
        userProfile.classList.add('userProfile');
        if(childData.id < users.length)
        {
            /*const imge = document.createElement('img');
            imge.src = users[childData.id].imageUrl;
            userProfile.appendChild(imge);
            */
        }
        


        userProfile.addEventListener('click', function() {
            selectProfile(userProfile, panelID);
        });
        userProfile.innerHTML += `<h3>${childData.fn}</h3><p>Age: ${childData.age}</p><p>Preferences: ${childData.preferences}</p><p>Interests: ${childData.interests}</p>`;
        userProfile.setAttribute('data-age', childData.age);
        userProfile.setAttribute('data-pref', childData.preferences);
        userProfiles.appendChild(userProfile);

      });
    });

    /*
    users.forEach(user => {
        const userProfile = document.createElement('div');
        userProfile.classList.add('userProfile');

        const imge = document.createElement('img');
        imge.src = user.imageUrl;


        userProfile.addEventListener('click', function() {
            selectProfile(userProfile, panelID);
        });

        userProfile.appendChild(imge);
        userProfile.innerHTML += `<h3>${user.name}</h3><p>Age: ${user.age}</p><p>Preferences: ${user.preference}</p><p>Interests: ${user.interests}</p>`;
        userProfile.setAttribute('data-age', user.age);
        userProfile.setAttribute('data-pref', user.preference);
        userProfiles.appendChild(userProfile);
    }); 
    */

}

function Match() {
    // Implement matching logic here
    // This is a placeholder for demonstration
    alert('Match functionality not implemented yet.');
}



function selectProfile(profile, panelId) {
    // Deselect any previously selected profile in the same panel
    console.log("Profile clicked:", profile);
    document.querySelectorAll(`#${panelId} .userProfile`).forEach(p => {
        p.classList.remove('selectedProfile');
    });

    // Select the clicked profile
    profile.classList.add('selectedProfile');
}

function filterProfiles(panelId) {
    const agefilterValue = document.getElementById(`ageFilter${panelId}`).value;
    const preffilterValue = document.getElementById(`prefFilter${panelId}`).value;
    const profiles = document.querySelectorAll(`#${panelId} .userProfile`);
    
    profiles.forEach(profile => {
        const age = parseInt(profile.getAttribute('data-age'), 10);
        const pref = profile.getAttribute('data-pref');
        if ((preffilterValue === 'all' || preffilterValue === pref) && (agefilterValue === 'all' || isAgeInRange(age, agefilterValue))) {
            profile.style.display = ''; // Show profile
        } 
        else
        {
            profile.style.display = 'None'; // Hide profile
        }
    });
}

function isAgeInRange(age, range) {
    if (range === '18-20') return age >= 18 && age <= 20;
    if (range === '21-23') return age >= 21 && age <= 23;
    if (range === '24+') return age >= 24;
    return false;
} 

