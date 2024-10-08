import { useState } from "react";
import styled from "styled-components";

const Wraper = styled.div`
  display: flex;
  height: 84px;
  text-align: left;
  color: #bf4f74;
`;

const Input = styled.input`
  flex: 1;
  font-size: inherit;
  text-align: center;
  color: #bf4f74;
  border-right: none;
  outline: none;
`;

const ButtonAdd = styled.button`
  width: 200px;
  font-size: inherit;
  text-align: center;
  color: #4fbf7a;
`;

const List = styled.ul`
  height: 84px;
  list-style-type: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-bottom: 25px;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0;
  font-size: inherit;
  text-align: left;
  color: black;
`;

const BottonRemove = styled.button`
  width: 200px;
  font-size: inherit;
  text-align: center;
  color: #bf4f74;
`;

type typeArrayItems = {
  id: number;
  text: string;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<typeArrayItems[]>([]);

  const addItem = () => {
    if (inputValue === "") return;
    setInputValue("");
    setList((list) => [
      ...list,
      {
        id: list.length,
        text: inputValue,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <>
      <Wraper>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></Input>
        <ButtonAdd onClick={addItem}>Добавить</ButtonAdd>
      </Wraper>
      <List>
        {list.map((el, index) => {
          return (
            <Item key={index}>
              <Text>{el.text}</Text>
              <BottonRemove onClick={() => removeItem(el.id)}>
                Удалить
              </BottonRemove>
            </Item>
          );
        })}
      </List>
    </>
  );
}

export default App;
