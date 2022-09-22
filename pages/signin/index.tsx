import { useState } from 'react';
import { login } from 'store/slices/auth';
import { useDispatch } from 'react-redux';
import classes from './signin.module.css';

interface LoginInput {
    username: string;
    password: string;
}

export default function SignIn() {
    const dispatch: any = useDispatch();

    const [input, setInput] = useState<LoginInput>({
        username: '',
        password: '',
    });

    function onChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        } as { [K in keyof LoginInput]: LoginInput[K] });
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(login(input.username, input.password));
    }

    return (
        <div className={classes.signIn}>
            <form>
                <label>
                    Username
                    <input
                        type={'text'}
                        name="username"
                        onChange={onChange}
                        value={input.username}
                    />
                </label>
                <label>
                    Password
                    <input
                        type={'password'}
                        name="password"
                        onChange={onChange}
                        value={input.password}
                    />
                </label>
                <button type={'submit'} onClick={(e) => onSubmit(e)}>
                    Sign In
                </button>
            </form>
        </div>
    );
}
