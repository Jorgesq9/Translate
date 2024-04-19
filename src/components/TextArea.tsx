import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const getPlaceHolder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Type Text";
  if (loading === true) return "Loading...";
  return "Translation";
};

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <Form.Control
      as="textarea"
      placeholder={getPlaceHolder({ type, loading })}
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      style={{ height: "100px", width: "200px" }}
      value={value}
      onChange={handleChange}
    />
  );
};
