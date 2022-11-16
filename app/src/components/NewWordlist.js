import { SubmitLink } from "./SubmitLink"
import { Word } from "./Word"

export function NewWordlist() {
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
        {/* <tr className="Tr">
          <th className="Th"><Word>agglutinate</Word></th>
          <td className="Td"><Word>stuck together, as by a glue</Word></td>
          <td className="Td"><Word></Word></td>
          <td className="Td"><Word></Word></td>
        </tr>
        <tr className="Tr">
          <th className="Th"><Word>auburn</Word></th>
          <td className="Td"><Word>a medium brown or reddish brown color</Word></td>
          <td className="Td"><Word></Word></td>
          <td className="Td"><Word></Word></td>
        </tr>
        <tr className="Tr">
          <th className="Th"><Word>congenital</Word></th>
          <td className="Td"><Word>existing from birth, but usually not hereditary</Word></td>
          <td className="Td"><Word></Word></td>
          <td className="Td"><Word></Word></td>
        </tr>
        <tr className="Tr">
          <th className="Th"><Word>dapper</Word></th>
          <td className="Td"><Word>neat and stylish in dress and appearance</Word></td>
          <td className="Td"><Word>smart, spruce</Word></td>
          <td className="Td"><Word>Pablo looked very dapper in his best clothes.</Word></td>
        </tr> */}
      </tbody>
      <button onclick >+</button>
      <button className="add-row-button" type="add" onClick={onSubmit}>
         {submitTitle}
       </button>
    </table>
    <div><SubmitLink to="/view">Submit</SubmitLink></div>
  </aside>;
}
