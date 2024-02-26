document.addEventListener('DOMContentLoaded',function(){
    const userDataJson = localStorage.getItem('users');
    const users = JSON.parse(userDataJson);
    users.sort((a,b)=>b.score-a.score);

    const userList = document.getElementById('user-list');

    users.forEach((user,index)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.score}</td>
        `
        userList.appendChild(row);
    })
});