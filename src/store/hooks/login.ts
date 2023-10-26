import {
  MAX_PASSWORD_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
} from "../../data/constants";

const usernameRules = {
  required: "Enter the username",
  maxLength: {
    value: MAX_USERNAME_LENGTH,
    message: `Username must be less than ${MAX_USERNAME_LENGTH} characters`,
  },
  minLength: {
    value: MIN_USERNAME_LENGTH,
    message: `Username must be at least ${MIN_USERNAME_LENGTH} character long`,
  },
  validate: {
    minLengthWithoutSpaces: (value?: string) => {
      if (value) {
        if (value.startsWith(" ") || value.endsWith(" ")) {
          return "Username can't start or end with spaces";
        }
        if (value.trim().length < MIN_USERNAME_LENGTH) {
          return `Username must be at least ${MIN_USERNAME_LENGTH} character long`;
        }
      }
    },
  },
};

const passwordRules = {
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
    },
  },
};

export const useLoginRules = () => ({
  usernameRules,
  passwordRules,
});
