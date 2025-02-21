import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(3, { message: "Imię musi mieć co najmniej 3 znaki." }),
    lastname: z
      .string()
      .min(3, { message: "Nazwisko musi mieć co najmniej 3 znaki." }),
    phone: z
      .string()
      .min(9, { message: "Numer telefonu musi zawierać przynajmniej 9 cyfr." })
      .regex(/^\d+$/, { message: "Numer telefonu może zawierać tylko cyfry." }),
    email: z.string().email("Niepoprawny adres email."),
    form: z.string().min(1, { message: "Wybierz formę nauki." }),
    technology: z
      .array(z.string())
      .min(1, { message: "Wybierz przynajmniej jedną technologię." }),
    cv: z
      .any()
      .refine(
        (value) => {
          if (!value || value.length === 0) {
            return false;
          }
          const file = value[0];
          return file.type === "image/jpeg" || file.type === "image/png";
        },
        { message: "Musisz dodać załącznik jako zdjęcie (JPEG lub PNG)." }
      )
      .optional(),
    hasExperience: z.boolean(),
    experiences: z
      .array(
        z.object({
          name: z.string().min(1, { message: "Wybierz technologię." }),
          years: z
            .string()
            .min(1, { message: "Wybierz ilość lat doświadczenia." }),
        })
      )
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.hasExperience &&
      (!data.experiences || data.experiences.length === 0)
    ) {
      ctx.addIssue({
        path: ["experiences"],
        message: "Gdy zaznaczono, lista doświadczeń nie może być pusta.",
        code: z.ZodIssueCode.custom,
      });
    }
  });
