import { Header } from './components/Header';
import { Input } from './components/Input';
import { Counter } from './components/Counter';
import styles from './App.module.css';
import './global.css';
import { DeviceTabletCamera } from 'phosphor-react';
import { Todos } from './components/Todos';

export function App() {

  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Input />
          <Counter />
          <Todos />
        </div>
      </div>
  )
}

