import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import Container from './components/Container';
import Pagination from './components/Pagination';
import Title from './components/Title';

function App() {
  const message = `That's all folks`;
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Container>
          <Title>{message}</Title>
          <Pagination total={10} activePage={5} />
        </Container>
      </div>
    </>
  );
}

export default App;
