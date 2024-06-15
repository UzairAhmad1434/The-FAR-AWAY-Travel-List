import "./App.css";

function App() {
  return (
    <>
      <Logo />
      <Form />
    </>
  );
}

function Logo() {
  return (
    <h1 className="p-8 text-center font-monoton text-6xl bg-yellow-600">
      {" "}
      🏝️FAR AWAY💼
    </h1>
  );
}
function Form() {
  return (
    <h3 className="p-2 font-quicksand bg-orange-700 text-2xl text-center">
      What you need for your 😍 trip?
    </h3>
  );
}
export default App;
