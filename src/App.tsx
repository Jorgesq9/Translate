import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import { useStore } from "./hooks/useStore";
import { reducer } from "./hooks/useStore";
import { initialState } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { InterchangeIcon } from "./components/InterchangeIcon";
const App = () => {
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore();
  return (
    <Container fluid>
      <h1>Globlal Translate</h1>

      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
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
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
};
export default App;
