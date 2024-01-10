import Counter from "./components/Counter";

const App = () => {
  return (
      <div className="flex items-center justify-center h-screen">
          <Counter initialCount={0}/>
    </div>
  )
}

export default App;