export  const passwordValidation = (password) => {
  const lengthRegex = /.{8,}/;          
  const numberRegex = /\d/;             
  const upperCaseRegex = /[A-Z]/;       
  const lowerCaseRegex = /[a-z]/;       
  const specialCharRegex = /[!@#$%^&*]/; 

 
  const isLengthValid = lengthRegex.test(password);
  const hasNumber = numberRegex.test(password);
  const hasUpperCase = upperCaseRegex.test(password);
  const hasLowerCase = lowerCaseRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  return (
    isLengthValid &&
    hasNumber &&
    hasUpperCase &&
    hasLowerCase &&
    hasSpecialChar
  );
}