import React from 'react';

import {Switch, Route} from 'react-router-dom';

// Komponen Halaman Private
import Pengaturan from './pengaturan';
import Produk from './produk';
import Transaksi from './transaksi';
import Home from './home';

function Private() {
    return(
        <Switch>
            <Route component={Home}/>
            <Route path = "/pengaturan" component={Pengaturan}/>
            <Route path = "/produk" component={Produk} />
            <Route path = "/transaksi" component={Transaksi}/>
             
        </Switch>
    )
}

export default Private;