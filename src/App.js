import Counter from './Counter'

function App() {
  return (
   <div>
     <Counter initialValue={5} step={1}/>
     <Counter initialValue={0} step={10}/>
     <Counter initialValue={-5}step={0.5}/>
   </div>
  );
}

export default App;
