import { SubmitLink } from "./Links/SubmitLink"
import { Word } from "./Word"
import { useState } from "react";
import { Item } from "./Item";

export function NewWordlist() {
  const [items, setItems] = useState([
    {
      word: "agglutinate",
      definition: "stuck together, as by a glue",
      synonym: "stick",
      context: "agglutinate human red cells"
    },
  ]);

  const handleAdd = () => {
    setItems([
      ...items,
      {
        word: "",
        definition: "",
        synonym: "",
        context: "",
        isNew: true
      }
    ]);
  };

  return <aside className="side-aside">
    <table className="Table">
      <caption className="Caption"><Word>Untitled Wordlist</Word></caption>
      <thead className="Thead">
        <tr>
          <th className="Th">word</th>
          <th className="Th">definition</th>
          <th className="Th">synonym</th>
          <th className="Th">context</th>
        </tr>
      </thead>
      <tbody className="Tbody">
      {items.map((item, index) => (
        <tr className="Tr" key={index}>
          <td className="Td">
            <Item
              value={item.word}
              isNew={item.isNew}
              onSave={(value) => {
                const newItems = [...items];
                newItems[index].word = value;
                newItems[index].isNew = false;
                setItems(newItems);
              }}
            />
          </td>
          <td className="Td">
            <Item
              value={item.definition}
              isNew={item.isNew}
              onSave={(value) => {
                const newItems = [...items];
                newItems[index].definition = value;
                newItems[index].isNew = false;
                setItems(newItems);
              }}
            />
          </td>
          <td className="Td">
            <Item
              value={item.synonym}
              isNew={item.isNew}
              onSave={(value) => {
                const newItems = [...items];
                newItems[index].synonym = value;
                newItems[index].isNew = false;
                setItems(newItems);
              }}
            />
          </td>
          <td className="Td">
            <label class="context-label"><Item
              value={item.context}
              isNew={item.isNew}
              onSave={(value) => {
                const newItems = [...items];
                newItems[index].context = value;
                newItems[index].isNew = false;
                setItems(newItems);
              }}
            /></label>
          </td>
        </tr>
      ))}
      </tbody>
      <button onClick={handleAdd}>+</button>
    </table>
    <div><SubmitLink to="/view">Submit</SubmitLink></div>
  </aside>;
}
