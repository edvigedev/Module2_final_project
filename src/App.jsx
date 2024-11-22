import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:5005/projects")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1>Our project</h1>
    </>
  );
}

export default App;
