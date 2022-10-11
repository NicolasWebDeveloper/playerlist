import List from './components/list/List';
import Header from './components/header/Header';
import Container from './components/container/Container';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <List></List>
      </Container>
    </div>
  );
}

export default App;
