import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../../data/constants";

export const useUsernameRules = () => ({
  required: "Enter the username",
  maxLength: {
    value: MAX_NAME_LENGTH,
    message: `Username must be less than ${MAX_NAME_LENGTH} characters`,
  },
  minLength: {
    value: MIN_NAME_LENGTH,
    message: `Username must be at least ${MIN_NAME_LENGTH} character long`,
  },
  validate: {
    minLengthWithoutSpaces: (value: string) => {
      if (value.startsWith(" ") || value.endsWith(" ")) {
        return "Username can't start or end with spaces";
      }
      if (value.trim().length < MIN_NAME_LENGTH) {
        return `Username must be at least ${MIN_NAME_LENGTH} character long`;
      }
      return true;
    },
  },
});

export const usePasswordRules = () => ({
  required: "Enter the password",
  maxLength: {
    value: MAX_PASSWORD_LENGTH,
    message: `Password must be less than ${MAX_PASSWORD_LENGTH} characters`,
  },
  minLength: {
    value: MIN_PASSWORD_LENGTH,
    message: `Password must be at least ${MIN_PASSWORD_LENGTH} character long`,
  },
  shouldFocus: true,
  validate: {
    minLengthWithoutSpaces: (value: string) => {
      if (value.includes(" ")) {
        return "Password can't contain spaces";
      }
      if (value.trim().length < MIN_PASSWORD_LENGTH) {
        return `Password must be at least ${MIN_PASSWORD_LENGTH} character long`;
      }
      return true;
    },
  },
});
