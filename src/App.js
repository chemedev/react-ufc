import React, { useState } from 'react';
import scraped from './db/scraped';
import ListFighters from './components/ListFighters';

function App() {
  return (
    <>
      <h1 className="m-10 font-bold text-center">UFC Fighters</h1>
      <ListFighters fighters={scraped} />
    </>
  );
}
export default App;
