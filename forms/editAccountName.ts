import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

export const editAccountNameSchema = object({
  name: string({ required_error: "Name is required", invalid_type_error: "Name must be a string" })
    .trim()
    .min(1, "Name must be between 1 and 50 characters long")
    .max(50, "Name must be between 1 and 50 characters long")
    .regex(/^[A-Za-z0-9]+$/, "Field can only include letters and numbers"),
});

export type EditAccountNameSchemaType = TypeOf<typeof editAccountNameSchema>;

export const useEditAccountNameForm = (defaultValues: DefaultValues<EditAccountNameSchemaType>) => {
  return useForm<EditAccountNameSchemaType>({
    mode: "all",
    resolver: zodResolver(editAccountNameSchema),
    defaultValues,
  });
};
