import List from './components/list/List';
import Header from './components/header/Header';
import Container from './components/container/Container';

import classes from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <h1 className={classes.title}>Playerlist</h1>
      <Container>
        <List></List>
      </Container>
    </div>
  );
}

export default App;
