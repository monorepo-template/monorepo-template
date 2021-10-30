import type { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Employees from '../../features/employees';
import Home from '../../features/home';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/employees" component={Employees} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
