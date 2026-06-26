import Card from "./UserProfileCard";

function App() {
    return (
        <>
            <Card name="John" age={24} profession="Developer"></Card>
            <Card name="Alice" age={21} profession="Designer"></Card>
            <Card name="Bob" age={27} profession="Architect"></Card>
        </>
    );
}

export default App;
