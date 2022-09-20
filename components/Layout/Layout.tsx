import Header from '../Header/Header';
import classes from './Layout.module.css';

function Layout({ children }: any) {
    return (
        <div className={classes.layout}>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
