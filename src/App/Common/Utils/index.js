export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!email) return { error: true, message: "Email cannot be empty." };
  else if (!regex.test(email))
    return { error: true, message: "Email is not valid." };
  else return false;
};
