import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Komponen Halaman
import Registrasi from "./pages/registrasi";
import Login from './pages/login';
import LupaPassword from './pages/lupa-password';
import NotFound from './pages/404';
import Private from './pages/private';
import PrivateRoute from './components/PrivateRoute';

// Firebase Provider
import FirebaseProvider from './components/FirebaseProvider';

// Import Komponen Material-UI
import CssBaseLine from '@material-ui/core/CssBaseLine';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './config/theme';

function App() {

  return (
    <>
    <CssBaseLine />
    <ThemeProvider theme={theme}>
    <FirebaseProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Private} />
          <PrivateRoute path="/pengaturan" component={Private} />
          <PrivateRoute path="/produk" component={Private} />
          <PrivateRoute path="/transaksi" component={Private} />
          <Route path="/registrasi" component={Registrasi} />
          <Route path="/login" component={Login} />
          <Route path="/lupa-password" component={LupaPassword} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </FirebaseProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
