import Link from 'next/link';
import React from 'react';
import classes from './CategoryTile.module.css';

interface CategoryProps {
    name: string;
}

function Category(props: CategoryProps) {
    const { name } = props;

    return (
        <Link href={`/products/category/${name}`}>
            <div className={classes.categoryTile}>{name}</div>
        </Link>
    );
}

export default Category;
