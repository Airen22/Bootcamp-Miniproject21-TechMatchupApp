import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from "./pages/NotFound"

function App() {
  return (
    <ApolloProvider>
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/matchup" 
            element={<Matchup />} 
          />
          <Route 
            path="/matchup/:id" 
            element={<Vote />} 
          />
          <Route
            path="*"
            element={<NotFound />}
            />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
