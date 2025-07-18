import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { People } from "@/modules/welcome/domain/People";
import { usePeopleContext } from "../context/WelcomeContextProvider";

const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  imageUrl: z
    .string()
    .min(1, "Image URL is required")
    .url("Must be a valid URL")
    .refine(
      (value) => {
        return /\.(jpe?g|png|gif|svg|webp)$/i.test(value);
      },
      { message: "Must be a valid image URL (jpg, png, gif, svg, webp)" }
    ),
});

export const useFormPeople = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<People>({
    resolver: zodResolver(schema),
  });
  const { createPeople } = usePeopleContext();

  return {
    register,
    handleSubmit,
    errors,
    reset,
    createPeople,
  };
};
