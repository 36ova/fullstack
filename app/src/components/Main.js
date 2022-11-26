import { MainLink } from "./Links/MainLink";
import { WordLink } from "./Links/BlueWordLink";

export function Main() {
  return (
    <div className="main-aside">
      <div className="section buttons">
        <div><MainLink to="/new">New Custom Wordlist</MainLink></div>
        <div><MainLink to="/random">Random Wordlist</MainLink></div>
      </div>
      
      <div className="section available">
        <table className="Table">
          <caption className="Caption">Available Wordlists</caption>
          <tbody className="Tbody">
            <tr className="Tr">
              <td className="Td">Godfather pt. 1</td>
            </tr>
            <tr className="Tr">
              <td>Godfather pt. 2</td>
            </tr>
            <tr  className="Tr">
              <td>11 short stories</td>
            </tr>
            <tr className="Tr">
              <td>Harry Potter pt. 1</td>
            </tr>
            <tr className="Tr">
              <td className="Td"><WordLink to="/wordlists">see more...</WordLink></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}