import CategoryTile from './CategoryTile';
import classes from './CategoryMenu.module.css';
import { useSelector } from 'react-redux';
import { selectCategories } from 'store/slices/app';

function CategoryMenu() {
    const categories = useSelector(selectCategories);

    return (
        <div className={classes.categoryMenu}>
            {categories?.map((category) => (
                <CategoryTile key={category} name={category} />
            ))}
        </div>
    );
}

export default CategoryMenu;
