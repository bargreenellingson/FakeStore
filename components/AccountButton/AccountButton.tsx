import Link from 'next/link';
import { User } from 'react-feather';
import { useSelector } from 'react-redux';
import classes from './AccountButton.module.css';
import { selectLoginToken } from 'store/slices/auth';

function AccountButton() {
    const isLoggedIn = !!useSelector(selectLoginToken);

    return (
        <Link href="/signin">
            <div className={classes.signIn}>
                <User />
                {isLoggedIn ? <>Logged In</> : <>Sign In</>}
            </div>
        </Link>
    );
}

export default AccountButton;
