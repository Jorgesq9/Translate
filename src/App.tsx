import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";
import "./App.css";
import { useStore } from "./hooks/useStore";
import { reducer } from "./hooks/useStore";
import { initialState } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { InterchangeIcon } from "./components/InterchangeIcon";
import { SelectLanguage } from "./components/SelectLanguage";
import { SectionType } from "./types.d";
import { TextArea } from "./components/TextArea";
const App = () => {
  const {
    loading,
    fromLanguage,
    setFromLanguage,
    toLanguage,
    setToLanguage,
    fromText,
    setFromText,
    result,
    setResult,
    interchangeLanguages,
  } = useStore();
  return (
    <Container fluid>
      <h1>Globlal Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <SelectLanguage
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <InterchangeIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <SelectLanguage
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
