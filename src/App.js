import React from 'react';
import './style.css';
import { presidentsArray } from './components/constants';
import PresidentDisplay from './components/PresidentDisplay';
export default function App() {
  return (
    <div>
      {presidentsArray.map((president) => (
        <PresidentDisplay />
      ))}
    </div>
  );
}
