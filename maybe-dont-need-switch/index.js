function getUserRole(role) {
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
