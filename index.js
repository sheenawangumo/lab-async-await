// Write your code here!
function displayPosts(posts) {

    const postList = document.getElementById('post-list');
    posts.forEach(post => {const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElemnt ('p')
    p.textcontent = post.body;

    li.appendChild("h1");
    li.appendChild('p');
    postList.appendChild('li');
    }
   );
}

async function fetchAndDisplay(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json ();
    }
    catch(error){
        console.log('Oops, something went wrong:', error);
    }
  
}

fetchAndDisplay();
displayPosts();

