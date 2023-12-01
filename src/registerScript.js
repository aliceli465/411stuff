async function registerUser() {
    // Get the form data
    const form = document.getElementById('loginForm');
    const formData = new FormData(form);
  
    try {
      // Make a POST request to the /register endpoint
      const response = await fetch('http://34.73.45.209/register', {
        method: 'POST',
        body: formData
      });
  
      const data = await response.json(); 
      console.log(data);//log response if needed
  
      //go to profile2
      window.location.href = 'profile2.html';
  
      //if we got a response that user already exists
      if (data === 'User already exists') {
        window.alert("user already exists yayyyy");
        // const searchesDiv = document.getElementById('searches');
        // searchesDiv.innerHTML = '<h2>Your Past Searches</h2>' + getSearchesFromGCP(); // Call a function to get searches from GCP
      }
      else if(data == "User registered successfully") {
        windows.alert("user registered yayyyyy");
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
      windows.alert("DUMBASS THERES AN ERROR");
    }
  }
  
  //insert sql query here to get existing searches
  function getSearchesFromGCP() {
    
  }
  