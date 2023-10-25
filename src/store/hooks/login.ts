export const useUsernameRules = () => ({
  required: "Enter the username",
  maxLength: {
    value: 150,
    message: "Username must be less than 150 characters",
  },
  minLength: {
    value: 1,
    message: "Username must be at least 1 character long",
  },
  validate: {
    minLengthWithoutSpaces: (value: string) => {
      if (value.startsWith(" ") || value.endsWith(" ")) {
        return "Username can't start or end with spaces";
      }
      if (value.trim().length < 1) {
        return "Username must be at least 1 character long";
      }
      return true;
    },
  },
});

export const usePasswordRules = () => ({
  required: "Enter the password",
  maxLength: {
    value: 128,
    message: "Password must be less than 128 characters",
  },
  minLength: {
    value: 1,
    message: "Password must be at least 1 character long",
  },
  shouldFocus: true,
  validate: {
    minLengthWithoutSpaces: (value: string) => {
      if (value.includes(" ")) {
        return "Password can't contain spaces";
      }
      if (value.trim().length < 1) {
        return "Password must be at least 1 character long";
      }
      return true;
    },
  },
});
