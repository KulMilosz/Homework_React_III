import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../Validation/zodSchema";

import {
  FormContainer,
  SectionTitle,
  Input,
  Button,
  RadioWrapper,
  Select,
  Error,
  CheckBox,
  ExperienceWrapper,
  ExperienceSelect,
  DeleteButton,
} from "../Styles/FormStyles";

const initialExperiences = { name: "JavaScript", years: "1" };

const Form = ({ onDataUpdate }) => {
  const { register, handleSubmit, reset, control, formState } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      form: "Online",
    },
  });

  const { errors } = formState;

  const [experienceButton, setExperienceButton] = useState(false);

  const showExperienceButton = () => {
    setExperienceButton(!experienceButton);
  };

  const onSubmit = (data) => {
    onDataUpdate(data);
    console.log(data);
    reset();
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <SectionTitle>Dane osobowe</SectionTitle>
        <div>
          <Input {...register("name")} id="name" placeholder="Imię" />
          {errors?.name && <Error>{errors.name.message}</Error>}
        </div>
        <div>
          <Input
            {...register("lastname", { required: true })}
            id="lastname"
            placeholder="Nazwisko"
          />
          {errors?.lastname && <Error>{errors.lastname.message}</Error>}
        </div>
        <div>
          <Input {...register("email")} id="email" placeholder="E-mail" />
          {errors?.email && <Error>{errors.email.message}</Error>}
        </div>
        <div>
          <Input
            {...register("phone")}
            id="phone"
            placeholder="Numer telefonu"
          />
          {errors?.phone && <Error>{errors.phone.message}</Error>}
        </div>

        <SectionTitle>Preferencje kursu</SectionTitle>
        <div>
          <RadioWrapper>
            <span>Wybierz formę nauki:</span>
            <label>
              <input
                {...register("form")}
                id="stacjonarna"
                type="radio"
                value="Stacjonarna"
              />
              Stacjonarna
            </label>
            <label>
              <input
                {...register("form")}
                id="online"
                type="radio"
                value="Online"
              />
              Online
            </label>
          </RadioWrapper>
          {errors?.form && <Error>{errors.form.message}</Error>}
        </div>
        <div>
          <Select {...register("technology")} size={5} multiple>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Next.js">Next.js</option>
          </Select>
          {errors?.technology && <Error>{errors.technology.message}</Error>}
        </div>

        <SectionTitle>Dodaj swoje CV</SectionTitle>
        <div>
          <Input {...register("cv")} type="file" name="cv" />
          {errors?.cv && <Error>{errors.cv.message}</Error>}
        </div>

        <SectionTitle>Doświadczenie w programowaniu</SectionTitle>
        <div>
          <CheckBox>
            <input
              {...register("hasExperience")}
              type="checkbox"
              onChange={showExperienceButton}
            />
            Czy masz doświadczenie w programowaniu?
          </CheckBox>
          {errors?.checkbox && <Error>{errors.checkbox.message}</Error>}
        </div>

        {experienceButton && (
          <div>
            <Button
              type="button"
              onClick={() => append(initialExperiences)}
              style={{ backgroundColor: "#4caf50" }}
            >
              Dodaj doświadczenie
            </Button>
            {errors.experiences && <Error>{errors.experiences.message}</Error>}

            {fields.map(({ id }, index) => (
              <div key={id}>
                <ExperienceWrapper>
                  <ExperienceSelect
                    {...register(`experiences.${index}.name`)}
                    id="name"
                  >
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>C++</option>
                    <option>Inne</option>
                  </ExperienceSelect>

                  <ExperienceSelect
                    {...register(`experiences.${index}.years`)}
                    id="years"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </ExperienceSelect>

                  <DeleteButton type="button" onClick={() => remove(index)}>
                    Usuń
                  </DeleteButton>
                </ExperienceWrapper>
              </div>
            ))}
          </div>
        )}

        <Button type="submit">Wyślij zgłoszenie</Button>
      </FormContainer>
    </form>
  );
};

export default Form;
