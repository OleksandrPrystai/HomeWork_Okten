let params = (new URL(document.location)).searchParams;
let userId = params.get('userId');
let postId = params.get('postId');


fetch(`https://jsonplaceholder.typicode.com/user/${userId}/posts?id=${postId}`)
    .then(resp => resp.json())
    .then(userPost => {
        for (const userPostElement of userPost) {
            let globalDiv = document.createElement('div');
            globalDiv.classList.add('globalDiv')
            globalDiv.innerHTML = `
<p>${userPostElement.title}</p>
<p>UserId = ${userPostElement.userId}</p>
<p>Id = ${userPostElement.id}</p>
<p>${userPostElement.body}</p>`
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(resp => resp.json())
                .then(userPost1 => {
                    for (const userPost1Element of userPost1) {
                        let globalDiv2 = document.createElement('div');
                        globalDiv2.classList.add('globalDiv')
                        globalDiv2.innerHTML = `
<p>Id = ${userPost1Element.id}</p>
<p>Name = ${userPost1Element.name}</p>
<p>Email = ${userPost1Element.email}</p>
<p>${userPost1Element.body}</p>`

                        document.body.appendChild(globalDiv2);
                    }

                })


            document.body.appendChild(globalDiv)
        }
    })