import { validateEmail } from "App/Common/Utils";
import { errorState } from "./initial";

export const validateLogin = ({ email, password }, error, setError) => {
  const regex_space = /\s/g;
  const emailValidation = validateEmail(email);

  if (emailValidation.error) {
    setError({
      errorFor: "email",
      error: true,
      message: emailValidation.message,
    });
    return true;
  } else if (!password) {
    setError({
      errorFor: "password",
      error: true,
      message: "Password cannot be empty.",
    });
    return true;
  } else if (regex_space.test(password)) {
    setError({
      errorFor: "password",
      error: true,
      message: "Password cannot have spaces.",
    });
    return true;
  } else if (password.length < 6) {
    setError({
      errorFor: "password",
      error: true,
      message: "Password cannot be less then 6.",
    });
    return true;
  } else {
    setError(errorState);
    return false;
  }
};
