import SideBar from "./components/global/SideBar";
import TopBar from "./components/global/TopBar";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <TopBar/>
        <Dashboard/>
      </main>
    </div>
  );
}

export default App;
