import {
  ResultContainer,
  SectionTitle,
  List,
  ListItem,
} from "../Styles/ResultStyles";

const Result = ({ userData }) => {
  return (
    <ResultContainer>
      <SectionTitle>Dane osobowe:</SectionTitle>
      <p>Imię: {userData.name}</p>
      <p>Nazwisko: {userData.lastname}</p>
      <p>E-mail: {userData.email}</p>
      <p>Telefon: {userData.phone}</p>

      {userData.experiences && userData.experiences.length > 0 && (
        <>
          <SectionTitle>Doświadczenie w progamowaniu:</SectionTitle>
          <List>
            {userData.experiences.map((experience, index) => (
              <ListItem key={index}>
                {`Technologia: ${experience.name} / poziom: ${experience.years}`}
              </ListItem>
            ))}
          </List>
        </>
      )}

      <SectionTitle>Preferencje Kursu:</SectionTitle>
      <p>Forma nauczania: {userData.form}</p>
      <>Preferowane technologie:</>
      <List>
        {userData.technology.map((technology, index) => (
          <ListItem key={index}>{technology}</ListItem>
        ))}
      </List>
    </ResultContainer>
  );
};

export default Result;
