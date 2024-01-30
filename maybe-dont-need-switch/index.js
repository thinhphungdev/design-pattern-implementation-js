// BAD
function getUserRole1(role) {
  switch (role) {
    case 'admin':
      return 'This User is an Admin!';
      break;
    case 'client':
      return 'This User is a Client!';
      break;
    case 'broker':
      return 'This User is a Broker!';
      break;
    case 'developer':
      return 'This User is a Developer!';
      break;
    default:
      return 'Please provide valid user role';
  }
}

getUserRole(); // 'Please provide valid user role'
getUserRole('admin'); // "This User is Admin!

// BAD with IF ELSE
function getUserRoleWithIfElse(role) {
  let userRole;
  if (role === 'admin') {
    userRole = 'This User is an Admin!';
  } else if (role === 'client') {
    userRole = 'This User is a Client!';
  } else if (role === 'broker') {
    userRole = 'This User is a Broker!';
  } else if (role === 'developer') {
    userRole = 'This User is a Broker!';
  } else {
    userRole = 'Please provide valid user role';
  }

  return `${userRole}`;
}

// with Object literals
function getUserRole(role) {
  const UserRoles = {
    admin: 'This User is an Admin!',
    client: 'This User is a Client!',
    broker: 'This User is a Broker!',
    developer: 'This User is a Developer',
    default: 'Please provide a valid user role',
  };

  return UserRoles[role] || UserRoles.default;
}

console.log(getUserRole('broker'));
