fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => posts.forEach(data => {
        var apiContainer = document.getElementById('api');

        var post = document.createElement('div');
        post.classList.add('post', 'col-md-3');
        post.innerHTML = `
            <h2 style="background-color: #677D6A;">${data.title}</h2>
            <p  style="border:2px solid #D6BD98;border-radius: 2%;">${data.body}</p>
        `;
        apiContainer.appendChild(post);
    })
    )



