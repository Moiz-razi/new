const parentNode = document.getElementById('listOfUsers');
const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user.email}')> Delete User </button> 
    <button onclick=editUser('${user.email}','${user.name}')> Edit User </button>
    </li>`

parentNode.innerHTML = parentNode.innerHTML+childHTML;
function removeUserFromScreen(emailId){

parentNode.removeChild(childNodeToBeDeleted)
}

function editUser(emailId, name) {
document.getElementById('email').value=emailId;
document.getElementById('name').value=name;

deleteUser(emailId)

}
