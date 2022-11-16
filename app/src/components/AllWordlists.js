import { MainLink } from "./MainLink";
import { WordLink } from "./Links/BlueWordLink";

export function AllWordlists() {
  return <aside className="side-aside">
    <table className="Table">
      <caption className="Caption">Available Wordlists</caption>
        <thead className="Thead">
          <th className="Th">Title</th>
          <th className="Th">Date</th>
          <th className="Th">Author</th>
        </thead>
        <tr className="Tr">
          <th className="Th">Godfather pt. 1</th>
          <td className="Td"><label className="context-label">05 Oct 2022</label></td>
          <td className="Td">Mathew</td>
        </tr>
        <tr className="Tr">
          <th className="Th">Godfather pt. 2</th>
          <td className="Td"><label className="context-label">05 Oct 2022</label></td>
          <td className="Td">Javier</td>
        </tr>
        <tr className="Tr">
          <th className="Th">11 short stories</th>
          <td className="Td"><label className="context-label">05 Oct 2022</label></td>
          <td className="Td">McBeth</td>
        </tr>
        <tr className="Tr">
          <th className="Th">Harry Potter pt. 1</th>
          <td className="Td"><label className="context-label">05 Oct 2022</label></td>
          <td className="Td">Hyde</td>
        </tr>
      </table>
  </aside>;
}