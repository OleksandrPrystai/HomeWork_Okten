const userId = location.href.split(`=`).pop();

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(resp => resp.json())
    .then(user => {
        let globalDiv = document.createElement('div');
        globalDiv.classList.add('globalDiv')
        document.body.appendChild(globalDiv)
        globalDiv.innerHTML = `
<p>Id : ${user.id}</p>
<p>Name : ${user.name}</p>
<p>Username : ${user.username}</p>
<p>Email : ${user.email}</p>
<p>Street : ${user.address.street}</p>
<p>Suite : ${user.address.suite}</p>
<p>City : ${user.address.city}</p>
<p>Zipcode : ${user.address.zipcode}</p>
<p>Lat : ${user.address.geo.lat}</p>
<p>Lng : ${user.address.geo.lng}</p>
<p>Phone : ${user.phone}</p>
<p>Website : ${user.website}</p>
<p>Company name : ${user.company.name}</p>
<p>CatchPhrase : ${user.company.catchPhrase}</p>
<p>Bs : ${user.company.bs}</p>
`
        let btnDetails = document.createElement("a");
        btnDetails.innerHTML = '<input type="button" value="post of current user">'
        btnDetails.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)

                .then(resp => resp.json())
                .then(postsTitle => {

                    for (const titleRes of postsTitle) {
                        let globalDiv2 = document.createElement('div');
                        globalDiv2.classList.add('globalDiv')
                        globalDiv2.innerHTML = `<p>${titleRes.title}</p>`
                        const btn = document.createElement("a");
                        btn.classList.add('buttonStyle')
                        btn.innerHTML = '<input type="button" value="Click">'
                        btn.onclick = () => {
                            document.location.assign(`../post-details/post-details.html?userId=${user.id}&postId=${titleRes.id}`);
                        }

                        globalDiv.append(globalDiv2, btn);


                    }

                })
        }
        globalDiv.appendChild(btnDetails)
    })

