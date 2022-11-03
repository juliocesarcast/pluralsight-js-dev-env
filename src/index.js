import './index.css';

import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
   let usersBody = "";

   result.forEach(user => {
      //We use ` so we are able to create a string on multiple lines
      usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
   });

   global.document.getElementById('users').innerHTML = usersBody;
});
