fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(userList => {
        let globalBox = document.createElement("div");
        globalBox.classList.add('globalBox');
        document.body.appendChild(globalBox);

        for (const user of userList) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDivBlock');
            userDiv.innerHTML = `
            <p>Id: ${user.id}</p><p>Name: ${user.name}</p>`


            const btn = document.createElement("a");
            btn.classList.add('buttonStyle');
            btn.innerHTML = '<input type="button" value="Click">'
            btn.onclick = () => {
                document.location.assign(`../user-details/user-details.html?userId=${user.id}`);
            }
            globalBox.append(userDiv, btn);
        }
    })
