import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  max-width: 490px;
  height: 40px;
  padding-left: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 1em;
  &:focus {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    transition: background 0.5s ease;
    box-shadow: 0px 0px 8px #6ea2de;
  }
  &:focus-visible {
    outline: 1px solid #535bf2;
  }
`;

export function SearchInput({ onKeywordChange }) {
  const keywordChanged = (event) => {
    onKeywordChange(event.target.value);
  };

  return (
    <div className="form_group">
      <Input
        type="input"
        placeholder="Lesson's title"
        name="search"
        id="search"
        onBlur={keywordChanged}
      />
    </div>
  );
}
