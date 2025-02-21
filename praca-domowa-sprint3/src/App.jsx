import Form from "./assets/Components/Form";
import { useState } from "react";

import Result from "./assets/Components/Result";

import { Container, Title } from "./assets/Styles/AppStyles";

function App() {
  const [userData, setUserData] = useState("");

  const handleUserDataUpdate = (data) => {
    setUserData(data);
  };

  return (
    <>
      <Container>
        <Title>Formularz zgłoszeniowy na kurs programowania </Title>

        {userData ? (
          <Result userData={userData} />
        ) : (
          <Form onDataUpdate={handleUserDataUpdate} />
        )}
      </Container>
    </>
  );
}

export default App;
