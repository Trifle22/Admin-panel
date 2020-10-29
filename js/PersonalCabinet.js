const adminList = 
document.querySelector('.admin-list');

const getData = async function(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошиюеп по адресу ${url}, 
    Статус ошибки ${response.status}!`);
  }
  return await response.json();
}


function generateAdminList({ 
  name, 
  surname, 
  email, 
  telephone 
}) {
  const admin = `
  <li>
    <span class="admin-surname">${surname}</span>
    <span class="admin-name-li">${name}</span>
    <span class="admin-email">${email}</span>
    <span class="admin-telephone">${telephone}</span>
  </li>
  `
  const plus = `
  <li>
  <a class="plus" href="#newAdmin" rel="modal:open">
  +
  </a>
  </li>
  `
  adminList.insertAdjacentHTML('afterbegin', admin);
  
}

getData('./db/Admins.json').then(function(data) {
  data.forEach(generateAdminList);
});

