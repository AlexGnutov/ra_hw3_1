import './App.css';
import Stars from "./stars/stars";

function App() {
    return (
        <>
            <Stars count={0}/>
            <Stars count={1}/>
            <Stars count={2}/>
            <Stars count={3}/>
            <Stars count={4}/>
            <Stars count={5}/>
            <Stars count={7}/>
            <Stars count={'many'}/>
            <Stars/>
        </>
    );
}

export default App;
