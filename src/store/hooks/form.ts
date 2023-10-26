import dayjs from "dayjs";
import {
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PHONE_NUMBER_LENGTH,
  MIN_ADDRESS_LENGTH,
  MIN_DATE,
  MIN_EMAIL_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PHONE_NUMBER_LENGTH,
} from "../../data/constants";

const nameRules = {
  required: "Enter the name",
  maxLength: {
    value: MAX_NAME_LENGTH,
    message: `Name must be less than ${MAX_NAME_LENGTH} characters`,
  },
  minLength: {
    value: MIN_NAME_LENGTH,
    message: `Name must be at least ${MIN_NAME_LENGTH} character long`,
  },
  validate: {
    minLengthWithoutSpaces: (value?: string) => {
      if (value) {
        if (value.startsWith(" ") || value.endsWith(" ")) {
          return "Name can't start or end with spaces";
        }
        if (value.trim().length < MIN_NAME_LENGTH) {
          return `Name must be at least ${MIN_NAME_LENGTH} character long`;
        }
      }
    },
  },
};

const emailRules = {
  required: "Enter the email",
  maxLength: {
    value: MAX_EMAIL_LENGTH,
    message: `Email must be less than ${MAX_EMAIL_LENGTH} characters`,
  },
  minLength: {
    value: MIN_EMAIL_LENGTH,
    message: `Email must be at least ${MIN_EMAIL_LENGTH} character long`,
  },
  shouldFocus: true,
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: "Invalid email format",
  },
  validate: {
    minLengthWithoutSpaces: (value?: string) => {
      if (value) {
        if (value.includes(" ")) {
          return "Email can't contain spaces";
        }
        if (value.trim().length < MIN_EMAIL_LENGTH) {
          return `Email must be at least ${MIN_EMAIL_LENGTH} character long`;
        }
      }
    },
  },
};

const birthdayDateRules = {
  required: "Enter the date",
  shouldFocus: true,
  pattern: {
    value: /^\d{4}-\d{2}-\d{2}$/,
    message: `Invalid date`,
  },
  validate: {
    limitDates: (value?: string) => {
      if (value) {
        if (
          dayjs(value).isBefore(MIN_DATE) ||
          dayjs(value).isAfter(dayjs().endOf("day"))
        ) {
          return "Invalid date range";
        }
      }
    },
  },
};

const phoneNumberRules = {
  required: "Enter the phone number",
  maxLength: {
    value: MAX_PHONE_NUMBER_LENGTH,
    message: `Phone number must be less than ${MAX_PHONE_NUMBER_LENGTH} characters`,
  },
  minLength: {
    value: MIN_PHONE_NUMBER_LENGTH,
    message: `Phone number must be at least ${MIN_PHONE_NUMBER_LENGTH} character long`,
  },
  shouldFocus: true,
  pattern: {
    value: /^\+?[0-9]{3}-?[0-9]{6,12}$/,
    message: "Invalid phone number format",
  },
  validate: {
    minLengthWithoutSpaces: (value?: string) => {
      if (value) {
        if (value.includes(" ")) {
          return "Phone number can't contain spaces";
        }
        if (value.trim().length < MIN_PHONE_NUMBER_LENGTH) {
          return `Phone number must be at least ${MIN_PHONE_NUMBER_LENGTH} character long`;
        }
      }
    },
  },
};

const addressRules = {
  required: "Enter the address",
  minLength: {
    value: MIN_ADDRESS_LENGTH,
    message: `Address must be at least ${MIN_ADDRESS_LENGTH} character long`,
  },
  shouldFocus: true,
  validate: {
    minLengthWithoutSpaces: (value?: string) => {
      if (value) {
        if (value.startsWith(" ") || value.endsWith(" ")) {
          return "Address can't start or end with spaces";
        }
        if (value.trim().length < MIN_ADDRESS_LENGTH) {
          return `Address must be at least ${MIN_ADDRESS_LENGTH} character long`;
        }
      }
    },
  },
};

export const useFormRules = () => ({
  nameRules,
  emailRules,
  birthdayDateRules,
  phoneNumberRules,
  addressRules,
});
