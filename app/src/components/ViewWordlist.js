import { WordLink } from "./Links/WhiteWordLink"
import { Word } from "./Word";

export function ViewWordlist() {
    return <aside className="side-aside">
    <caption className="Caption">Untitled Wordlist    <WordLink to="..\new">edit</WordLink></caption>
    <label className="annotation">by Erick, 05 Oct 2022 </label>
      <table className="Table">
        <thead className="Thead">
          <tr className="Tr">
            <th className="Th">word</th>
            <th className="Th">definition</th>
            <th className="Th">synonym</th>
            <th className="Th">context</th>
          </tr>
        </thead>
        <tbody className="Tbody">
        <tr className="Tr">
            <th className="Th">agglutinate</th>
            <td className="Td">stuck together, as by a glue</td>
            <td className="Td"></td>
            <td className="Td"><label className="context-label"></label></td>
          </tr>
          <tr className="Tr">
            <th className="Th">auburn</th>
            <td className="Td">a medium brown or reddish brown color</td>
            <td className="Td"></td>
            <td className="Td"><label className="context-label"></label></td>
          </tr>
          <tr className="Tr">
            <th className="Th">congenital</th>
            <td className="Td">existing from birth, but usually not hereditary</td>
            <td className="Td"></td>
            <td className="Td"><label className="context-label"></label></td>
          </tr>
          <tr className="Tr">
            <th className="Th">dapper</th>
            <td className="Td">neat and stylish in dress and appearance</td>
            <td className="Td">smart, spruce</td>
            <td className="Td"><label className="context-label">Pablo looked very dapper in his best clothes.</label></td>
          </tr>
        </tbody>
      </table>
    </aside>;
  }
  