import dayjs from "dayjs";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BACKEND_DATE_FORMAT, DATE_FORMAT } from "../../data/constants";
import { useEditUserMutation } from "../../store/api/users";
import { useFormRules } from "../../store/hooks";
import { IUser } from "../../types";
import { SubmitLoadingButton } from "../loadingButton";
import { DateController } from "./DateController";
import { InputController } from "./InputController";

interface Props {
  user: IUser;
  onSuccess: () => void;
}

export const EditUserForm: React.FC<Props> = ({ user, onSuccess }) => {
  const [editUser, { isSuccess, isLoading }] = useEditUserMutation();

  useEffect(() => {
    isSuccess && onSuccess();
  }, [isSuccess, onSuccess]);

  const {
    nameRules,
    emailRules,
    birthdayDateRules,
    phoneNumberRules,
    addressRules,
  } = useFormRules();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IUser>({
    mode: "onChange",
    defaultValues: {
      id: user.id,
      name: user.name,
      email: user.email,
      birthday_date: dayjs(user.birthday_date, BACKEND_DATE_FORMAT).format(
        DATE_FORMAT
      ),
      phone_number: user.phone_number,
      address: user.address,
    },
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (isValid) {
      editUser(data);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputController
        name="name"
        label="Name"
        rules={nameRules}
        control={control}
      />
      <InputController
        name="email"
        label="Email"
        rules={emailRules}
        control={control}
      />
      <DateController
        name="birthday_date"
        label="Birthday date"
        rules={birthdayDateRules}
        control={control}
      />
      <InputController
        name="phone_number"
        label="Phone number"
        rules={phoneNumberRules}
        control={control}
      />
      <InputController
        name="address"
        label="Address"
        rules={addressRules}
        control={control}
      />
      <SubmitLoadingButton label="Update" isLoading={isLoading} />
    </form>
  );
};
