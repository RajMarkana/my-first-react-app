import logo from './logo.svg';
import './App.css';



function App() {

  return (
    <div className="App">
      <h1>Top 5 IT Companies</h1>

      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Founder</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Microsoft</td>
          <td>Bill Gates & Paul Allen</td>
          <td>September 1998</td>
        </tr>
        <tr>
          <td>2</td>
          <td>IBM</td>
          <td>Thomas J. Watson &
            Charles Ranlett Flint</td>
          <td>June 1911</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Accenture</td>
          <td> Arthur E. Andersen</td>
          <td>1989</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Oracle</td>
          <td>Larry Ellison ,
            Bob Miner &
            Ed Oates</td>
        <td>June 1977</td>
        </tr>
        <tr>
          <td>5</td>
          <td>SAP</td>
          <td>CanadaDietmar Hopp ,
            Hans-Werner Hector ,
            Hasso Plattner ,
            Klaus Tschira &
            Claus Wellenreuther</td>
          <td>1972</td>
        </tr>

      </table>

    </div>
  );
}

export default App;
