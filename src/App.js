// import React from "react";
// import PieChart from "./components/Victory/PieVictory/victoryPie";
// import ChartComponent from "./components/Victory/LineVictory/victoryLine";
//  import MyResponsivePie from "./components/Nivo/Pie/NivoPie"; // Correct import
//  import MyResponsiveLine from "./components/Nivo/Line/NivoLine";
//  import ChartistComponent from "./components/Chartitst/Line/AlternativeLineChartist";
//  import ChartistPieComponent from "./components/Chartitst/Pie/PieChartist";
//  import AChartistComponent from "./components/Chartitst/Line/AlternativeLineChartist";

//  function App() {
//   const lineData = [ //Victory
//     { x: "Ortalama Cevaplama Süresi ", y: 12 },
//     { x: "Ortalama Görüşme Süresi ", y: 34 },
//     { x: "Kuyruktaki En Uzun Süre Bekleyen Çağrı ", y: 12 },
//     { x: "Düşük Öncelikli Çağrıların Bekleme Süresi ", y: 12 },
//   ];

//   const pieData = [
//     { x: "Bekleyen Çağrılar", y: 15 },
//     { x: "Uygunda Bekleyen Kullanıcılar", y: 15 },
//     { x: "Cevaplanan Çağrı Sayısı", y: 15 },
//     { x: "Çağrıdaki Kullanıcı Sayısı", y: 15 },
//     { x: "Moladaki Kullanıcılar", y: 15 },
//     { x: "Kurumdaki Aktif Kullanıcı Sayısı", y: 30 },
//     { x: "Kurum Kuyruğuna Atanan Çağrı Sayısı", y: 30 },
//   ];

//   // Sample data for "time of day" and "call duration"
//   const timeOfDayData = [
//     { x: "09:00", y: "02:35" },
//     { x: "10:00", y: "01:20" },
//     { x: "11:00", y: "03:45" },
//     { x: "12:00", y: "01:50" },
//     // Add more data points as needed
//   ];

//   const callDurationData = [
//     { x: "09:00", y: "03:20" },
//     { x: "10:00", y: "02:10" },
//     { x: "11:00", y: "03:30" },
//     { x: "12:00", y: "02:45" },
//     // Add more data points as needed
//   ];

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between" }}>
//       <div style={{ flex: 1, padding: "20px" }}>
//         <PieChart data={pieData} />
//         {pieData.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               fontSize: 16,
//         fontWeight: "bold",
//         margin: 8,
//         cursor: "pointer",
//         borderWidth: 1,
//         borderRadius: 8,
//         backgroundColor: "#FFC04D",
//         padding: 6,
//         boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
//             }}
//           >
//             <p>{item.x}</p>
//             <p>{item.y}</p>
//           </div>
//         ))}
//       </div>

//       <div style={{ flex: 1, padding: "20px" }}>
//       <PieChart data={lineData} />
//         {lineData.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               fontSize: 16,
//               fontWeight: "bold",
//               margin: 8,
//               cursor: "pointer",
//               borderWidth: 1,
//               borderRadius: 8,
//               backgroundColor: "#FFC04D",
//               padding: 6,
//               boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
//             }}
//           >
//             <p>{item.x}</p>
//             <p>{item.y}</p>
//           </div>
//         ))}
//       </div>

//       <div style={{ flex: 1, padding: "20px" }}>
//   <ChartComponent data={timeOfDayData} />
//   {timeOfDayData.map((item, index) => (
//     <div
//       key={index}
//       style={{
//         fontSize: 16,
//         fontWeight: "bold",
//         margin: 8,
//         cursor: "pointer",
//         borderWidth: 1,
//         borderRadius: 8,
//         backgroundColor: "#ADD8E6",
//         padding: 6,
//         boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
//       }}
//     >
//       <p>Geçirilen Süre: {item.y}</p>
//       <p>Aranan Saat: {item.x}</p>
//     </div>
//   ))}
// </div>

// <div style={{ flex: 1, padding: "20px" }}>
//   <ChartComponent data={callDurationData} />
//   {callDurationData.map((item, index) => (
//     <div
//       key={index}
//       style={{
//         fontSize: 16,
//         fontWeight: "bold",
//         margin: 8,
//         cursor: "pointer",
//         borderWidth: 1,
//         borderRadius: 8,
//         backgroundColor: "#ADD8E6",
//         padding: 6,
//         boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
//       }}
//     >
//       <p>Geçirilen Süre: {item.y}</p>
//       <p>Aranan Saat: {item.x}</p>
//     </div>
//   ))}
// </div>

//     </div>
//   );

//  //Nivo
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "200vh",
//       backgroundColor: "#FFFFF0"
//     }}
//   >
//     {/* Pie Charts */}
//     <div style={{ display: "flex", padding: "20px" }}>
//       <div style={{ padding: "20px", height: "500px", width: "700px" }}>
//         <MyResponsivePie />
//       </div>
//       <div style={{ padding: "20px", height: "500px", width: "700px" }}>
//         <MyResponsivePie />
//       </div>
//     </div>

// //     {/* Line Charts */}
// //     <div style={{ display: "flex", padding: "20px" }}>
// //       <div style={{ padding: "20px", height: "500px", width: "500px" }}>
// //         <MyResponsiveLine />
// //       </div>
// //       <div style={{ padding: "20px", height: "500px", width: "500px" }}>
// //         <MyResponsiveLine />
// //       </div>
// //     </div>
// //   </div>
// // );
// // };

// const averageCallDurations = [3, 1, 2, 1, 2, 8, 3, 5, 2, 8, 6, 4]; // chartist

// const chartData = {
//   labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
//   series: [averageCallDurations],
// };

//   <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor:"#FAEBD7" }}>
//     <div style={{ display: "flex", maxWidth: "1000px" }}>
//       <div style={{ width: '50%' }}>
//         <h2>Line Chart 1: Average Call Durations by Hour of the Day</h2>
//         <AChartistComponent data={chartData} />
//       </div>
//       <div style={{ width: '50%' }}>
//         <h2>Line Chart 2: Average Call Durations by Hour of the Day</h2>
//         <ChartistComponent data={chartData} />
//       </div>
//     </div>
//     <div style={{ display: "flex", maxWidth: "1000px"}}>
//       <div style={{ width: '50%',margin:5 }}>
//         <h2>Pie Chart 1: Average Call Durations by Hour of the Day</h2>
//         <ChartistPieComponent data={chartData} />
//       </div>
//       <div style={{ width: '50%',margin:5}}>
//         <h2>Pie Chart 2: Average Call Durations by Hour of the Day</h2>
//         <ChartistPieComponent data={chartData} />
//       </div>
//     </div>
//   </div>
// );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import PieChart from "./components/Victory/PieVictory/victoryPie";
import ChartComponent from "./components/Victory/LineVictory/victoryLine";
import MyResponsivePie from "./components/Nivo/Pie/NivoPie";
import MyResponsiveLine from "./components/Nivo/Line/NivoLine";
import PieChartComponent from './components/Chartitst/Pie/PieChartist';
import './App.css'; 
import LineChartComponent from "./components/Chartitst/Line/LineChartist";
import ChartistComponent from "./components/Chartitst/Line/LineChartist";
import Example from "./components/VisX/PieVisx";
import { BrushChart } from "./components/VisX/LineVisx";

function VictoryPage() {
  const lineData = [
    //Victory
    { x: "Ortalama Cevaplama Süresi ", y: 12 },
    { x: "Ortalama Görüşme Süresi ", y: 34 },
    { x: "Kuyruktaki En Uzun Süre Bekleyen Çağrı ", y: 12 },
    { x: "Düşük Öncelikli Çağrıların Bekleme Süresi ", y: 12 },
  ];

  const pieData = [
    { x: "Bekleyen Çağrılar", y: 15 },
    { x: "Uygunda Bekleyen Kullanıcılar", y: 15 },
    { x: "Cevaplanan Çağrı Sayısı", y: 15 },
    { x: "Çağrıdaki Kullanıcı Sayısı", y: 15 },
    { x: "Moladaki Kullanıcılar", y: 15 },
    { x: "Kurumdaki Aktif Kullanıcı Sayısı", y: 30 },
    { x: "Kurum Kuyruğuna Atanan Çağrı Sayısı", y: 30 },
  ];

  // Sample data for "time of day" and "call duration"
  const timeOfDayData = [
    { x: "09:00", y: "02:35" },
    { x: "10:00", y: "01:20" },
    { x: "11:00", y: "03:45" },
    { x: "12:00", y: "01:50" },
    // Add more data points as needed
  ];

  const callDurationData = [
    { x: "09:00", y: "03:20" },
    { x: "10:00", y: "02:10" },
    { x: "11:00", y: "03:30" },
    { x: "12:00", y: "02:45" },
    // Add more data points as needed
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <PieChart data={pieData} />
        {pieData.map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              margin: 8,
              cursor: "pointer",
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: "#FFC04D",
              padding: 6,
              boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
            }}
          >
            <p>{item.x}</p>
            <p>{item.y}</p>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <PieChart data={lineData} />
        {lineData.map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              margin: 8,
              cursor: "pointer",
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: "#FFC04D",
              padding: 6,
              boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
            }}
          >
            <p>{item.x}</p>
            <p>{item.y}</p>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <ChartComponent data={timeOfDayData} />
        {timeOfDayData.map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              margin: 8,
              cursor: "pointer",
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: "#ADD8E6",
              padding: 6,
              boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
            }}
          >
            <p>Geçirilen Süre: {item.y}</p>
            <p>Aranan Saat: {item.x}</p>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <ChartComponent data={callDurationData} />
        {callDurationData.map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              margin: 8,
              cursor: "pointer",
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: "#ADD8E6",
              padding: 6,
              boxShadow: "0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)", // Add shadow
            }}
          >
            <p>Geçirilen Süre: {item.y}</p>
            <p>Aranan Saat: {item.x}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NivoPage() {
  //Nivo
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200vh",
        backgroundColor: "#FFFFF0",
        padding:"20px"
      }}
    >
      {/* Pie Charts */}
      <div style={{ display: "flex", padding: "20px"}}>
        <div style={{ padding: "20px", height: "500px", width: "500px" }}>
          <MyResponsivePie />
        </div>
        <div style={{ padding: "20px", height: "500px", width: "500px" }}>
          <MyResponsivePie />
        </div>
      </div>

      {/* Line Charts */}
      <div style={{ display: "flex", padding: "20px" }}>
        <div style={{ padding: "20px", height: "500px", width: "500px" }}>
          <MyResponsiveLine />
        </div>
        <div style={{ padding: "20px", height: "500px", width: "500px" }}>
          <MyResponsiveLine />
        </div>
      </div>
    </div>
  );
}



const ChartistPage = () => {
  // Dizileri oluşturun (örnek veriler kullanarak)
  const pieChartData1 = {
    labels: ['A', 'B', 'C'],
    series: [30, 50, 20],
  };

  const pieChartData2 = {
    labels: ['X', 'Y', 'Z'],
    series: [10, 70, 20],
  };

  const lineChartData1 = {
    series: [10, 20, 30, 20, 40],
    labels: [1, 2, 3, 4, 5],
  };

  const lineChartData2 = {
    series: [5, 10, 15, 10, 25],
    labels: [1, 2, 3, 4, 5],
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#FAEBD7',
      }}
    >
      <div style={{ display: 'flex', maxWidth: '1000px' }}>
        {/* Pie Chart 1 */}
        <div style={{ width: '25%', padding: '10px' }}>
          <h2>Pie Chart 1</h2>
          {Array.isArray(pieChartData1.series) && pieChartData1.series.length > 0 && (
            <PieChartComponent data={pieChartData1} />
          )}
        </div>
        {/* Pie Chart 2 */}
        <div style={{ width: '25%', padding: '10px' }}>
          <h2>Pie Chart 2</h2>
          {Array.isArray(pieChartData2.series) && pieChartData2.series.length > 0 && (
            <PieChartComponent data={pieChartData2} />
          )}
        </div>
        {/* Line Chart 1 */}
        <div style={{ width: '25%', padding: '10px' }}>
          <h2>Line Chart 1</h2>
          {Array.isArray(lineChartData1.series) && lineChartData1.series.length > 0 && (
            <LineChartComponent data={lineChartData1} />
          )}
        </div>
        {/* Line Chart 2 */}
        <div style={{ width: '25%', padding: '10px' }}>
          <h2>Line Chart 2</h2>
          {Array.isArray(lineChartData2.series) && lineChartData2.series.length > 0 && (
            <LineChartComponent data={lineChartData2} />
          )}
        </div>
      </div>
    </div>
  );
};

function VisXPage() {
  return (
    <div>
      {/* VisX Pie Chart */}
      <PieChart width={500} height={400} />

      {/* VisX Line Chart */}
      <BrushChart width={500} height={400} />
    </div>
  );
}



function App() {
  return (
    <Router>
      <div>
        <nav className="nav-container">
          {/* Create a button for each chart page */}
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/Victory">
                Victory
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Nivo">
                Nivo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Chartist">
                Chartist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/VisX">
                VisX
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Define routes for each chart page */}
          <Route path="/Victory" element={<VictoryPage />} />
          <Route path="/Nivo" element={<NivoPage />} />
          <Route path="/Chartist" element={<ChartistPage />} />
          <Route path="/VisX" element={<VisXPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;