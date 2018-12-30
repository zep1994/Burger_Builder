import React from 'react';
import Aux from '../../HOC/Aux'
import classes from './Layout.css'

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout