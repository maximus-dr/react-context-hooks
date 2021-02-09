const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
